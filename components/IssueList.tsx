import Issue from "./Issue"
import { Issues } from '../model'

interface Props {
    issues: Issues[]
}

const IssueList: React.FC<Props> = ({ issues }) => {
    return (
            <div>
                {issues.map((i: any, index) => (
                    <Issue key={i.id} id={i.id} title={i.text} description={i.description} date={i.date} time={i.time} status={i.status} complete={i.complete} index={index} />
                ))}
            </div>
    )
}
        
export default IssueList