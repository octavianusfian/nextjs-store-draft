import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h2 className="text-2xl pl-4">Dashboard</h2>
      <Separator className="mt-2" />
      <section className="grid lg:grid-cols-12 mt-12 gap-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
