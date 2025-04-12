"use client";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

const SignOutLink = () => {
  const handleLogOut = () => {
    toast("", {
      description: "Logout Successfull.",
    });
  };

  return (
    <SignOutButton>
      <Link href={"/"} className="w-full text-left" onClick={handleLogOut}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
