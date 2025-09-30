import { StrictMode, Suspense } from "react";
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
import Users from "./components/UsersData/Users.jsx";
import Users2 from "./components/UsersData2/Users2.jsx";
import UsersDetails from "./components/UsersDetails/UsersDetails.jsx";

const users2Data = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

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
      },{
        path:"users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'users2',
        element: <Suspense fallback={<span>Loadding Data...</span>}>
          <Users2 users2Data={users2Data}></Users2>
        </Suspense>
      },
      {
        path:'user/:userId',
        Component:UsersDetails
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
