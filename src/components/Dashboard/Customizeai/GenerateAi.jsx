import axios from "axios";
import { useState } from "react";

const GenerateAi = () => {
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [postdata, SetPostData] = useState([]);
  const [prompt, setPrompt] = useState({ prompt: "" });
  const [image, setImage] = useState(null);
  const [loadedImage, setGeneratedImageUrl] = useState(null);

  console.log(loadedImage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrompt({ ...prompt, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // const{name,image}=e.target
  };
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!image || !prompt.prompt) {
      alert("Please provide both image and prompt.");
      return;
    }

    setLoading(true);
    setOutputs([]);

    try {
      // Step 1: Upload to Spring Boot
      const generatingData = new FormData();
      generatingData.append("imageFile", image);
      generatingData.append(
        "generateAi",
        new Blob([JSON.stringify(prompt)], { type: "application/json" })
      );

      const res = await axios.post(
        "http://localhost:8080/ai/uploadimage",
        generatingData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const generateId = res?.data?.generate_id;
      const loadedPrompt = res?.data?.prompt;
      console.log("Uploaded. ID:", generateId);

      // Step 2: Fetch image from Spring Boot
      const imageRes = await axios.get(
        `http://localhost:8080/ai/getloadimage/${generateId}`,
        { responseType: "blob" }
      );

      const imageBlob = imageRes.data;
      const imageBlobUrl = URL.createObjectURL(imageBlob);
      setGeneratedImageUrl(imageBlobUrl); // For display only

      // Convert blob to base64 string
      const base64Image = await blobToBase64(imageBlob);

      // Step 3: Send to Flask AI generator
      const aiRes = await axios.post("http://localhost:5000/generate", {
        prompt: loadedPrompt,
        image: base64Image,
        count: 1,
      });

      setOutputs(aiRes.data.outputs);
    } catch (err) {
      console.error("Failed:", err);
      alert("Something went wrong. Check your backend.");
    } finally {
      setLoading(false);
    }
  };

  // Convert Blob to base64
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // const handleGenerate = async (e) => {
  //   e.preventDefault();
  //   if (!image || !prompt) {
  //     alert("Please provide both image and prompt.");
  //     return;
  //   }

  //   setLoading(true);
  //   setOutputs([]);

  //   try {
  //     const generatingData = new FormData();
  //     generatingData.append("imageFile", image);
  //     generatingData.append(
  //       "generateAi",
  //       new Blob([JSON.stringify(prompt)], { type: "application/json" })
  //     );
  //     const res = await axios.post(
  //       "http://localhost:8080/ai/uploadimage",
  //       generatingData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     const generateId = res?.data?.generate_id;
  //     const loadedPrompt = res?.data?.prompt;
  //     console.log("Uploaded. ID:", generateId);

  //     //✅ Step 2: Fetch back from Spring Boot

  //     setTimeout(async () => {
  //       try {
  //         const imageRes = await axios.get(
  //           `http://localhost:8080/ai/getloadimage/${generateId}`,
  //           { responseType: "blob" }
  //         );
  //         const imageBlobUrl = URL.createObjectURL(imageRes.data);
  //         setGeneratedImageUrl(imageBlobUrl);
  //       } catch (err) {
  //         console.error("Error fetching image:", err);
  //       }
  //     }, 500);
  //     setTimeout(async () => {
  //       // ✅ Step 3: Send to Flask AI generator
  //       const reses = await axios.post("http://localhost:5000/generate", {
  //         prompt: loadedPrompt,
  //         image: loadedImage,
  //         count: 1,
  //       });
  //       setOutputs(reses.data.outputs);
  //     }, 3000);
  //   } catch (err) {
  //     console.error("Failed:", err);
  //     alert("Something went wrong. Check your backend.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">AI Room Designer</h1>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="mb-2 border-2"
        />

        <input
          type="text"
          name="prompt"
          placeholder="Enter design prompt"
          value={prompt?.prompt}
          onChange={handleInputChange}
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
            <p>Generating images, please wait...</p>
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

export default GenerateAi;
