import BlogDetails from "@/components/shared/BlogDetails";
import { TBlog } from "@/Types/Types";

const BlogsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  //   console.log(id);
  const blogs = await fetch(`${`${process.env.BACKEND_URL}/blogs`}`, {
    cache: "no-cache",
  });
  const data = await blogs.json();
  //   console.log("data", data);
  const blogDetails = data.data.filter((blog: TBlog) => blog._id === id);
  console.log(blogDetails);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-center">
        Blog <span className="text-green-400">Details</span>
      </h1>
      {/* blog details */}
      <div>
        {blogDetails.map((details: TBlog) => (
          <BlogDetails key={details._id} details={details}></BlogDetails>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetailsPage;
