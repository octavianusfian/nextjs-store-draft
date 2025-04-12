import React from "react";
import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const UserIcon = async () => {
  const user = await currentUser();

  const profilImage = user?.imageUrl;

  if (profilImage) {
    return (
      <Image
        src={profilImage}
        alt={"profile image"}
        className="w-6 h-6 rounded-full object-cover"
        width={100}
        height={100}
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
