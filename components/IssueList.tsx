import Issue from "./Issue"
import { Issues } from '../model'

interface Props {
    issues: Issues[]
}

const IssueList: React.FC<Props> = ({ issues }) => {
    return (
            <div>
                {issues.map((i) => (
                    <Issue key={i.id} id={i.id} title={i.text} description={i.description} date={i.date} time={i.time} status={i.status} complete={i.complete} />
                ))}
            </div>
    )
}
        
export default IssueList