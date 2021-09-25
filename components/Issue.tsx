import { RiCloseCircleLine } from 'react-icons/ri'
import { FaRegCheckCircle } from 'react-icons/fa'
import axios, { AxiosResponse } from 'axios'
import moment from 'moment'

import styles from '../styles/Issue.module.css'

const Issue: React.FC<{ title: string, id: number, description: string, date: string, time: string, status: boolean, complete: boolean, index: number }> = ({ title, id, description, date, time, status, complete, index }) => {

    const deleteIssue = (id: number) => {
        axios.delete(`https://fake-server-issue-tracker.herokuapp.com/tasks/${id}`).then((res: AxiosResponse) => {
            console.log({ message: "Issue deleted" })
        }).catch(err => {
            console.log(err)
        })
    }
    
    const updateStatus = async (id: number) => {
        await axios.patch(`https://fake-server-issue-tracker.herokuapp.com/tasks/${id}`, { status: !status }
        ).then((res: AxiosResponse) => {
            console.log({ message: 'Status update' })
        }).catch((err) => {
            console.log(err)
        })
    }

    const updateComplete = async (id: number) => {
        await axios.patch(`https://fake-server-issue-tracker.herokuapp.com/tasks/${id}`, { complete: true }
        ).then((res: AxiosResponse) => {
            console.log({ message: 'Issue complete' })
        }).catch((err) => {
            console.log(err)
        })
    }

    
    return (
            <div style={complete ? { borderLeft: '5px solid #346751' } : {}} className={status ? `${styles.inProgress} ${styles.task}` : `${styles.task}`} >
                <div className={styles.flexContainer}>
                    <h3>{title}
                        {status ? <span className={!complete ? `${styles.emoji}`: `${styles.emoji} ${styles.complete}`}>🚧</span> : <span className={styles.emoji}>📂</span>}
                        {complete && <span className={styles.emoji}>👍</span>}
                    </h3>
            
                    <section>
                        <span  className={complete ? `${styles.finished} ${styles.show}` : ''}>{complete ? 'Complete' : null}</span>
                        <div style={status ? { backgroundColor: '#ffd371', color: '#1c1c25' } : {}} className={complete ? `${styles.complete}` : ''}>{status ? 'In Progress' : 'Open'}</div>
                        <RiCloseCircleLine onClick={() => deleteIssue(id)} />
                    </section>
                </div>

                <button onClick={() => updateStatus(id)} className={complete ? `${styles.complete}` : `${styles.setStatus}` }>{ status ? 'Set Open' : 'Start Issue'}</button>
                        
                <p className={complete ? `${styles.complete}` : ''}>{description ? description : null}</p>
                        
                <div className={complete ? `${styles.complete}` : `${styles.day}` }>
                    <p>Complete by <span>{moment(date).format('dddd MMM Do, YYYY')}</span> at <span>{moment(time, 'HH:mm').format('h:mm A')}</span></p>
                    {status ? (
                    <button onClick={() => updateComplete(id)} className={styles.done}>Done<FaRegCheckCircle /></button>
                    ): null}
                </div>
            </div>
    )
}
                        

export default Issue
