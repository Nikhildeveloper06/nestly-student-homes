import { useEffect, useState } from "react";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(function () {
    const interval = setInterval(function () {
      setIndex(function (prev) {
        return (prev + 1) % images.length;
      });
    }, 5000);

    return function () {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map(function (src, i) {
        return (
          <img
            key={src}
            src={src}
            alt={"Nestly Parkside unit photo " + (i + 1)}
            className={
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 " +
              (i === index ? "opacity-100" : "opacity-0")
            }
          />
        );
      })}
    </div>
  );
}
