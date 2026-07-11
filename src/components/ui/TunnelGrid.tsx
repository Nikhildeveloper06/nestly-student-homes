const CENTER = 300;
const RADII = [280, 210, 150, 100, 60, 30, 10];

type Side = "top" | "right" | "bottom" | "left";
type FillType = "image" | "color";

function corners(r: number) {
  return {
    tl: [CENTER - r, CENTER - r],
    tr: [CENTER + r, CENTER - r],
    br: [CENTER + r, CENTER + r],
    bl: [CENTER - r, CENTER + r],
  };
}

function trapezoidPoints(r1: number, r2: number, side: Side): number[][] {
  const c1 = corners(r1);
  const c2 = corners(r2);
  if (side === "top") return [c1.tl, c1.tr, c2.tr, c2.tl];
  if (side === "right") return [c1.tr, c1.br, c2.br, c2.tr];
  if (side === "bottom") return [c1.br, c1.bl, c2.bl, c2.br];
  return [c1.bl, c1.tl, c2.tl, c2.bl];
}

function toPointsAttr(pts: number[][]): string {
  return pts.map((p) => p[0] + "," + p[1]).join(" ");
}

function bbox(pts: number[][]) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
}

const colorMap: Record<string, string> = {
  blue: "#3B6FE0",
  orange: "#F0A830",
  red: "#E1503E",
  green: "#5CB85C",
  purple: "#9B6DF5",
};

const ringPattern: { top: FillType; right: FillType; bottom: FillType; left: FillType; color: string }[] = [
  { top: "color", right: "image", bottom: "color", left: "image", color: "blue" },
  { top: "image", right: "color", bottom: "image", left: "color", color: "orange" },
  { top: "color", right: "image", bottom: "color", left: "image", color: "green" },
  { top: "image", right: "color", bottom: "image", left: "color", color: "red" },
  { top: "color", right: "image", bottom: "color", left: "image", color: "purple" },
  { top: "image", right: "color", bottom: "image", left: "color", color: "blue" },
];

export default function TunnelGrid() {
  const rings = [];

  for (let i = 0; i < RADII.length - 1; i++) {
    const r1 = RADII[i];
    const r2 = RADII[i + 1];
    const pattern = ringPattern[i % ringPattern.length];
    const sides: Side[] = ["top", "right", "bottom", "left"];

    rings.push(
      <g key={i} className="tunnel-ring-svg" style={{ animationDelay: -i + "s" }}>
        {sides.map((side) => {
          const pts = trapezoidPoints(r1, r2, side);
          const fillType = pattern[side];
          const pointsAttr = toPointsAttr(pts);

          if (fillType === "color") {
            return (
              <polygon
                key={side}
                points={pointsAttr}
                fill={colorMap[pattern.color]}
                stroke="#111111"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            );
          }

          const box = bbox(pts);
          const clipId = "clip-" + i + "-" + side;

          return (
            <g key={side}>
              <defs>
                <clipPath id={clipId}>
                  <polygon points={pointsAttr} />
                </clipPath>
              </defs>
              <image
                href="/images/gallery/S1.webp"
                x={box.x}
                y={box.y}
                width={box.width}
                height={box.height}
                preserveAspectRatio="xMidYMid slice"
                clipPath={"url(#" + clipId + ")"}
              />
              <polygon
                points={pointsAttr}
                fill="none"
                stroke="#111111"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </g>
          );
        })}
      </g>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <svg viewBox="0 0 600 600" className="w-full h-full">
        {rings}
      </svg>
    </div>
  );
}
