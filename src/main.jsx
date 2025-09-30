import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/RootFolder/Root.jsx";
import Home from "./components/HomeFolder/Home.jsx";
import About from "./components/AboutFolder/About.jsx";
import Login from "./components/LoginFolder/Login.jsx";
import Submit from "./components/SubmitFolder/Submit.jsx";
import Register from "./components/RegisterFolder/Register.jsx";
import Add from "./components/AddFolder/Add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
     Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "login",
        Component: Login,
      },

      {
        path: "submit",
        Component:Submit
      },
      {
        path:"add",
        Component:Add
      },{
        path:'register',
        Component:Register
      }
    ]
   
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>
);
