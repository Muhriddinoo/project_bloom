// import logo from "../../images/logo.svg";

// import "./Head.css";
import logo from "../../images/Logo.png";

export const Head = () => {
  return (
    <>
      <div className="head">
        <div className="head-inner p-[10px] flex gap-4 ">
          <div className="head-img">
            <img src={logo} alt="" className="w-[40px]" />
          </div>
          <div className="head-text gap-3 flex flex-col">
            <div className="link">
              <ul>
                <li className="text-zinc-500 text-2xl hover:underline w-[100px] font-bold hover:text-white cursor-pointer">
                  О нас
                </li>
                <li className="text-zinc-500 text-2xl hover:underline w-[100px] font-bold hover:text-white cursor-pointer">
                  Сервисы
                </li>
                <li className="text-zinc-500 text-2xl hover:underline w-[100px] font-bold hover:text-white cursor-pointer">
                  Портфолио
                </li>
                <li className="text-zinc-500 text-2xl hover:underline w-[100px] font-bold hover:text-white cursor-pointer">
                  Клиенты
                </li>
                <li className="text-zinc-500 text-2xl hover:underline w-[100px] font-bold hover:text-white">
                  Контакты
                </li>
              </ul>
            </div>
            <div className="til flex gap-3">
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                EN
              </p>
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                RU
              </p>
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                UZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
