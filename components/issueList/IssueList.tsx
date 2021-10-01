import Issue from "../issue/Issue"
import { Issues } from '../../model/model'
import {FC} from "react";

interface Props {
    issues: Issues[]
}

const IssueList: FC<Props> = ({ ...props }) => {
    const { issues } = props;

    return (
            <div>
                {issues.map((i) => (
                    <Issue key={i.id} id={i.id} title={i.text} description={i.description} date={i.date} time={i.time} status={i.status} complete={i.complete} />
                ))}
            </div>
    )
}
        
export default IssueList