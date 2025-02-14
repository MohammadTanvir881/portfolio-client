"use server";

import { TCreateProject } from "@/components/CreateProject";

export const createProjectIntoDb = async (data: TCreateProject) => {
  console.log(data);
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  return blogInfo;
};
