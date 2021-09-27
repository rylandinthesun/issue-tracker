import styles from '../styles/ShowBtn.module.css'

interface Props {
  showForm: boolean
  handleShowForm: () => void
}

const ShowFormBtn: React.FC<Props> = ({ showForm, handleShowForm }) => {
  return (
    <div className={styles.btnContainer}>
        <button className={showForm ? `${styles.close}` : `${styles.open}`} onClick={() => handleShowForm()}>
          {showForm ? 'Close' : 'Add Issue'}
        </button>
    </div>
  )
}

export default ShowFormBtn