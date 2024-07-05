import { ComponentPropsWithRef } from "react";

type TColor = "primary" | "secoundary" | "danger" | "warning" | "success";
type TSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type TRounded =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "full";

type TButton = ComponentPropsWithRef<"button"> & {
  color?: TColor;
  size?: TSize;
  rounded?: TRounded;
};

export const Button = ({
  children,
  color,
  size,
  rounded,
  style,
  ...rest
}: TButton) => {
  return (
    <button
      style={{
        ...style,
        ...checkColor(color),
        ...checkSize(size),
        ...checkRounded(rounded),
      }}
      {...rest}
      className="px-4 py-2 bg-sky-600">
      {children}
    </button>
  );
};

function checkColor(color?: TColor) {
  if (color === "primary") {
    return { backgroundColor: "#0284c7", color: "white" };
  } else if (color === "secoundary") {
    return { backgroundColor: "#16a34a", color: "white" };
  } else if (color === "danger") {
    return { backgroundColor: "#dc2626", color: "white" };
  } else if (color === "warning") {
    return { backgroundColor: "#facc15", color: "white" };
  } else if (color === "success") {
    return { backgroundColor: "#0d9488", color: "white" };
  }
}

function checkSize(size?: TSize) {
  if (size === "sm") {
    return { padding: "8px 4px", fontSize: "14px" };
  } else if (size === "md") {
    return { padding: "12px 8px", fontSize: "16px" };
  } else if (size === "lg") {
    return { padding: "16px 12px", fontSize: "18px" };
  } else if (size === "xl") {
    return { padding: "20px 16px", fontSize: "20px" };
  } else if (size === "2xl") {
    return { padding: "24px 20px", fontSize: "22px" };
  } else if (size === "3xl") {
    return { padding: "28px 24px", fontSize: "24px" };
  }
}

function checkRounded(rounded?: TRounded) {
  if (rounded === "sm") {
    return { borderRadius: "2px" };
  } else if (rounded === "md") {
    return { borderRadius: "4px" };
  } else if (rounded === "lg") {
    return { borderRadius: "6px" };
  } else if (rounded === "xl") {
    return { borderRadius: "8px" };
  } else if (rounded === "2xl") {
    return { borderRadius: "10px" };
  } else if (rounded === "3xl") {
    return { borderRadius: "12px" };
  } else if (rounded === "4xl") {
    return { borderRadius: "14px" };
  } else if (rounded === "5xl") {
    return { borderRadius: "16px" };
  } else if (rounded === "6xl") {
    return { borderRadius: "24px" };
  } else if (rounded === "full") {
    return { borderRadius: "100%" };
  }
}
