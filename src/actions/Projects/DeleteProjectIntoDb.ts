"use server";

export const deleteProjectsIntoDb = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const deletedProjectInfo = await res.json();
  return deletedProjectInfo;
};
