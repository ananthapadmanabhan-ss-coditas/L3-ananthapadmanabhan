import styles from "./Input.module.scss";
import Label from "../Label/Label";
import type { InputProps } from "./Input.types";
import { useId } from "react";

const Input = ({ id,label, ...props }: InputProps) => {
  const genid=id ?? useId()
  return (
    <div className={styles.shiftgroup}>
      <input id={genid} className={styles.shiftinput} {...props} />
      <Label htmlFor={genid} className={styles.shiftlabel}>
        {label}
      </Label>
    </div>
  );
};

export default Input;
