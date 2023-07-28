import { IButton } from "./@button-types";
import { ButtonBase } from "./button-base";

function ButtonSecondary(props: IButton) {
  return <ButtonBase {...props} className="btn btn-secondary" />;
}

export { ButtonSecondary };
