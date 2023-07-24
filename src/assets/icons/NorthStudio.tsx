import React from "react";
import styles from "./NorthStudio.module.scss";

interface NorthStudioIconProps {
  fill?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => any;
}

export default function NorthStudioIcon({fill, width, height, className, onClick}: NorthStudioIconProps) {
  return (
    <svg
      className={`${styles.logo} ${className}`}
      fill={fill || "#232323"} data-name="Layer 1"
      width={width || 128}
      height={height || 128}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 647.03 640.4"
      onClick={onClick}
    >
      <g>
        <path d="M319.87,0c38.27,2.26,66.72,20.47,84.99,55.29,45.6,86.89,91.51,173.61,137.31,260.4,30.45,57.71,61.04,115.35,91.32,173.15,22.65,43.22,16.54,88-15.74,118.86-32.28,30.86-77.17,34.45-119.67,11.01-115.08-63.45-229.77-61.25-343.01,4.61-61.84,35.97-130.33,13.36-150.79-51.23-7.64-24.11-4.79-47.55,6.31-70.03C84.2,352.95,157.77,203.8,231.59,54.79,249.37,18.9,279.16,1.32,319.87,0Z"/>
      </g>
    </svg>
  );
}
