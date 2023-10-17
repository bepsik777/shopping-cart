import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import ItemCard from "./ItemCard";
import fakeObjectAray from "./fakeData";


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
          element: <ItemCard></ItemCard>
        }
      ]
    },
  ]);

  return <RouterProvider router={router}/>
};

export default Router
