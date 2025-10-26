import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import MyProfile from "../MyProfile/MyProfile";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Products from "../components/Products/Products";
import ErrorPage from "../Page/ErrorPage";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../../src/LoginPage/Login";
import Register from "../Register/Register";
import AuthLayout from "../AuthLayout/AuthLayout";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/product/:id",
    element: (
      <PrivateRoute>
        <ProductDetails />
      </PrivateRoute>
    ),
  },
]);

export default router;
