import { SetStateAction } from "react";

export type Event = {
  key?: string;
  target: { value: SetStateAction<string> };
};
export type SearchBarProps = {
  placeholder: string;
  onSearch: (id: string) => void;
};
