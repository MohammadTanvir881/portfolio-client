import ProjectManagementComponent from "@/components/ProjectManagement/ProjectManagementComponent";
import { TBlog, TProject } from "@/Types/Types";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const ProjectManagementPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-cache",
  });
  const projects = await res.json();
  //   console.log("projects", projects);
  const user = await getServerSession(authOptions);
  //   console.log("user form projects", user);

  const userProjects = projects.data.filter(
    (project: TProject) => project.email === user?.user?.email
  );

  //   console.log("User Projects", userProjects);
  if (userProjects.length === 0) {
    return (
      <div className="text-2xl md:text-4xl lg:text-4xl flex justify-center items-center min-h-screen text-center ">
        You Dont Have Any Projects To Show
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="text-center text-4xl my-10">
        <span className="text-green-400">Project</span> Management
      </h1>
      {/* blogs crud card sections */}
      <div>
        {/* create blogs sections */}
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Projects</th>
                  <th>Author</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {userProjects.map((project: TProject) => (
                  <ProjectManagementComponent
                    key={project._id}
                    project={project}
                  ></ProjectManagementComponent>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementPage;
