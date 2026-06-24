import styles from "./Input.module.scss";
import Label from "../Label/Label";
import type { InputProps } from "./Input.types";

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className={styles.shiftgroup}>
      <input id={label} className={styles.shiftinput} {...props} />
      <Label htmlFor={label} className={styles.shiftlabel}>
        {label}
      </Label>
    </div>
  );
};

export default Input;
