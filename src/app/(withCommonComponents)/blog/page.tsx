import BlogCard from "@/components/shared/BlogCard";

import { TBlog } from "@/Types/Types";

const BlogPage = async () => {
  const blogs = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    cache: "no-cache",
  });
  const blogsData = await blogs.json();
  //   console.log(blogsData);
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">
        All <span className="text-green-400">Blogs</span>
      </h1>
      {/* Blog Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
        {blogsData.data.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
