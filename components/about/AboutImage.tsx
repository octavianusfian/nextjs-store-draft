import React from "react";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const carouselImages = [hero1, hero2, hero3, hero4];

const AboutImage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[500px]">
      {carouselImages.map((image, index) => (
        <Card
          key={index}
          className={`overflow-hidden p-0 ${
            index === 3 ? "col-span-3" : "col-span-1"
          } h-full`}
        >
          <CardContent className="p-0 h-full">
            <AspectRatio
              ratio={index === 3 ? 7 / 3 : 4 / 4}
              className="w-full h-full"
            >
              <Image
                src={image.src}
                alt={image.src}
                fill
                className="object-cover"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutImage;
