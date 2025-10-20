import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { PaymentIconsAnimated } from "@/components/ui/payment-icons-animated";
import { ProfileNotificationAnimation } from "@/components/ui/profile-notification-animation";
import { Visual247 } from "@/components/ui/visual-247";
import dashboardSidebar from "@/assets/dashboard-sidebar.png";
export default function FeaturesSectionDemo() {
  const features = [{
    title: "Streamlined Payment Processing",
    description: "Process transactions efficiently with our intuitive payment infrastructure that handles multiple payment methods seamlessly.",
    skeleton: <SkeletonOne className="bg-[#0a1128] rounded-lg" />,
    className: "col-span-1 lg:col-span-4 lg:row-span-2 border-b lg:border-r dark:border-neutral-800"
  }, {
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance standards protect every transaction with advanced fraud detection and prevention.",
    skeleton: <SkeletonTwo />,
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 lg:border-r"
  }, {
    title: "24/7 Support",
    description: "Round-the-clock support from our dedicated team to ensure your payment systems run smoothly without interruption.",
    skeleton: <SkeletonSupport />,
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 lg:border-r"
  }, {
    title: "Expert Consulting Services",
    description: "Our experienced team provides strategic guidance to optimize your payment infrastructure and maximize efficiency.",
    skeleton: <SkeletonThree />,
    className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800"
  }, {
    title: "Global Payment Coverage",
    description: "Accept payments worldwide with support for multiple currencies, alternative payment methods, and local payment providers across all major markets.",
    skeleton: <SkeletonFour />,
    className: "col-span-1 lg:col-span-3 border-b lg:border-none"
  }];
  return <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Why Choose Activ8Pay
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-white/70 text-center font-normal">
          From traditional payment methods to cutting-edge alternative payment solutions, we provide comprehensive services that empower your business to thrive in the digital economy.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map(feature => <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>)}
        </div>
      </div>
    </div>;
}
const FeatureCard = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>;
};
const FeatureTitle = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  return <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>;
};
const FeatureDescription = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  return <p className={cn("text-sm md:text-base  max-w-4xl text-left mx-auto", "text-white/70 text-center font-normal", "text-left max-w-sm mx-0 md:text-sm my-2")}>
      {children}
    </p>;
};
export const SkeletonOne = () => {
  return <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto shadow-2xl group h-full bg-[#0a1128]">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <img src={dashboardSidebar} alt="Activ8Pay dashboard interface" className="h-full w-full aspect-square object-cover object-left-top rounded-sm scale-90" />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>;
};
export const SkeletonThree = () => {
  return <div className="relative flex gap-10 h-full items-center justify-center p-8 -mt-8">
      <ProfileNotificationAnimation />
    </div>;
};
export const SkeletonTwo = () => {
  return <div className="relative flex flex-col items-center justify-center h-full overflow-hidden -mt-12">
      <PaymentIconsAnimated />
    </div>;
};
export const SkeletonSupport = () => {
  return <div className="group/animated-card relative flex flex-col items-center justify-center h-full overflow-hidden -mt-12">
      <Visual247 mainColor="#3b82f6" secondaryColor="#8b5cf6" autoStart />
    </div>;
};
export const SkeletonFour = () => {
  return <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>;
};
export const Globe = ({
  className
}: {
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
      // longitude latitude
      {
        location: [37.7595, -122.4367],
        size: 0.03
      }, {
        location: [40.7128, -74.006],
        size: 0.1
      }],
      onRender: state => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });
    return () => {
      globe.destroy();
    };
  }, []);
  return <canvas ref={canvasRef} style={{
    width: 600,
    height: 600,
    maxWidth: "100%",
    aspectRatio: 1
  }} className={className} />;
};