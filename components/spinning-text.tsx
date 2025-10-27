"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CSSProperties } from "react";

type SpinningTextProps = {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
  alwaysVisible?: boolean; 
};

export function SpinningText({
  children,
  className,
  radius = 5,
  duration = 10,
  alwaysVisible = false,
}: SpinningTextProps) {
  const letters = children.split("");
  const totalLetters = letters.length;

  return (
    <div className="group relative flex h-32 w-32 items-center justify-center">
      <div
        className={cn(
          "absolute blur-md transition-opacity duration-300",
          alwaysVisible ? "opacity-70" : "opacity-0 group-hover:opacity-70"
        )}
        style={{
          width: "200px",
          height: "200px",
          background: `conic-gradient(from 135deg at center, 
            rgba(13, 255, 80, 0.4) 0deg, 
            rgba(9, 107, 222, 0.4) 80deg, 
            rgba(142, 71, 254, 0.4) 100deg, 
            rgba(124, 63, 254, 0.4) 250deg, 
            rgba(9, 107, 222, 0.4) 270deg, 
            rgba(13, 255, 80, 0.4) 360deg
          )`,
          borderRadius: "50%",
          mask: `radial-gradient(circle, 
            transparent 40px, 
            rgba(0,0,0,0.1) 50px, 
            rgba(0,0,0,0.6) 60px, 
            rgba(0,0,0,0.4) 70px,
            rgba(0,0,0,0.25) 80px,
            rgba(0,0,0,0.1) 90px,
            rgba(0,0,0,0.05) 95px,
            transparent 100px
          )`,
          WebkitMask: `radial-gradient(circle, 
            transparent 40px, 
            rgba(0,0,0,0.1) 50px, 
            rgba(0,0,0,0.6) 60px, 
            rgba(0,0,0,0.4) 70px,
            rgba(0,0,0,0.25) 80px,
            rgba(0,0,0,0.1) 90px,
            rgba(0,0,0,0.05) 95px,
            transparent 100px
          )`,
          left: "calc(50% + 80px)",
          top: alwaysVisible ? "calc(50% - 0px)" : "calc(50% - 8px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={cn(
          "absolute transition-opacity duration-300",
          alwaysVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
        style={{
          width: "110px",
          height: "110px",
          background: `linear-gradient(white, white) padding-box, conic-gradient(from 135deg at center, #0DFF50 0deg, #096BDE 80deg, #8E47FE 100deg, #7C3FFE 250deg, #096BDE 270deg, #0DFF50) border-box`,
          borderRadius: "50%",
          border: "2px solid rgba(0,0,0,0)",
          lineHeight: 1,
          padding: "10px",
          position: "absolute",
          transformStyle: "preserve-3d",
          left: "calc(50% + 80px)",
          top: alwaysVisible ? "calc(50% - 0px)" : "calc(50% - 8px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="relative z-10"
        style={{
          transform: "translateX(80px)",
        }}
      >
        <motion.div
          className={cn("relative z-10 select-none", className)}
          initial="hidden"
          animate="visible"
          variants={{ visible: { rotate: 360 } }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
        >
          {letters.map((letter, index) => (
            <motion.span
              aria-hidden="true"
              key={`${index}-${letter}`}
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1 },
              }}
              className="absolute top-1/2 left-1/2 inline-block"
              style={
                {
                  "--index": index,
                  "--total": totalLetters,
                  "--radius": radius,
                  fontSize: "0.75rem",
                  transform: `
            translate(-50%, -50%)
            rotate(calc(360deg / var(--total) * var(--index)))
            translateY(calc(var(--radius, 5) * -1.1ch))
            `,
                  transformOrigin: "center",
                } as CSSProperties
              }
            >
              {letter}
            </motion.span>
          ))}
          <span className="sr-only">{children}</span>
        </motion.div>
      </div>
    </div>
  );
}