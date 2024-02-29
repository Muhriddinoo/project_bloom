import logo from "../../images/1.svg";
import logo2 from "../../images/2.svg";
import logo3 from "../../images/3.svg";

const Logo = () => {
  return (
    <>
      <div className="logo container mx-auto flex flex-col gap-8">
        <div className="logo-text flex gap-3 justify-end">
          <button>
            <i className="bx bx-left-arrow-alt text-white text-[25px] p-[10px] border-2 hover:rounded-r-full hover:rounded-b-full hover:bg-slate-200 hover:text-black"></i>
          </button>
          <button>
            <i className="bx bx-right-arrow-alt text-white text-[25px] p-[10px] border-2 hover:rounded-l-full hover:rounded-b-full hover:bg-slate-200 hover:text-black"></i>
          </button>
        </div>
        <div className="logo-img flex justify-between ">
          <div className="item rounded-3xl bg-slate-200 w-[350px] flex flex-col items-center h-[250px] p-[20px] gap-20">
            <img src={logo} alt="" />
            <p className="text-[#636262]">Very long client company name</p>
          </div>
          <div className="item rounded-3xl bg-slate-200 w-[350px] flex flex-col items-center h-[250px] p-[20px] gap-20">
            <img src={logo2} alt="" />
            <p className="text-[#636262]">Very long client company name</p>
          </div>
          <div className="item rounded-3xl bg-slate-200 w-[350px] flex flex-col items-center h-[250px] p-[20px] gap-20">
            <img src={logo3} alt="" />
            <p className="text-[#636262]">Very long client company name</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Logo;
