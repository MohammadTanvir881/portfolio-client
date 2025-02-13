"use server";

export const createMessage = async (data: any) => {
  console.log(data);
  const res = await fetch(`${process.env.BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const messageInfo = await res.json();
  return messageInfo;
};
