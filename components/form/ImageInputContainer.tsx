"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text } = props;

  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        alt={name}
        className="rounded object-cover mb-4 w-[200px] h-[200px]"
        priority
      />
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
        className="capitalize cursor-pointer"
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <div className="flex gap-x-4 items-end">
              <ImageInput />  
              <SubmitButton size="sm" text={text} className="mb-2"/>
            </div>
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
