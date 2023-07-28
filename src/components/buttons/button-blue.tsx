import { IButton } from "./@button-types";
import { ButtonBase } from "./button-base";

function ButtonBlue(props: IButton) {
  return <ButtonBase {...props} className="btn btn-primary" />;
}

export { ButtonBlue };
