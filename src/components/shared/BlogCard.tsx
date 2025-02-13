import { TBlog } from "@/Types/Types";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { _id, category, content, email, image, name, title, userImage } = blog;
  return (
   <Link href={`/blog/${_id}`}> <div className=" my-5 flex items-center justify-center p-4">
   {/* Main Card Container */}
   <div className="max-w-2xl w-full mx-auto bg-white  shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
     {/* Banner Image Section */}
     <div className="relative h-48 bg-gray-200">
       <img
         src={image}
         alt="Banner"
         className="w-full h-full object-cover aspect-video"
       />
     </div>

     {/* Profile Content Section */}
     <div className="relative px-6 pb-8 pt-20">
       {/* User Profile Image */}
       <div className="absolute -top-12 left-6">
         <img
           src={userImage}
           alt="User Profile"
           className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
         />
       </div>

       {/* Category Badge */}
       <span className="absolute top-4 right-6 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-medium">
         {category}
       </span>

       {/* User Information */}
       <div className="mb-4">
         <h2 className="text-2xl font-bold text-gray-800 mb-1">
           {title}
         </h2>
         <p className="text-gray-600 font-medium mb-2">{name}</p>
         <a
           href="mailto:[email]"
           className="text-green-500 hover:text-indigo-600 text-sm"
         >
          {email || "User Email is Private"}
         </a>
       </div>

       {/* Content Section */}
       <p className="text-gray-600 leading-relaxed">
       {content.length > 30
         ? <span> {content.slice(0, 30)} <span className="text-green-400"> Read More...</span></span>
         : content}
       </p>
     </div>
   </div>
 </div></Link>
  );
};

export default BlogCard;
