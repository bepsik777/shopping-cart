import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("fetching");

    fetch("https://fakestoreapi.com/products", {
      signal: signal,
    })
      .then((res) => {
        console.log('hello')
        if (res.status >= 400) {
          throw new Error('This is error')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        setList(json)
        setError(false)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted Succesfully");
        } else 
        {
          console.log(err.status)
          setError(true)
          setLoading(false)
        }
      });
    return () => {
      controller.abort()
      setLoading(true);
      setError(false)
    };
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
      {loading ? <div className="flex grow justify-center items-center text-3xl">Loading...</div> : error ? <ErrorPage/>  : <Outlet context={[list, setList, addToCart, cart, setCart]}></Outlet>}
      <Footer></Footer>
    </div>
  );
}

export default App;
