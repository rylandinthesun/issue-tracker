import styles from './ShowBtn.module.css'
import {FC} from "react";

interface Props {
  showForm: boolean
  handleShowForm: () => void
}

// props are passed in as `...props` | this notation is called destructuring
const ShowFormBtn: FC<Props> = ({ ...props }) => {

    // We can use destructuring here to get the individual props
    const { showForm, handleShowForm } = props;

    return (
    <div className={styles.btnContainer}>
        <button className={showForm ? `${styles.close}` : `${styles.open}`} onClick={() => handleShowForm()}>
            {showForm ? 'Close' : 'Add Issue'}
        </button>
    </div>
    )
}

export default ShowFormBtn