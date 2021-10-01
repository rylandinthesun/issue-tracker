import { RiCloseCircleLine } from 'react-icons/ri'
import { FaRegCheckCircle } from 'react-icons/fa'
import axios, { AxiosResponse } from 'axios'
import moment from 'moment'

import styles from './Issue.module.css'
import {FC} from "react";
import apiRequestHandler from "../../api/apiRequestHandler";

interface Props {
    id: number
    title: string
    description: string
    date: string
    time: string
    status: boolean
    complete: boolean
}

const Issue: FC<Props> = ({ ...props }) => {
    const { id, title, description, date, time, status, complete } = props;

    /**
     * These calls should be made generic and moved to the apiRequestHandler.ts file
     * The api handler class is a factory class, where we can pass in data like the url
     * and / or body and have it make the call for us without having to call axios every time
     * from the component, which breaks the functional component methodology
     */
    const deleteIssueGeneric = (id: number, url: string): Promise<String | undefined> => {
        return apiRequestHandler.delete(url + id);
    }

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


    /**
     * Move inline styles to css,
     * Some unicode emojis will display differently in different systems, I would try and use the unicode string to represent them,
     */
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

                {/* This code is redundant insofar as you have a component that does something similar to this */}
                {/*     <div className={styles.btnContainer}>
                            <button className={showForm ? `${styles.close}` : `${styles.open}`} onClick={() => handleShowForm()}>
                                {showForm ? 'Close' : 'Add Issue'}
                            </button>
                        </div>
                 */}
                {/* a good technique to practice is taking a component that's used slightly differently in multiple places and
                    trying to make a generic version of it that can be used everywhere

                    In this case, I would make a button component and pass it a callback function for onCLick, then any props it needs to update
                 */}
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
