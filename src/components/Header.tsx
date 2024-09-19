import { CiHeart, CiShoppingBasket, CiBellOn } from "react-icons/ci";;

const Header = () => {
  return (
    <header className="bg-main-dark text-white py-4 px-6 flex items-center justify-between fixed top-0 rounded-t-[20px] shadow-md w-full z-10">
      {/* Left Side: Logo or Title */}
      <div className="flex items-center">
        <button className="mr-4 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <span className="text-xl font-semibold font-poppins">Quantum</span>
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center space-x-4">
        <CiHeart className="w-6 h-6 cursor-pointer" />
        <CiShoppingBasket className="w-6 h-6 cursor-pointer" />
        <CiBellOn className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;