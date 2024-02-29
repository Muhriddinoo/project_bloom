import { Head } from "../Head/Head";
import { useState } from "react";
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="contact container mx-auto bg-[#111] mt-[300px] flex flex-col justify-end gap-[50px]">
        <div className="contact-text flex items-end gap-[160px] relative">
          <Head />
          <div className="linkss flex gap-6">
            <i className="bx bxl-instagram border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-facebook border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-google border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
            <i className="bx bxl-telegram border-2 p-[10px] text-[40px] text-[#444343] hover:rounded-l-full hover:rounded-b-full hover:text-[#fff]"></i>
          </div>
          <div
            onClick={toggleModal}
            className="navbar-icon w-[200px] border-2 h-[200px] cursor-pointer flex flex-col items-end justify-between p-1 hover:rounded-l-full hover:rounded-b-full bg-[#111] relative bottom-[140px] left-[200px]"
          >
            <div className="navbar-icon-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="90"
                viewBox="0 0 90 90"
                className=""
                fill="none"
              >
                <path
                  d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                  fill="#E3E7F2"
                />
              </svg>
            </div>
            <p className="text-white font-bold text-[20px] relative bottom-9 right-4 ">
              Заказать проект
            </p>
          </div>
        </div>

        <div className="tel flex p-[40px] justify-between border-b-2">
          <h3 className="font-bold text-[20px] text-white">
            +998 91 361 28 17
          </h3>
          <h3 className="font-bold text-[20px] text-white">
            st. Buyuk Ipak Yuli, 154A
          </h3>
          <h3 className="font-bold text-[20px] text-white">
            info@bloom-arc@gmail.com
          </h3>
        </div>
        <div className="bloom pl-[40px]">
          <p className="text-white relative bottom-8">
            © 2024. Bloom Architecture- All rights reserved
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="modal w-[500px] rounded-2xl bg-zinc-950 h-[350px] fixed z-10 top-[190px] left-[400px] p-[10px] gap-4  text-white">
          <div className="modal-content flex flex-col gap-7">
            <div className="modal-text flex w-[400px] justify-between  ">
              <h2>Back Call</h2>
              <span
                className="close cursor-pointer text-[20px] hover:text-red-400 border w-[20px] h-[30px] text-center"
                onClick={toggleModal}
              >
                &times;
              </span>
            </div>
            <div className="input flex flex-col gap-4">
              <input
                type="text"
                className="input1 w-[300px] bg-transparent border-b"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="input1 w-[300px] bg-transparent border-b"
                placeholder="Phone Number"
              />
            </div>
            <div className="modal-modal">
              <p>Leave a request and we will contact you</p>
              <div className="modal-icon border w-[120px] cursor-pointer flex flex-col items-end justify-between  hover:rounded-l-full hover:rounded-b-full bg-[#111] relative left-[340px] top-[20px] ">
                <div className="modal-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="70"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                      fill="#E3E7F2"
                    />
                  </svg>
                </div>
                <div className="modal-icon-text">
                  <h3 className="w-[50px] relative right-[30px] bottom-[10px]">
                    Order Project
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
