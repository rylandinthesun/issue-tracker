import styles from '../styles/ShowBtn.module.css'

type PropsFunction = () => void

const ShowFormBtn = ({ showForm, handleShowForm }: { showForm: boolean, handleShowForm: PropsFunction }) => {
  return (
    <div className={styles.btnContainer}>
        <button className={showForm ? `${styles.close}` : `${styles.open}`} onClick={() => handleShowForm()}>
          {showForm ? 'Close' : 'Add Issue'}
        </button>
    </div>
  )
}

export default ShowFormBtn