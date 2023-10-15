import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-8 bg-pink-300 flex justify-center items-center">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </header>
  );
};

export default Header;
