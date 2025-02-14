"use client";
import React, { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TSeasonsProps } from "./Navbar";
import { createBlog } from "@/actions/Blogs/CreateBlog";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export type TCreateBlog = {
  name: string | null | undefined;
  userImage: string | null | undefined;
  title: string;
  email: string | null | undefined;
  image: string;
  content: string;
  category: string;
  isDeleted?: boolean;
};

const CreateBlog = ({ seasons }: { seasons: TSeasonsProps | null }) => {
  console.log(seasons);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateBlog>();

  const onSubmit: SubmitHandler<TCreateBlog> = async (data) => {
    data.name = seasons?.user?.name;
    data.userImage = seasons?.user?.image;
    data.email = seasons?.user?.email;
    console.log("Form Data:", data);
    try {
      const res = await createBlog(data);
      if (res.success) {
        toast.success("Blog Created Successful");
        setTimeout(() => {
          router.push("/dashboard/blogmanagement");
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create a Blog
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="block font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              placeholder="Enter image URL"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message as string}
              </p>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter title"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message as string}
              </p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block font-medium text-gray-700">Content</label>
            <textarea
              {...register("content", { required: "Content is required" })}
              placeholder="Write your content here..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.content.message as string}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a category</option>
              <option value="tech">Tech</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-semibold p-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Submit Blog
          </button>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default CreateBlog;
