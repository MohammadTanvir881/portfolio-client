import ProjectCard from "@/components/shared/ProjectCard";
import { TProject } from "@/Types/Types";

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);
  const projectData = await res.json();
  console.log(projectData);
  return (
    <div>
      <h1 className="text-center text-4xl">All <span className="text-green-400">Projects</span></h1>
      {/* projects card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] md:w-[90%] lg:w-[90%] mx-auto">
        {projectData?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
