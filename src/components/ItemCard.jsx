import { useLoaderData, useOutletContext } from "react-router-dom";
import { useState } from "react";

const ItemCard = () => {
  const [amount, setAmount] = useState(0)
  const [, , setCart] = useOutletContext()
  const item = useLoaderData()

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
    <main className="bg-white flex grow items-center justify-center py-20 lg:py-10 lg:px-20 ">
      <div className="px-2 flex flex-col bg-white lg:flex-row lg:h-full lg:justify-center lg:items-center">
        <div className="py-14 px-10 lg:p-10">
          <img src={item.image} className="object-contain lg:h-full lg:max-h-[400px] lg:max-w-[400px]"></img>
        </div>
        <div className="pt-4 pb-2 justify-around bg-white lg:block lg:p-5">
          <h2 className="text-xl text-left px-10 mb-10 lg:text-2xl lg:p-10 lg:pb-0 lg:text-left">
            {item.title}
          </h2>
          <hr />
          <p className="px-10 pt-2 lg:text-xl lg:p-10">
            {item.description}
          </p>
          <div className="flex justify-between p-10 lg:justify-start lg:gap-5 lg:pt-28">
            <div className="border-black border-2 flex">
              <button onClick={handleDecrease} className=" border-r-2 border-black flex justify-center items-center lg:p-2">
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
              <div className=" border-black flex justify-center items-center w-6 lg:p-2">
                {amount}
              </div>
              <button onClick={handleIncrease} className=" border-l-2 border-black flex justify-center items-center lg:p-2">
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
            <button onClick={() => setCart(item, amount, setAmount)} className="border-2 border-black py-2 px-10">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemCard;
