import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Post} from '@site/src/data/posts';

import styles from './styles.module.css';

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ArticleFeed({posts}: {posts: Post[]}): ReactNode {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <ul className={styles.feed}>
      {sorted.map((post) => (
        <li key={post.href} className={styles.card}>
          <Link to={post.href} className={styles.cardLink}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.dot}>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
