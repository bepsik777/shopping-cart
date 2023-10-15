import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/Cart",
          element: <Cart></Cart>
        }
      ]
    },
    // {
    //     path: "/shop",
    //     element: <Shop></Shop>
    // },
    // {
    //     path: "/cart",
    //     element: <Cart></Cart>
    // }
  ]);

  return <RouterProvider router={router}/>
};

export default Router
