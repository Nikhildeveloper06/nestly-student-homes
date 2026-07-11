import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const waveColors = ["#3B6FE0", "#F0A830", "#E1503E", "#5CB85C", "#9B6DF5"];

export default function WaveButton({
  href,
  baseClassName,
  textClassName,
  children,
}: {
  href: string;
  baseClassName: string;
  textClassName?: string;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);

  function handleEnter() {
    setHoverKey(function (k) {
      return k + 1;
    });
    setHovered(true);
  }

  function handleLeave() {
    setHovered(false);
  }

  const content = (
    <>
      {hovered &&
        waveColors.map(function (color, i) {
          return (
            <div
              key={hoverKey + "-" + i}
              className="wave-layer absolute inset-0"
              style={{ backgroundColor: color, animationDelay: i + "s" }}
            />
          );
        })}
      <span className={"relative z-10 " + (textClassName || "")}>
        {children}
      </span>
    </>
  );

  const isHashLink = href.includes("#");

  if (isHashLink) {
    return (
      <a
        href={href}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={"relative overflow-hidden " + baseClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={"relative overflow-hidden " + baseClassName}
    >
      {content}
    </Link>
  );
}
