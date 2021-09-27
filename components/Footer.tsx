import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div>Copyright &#169; 2021</div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    )
}

export default Footer
