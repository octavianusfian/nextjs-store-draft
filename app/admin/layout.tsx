import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h2 className="text-2xl pl-4">Dashboard</h2>
      <Separator className="mt-2" />
      <section className="grid grid-cols-12 mt-12 gap-2 md:gap-12">
        <div className="col-span-12 lg:col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-10">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
