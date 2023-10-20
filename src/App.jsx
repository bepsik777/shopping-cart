import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
  return (
    <div className="bg-blue-300 min-h-screen h-screen max-w-screen flex flex-col">
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
    </div>
  );
}

export default App;

