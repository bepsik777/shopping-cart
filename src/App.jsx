import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setList(json));
  },[]);

  return (
    <div className="bg-blue-300 min-h-screen h-screen max-w-screen flex flex-col">
      <Header list={list}></Header>
      <Outlet context={[list, setList, cart, setCart]} />
      <Footer></Footer>
    </div>
  );
}

export default App;
