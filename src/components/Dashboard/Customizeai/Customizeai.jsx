import axios from "axios";
import { useState } from "react";

const Customizeai = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!image || !prompt) {
      alert("Please provide both image and prompt.");
      return;
    }

    setLoading(true);
    setOutputs([]);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;

      try {
        const res = await axios.post("http://localhost:5000/generate", {
          image: base64,
          prompt: prompt,
          count: 1, // request 4 images
        });

        setOutputs(res.data.outputs); // array of base64 images
      } catch (err) {
        console.error("Failed to generate images:", err);
        alert("Something went wrong. Check your backend.");
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(image);
  };
  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">AI Room Designer</h1>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-2 border-2"
        />

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter design prompt"
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {loading && (
          <div className="mt-4 text-gray-700">
            <button type="button" class="bg-indigo-500 ..." disabled>
              <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
                {/* <!-- ... --> */}
              </svg>
              Please wait, generating images...
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-6">
          {outputs.length > 0 ? (
            outputs.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`output-${idx}`}
                className="rounded shadow"
              />
            ))
          ) : (
            <p>No images to display yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Customizeai;
