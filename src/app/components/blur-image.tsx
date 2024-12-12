"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/helpers/object.helpers";

export const BlurImage = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
      <Image
        {...props}
        fill
        objectFit="cover"
        className={cn(
          props.className,
          "duration-500 ease-in-out group-hover:opacity-75",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
