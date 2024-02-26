import React from "react";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from "../assets/Mahesh-resume.pdf";
import phone from "../assets/phone1.png";
import address from "../assets/location.png";
import email from "../assets/email.png";

const About = () => {

  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C] md:py-1 pt-96"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Front-end developer
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
              Junior React Js developer, passionate about
              creating beautiful user experiences. Combining React development
              skills with a keen eye for design. Striving to blend functionality
              with aesthetics, ensuring every pixel serves a purpose. Constantly
              learning and seeking new challenges to deliver innovative
              solutions.
            </p>
            {/* Download resume button */}
            <div className="mt-4">
              <button
                onClick={handleDownload}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
              >
                Download resume{" "}
                <span className="group-hover:translate-y-1 duration-300">
                  <BsDownload className="ml-4" />
                </span>
              </button>
            </div>
          </div>
          {/* Profile picture */}
          <div className="">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={phone}
                  alt="mahesh prajapat"
                  style={{ width: "22px", height: "22px" }}
                />
                <div>
                  <span>Phone : </span>
                  <span>+91 9587586425</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={address}
                  alt="mahesh prajapat"
                  style={{ width: "22px", height: "22px" }}
                />
                <div>
                  <span>Address : </span>
                  <span>Jaipur</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={email}
                  alt="mahesh prajapat"
                  style={{ width: "28px", height: "20px" }}
                />
                <div>
                  <span>Email : </span>
                  <span>maheshpk678@gmail.com</span>
                </div>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;