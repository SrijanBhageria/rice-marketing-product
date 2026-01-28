"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C17F4E] text-white hover:bg-[#A66B3D] shadow-md hover:shadow-lg",
  secondary:
    "bg-[#E8B86D] text-[#2E2E2E] hover:bg-[#D4A55C] shadow-md hover:shadow-lg",
  outline:
    "bg-transparent border-2 border-[#C17F4E] text-[#C17F4E] hover:bg-[#C17F4E] hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, href, className = "", ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C17F4E] focus:ring-offset-2";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={combinedStyles}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={combinedStyles}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
