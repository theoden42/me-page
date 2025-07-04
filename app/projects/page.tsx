import ResourceCard from '../components/resourcecard';
import styles from '../components/resourcecard.module.css';

const projects = [
  {
    title: 'Virtual Contest Maker',
    description: 'Create virtual contests from problems of Codeforces, Atcoder, Codechef together.',
    description2: 'Users can search, select problems, and generate private contests instantly.',
    techStack: ['React', 'Express', 'MongoDB', 'Docker', 'AWS'],
    href: 'http://ec2-18-232-66-77.compute-1.amazonaws.com',
    type: 'live' as const,
  },
  {
    title: 'Portfolio Site',
    description: 'The site you’re on right now — built with Next.js.',
    description2: 'Showcases personal projects and blogs using static export.',
    techStack: ['Next.js', 'Typescript', 'GitHub Pages'],
    href: 'https://github.com/theoden42/me-page',
    type: 'github' as const,
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
