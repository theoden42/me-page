import ResourceCard from '../components/resourcecard';
import styles from '../components/resourcecard.module.css';

const blogs = [
  {
    title: 'Understanding Smart Pointers in C++',
    description: 'Deep dive into std::unique_ptr, std::shared_ptr, and best practices.',
    href: 'https://medium.com/@theoden42/smart-pointers',
  },
  {
    title: 'My Internship Experience at Google',
    description: 'What I learned about ML systems, production-scale infra, and more.',
    href: 'https://medium.com/@theoden42/google-internship',
  },
  {
    title: 'Tips to Become a Codeforces Master',
    description: 'Structured roadmap, practice strategy, and psychology insights.',
    href: 'https://medium.com/@theoden42/codeforces-master',
  },
];

export default function BlogsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Blogs</h1>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <ResourceCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
