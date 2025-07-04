import ArticleCard from '../components/articlecard';
import styles from '../components/resourcecard.module.css'; // reuse existing layout styles

const blogs = [
  {
    title: 'Cool C++ Features You May Not Know About',
    description:
      'A brief overview of C++ features that I discovered and found cool while implementing my internship project.',
    tags: ['C++', 'Tech', 'low-level'],
    href: 'https://medium.com/@tdivyansh058/cool-c-features-you-may-not-know-about-11b1f8b07915',
    platform: 'medium' as const, 
    lastUpdated: '2024-11-12',
  },
    {
    title: '2025 Reading list',
    description:
      'The books that I read or plan to read in 2025, along with brief amateur review of those that I do read',
    tags: ['Books', 'Non-Tech', 'Recs'],
    href: 'https://t.co/6323EMmlFw',
    platform: 'notion' as const, 
    lastUpdated: '2024-11-12',
  },
];

export default function BlogsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Blogs</h1>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <ArticleCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
