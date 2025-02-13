import { TProject } from "@/Types/Types";
import Link from "next/link";

const ProjectDetails = ({ project }: { project: TProject }) => {
  const { _id, descriptions, image, liveLink, name, title, userImage, email } =
    project;
    console.log(project)
  return (
    <div className="min-h-screen p-8">
      {/* Main Container */}
      <div className="w-full mx-auto">
        {/* Grid Layout */}
        <div className="">
          {/* Project Card */}
          <div className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Project Image */}
            <div className="relative w-full h-80 bg-gray-200">
              <img
                src={image}
                alt="Project Image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Author Info */}
              <div className="flex items-center mb-4">
                <img
                  src={userImage}
                  alt="Author"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {name}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">{email}</p>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 ">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {descriptions}
                </p>

                {/* Live Link Button */}
                <Link
                  href={liveLink}
                  className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white text-center 
                                       py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  View Live Project
                </Link>
              </div>
            </div>
          </div>
          {/* End of Project Card */}

          {/* Repeat more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
