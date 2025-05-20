import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import AboutUs from "../pages/AboutUs";
import Contract from "../pages/Contract";
import Policy from "../pages/Policy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "allGroup",
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
]);
