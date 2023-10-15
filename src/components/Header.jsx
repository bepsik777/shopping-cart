import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-8 bg-pink-300 flex justify-around items-center h-1/6">
      <div></div>
      <div className="w-1/3 flex justify-between">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
