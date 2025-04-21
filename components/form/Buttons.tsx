"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2, LuPen } from "react-icons/lu";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size={size}
      className={cn("capitalize", className)}
    >
      {pending ? (
        <>
          <ReloadIcon className="w-4 h-4 animate-spin mr-2" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type ActionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: ActionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LuPen />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;

        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"link"}
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        variant={"outline"}
        className="p-2 cursor-pointer"
        size={"icon"}
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      size={"icon"}
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

export const ProductSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button type="button" className="mt-8 capitalize">
        Sign in
      </Button>
    </SignInButton>
  );
};
