import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import ItemCard from "./ItemCard";


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
          element: <Shop></Shop>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>
        },
        {
          path: "/shop/:item",
          element: <ItemCard></ItemCard>,
          loader: async ({params}) => {
            return fetch(`https://fakestoreapi.com/products/${params.item}`)
          }
        }
      ]
    },
  ]);

  return <RouterProvider router={router}/>
};

export default Router
