import { TProject } from "@/Types/Types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: TProject }) => {
  const { _id, image, liveLink, descriptions, name, title, userImage, email } =
    project;
  return (
    <Link href={`/projects/${_id}`}>
      {" "}
      <div className=" p-8">
        {/* Main Container */}
        <div className="w-full mx-auto">
          {/* Grid Layout */}
          <div className="">
            {/* Project Card */}
            <div className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={image}
                  alt="Project Image"
                  // fill
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <Image
                    src={userImage}
                    width={40}
                    height={40}
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
                  <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {descriptions.length > 50 ? (
                      <span>
                        {" "}
                        {descriptions.slice(0, 60)}{" "}
                        <span className="text-green-400"> Read More...</span>
                      </span>
                    ) : (
                      descriptions
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* End of Project Card */}

            {/* Repeat more cards as needed */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
