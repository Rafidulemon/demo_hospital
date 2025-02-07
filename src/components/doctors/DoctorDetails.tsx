import React, { type ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../buttons/Button";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  children?: ReactNode;
  crossOnClick?: () => void;
};

export const DetailsModal = (props: Props) => {
  const {
    open,
    setOpen,
    className,
    children,
    crossOnClick,
  } = props;

  if (!open) return null;

  return (
    <div className={`z-[100] modal modal-box ${open && "modal-open"}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[#1D212D]">
        <div
          className={`relative bg-primary_light rounded-xl shadow flex flex-col justify-start ${className}`}
        >
          <div className="flex flex-row w-full justify-end">
            <IoIosCloseCircle
              className="mx-6 my-3 text-[40px] md:text-[60px] text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="px-6 py-2">{children}</div>
        </div>
      </div>
    </div>
  );
};