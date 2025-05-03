import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Button asChild className="p-0 bg-transparent hover:bg-transparent">
      <Link href="/">
        <Image
          src="/images/logo_icon.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-[3rem] object-cover rounded-full"
        />
      </Link>
    </Button>
  );
};

export default Logo;
