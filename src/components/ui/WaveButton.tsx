import { useState } from "react";
import type { ReactNode } from "react";

const waveColors = ["#3B6FE0", "#F0A830", "#E1503E", "#5CB85C", "#9B6DF5"];

export default function WaveButton({
  children,
  href,
  baseClassName,
  textClassName,
}: {
  children: ReactNode;
  href: string;
  baseClassName: string;
  textClassName?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);

  return (
    <a
      href={href}
      className={"relative overflow-hidden " + baseClassName}
      onMouseEnter={() => {
        setHovered(true);
        setHoverKey(function (k) {
          return k + 1;
        });
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute inset-0" key={hoverKey}>
          {waveColors.map((color, i) => (
            <div
              key={color}
              className="absolute inset-0 wave-layer"
              style={{
                backgroundColor: color,
                animationDelay: i + "s",
              }}
            />
          ))}
        </div>
      )}
      <span
        className={
          "relative z-10 transition-colors duration-150 " +
          (hovered ? "text-white " : "") +
          (textClassName || "")
        }
      >
        {children}
      </span>
    </a>
  );
}
