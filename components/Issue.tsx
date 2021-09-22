import { RiCloseCircleLine } from 'react-icons/ri'
import axios from 'axios'

import styles from '../styles/Issue.module.css'

const Issue = ({ title, id, description, date, time, status, complete }: { title: string, id: number, description: string, date: string, time: string, status: boolean, complete: boolean }) => {

    const deleteIssue = async (id: number) => {
        await axios.delete(`https://fake-server-issue-tracker.herokuapp.com/tasks/${id}`)
    }
    
    const updateStatus = async (id: number) => {
        await axios.patch(`https://fake-server-issue-tracker.herokuapp.com/tasks/${id}`, { status: !status }
        )
    }

    
    return (
        <div style={complete ? { borderLeft: '5px solid #346751' } : {}} className={status ? `${styles.inProgress} ${styles.task}` : `${styles.task}`}>
            <h3><span>{title}
               
                <button onClick={() => updateStatus(id)} className={complete ? `${styles.complete}` : `${styles.setStatus}` }>Set { status ? 'Open' : 'In Progress'}</button></span>
                
            <section>
                <span  className={complete ? `${styles.finished} ${styles.show}` : ''}>{complete ? 'Complete' : null}</span>
                    <div style={status ? { backgroundColor: '#ffd371', color: '#1c1c25' } : {}} className={complete ? `${styles.complete}` : ''}>{status ? 'In Progress' : 'Open'}</div>
                    <RiCloseCircleLine onClick={() => deleteIssue(id)} />
            </section>
            </h3>

            
            
            <p className={complete ? `${styles.complete}` : ''}>{description ? description : null}</p>
            
            <div className={complete ? `${styles.complete}` : `${styles.day}` }>
                <p>Complete by <span>{date}</span> at {time}</p>
                {status ? (
                    <button className={styles.done}>Done</button>
                ): null}
            </div>
        </div>
    )
}

export default Issue
