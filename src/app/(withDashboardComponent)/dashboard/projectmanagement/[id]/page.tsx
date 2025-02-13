import UpdateProjectForm from "@/components/shared/UpdateProjectForm";
import { TProject } from "@/Types/Types";
import React from "react";

const ProjectUpdatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  // fetch update blog data
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);
  const data = await res.json();
  // console.log("From Update Blog" , data)
  const project = data.data.filter(
    (projectDetails: TProject) => projectDetails._id === id
  );
  console.log("Project Details of update Project", project);
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl my-10">
        Update <span className="text-green-400">Project</span>
      </h1>
      {project.map((projectdata: TProject) => (
        <UpdateProjectForm
          key={projectdata._id}
          projectdata={projectdata}
        ></UpdateProjectForm>
      ))}
    </div>
  );
};

export default ProjectUpdatePage;
