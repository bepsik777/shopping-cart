import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

const Card = ({ item }) => {
  const [amount, setAmount] = useState(0)

  const handleIncrease = () => {
    const newAmount = amount + 1;
    setAmount(newAmount) 
  }

  const handleDecrease = () => {
    if (amount === 0) return 
    const newAmount = amount - 1;
    setAmount(newAmount)
  }

  return (
    <div>
      <Link to={`${item.title}`}>
        <img
          src={item.image ? item.image : ""}
          alt={item.title}
          className="bg-white object-contain w-60 h-72 border-black border-2 p-2"
        />
      </Link>
      <p className="w-60 h-28 border-black border-2 p-4 overflow-y-auto">
        {item.title}
      </p>
      <div className="w-full flex justify-center gap-4 mt-3 border-black border-2">
        <button onClick={handleDecrease}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <div className="w-8 text-center">{amount}</div>
        <button onClick={handleIncrease}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <button className="w-full mt-2 bg-slate-400 px-2 py-1 hover:bg-slate-500 hover:text-white">
        Add to cart
      </button>
    </div>
  );
};

const Shop = () => {
  const [list, , , setCart] = useOutletContext()
  console.log(list)
  return (
    <main className="bg-red-400 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {list.map((item) => {
        return <Card item={item} key={item.title} />;
      })}
    </main>
  );
};

export default Shop;
