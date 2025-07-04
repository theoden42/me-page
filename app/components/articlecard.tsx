import styles from './articlecard.module.css';
import { SiMedium, SiNotion } from 'react-icons/si';

interface ArticleCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  platform: 'medium' | 'notion';
  image?: string; // optional preview image
}

export default function ArticleCard({ title, description, tags, href, platform, image }: ArticleCardProps) {
  return (
    <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      {image && <img src={image} alt={title} className={styles.previewImage} />}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.preview}>
          {platform === 'medium' ? <SiMedium /> : <SiNotion />}
          <span>{platform === 'medium' ? 'Read on Medium' : 'Read on Notion'}</span>
        </span>
      </div>
    </a>
  );
}
