import styles from './resourcecard.module.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ResourceCardProps {
  title: string;
  description: string;
  description2?: string;
  techStack?: string[];
  href: string;
  type?: 'github' | 'live';
}

export default function ResourceCard({ title, description, description2, techStack, href, type }: ResourceCardProps) {
  return (
    <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {description2 && <p className={styles.subtext}>{description2}</p>}
        {techStack && (
          <div className={styles.techStack}>
            {techStack.map((tech, idx) => (
              <span key={idx} className={`${styles.techItem} ${styles[tech.toLowerCase().replace(/\s/g, '')]}`}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <span className={styles.preview}>
          {type === 'github' ? <FiGithub /> : <FiExternalLink />}
          <span>{type === 'github' ? 'View on GitHub' : 'Live Preview'}</span>
        </span>
      </div>
    </a>
  );
}
