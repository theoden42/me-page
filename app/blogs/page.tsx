import ResourceCard from '../components/resourcecard';
import styles from '../components/resourcecard.module.css';

const blogs = [
  {
    title: 'Cool C++ Features You May Not Know About',
    description: 'A brief overview of some lesser-known but powerful C++ features.',
    href: 'https://medium.com/@tdivyansh058/cool-c-features-you-may-not-know-about-11b1f8b07915',
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
