import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Divyansh Tripathi</p>
        <p>Built with Next.js</p>
    </footer>
    )
}
