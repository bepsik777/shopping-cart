import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal
    console.log('fetching')

    fetch("https://fakestoreapi.com/products", {
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Aborted Succesfully')
        }
      })
      return () => controller.abort()
  },[]);

  return (
    <div className="bg-blue-300 min-h-screen max-w-screen flex flex-col lg:h-screen">
      <Header list={cart}></Header>
      {/* <Outlet context={[list, setList, cart, setCart]} /> */}
      {!list ? <div>Loading...</div> : <Outlet context={[list, setList, cart, setCart]}></Outlet>}
      <Footer></Footer>
    </div>
  );
}

export default App;
