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
import GroupDetails from "../pages/GroupDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
        path: "/allGroup",
        loader: () => fetch("http://localhost:3000/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <AllGroup></AllGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGroups",
        loader: () => fetch("http://localhost:3000/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contract",
        Component: Contract,
      },
      {
        path: "/policy",
        Component: Policy,
      },
      {
        path: "/group-details/:id",
        loader: () => fetch("http://localhost:3000/groups"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signin",
        Component: SingIn,
      },
      {
        path: "/auth/signup",
        Component: SingUp,
      },
    ],
  },
]);
