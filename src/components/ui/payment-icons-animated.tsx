"use client"
import { animate, motion } from "framer-motion"
import type React from "react"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import applePay from "@/assets/applepay-logo.png"
import googlePay from "@/assets/googlepay-logo.png"
import activ8pay from "@/assets/activ8pay-icon.png"
import xrp from "@/assets/xrp-logo.png"
import bitcoin from "@/assets/bitcoin-logo.png"
import { Visual247 } from "./visual-247"

const Skeleton = () => {
  const scale = [1, 1.1, 1]
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ]

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 1,
    })
  }, [])
  
  return (
    <div className="group/animated-card p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2 relative z-50">
        <Container className="h-8 w-8 circle-1">
          <img
            src={applePay}
            alt="Apple Pay"
            className="h-4 w-4 object-contain"
          />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <img
            src={googlePay}
            alt="Google Pay"
            className="h-6 w-6 object-contain"
          />
        </Container>
        <Container className="circle-3">
          <img
            src={activ8pay}
            alt="Activ8Pay"
            className="h-8 w-8 object-contain"
          />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <img
            src={xrp}
            alt="XRP"
            className="h-6 w-6 object-contain"
          />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <img
            src={bitcoin}
            alt="Bitcoin"
            className="h-4 w-4 object-contain"
          />
        </Container>
      </div>

      <div className="absolute inset-0 z-30">
        <Visual247 mainColor="#3b82f6" secondaryColor="#8b5cf6" />
      </div>
    </div>
  )
}

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  )
}

const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Skeleton as PaymentIconsAnimated }
