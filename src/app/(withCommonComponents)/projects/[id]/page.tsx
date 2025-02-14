import ProjectDetails from "@/components/shared/ProjectDetails";
import { TProject } from "@/Types/Types";
import React from "react";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-cache",
  });
  const projectData = await res.json();
  console.log(projectData);
  const projectDetails = projectData.data.filter(
    (projectDetails: TProject) => projectDetails._id === id
  );
  console.log(projectDetails);
  return (
    <div>
      <h1 className="text-4xl text-center">
        Project <span className="text-green-400">Details</span>
      </h1>
      {/* project Details */}
      <div>
        {projectDetails.map((project: TProject) => (
          <ProjectDetails key={project._id} project={project}></ProjectDetails>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
