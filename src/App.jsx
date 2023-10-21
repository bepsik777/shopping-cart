import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    const [list, setList] = useState([])
  return (
    <div className="bg-blue-300 min-h-screen h-screen max-w-screen flex flex-col">
            <Header list={list}></Header>
            <Outlet context={[list, setList, 'hello']}/>
            <Footer></Footer>
    </div>
  );
}

export default App;

