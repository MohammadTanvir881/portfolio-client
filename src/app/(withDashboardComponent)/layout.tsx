import Sidebar from "@/components/shared/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className=" fixed z-50 lg:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 overflow-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
