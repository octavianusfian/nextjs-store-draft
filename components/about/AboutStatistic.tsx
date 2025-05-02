import React, { ReactNode } from "react";


type AboutStatisticProps = {
  icon: ReactNode;
  title: string;
  number: string;
};

const AboutStatistic = ({ icon, title, number }: AboutStatisticProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="border w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center">
        {icon}
      </div>
      <p className="text-muted-foreground text-sm">{title}</p>
      <p className="text-2xl font-bold">{number}</p>
    </div>
  );
};

export default AboutStatistic;
