import type { SideBarProps } from "./SideBar.types";
import styles from "./SideBar.module.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const SideBar = ({ id, options }: SideBarProps) => {
  const navigate = useNavigate();
  return (
      <div className={styles.sidebar}>
      {options.map((option, i) =>
        option === "View Appointments" ? (
          <Button
            key={i}
            onClick={() =>
              navigate(`/`)
            }
            className={styles.sideBarBtns}
          >
            {option}
          </Button>
        ) : (
          <Button
            key={i}
            onClick={() =>
              navigate(`${option.toLowerCase().replace(/\s/g, "")}`)
            }
            className={styles.sideBarBtns}
          >
            {option}
          </Button>
        ),
      )}
    </div>
  );
};
export default SideBar;
