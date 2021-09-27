import Link from 'next/link'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <main>
                <div><span>OOOPS...</span> this page doesn&apos;t exist 😕</div>
                <Link href="/"><a>Back to Home</a></Link>
            </main>
        </div>
    )
}

export default NotFound
