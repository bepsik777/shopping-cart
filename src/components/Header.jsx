import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Header = ({list}) => {

  return (
    <header className="bg-sky-600 px-5 py-8 flex justify-center items-center h-[10%]">
      <nav className="flex justify-around gap-12 md:w-1/3 md:grid md:grid-cols-3 md:place-items-center">
        <Link to="/" className="text-2xl hover:text-blue-100 hover:bg-pink-600 hover:px-2">
          Home
        </Link>
        <Link to="shop" className="text-2xl hover:text-blue-100 hover:bg-pink-600 hover:px-2">
          Shop
        </Link>
        <Link to="cart" aria-label="Cart" className="flex items-center text-3xl relative md:h-full hover:text-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="bg-red-500 w-4 h-4 rounded-full text-white text-xs flex justify-center items-center absolute left-3 bottom-4">{list.length}</div>
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default Header;
