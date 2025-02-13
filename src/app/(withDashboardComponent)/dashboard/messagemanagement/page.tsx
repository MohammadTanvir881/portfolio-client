import MessageCard from "@/components/Messagemanagement/MessageManagement";
import React from "react";

export type TMessage = {
    _id : string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isDeleted?: boolean;
};

const MessageManagementPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/message`);
  const data = await res.json();
  // console.log(data)
  return (
    <div>
      <h1 className="text-center text-4xl my-5">
        {" "}
        Message <span className="text-green-400">Management</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((message: TMessage) => (
            <MessageCard key={message._id } message={message}></MessageCard>
         
        ))}
      </div>
    </div>
  );
};

export default MessageManagementPage;
