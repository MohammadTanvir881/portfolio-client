import PersistentDrawerLeft from "@/components/shared/Sidebar";
import Sidebar from "@/components/shared/Sidebar";
import MiniDrawer from "@/components/shared/Sidebar";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashboardPage = async () => {
  const seasons = await getServerSession(authOptions);
  console.log(seasons);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className=" text-xl lg:text-3xl">Welcome To Dashboard</h1>
      <div className=" w-full bg-white rounded-2xl  p-6 flex flex-col items-center space-y-4">
        <Image
          src={seasons?.user?.image as string}
          alt="User Image"
          className="w-24 h-24 rounded-full shadow-lg object-cover"
          width={300}
          height={300}
        />
        <h2 className="text-xl font-semibold text-gray-800">
          {seasons?.user?.name}
        </h2>
        <p className="text-gray-500">{seasons?.user?.email}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
