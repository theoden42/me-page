import ResourceCard from '../components/resourcecard';
import styles from '../components/resourcecard.module.css';

const projects = [
  {
    title: 'Virtual Contest Maker',
    description: 'Create virtual contests from problems of Codeforces, Atcoder, Codechef together.',
    href: 'http://ec2-18-232-66-77.compute-1.amazonaws.com',
  },
  {
    title: 'Portfolio Site',
    description: 'The site you’re on right now — built with Next.js.',
    href: 'https://github.com/theoden42/me-page',
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ResourceCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
