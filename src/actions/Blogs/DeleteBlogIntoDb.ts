"use server";

export const deleteBlogIntoDb = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const deletedBlogInfo = await res.json();
  return deletedBlogInfo;
};
