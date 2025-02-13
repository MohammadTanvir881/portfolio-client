"use client";
import Image from "next/image";
import image from "../../assets/1714645740052.jpg";
import Link from "next/link";
import { FaDownload, FaDownLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:h-[600px] flex my-10 flex-col gap-5 md:flex-row lg:flex-row justify-between mx-10">
        {/* text part */}
        <div className="flex flex-1 flex-col justify-center lg:ml-28">
          <h1>
            <span className="text-xl md:text-2xl font-bold">Hi </span>
            <br />{" "}
            <span className="text-3xl md:text-4xl font-bold">
              I'm <span className="text-green-400">Tanvir</span>
            </span>{" "}
            <br />{" "}
            <span className="text-3xl md:text-4xl font-bold">
              A MERN Stack Developer
            </span>
          </h1>
          <p className="my-3 text-sm md:text-lg">
            I specialize in building scalable and high-performance web
            applications using MongoDB, Express.js, React, and Node.js.
            Passionate about clean code, API development, and crafting
            user-friendly experiences that drive innovation and efficiency."
          </p>
          {/* buttons */}
          <div className="flex gap-3 my-3">
            <Link href="https://drive.google.com/file/d/1NHTO-XGy358-889HXaIyn32htJa6mfXh/view?usp=sharing">
              <button className="btn  bg-green-400 text-white hover:bg-gray-900 hover:text-white">
                <span>
                  <FaDownload />
                </span>{" "}
                Resume
              </button>
            </Link>
            <Link href="/contact">
              {" "}
              <button className="btn bg-transparent  hover:bg-gray-900 hover:text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Image Part */}
        <div
          className="flex-1 flex items-center
      justify-center"
        >
          <Image
            className="rounded-full border-8  border-green-300"
            src={image}
            alt="Developers-picture"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
