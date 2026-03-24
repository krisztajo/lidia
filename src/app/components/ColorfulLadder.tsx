"use client";

interface ColorfulLadderProps {
  height: number;
  width: number;
  rungs: number;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotation?: number;
  opacity?: number;
  delay?: number;
}

export default function ColorfulLadder({
  height,
  width,
  rungs,
  color,
  top,
  left,
  right,
  bottom,
  rotation = 0,
  opacity = 0.5,
  delay = 0,
}: ColorfulLadderProps) {
  const rungPositions = Array.from({ length: rungs }, (_, i) => {
    const spacing = height / (rungs + 1);
    return spacing * (i + 1);
  });

  return (
    <div
      className="ladder-color"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top,
        left,
        right,
        bottom,
        opacity,
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="rail-c rail-c-left" style={{ background: color }} />
      <div className="rail-c rail-c-right" style={{ background: color }} />
      {rungPositions.map((pos, i) => (
        <div
          key={i}
          className="rung-c"
          style={{ top: `${pos}px`, background: color }}
        />
      ))}
    </div>
  );
}
