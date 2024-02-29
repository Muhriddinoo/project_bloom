import { Head } from "../Head/Head";
import { Navbar } from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="container mx-auto flex ">
      <Head />
      <div className="menu">
        <i className="bx bx-menu text-white text-[40px] cursor-pointer hidden "></i>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
