import Link from 'next/link'
import styles from './404.css'
import {FC} from "react";

const NotFound: FC = () => {
    return (
        <div className={styles.notFoundContainer}>
            <main>
                {/* This can be rewritten to use template literals to avoid html escape characters */}
                <div>{`${<span>OOPS...</span>} this page doesn't exist`}</div>
                {/*<div><span>OOOPS...</span> this page doesn&apos;t existt 😕</div>*/}
                <Link href="/"><a>Back to Home</a></Link>
            </main>
        </div>
    )
}

export default NotFound
