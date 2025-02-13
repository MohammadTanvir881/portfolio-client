import CreateBlog from "@/components/CreateBlog";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const CreateBlogPage = async () => {
  const seasons = await getServerSession(authOptions);
  console.log(seasons);
  return (
    <div>
      <CreateBlog seasons={seasons}></CreateBlog>
    </div>
  );
};

export default CreateBlogPage;
