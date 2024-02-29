import rasm from "../../images/rasm.png";
import rasm2 from "../../images/rasm2.png";
import rasm3 from "../../images/rasm3.png";
const About = () => {
  return (
    <>
      <div className="about container mx-auto flex-col items-center ">
        <div className="text flex justify-between mx-auto">
          <div className="item w-[400px] flex flex-col items-center">
            <img src={rasm} alt="" />
            <h3 className="text-white font-bold">- 01 -</h3>
            <h3 className="text-white font-bold text-[20px]">Mirror Maze</h3>
            <p className="text-white font-[600]">
              residential complex with mirror walls
            </p>
          </div>
          <div className="item w-[400px] flex flex-col items-center">
            <img src={rasm2} alt="" />
            <h3 className="text-white font-bold">- 01 -</h3>
            <h3 className="text-white font-bold text-[20px]">Mirror Maze</h3>
            <p className="text-white font-[600]">
              residential complex with mirror walls
            </p>
          </div>
          <div className="item w-[400px] flex flex-col items-center">
            <img src={rasm3} alt="" className="h-[400px] w-[400px]" />
            <h3 className="text-white font-bold">- 01 -</h3>
            <h3 className="text-white font-bold text-[20px]">Mirror Maze</h3>
            <p className="text-white font-[600]">
              residential complex with mirror walls
            </p>
          </div>
        </div>
        <div className="img flex justify-center mt-[30px] gap-4 ">
          <button>
            <i className="bx bx-left-arrow-alt text-white text-[25px] p-[10px] border-2 hover:rounded-r-full hover:rounded-b-full hover:bg-slate-200 hover:text-black"></i>
          </button>
          <button>
            <i className="bx bx-right-arrow-alt text-white text-[25px] p-[10px] border-2 hover:rounded-l-full hover:rounded-b-full hover:bg-slate-200 hover:text-black"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
