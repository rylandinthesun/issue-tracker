import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

import styles from '../styles/AddIssueForm.module.css'

const AddIssueForm = ({ setShowForm }: { setShowForm: any }) => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('17:00')
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
    
    const handleChecked = () => setStatus(!status)

    const handleError = () => setError(false)

    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        if (text.length === 0) return setError(true)
        if (date.length === 0) return setError(true)
        const issue = { text, description, date, time, status, complete: false };
        await axios.post('https://fake-server-issue-tracker.herokuapp.com/tasks', issue).then((res: AxiosResponse) => {
            console.log({ message: 'success' })
        }).catch(function (err) {
            console.log(err)
        })
        setText('');
        setDescription('')
        setDate('')
        setTime('17:00')
        setStatus(false)
        setShowForm(false)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.addForm}>
            {error && <p className={styles.error}>Must fill out required fields <RiCloseCircleLine onClick={() => handleError()} /></p>}
            <div className={styles.formControl}>
                <label htmlFor="text">Issue <span className={styles.asterisk}>&#42;</span></label>
                <input type="text" name="text" id="text" placeholder="Add Issue" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Add Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className={`${styles.formControl} ${styles.dateTime}`}>
                <div>
                    <label htmlFor="day">Completion Date <span className={styles.asterisk}>&#42;</span></label>
                    <input type="date" name="day" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time">Completion Time <span className={styles.asterisk}>&#42;</span></label>
                    <input type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />   
                </div>
            </div>
            <div className={`${styles.checkboxControl} ${styles.checkBoxControlCheck}`}>
                <label htmlFor="reminder">Set as In Progress</label>
                <input type="checkbox" name="reminder" id="reminder" checked={status} onChange={handleChecked} />
            </div>
            <p className={styles.required}>Required <span className={styles.asterisk}>&#42;</span></p>
            <input type="submit" value="Save Issue" className={styles.btn} />
        </form>
    )
}

export default AddIssueForm
