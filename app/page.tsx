import styles from './page.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>
          Hi, I'm Divyansh.
        </h1>
        <p className="mb-4">
          {`I'm a software engineer and a tech enthusiast based in Bengaluru, India.
           I love exploring new stuff to build and learn.`}
        </p>
      </section>


      <section className={styles.socialIcons}>
        <a
          href="https://github.com/theoden42"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/theoden42" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/tdivyansh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:divyansht.contact@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </section>

      <section className={styles.section}>
        <h2>You might know me from when I was - </h2>
        <ul>
          <li>
            <strong>Software Engineer At Google</strong>
            <p>Working to improve Google Ads recommendation
              using cool algoriths and optimizations.</p>
          </li>
          <li>
            <strong>
              Backend Intern at Smallcase
            </strong>
            <p>
              Worked on building and improving backend
              infrastructures for the Credit Product at Smallcase.
            </p>
          </li>
          <li>
            <strong>
              Software Engineering Intern at Google
            </strong>
            <p>
              Implemented an embeddings based machine
              learning models with a maching algorithm for localation
              based search ads.
            </p>
          </li>
          <li>
            <strong>
              Undergraduate in Computer Science at IIIT Jablapur
            </strong>
            <p>
              Spent 4 years learning about computers and life.
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}
