"use server"

import { TUpdateBlog } from "@/components/shared/UpdateBlogForm";


export const updateBlogIntoDb = async (data : TUpdateBlog , id : string) => {
    // console.log(data)
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  return blogInfo;
};
