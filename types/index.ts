import { IconType } from "react-icons";

export type LinkItem = {
  label: string;
  href: string;
  icon: IconType;
  command?: () => void;
};
