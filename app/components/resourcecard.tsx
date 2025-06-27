// components/ResourceCard.tsx
import styles from './resourcecard.module.css';

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ResourceCard({ title, description, href }: ResourceCardProps) {
  return (
    <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
