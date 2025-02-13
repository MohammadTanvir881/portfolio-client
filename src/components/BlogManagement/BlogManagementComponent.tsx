"use client";
import { deleteBlogIntoDb } from "@/actions/Blogs/DeleteBlogIntoDb";
import { TBlog } from "@/Types/Types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const BlogManagementComponent = ({ blog }: { blog: TBlog }) => {
    const router = useRouter()
  const handleDeleteBlog = async (id: string) => {
    // console.log("delete Blog", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBlogIntoDb(blog._id);
        console.log(res)
        Swal.fire({
          title: "Deleted!",
          text: "Your Blog has been deleted.",
          icon: "success",
        });
      }
      router.refresh()
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={blog.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{blog.title}</div>
            <div className="text-sm opacity-50">{blog.category}</div>
          </div>
        </div>
      </td>
      <td>
        {blog.name} <br /> {blog.email}
      </td>
      <td>
        {" "}
        <div className="flex flex-col md:flex-row lg:flex-row gap-2">
          <Link href={`/dashboard/blogmanagement/${blog._id}`}>
            {" "}
            <button className="btn bg-green-400 text-white btn-xs">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDeleteBlog(blog._id)}
            className="btn bg-red-400 text-white btn-xs"
          >
            Delete
          </button>
        </div>
      </td>
      <th>
        <Link href={`/blog/${blog._id}`}>
          {" "}
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default BlogManagementComponent;
