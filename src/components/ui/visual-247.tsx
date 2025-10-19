"use client";
import { useState, useEffect, useRef } from "react";
import { Clock } from "lucide-react";

interface Visual247Props {
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
  autoStart?: boolean;
}

export function Visual247({
  mainColor = "#3b82f6",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808015",
  autoStart = false,
}: Visual247Props) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoStart && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              setHovered(true);
            }
          });
        },
        { threshold: 0.3 }
      );

      const currentRef = containerRef.current;
      observer.observe(currentRef);

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [autoStart]);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 z-20"
        onMouseEnter={() => !autoStart && setHovered(true)}
        onMouseLeave={() => !autoStart && setHovered(false)}
        style={
          {
            "--color": mainColor,
            "--secondary-color": secondaryColor,
          } as React.CSSProperties
        }
      />
      <div className="relative h-[180px] w-full overflow-hidden">
        <ClockLayer hovered={hovered} color={mainColor} />
        <BackgroundGradient color={mainColor} />
        <GridLayer color={gridColor} />
        <FloatingBadges hovered={hovered} color={mainColor} secondaryColor={secondaryColor} />
      </div>
    </>
  );
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    />
  );
};

const BackgroundGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg
        width="100%"
        height="180"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="356" height="180" fill="url(#paint0_radial_247)" />
        <defs>
          <radialGradient
            id="paint0_radial_247"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
          >
            <stop stopColor={color} stopOpacity="0.25" />
            <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

interface ClockLayerProps {
  hovered: boolean;
  color: string;
}

const ClockLayer: React.FC<ClockLayerProps> = ({ hovered, color }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 6) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div 
      className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[360px] w-full transform items-center justify-center transition-transform duration-500"
      style={{
        transform: hovered ? 'translateY(-90px) scale(1.1)' : 'translateY(0) scale(1)',
      }}
    >
      <div className="relative flex h-[120px] w-[120px] items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-24 w-24 rounded-full border-4 border-current opacity-20" style={{ color }} />
          <div className="absolute h-20 w-20 rounded-full border-2 border-current opacity-30" style={{ color }} />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute h-12 w-1 rounded-full origin-bottom"
            style={{
              background: color,
              transform: `translateY(-24px) rotate(${rotation}deg)`,
              transition: "transform 0.05s linear",
            }}
          />
          <div
            className="absolute h-8 w-0.5 rounded-full origin-bottom"
            style={{
              background: color,
              opacity: 0.7,
              transform: `translateY(-16px) rotate(${rotation * 12}deg)`,
              transition: "transform 0.05s linear",
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Clock className="h-8 w-8 text-black dark:text-white" strokeWidth={2} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full" style={{ background: color }} />
        </div>
      </div>
    </div>
  );
};

interface FloatingBadgesProps {
  hovered: boolean;
  color: string;
  secondaryColor: string;
}

const FloatingBadges: React.FC<FloatingBadgesProps> = ({ hovered, color, secondaryColor }) => {
  const badges = [
    { id: 1, text: "24/7", x: 0, y: -60, color: color },
    { id: 2, text: "Support", x: 80, y: 40, color: secondaryColor },
    { id: 3, text: "Always", x: -80, y: 40, color: color },
  ];

  return (
    <div 
      className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-opacity duration-500"
      style={{
        opacity: hovered ? 1 : 0,
      }}
    >
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 backdrop-blur-sm transition-all duration-500 dark:border-zinc-800 dark:bg-black/70"
          style={{
            transform: hovered
              ? `translate(${badge.x}px, ${badge.y}px)`
              : "translate(0px, 0px)",
          }}
        >
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: badge.color }}
          />
          <span className="text-sm font-semibold text-black dark:text-white">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};
