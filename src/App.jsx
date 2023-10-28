import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("fetching");

    fetch("https://fakestoreapi.com/products", {
      signal: signal,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setList(json)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted Succesfully");
        }
      });
    return () => controller.abort();
  }, []);

  const addToCart = (item, amount, setAmount) => {
    if (amount === 0) return;
    if (amount === 1) {
      setCart([...cart, item]);
    }
    if (amount > 1) {
      const arrayToAdd = [];
      for (let i = 0; i < amount; i++) {
        arrayToAdd.push(item);
      }
      setCart([...cart, ...arrayToAdd]);
    }
    setAmount(0);
  };

  return (
    <div className="bg-rose-600 min-h-screen max-w-screen flex flex-col">
      <Header list={cart}></Header>
      {/* <Outlet context={[list, setList, cart, setCart]} /> */}
      {!list ? <div>Loading...</div> : <Outlet context={[list, setList, addToCart, cart, setCart]}></Outlet>}
      <Footer></Footer>
    </div>
  );
}

export default App;
