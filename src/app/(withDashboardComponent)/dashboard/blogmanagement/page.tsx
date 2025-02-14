import BlogManagementComponent from "@/components/BlogManagement/BlogManagementComponent";
import { TBlog } from "@/Types/Types";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const BlogManagementPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    cache: "no-store",
  });
  const blogs = await res.json();
  //   console.log("blogs", blogs);
  const user = await getServerSession(authOptions);
  // console.log("user form Blogs", user);

  const userBlogs = blogs.data.filter(
    (blog: TBlog) => blog.email === user?.user?.email
  );

  // console.log("user blog", userBlogs);
  if (userBlogs.length === 0) {
    return (
      <div className="text-2xl md:text-4xl lg:text-4xl flex justify-center items-center min-h-screen text-center ">
        You Dont Have Any Blogs To Show
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-center text-2xl md:text-4xl my-10">
        Blog <span className="text-green-400">Management</span>
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
                  <th>Blogs</th>
                  <th>Author</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {userBlogs.map((blog: TBlog) => (
                  <BlogManagementComponent
                    key={blog._id}
                    blog={blog}
                  ></BlogManagementComponent>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManagementPage;
