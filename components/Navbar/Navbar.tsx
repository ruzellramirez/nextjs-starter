const Navbar = () => {
  return (
    <nav className="fixed bg-white container left-1/2 -translate-x-1/2 p-6 top-0 mx-auto">
      {/* left-1/2 -translate-x-1/2 */}
      <div className="flex items-center justify-between">
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Me
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Blog
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact
          </a>
        </div>

        <a
          href="#"
          className="hidden p-1 px-4 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Say Hello!
        </a>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
