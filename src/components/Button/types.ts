import { ReactElement } from "react";

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  iconOnTheLeft?: boolean;
  icon?: ReactElement<any, any>;
};
