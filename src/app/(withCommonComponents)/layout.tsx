import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

const withCommonComponentLayout = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const seasons = await getServerSession(authOptions);
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Navbar seasons={seasons}></Navbar>
      </div>
      <div className="min-h-screen mx-auto">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default withCommonComponentLayout;
