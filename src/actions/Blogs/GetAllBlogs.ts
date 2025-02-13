export const GetAllBlogs = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const blogInfo = await res.json();
  return blogInfo;
};
