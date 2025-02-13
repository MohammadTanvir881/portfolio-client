"use server"


export const updateProjectIntoDb = async (data : any , id : string) => {
    // console.log(data)
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  return blogInfo;
};
