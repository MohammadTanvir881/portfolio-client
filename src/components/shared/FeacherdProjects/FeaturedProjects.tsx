import { TProject } from "@/Types/Types";
import ProjectCard from "../ProjectCard";

const FeaturedProjects = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);
  const projects = await res.json();
  console.log(projects);

  return (
    <div className="container mx-auto w-[100%] md:w-[90%] lg:w-[85%]">
      <div>
        <div>
          <h1 className="text-center text-4xl font-medium  my-8">
            {" "}
            Featured <span className="text-green-400"> Projects</span>
          </h1>
        </div>
        {/* Projects Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.data.slice(0, 6).map((project: TProject) => (
            <ProjectCard key={project._id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
