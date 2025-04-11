import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  console.log(productId);
  
  return (
    <Button size={"icon"} variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
