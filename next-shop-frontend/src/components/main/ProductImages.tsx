"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, src: "/product/mens-jeans.jpg" },
  { id: 2, src: "/product/mens-office-shirt.jpg" },
  { id: 3, src: "/product/mens-plain-t-shirt.jpg" },
  { id: 4, src: "/product/mens-running-shoes.jpg" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative ">
        <Image
          src={images[index].src}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className="w-1/4 h-32 relative cursor-pointer"
              onClick={() => setIndex(index)}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="50vw"
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
