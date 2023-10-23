import { useLoaderData, useOutletContext } from "react-router-dom";
import { useState } from "react";

const ItemCard = () => {
  const [amount, setAmount] = useState(0)
  const [list, , setCart] = useOutletContext()
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
    <div className="bg-fuchsia-500 flex grow items-center justify-center w-screen min-h-[80%] py-20 lg:py-10 lg:px-0">
      <div className="h-full w-full flex flex-col md:w-[80%] lg:flex-row lg:w-9/12">
        <div className="min-h-1/2 h-1/2 max-w-full bg-white py-14 lg:p-10 lg:h-full lg:w-1/2 border-2 border-black">
          <img src={item.image} className="h-full w-full object-contain"></img>
        </div>
        <div className="border-2 border-black pt-4 pb-2 justify-around min-h-1/2 max-w-full bg-white lg:block lg:p-5 lg:h-full lg:w-1/2">
          <h2 className="text-xl text-left px-10 lg:text-2xl lg:p-10 lg:text-left">
            {item.title}
          </h2>
          <p className="px-10 pt-2 lg:text-xl lg:p-10">
            {item.description}
          </p>
          <div className="flex justify-between p-10">
            <div className="border-black border-2 flex w-1/3 lg:w-52">
              <button onClick={handleDecrease} className="w-1/3 border-r-2 border-black flex justify-center items-center lg:p-2">
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
              <div className="w-1/3 border-black flex justify-center items-center lg:p-2">
                {amount}
              </div>
              <button onClick={handleIncrease} className="w-1/3 border-l-2 border-black flex justify-center items-center lg:p-2">
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
    </div>
  );
};

export default ItemCard;
