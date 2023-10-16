import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-8 bg-pink-300 flex justify-end items-center h-1/6">
      <div></div>
      <nav className="w-4/6 flex justify-between px-2">
        <div className="w-1/2 flex justify-around">
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
        <Link to="cart">Cart</Link>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
