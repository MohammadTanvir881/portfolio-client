export type TBlog = {
  _id: string;
  name: string;
  userImage: string;
  title: string;
  email: string;
  image: string;
  content: string;
  category: string;
  isDeleted?: boolean;
};

export type TProject = {
  _id: string;
  name: string;
  email?: string;
  userImage: string;
  title: string;
  image: string;
  descriptions: string;
  liveLink: string;
  isDeleted?: boolean;
};
