import { useParams } from "react-router-dom";
import fakeObjectAray from "./fakeData";

const ItemCard = () => {
  let name = useParams();
  let filteredItems = fakeObjectAray.filter((el) => el.name === name.item);
  let item = filteredItems[0];
  console.log(item);
  return (
    <div className="bg-fuchsia-500 flex items-center justify-center h-[80%] py-10">
      <div className="h-full w-9/12 flex flex-col border-2 border-red-900 lg:flex-row">
        <img className="h-1/2 w-full bg-slate-400 lg:h-full lg:w-1/2"></img>
        <div className="h-1/2 w-full bg-yellow-300 lg:h-full lg:w-1/2">
          <h2 className="text-2xl text-center border-2 border-black p-10 lg:text-left">{item.name}</h2>
          <p className="text-xl border-2 border-black min-h-[50%] p-10">
            {item.description}
          </p>
          <div className="flex justify-between p-5">
            <div className="border-black border-2 flex w-52">
              <button className="w-1/3 border-r-2 border-black p-2 flex justify-center items-center">
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
              <div className="w-1/3 border-black p-2 flex justify-center items-center">
                3
              </div>
              <button className="w-1/3 border-l-2 border-black p-2 flex justify-center items-center">
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
            </div>
            <button className="border-2 border-black py-2 px-10">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
