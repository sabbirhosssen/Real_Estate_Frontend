import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import BookingApartment from "./components/Dashboard/BookingApartment/BookingApartment";
import Customizeai from "./components/Dashboard/Customizeai/Customizeai";
import GenerateAi from "./components/Dashboard/Customizeai/GenerateAi";
import "./index.css";
import Dashboard from "./layouts/Dashboard";
import Aboutus from "./pages/Aboutus";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Settings from "./pages/Settings/Settings";
import { store } from "./Redux/store";
import DashboardRoute from "./routes/DashboardRoute";
import HomeRoute from "./routes/HomeRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "service",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "customizeai",
        element: <Customizeai />,
      },
      {
        path: "generateai",
        element: <GenerateAi />,
      },
      {
        path: "bookingsummary",
        element: <BookingApartment />,
      },
      {
        path: "settings/addProduct",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "*",
    element: <div className="text center"> NOT FOUND 404</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
