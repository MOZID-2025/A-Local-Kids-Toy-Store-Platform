import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import MyProfile from "../MyProfile/MyProfile";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Products from "../components/Products/Products";
import ErrorPage from "../Page/ErrorPage";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../LoginPage/Login";

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
    path: "/login",
    element: <Login />,
  },

  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

export default router;
