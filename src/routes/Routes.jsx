import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import AboutUs from "../pages/AboutUs";
import Contract from "../pages/Contract";
import Policy from "../pages/Policy";
import Error from "../pages/Error";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: "allGroup",
        loader: () => fetch("http://localhost:3000/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: AllGroup,
      },
      {
        path: "createGroup",
        Component: CreateGroup,
      },
      {
        path: "myGroups",
        Component: MyGroup,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "contract",
        Component: Contract,
      },
      {
        path: "policy",
        Component: Policy,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "singIn",
        Component: SingIn,
      },
      {
        path: "singUp",
        Component: SingUp,
      },
    ],
  },
]);
