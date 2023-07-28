import { IButtonBase } from "./@button-types";

function ButtonBase(props: IButtonBase) {
  return (
    <>
      <button type={props.type ?? "button"} className={props.className}>
        {props.icon && typeof props.icon === "string" ? <i className={props.icon}></i> : props.icon} {props.label}
      </button>
    </>
  );
}

export { ButtonBase };
