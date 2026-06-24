import styles from './FileInput.module.scss'
import Label from "../Label/Label";
import type { FileInputProps } from "./FileInput.types";

const FileInput=({label,...props}:FileInputProps)=>{
  return(
    <div className={styles.fileDiv}>
      <Label htmlFor={label}>{label}</Label>
      <input id={label} type="file" {...props}/>
    </div>
  );
}

export default FileInput