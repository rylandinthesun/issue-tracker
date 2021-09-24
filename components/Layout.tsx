import styles from '../styles/Layout.module.css'

const Layout = ({ children }: any) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}

export default Layout
