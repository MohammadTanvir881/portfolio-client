import { FaNode, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const MySkills = () => {
  return (
    <div className="my-20 container w-[80%] mx-auto">
      <h1 className="text-center text-4xl font-medium">
        {" "}
        My <span className="text-green-400">Skills</span>{" "}
      </h1>
      {/* my skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {/* JavaScript */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <IoLogoJavascript className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">JavaScript</p>
            <p className=" text-gray-700">
            JavaScript is a versatile, high-level programming language used for web development, enabling dynamic content, interactivity, and powerful front-end and back-end functionality
            </p>
          </div>
        </div>
        {/* React */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <FaReact className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">React</p>
            <p className=" text-gray-700">
              React is a component-based JavaScript library that uses Virtual
              DOM, JSX, Hooks, and Context for efficient UI development
            </p>
          </div>
        </div>
        {/* Next js */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <RiNextjsFill className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Next Js</p>
            <p className=" text-gray-700">
              Next.js is a React framework that enables server-side rendering,
              static site generation, API routes, and improved performance for
              building scalable and SEO-friendly web application
            </p>
          </div>
        </div>
        {/* Express js */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <SiExpress className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Express Js</p>
            <p className=" text-gray-700">
              Express.js is a lightweight, fast Node.js framework for building
              web applications and RESTful APIs with easy routing and middleware
              support
            </p>
          </div>
        </div>
        {/* Node js */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <FaNode className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Node Js</p>
            <p className=" text-gray-700">
              Express.js is a lightweight, fast Node.js framework for building
              web applications and RESTful APIs with easy routing and middleware
              support
            </p>
          </div>
        </div>
        {/* MongoDb */}
        <div className="flex gap-4 border-2 p-4 rounded-md border-green-200 bg-green-100">
          <div>
            <SiMongodb className="text-5xl text-green-400  bg-white shadow-md p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">MongoDb</p>
            <p className=" text-gray-700">
              MongoDB is a NoSQL database that stores data in flexible JSON-like
              documents, enabling scalability, high performance, and efficient
              data management for modern applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
