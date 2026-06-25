import styles from "./Message.module.scss";
import type { MessageProps } from "./Message.types";

const Message = ({ type, message }: MessageProps) => {
  if(!message) return null
  const classMessage = type === "Success" ? styles.SuccessMessage : styles.ErrorMessage;
  return <p className={classMessage}>{message}</p>;
};

export default Message;
