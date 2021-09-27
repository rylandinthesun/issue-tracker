import Link from 'next/link'

import styles from '../styles/AboutPage.module.css'

const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <main>
                <h1>Issue Tracker</h1>
                <div>Created by <a href="https://www.rylandoehlers.com" target="_blank" rel="noopener noreferrer">Ryland Oehlers</a></div>
                <Link href="/">
                    <a className={styles.backLink}>Back to Home</a>
                </Link>
            </main>
        </div>
    )
}

export default About
