import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layouts from "./routes/Layouts.jsx";
import Contacts from "./pages/Contacts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/Login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
