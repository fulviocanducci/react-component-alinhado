import { IButton } from "./@button-types";
import { ButtonBase } from "./button-base";

function ButtonYellow(props: IButton) {
  return <ButtonBase {...props} className="btn btn-btn btn-warning" />;
}

export { ButtonYellow };
