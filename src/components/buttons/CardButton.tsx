"use client";
import * as React from "react";
import { type ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  theme?: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  width?: string;
  height?: string;
};

const CardButton = (props: Props) => {
  const {
    children,
    className,
    theme = "primary",
    onClick,
    type = "button",
    icon,
    width = "w-[60px] md:w-[130px]",
    height = "h-[60px] md:h-[130px]",
  } = props;

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const lastClickTimestamp = React.useRef<number>(0);

  const debouncedOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const now = Date.now();
      if (now - lastClickTimestamp.current > 200) {
        if (onClick) {
          onClick(e);
        }
      }
      lastClickTimestamp.current = now;
    },
    [onClick]
  );

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  return (
    <div
      className={`${className} ${width} ${height} cursor-pointer text-center group flex flex-col items-center justify-center bg-white shadow-2xl p-4 border border-gray-100 rounded-lg gap-2 ${
        isClicked ? "animate-pulse bg-primary" : ""
      } hover:bg-primary hover:text-white`}
      onClick={(e) => {
        setIsClicked(true);
      }}
      onFocus={() => {}}
    >
      <div className="text-primary group-hover:text-white">{icon}</div>
      {children}
    </div>
  );
};

export default CardButton;
