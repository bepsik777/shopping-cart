import { Link } from "react-router-dom";
import fakeObjectAray from "./fakeData";

const Card = ({ item }) => {
  return (
      <div>
        <Link to={`${item.name}`}>
        <img src={item.url ? item.url : ""} alt="" className="w-60 h-72 border-black border-2"/>
        </Link>
        <p className="w-60 min-h-max border-black border-2 p-4">{item.description}</p>
        <div className="w-full flex justify-center gap-4 mt-3">
            <button>+</button>
            <input type="number" value={0} className="w-8 text-center"/>
            <button>-</button>
        </div>
        <button className="w-full mt-2 bg-slate-400 px-2 py-1 hover:bg-slate-500 hover:text-white">Add to cart</button>
      </div>
  );
};

const Shop = () => {
    console.log('rendered');
  return (
    <main className="bg-red-400 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {fakeObjectAray.map((item) => {
        return <Card item={item} key={1} />;
      })}
    </main>
  );
};

export default Shop;
