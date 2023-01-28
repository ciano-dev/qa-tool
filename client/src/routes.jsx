import { useRoutes, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import GoogleSSOSuccess from "./pages/GoogleSSOSuccess";
import GoogleSSOError from "./pages/GoogleSSOError";

import NotFound from "./pages/Page404";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
      // children: [{ path: "signup", element: <SignUp /> }],
    },

    { path: "googleSSOSuccess", element: <GoogleSSOSuccess /> },
    { path: "googleSSOError", element: <GoogleSSOError /> },

    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
