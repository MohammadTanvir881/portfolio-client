export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/blogmanagement",
    "/dashboard/createBlog",
    "/dashboard/projectmanagement",
    "/dashboard/createProject",
    "/dashboard/messagemanagement",
  ],
};
