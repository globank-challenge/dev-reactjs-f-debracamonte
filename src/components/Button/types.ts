import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
