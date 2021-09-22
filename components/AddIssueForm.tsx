import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import styles from '../styles/AddIssueForm.module.css'

const AddIssueForm = () => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('17:00')
    const [status, setStatus] = useState(false)
    
    const handleChecked = () => setStatus(!status)

    const handleSubmit =  async (e: any) => {
        e.preventDefault();
        const issue = { text, description, date, time, status, complete: false };
        await axios.post('https://fake-server-issue-tracker.herokuapp.com/tasks', issue).then(function (res: AxiosResponse) {
            console.log(res)
        }).catch(function (err) {
            console.log(err)
        })
        setText('');
        setDescription('')
        setDate('')
        setTime('17:00')
        setStatus(false)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.addForm}>
            <div className={styles.formControl}>
                <label htmlFor="text">Issue</label>
                <input type="text" name="text" id="text" placeholder="Add Issue" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Add Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className={`${styles.formControl} ${styles.dateTime}`}>
                <div>
                    <label htmlFor="day">Completion Date</label>
                    <input type="date" name="day" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time">Completion Time</label>
                    <input type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />   
                </div>
            </div>
            <div className={`${styles.checkboxControl} ${styles.checkBoxControlCheck}`}>
                <label htmlFor="reminder">Set as In Progress</label>
                <input type="checkbox" name="reminder" id="reminder" checked={status} onClick={handleChecked} />
            </div>
            <input type="submit" value="Save Issue" className={styles.btn} />
        </form>
    )
}

export default AddIssueForm
