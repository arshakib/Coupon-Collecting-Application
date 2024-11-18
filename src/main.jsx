import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./Context/Context.jsx";
import Home from "./Componenet/Home/Home.jsx";
import Brands from "./Componenet/Brands/Brands.jsx";
import Details from "./Componenet/Details/Details.jsx";
import Login from "./Componenet/Login/Login.jsx";
import Register from "./Componenet/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/Api.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: async () => {
          const res = await fetch("/Api.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/brands/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/Api.json");
          const data = await res.json();
          const find = data.find((brand) => brand._id == params.id);
          return find;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
