import Link from 'next/link'

import styles from './Footer.module.css'
import {FC} from "react";

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            {/* this is a good example of a use case for an html code. Try to use it for symbols and not punctuation */}
            <div>Copyright &#169; 2021</div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    )
}

export default Footer
