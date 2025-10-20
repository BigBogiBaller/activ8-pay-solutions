import React, { useState, useEffect } from "react";
import { FinanceChart, background } from "@/components/ui/finance-chart"; 
import { cn } from "@/lib/utils";

export const FinanceChartDemo = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById('finance-chart-container');
      if (container) {
        setDimensions({
          width: container.offsetWidth,
          height: 400, // Fixed height for better display
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    // Initial update after a short delay to ensure container is rendered
    const timer = setTimeout(updateDimensions, 100);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  if (dimensions.width === 0 || dimensions.height === 0) {
    return (
      <div 
        id="finance-chart-container"
        className={cn("w-full h-[400px] flex justify-center items-center rounded-2xl")} 
        style={{ backgroundColor: background }}
      >
        <div className="text-white">Loading chart...</div>
      </div>
    );
  }

  return (
    <div 
      id="finance-chart-container"
      className={cn("w-full overflow-hidden flex justify-center items-center rounded-2xl shadow-lg")} 
      style={{ backgroundColor: background }}
    >
      <FinanceChart
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};
