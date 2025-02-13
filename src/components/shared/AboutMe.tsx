import img2 from "@/assets/img2.jpg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbMailOpened } from "react-icons/tb";

const AboutMe = () => {
  return (
    <div className="container  w-[80%] mx-auto">
      {/* title section */}
      <div>
        <h1 className="text-center text-4xl font-medium  my-20">
          {" "}
          About <span className="text-green-400">Me</span>
        </h1>
      </div>
      {/* details section */}
      <div className="flex justify-evenly flex-col md:flex-row lg:flex-row gap-10">
        {/* image */}
        <div className=" text-center mx-auto">
          <Image
            src={img2}
            alt="Developers image"
            width={300}
            height={400}
            className="rounded-md "
          />
        </div>
        {/* details */}
        <div className="flex-1">
          <h1 className="text-3xl font-medium mb-5">Who Am I?</h1>
          <p>
            I'm a MERN Stack Web Developer passionate about building scalable
            and high-performance applications using MongoDB, Express.js, React,
            and Node.js. I focus on clean code, seamless user experiences, and
            efficient backend solutions to drive innovation and growth
          </p>
          <p className="my-5">
            My goal is to build scalable, efficient, and user-friendly web
            applications that solve real-world problems. I strive to write
            clean, maintainable code and continuously improve my skills to stay
            ahead in modern web development
          </p>
          <h1 className="text-3xl font-medium my-5">Personal Info</h1>
          {/* personal info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
             {/* phone */}
             <div className="flex items-center gap-2">
             <div className="text-2xl bg-white shadow-md p-2 rounded-lg  text-green-400">
             <MdOutlinePhoneAndroid />
             </div> 
             <div>
                 <p className="font-semibold">Phone</p>
                 <p>+8801933290133</p>
             </div>
             </div>
             {/* Email */}
             <div className="flex items-center gap-2">
             <div className="text-2xl bg-white shadow-md p-2 rounded-lg  text-green-400">
             <TbMailOpened />
             </div> 
             <div>
                 <p className="font-semibold">Gmail</p>
                 <p>tanvirrashid881@gmail.com</p>
             </div>
             </div>
             {/* phone */}
             <div className="flex items-center gap-2">
             <div className="text-2xl bg-white shadow-md p-2 rounded-lg  text-green-400">
             <FaLocationDot />
             </div> 
             <div>
                 <p className="font-semibold">Location</p>
                 <p>Jessore , Bangladesh</p>
             </div>
             </div>
             {/* Email */}
             <div className="flex items-center gap-2">
             <div className="text-2xl bg-white shadow-md p-2 rounded-lg  text-green-400">
             <TbMailOpened />
             </div> 
             <div>
                 <p className="font-semibold">Birthday</p>
                 <p>11 December , 2004</p>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
