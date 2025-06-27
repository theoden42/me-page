import styles from './page.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>About Me</h1>
        <p className="mb-4">
          Hey there! I'm Divyansh — a software engineer and curious tech enthusiast
          based out of Bengaluru. I love building things, learning on the go, and finding
          better ways to solve interesting problems.
        </p>
      </section>

      <section className={styles.socialIcons}>
        <a href="https://github.com/theoden42" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com/theoden42" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/tdivyansh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:divyansht.contact@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
      </section>

      <section className={styles.section}>
        <h2>What I've been up to recently</h2>
        <div className={styles.timeline}>
          <div className={styles.entry}>
            <div className={styles.bullet} />
            <div className={styles.content}>
              <strong>Software Engineer at Google</strong>
              <p>
                Currently working on improving Google Ads recommendations — playing with
                optimization tricks, model tuning, and shipping things at scale.
              </p>
            </div>
          </div>

          <div className={styles.entry}>
            <div className={styles.bullet} />
            <div className={styles.content}>
              <strong>Backend Intern at Smallcase</strong>
              <p>
                Helped shape the backend architecture for a brand-new Credit product —
                focused on infrastructure improvements and service performance.
              </p>
            </div>
          </div>

          <div className={styles.entry}>
            <div className={styles.bullet} />
            <div className={styles.content}>
              <strong>Software Engineering Intern at Google</strong>
              <p>
                Worked on a search ads project — built a custom embedding-based ML model and
                deployed a matchmaking engine to serve ads more contextually.
              </p>
            </div>
          </div>

          <div className={styles.entry}>
            <div className={styles.bullet} />
            <div className={styles.content}>
              <strong>Undergrad @ IIIT Jabalpur</strong>
              <p>
                Where it all started — 4 years of computer science, code, caffeine,
                and figuring things out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
