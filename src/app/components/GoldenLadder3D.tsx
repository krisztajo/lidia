"use client";

interface GoldenLadder3DProps {
  height: number;
  width: number;
  rungs: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotateY?: number;
  rotateX?: number;
  delay?: number;
  opacity?: number;
  zIndex?: number;
}

export default function GoldenLadder3D({
  height,
  width,
  rungs,
  top,
  left,
  right,
  bottom,
  rotateY = -10,
  rotateX = 5,
  delay = 0,
  opacity = 1,
  zIndex = 10,
}: GoldenLadder3DProps) {
  const rungPositions = Array.from({ length: rungs }, (_, i) => {
    const spacing = height / (rungs + 1);
    return spacing * (i + 1);
  });

  return (
    <div
      className="ladder-3d"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top,
        left,
        right,
        bottom,
        opacity,
        zIndex,
        perspective: "800px",
        animationDelay: `${delay}s`,
        ["--rotate-y" as string]: `${rotateY}deg`,
        ["--rotate-x" as string]: `${rotateX}deg`,
      }}
    >
      <div className="rail rail-left" />
      <div className="rail rail-right" />
      {rungPositions.map((pos, i) => (
        <div key={i} className="rung" style={{ top: `${pos}px` }} />
      ))}
      {/* 3D shimmer effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "2px",
          width: "4px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)",
          borderRadius: "4px",
          animation: `shimmer ${3 + delay}s ease-in-out infinite`,
        }}
      />
    </div>
  );
}
