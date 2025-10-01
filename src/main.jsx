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
import UsersDetails from "./components/UsersDetails/UsersDetails.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import Users2Details from "./components/Users2Details/Users2Details.jsx";

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
        path:'user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UsersDetails
      },{
        path:'user2',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Users2
      },
      // {
      //   path:'single:id',
       
      //   Component:UsersDetails
      // }
      {
        path:'post/:postid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        Component:Users2Details
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
