"use client";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TSeasonsProps } from "./Navbar";
import { createProjectIntoDb } from "@/actions/Projects/CreateProjectsIntoDb";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export type TCreateProject = {
  name: string | null | undefined;
  email?: string | null | undefined;
  userImage: string | null | undefined;
  title: string;
  image: string;
  descriptions: string;
  liveLink: string;
  isDeleted?: boolean;
};

const CreateProject = ({ seasons }: { seasons: TSeasonsProps | null }) => {
  console.log(seasons);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreateProject>();

  const onSubmit: SubmitHandler<TCreateProject> = async (data) => {
    data.name = seasons?.user?.name;
    data.userImage = seasons?.user?.image;
    data.email = seasons?.user?.email;
    console.log("Form Data:", data);
    try {
      const res = await createProjectIntoDb(data);

      // console.log(res)
      if (res.success) {
        toast.success("Project Created Successful");
        setTimeout(() => {
          router.push("/dashboard/projectmanagement");
        }, 2000);
      }
      // reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="max-w-lg w-full bg-white p-5 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create a Project
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

          {/* descriptions */}
          <div>
            <label className="block font-medium text-gray-700">
              descriptions
            </label>
            <textarea
              {...register("descriptions", {
                required: "descriptions is required",
              })}
              placeholder="Write your descriptions here..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.descriptions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.descriptions.message as string}
              </p>
            )}
          </div>
          {/* Project Live Link */}
          <div>
            <label className="block font-medium text-gray-700">
              Project Live Link
            </label>
            <input
              type="text"
              {...register("liveLink", {
                required: "Project Live URL is required",
              })}
              placeholder="Enter Project Live Url"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.liveLink && (
              <p className="text-red-500 text-sm mt-1">
                {errors.liveLink.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-semibold p-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Submit Project
          </button>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default CreateProject;
