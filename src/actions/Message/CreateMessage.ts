"use server";

import { TCreateMessage } from "@/app/(withCommonComponents)/contact/page";

export const createMessage = async (data: TCreateMessage) => {
  console.log(`${process.env.BACKEND_URL}/message`);
  console.log(data);
  const res = await fetch(`${process.env.BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const messageInfo = await res.json();
  console.log(messageInfo);
  return messageInfo;
};
