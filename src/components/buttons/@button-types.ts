import { ReactNode } from "react";

interface IButton {
  label?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: string | ReactNode | JSX.Element | undefined;
}

interface IButtonBase extends IButton {
  className?: string | undefined;
}

export type { IButtonBase, IButton };
