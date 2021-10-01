import styles from './Header.module.css'
import {FC} from "react";

const Header: FC = () => {

  return (
    <div className={styles.header}>
        <h1>
          Issue Tracker
      </h1>
    </div>
  )
}

export default Header