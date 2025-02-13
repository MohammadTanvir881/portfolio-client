import UpdateBlogForm from "@/components/shared/UpdateBlogForm";
import { TBlog } from "@/Types/Types";
import React from "react";

const BlogManagementUpdatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  // fetch update blog data
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`);
  const data = await res.json();
  // console.log("From Update Blog" , data)
  const blog = data.data.filter((blogDetails: TBlog) => blogDetails._id === id);
  console.log("Blog Details of update blog", blog);

  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl my-10">
        Update <span className="text-green-400">Blog</span>
      </h1>
      {blog.map((blogdata : TBlog) => (
        <UpdateBlogForm key={blogdata._id} blogdata={blogdata}></UpdateBlogForm>
      ))}
    </div>
  );
};

export default BlogManagementUpdatePage;
