import { cva } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";
import { cn } from "../../utiles/Cn";

type TColor = "primary" | "secoundary" | "danger" | "warning" | "success";
type TSize = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
type TOutlet = "primary" | "secoundary" | "danger" | "warning" | "success";

type TButton = ComponentPropsWithRef<"button"> & {
  color?: TColor;
  size?: TSize;
  outlet?: TOutlet;
};

export const Button = ({
  className,
  children,
  color,
  size,
  outlet,
  ...rest
}: TButton) => {
  return (
    <button
      {...rest}
      className={cn(buttonVariants({ size, color, outlet }), className)}>
      {children}
    </button>
  );
};

const buttonVariants = cva(
  "px-4 py-2 bg-sky-600 rounded-md font-semibold text-white",
  {
    variants: {
      color: {
        primary: "bg-sky-600 text-white text-base  rounded-md",
        secoundary: "bg-green-600 text-white text-base  rounded-md",
        danger: "bg-red-600 text-white text-base  rounded-md",
        warning: "bg-amber-500 text-white text-base  rounded-md",
        success: "bg-teal-600 text-white text-base  rounded-md",
      },
      size: {
        sm: "px-5 py-2",
        md: "px-7 py-4",
        lg: "px-9 py-6",
        xl: "px-11 py-8",
        xxl: "px-13 py-10",
        xxxl: "px-15 py-12",
      },
      outlet: {
        primary:
          "bg-transparent text-gray-800 text-base font-semibold transition-all duration-100  border border-2  border-sky-600 rounded-md hover:text-white hover:bg-sky-600 ",
        secoundary:
          "bg-transparent text-gray-800 text-base font-semibold transition-all duration-100 border border-2 border-green-600 rounded-md hover:text-white hover:bg-green-600",
        danger:
          "bg-transparent text-gray-800 text-base font-semibold transition-all duration-100 border border-2 border-red-600 rounded-md hover:text-white hover:bg-red-600",
        warning:
          "bg-transparent text-gray-800 text-base font-semibold transition-all duration-100 border border-2 border-amber-600 rounded-md hover:text-white hover:bg-amber-600",
        success:
          "bg-transparent text-gray-800 text-base font-semibold transition-all duration-100 border border-2 border-teal-600 rounded-md hover:text-white hover:bg-teal-600",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "sm",
      outlet: "primary",
    },
  }
);
