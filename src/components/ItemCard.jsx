import { useParams } from "react-router-dom";
import fakeObjectAray from "./fakeData";

const ItemCard = () => {
  let name = useParams();
  let filteredItems = fakeObjectAray.filter((el) => el.name === name.item);
  let item = filteredItems[0];
  console.log(item);
  return (
    <div className="bg-fuchsia-500 flex grow items-center justify-center w-screen min-h-[80%] py-20 lg:py-10 lg:px-0">
      <div className="h-full w-full flex flex-col md:w-[80%] lg:flex-row lg:w-9/12">
        <div className="min-h-1/2 h-1/2 max-w-full bg-yellow-400 lg:p-10 lg:h-full lg:w-1/2">
          <img></img>
        </div>
        <div className="flex flex-col justify-around min-h-1/2 h-1/2 max-w-full bg-white lg:block lg:p-10 lg:h-full lg:w-1/2">
          <h2 className="text-xl text-left px-10 lg:text-2xl lg:p-10 lg:text-left">
            {item.name}
          </h2>
          <p className="px-10 pt-2 lg:text-xl lg:p-10 lg:min-h-[50%]">
            {item.description}
          </p>
          <div className="flex justify-between p-10">
            <div className="border-black border-2 flex w-1/3 lg:w-52">
              <button className="w-1/3 border-r-2 border-black flex justify-center items-center lg:p-2">
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
                3
              </div>
              <button className="w-1/3 border-l-2 border-black flex justify-center items-center lg:p-2">
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
