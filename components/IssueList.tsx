import Issue from "./Issue"
import styles from '../styles/Home.module.css'

const IssueList = ({ issues }: { issues: [] }) => {
    return (
        <div>
            {issues.map((i: any) => (
                <Issue key={i.id} id={i.id} title={i.text} description={i.description} date={i.date} time={i.time} status={i.status} complete={i.complete}  />
            ))}
            
        </div>
    )
}

export default IssueList
