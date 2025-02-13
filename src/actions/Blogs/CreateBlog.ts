"use server"

export const createBlog = async (data : any) => {
    console.log(data)
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  return blogInfo;
};
