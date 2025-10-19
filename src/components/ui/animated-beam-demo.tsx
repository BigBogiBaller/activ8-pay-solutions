"use client";

import type React from "react";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam-single";
import googlePay from "@/assets/googlepay-logo.png";
import activ8pay from "@/assets/activ8pay-icon.png";
import bitcoin from "@/assets/bitcoin-logo.png";
import paypal from "@/assets/paypal-logo.png";
import mastercard from "@/assets/mastercard-logo.png";
import visa from "@/assets/visa-logo.png";
import applePay from "@/assets/applepay-logo.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <img src={bitcoin} alt="Bitcoin" className="w-full h-full object-contain" />
          </Circle>
          <Circle ref={div5Ref}>
            <img src={mastercard} alt="Mastercard" className="w-full h-full object-contain" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <img src={googlePay} alt="Google Pay" className="w-full h-full object-contain" />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <img src={activ8pay} alt="Activ8Pay" className="w-full h-full object-contain" />
          </Circle>
          <Circle ref={div6Ref}>
            <img src={visa} alt="Visa" className="w-full h-full object-contain" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <img src={paypal} alt="PayPal" className="w-full h-full object-contain" />
          </Circle>
          <Circle ref={div7Ref}>
            <img src={applePay} alt="Apple Pay" className="w-full h-full object-contain" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
