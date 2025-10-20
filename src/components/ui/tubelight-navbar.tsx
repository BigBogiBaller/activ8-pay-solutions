"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => {
        const element = document.querySelector(item.url)
        return { name: item.name, element }
      })

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "flex items-center gap-2 md:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1.5 px-2 md:py-2 md:px-3 rounded-full shadow-lg",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name

        return (
          <a
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors",
              "text-[#0044CC]/70 hover:text-[#0044CC]",
              isActive && "bg-muted text-[#0044CC]",
            )}
          >
            {Icon && isMobile ? (
              <Icon size={18} strokeWidth={2.5} />
            ) : (
              <span>{item.name}</span>
            )}
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </a>
        )
      })}
    </div>
  )
}
