import React, { useEffect } from 'react'
import pic from "../assets/mahesh1.jpg";
import { BsDownload } from "react-icons/bs";
import file from "../assets/Mahesh-resume.pdf";
import { saveAs } from "file-saver";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full md:py-1 py-32">
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 md:gap-1 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center md:pt-1 pt-36" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt="mahesh chand prajapat"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-gray-50 text-lg">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
              Mahesh Chand Prajapat
            </h1>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
                <span className='mr-2'>I am Front-End React JS Developer</span>
              </h2>
            </div>
            {/* Description */}
            <p className="text-sm leading-7">
              A highly skilled Front-End React JS Developer,
              I specialize in crafting robust web applications,
              bringing expertise in HTML, CSS, JavaScript, React.
              My experience spans both front-end development,
              allowing me to deliver scalable and user-friendly solutions.
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
        </div>
      </div>
    </div>
  );
}

export default Home;