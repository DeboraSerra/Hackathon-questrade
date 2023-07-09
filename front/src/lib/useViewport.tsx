"use client";
import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useViewport(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1200,
    height: 1200,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
}
