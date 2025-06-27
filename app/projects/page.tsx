import ResourceCard from '../components/resourcecard';
import styles from '../components/resourcecard.module.css';

const projects = [
  {
    title: 'Habit Hero',
    description: 'A gamified habit tracking app with leaderboards and streaks.',
    href: 'https://github.com/theoden42/habit-hero',
  },
  {
    title: 'Portfolio Site',
    description: 'The site you’re on right now — built with Next.js, Tailwind, and Vercel.',
    href: 'https://github.com/theoden42/portfolio',
  },
  {
    title: 'Algo Visualizer',
    description: 'An interactive algorithm visualizer for sorting and pathfinding.',
    href: 'https://github.com/theoden42/algo-visualizer',
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
