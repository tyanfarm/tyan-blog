import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Post} from '@site/src/data/posts';

import styles from './styles.module.css';

interface CategoryGroup {
  category: string;
  posts: Post[];
}

function groupByCategory(posts: Post[]): CategoryGroup[] {
  const byCategory = new Map<string, Post[]>();
  for (const post of posts) {
    const list = byCategory.get(post.category) ?? [];
    list.push(post);
    byCategory.set(post.category, list);
  }

  const groups: CategoryGroup[] = [...byCategory.entries()].map(([category, categoryPosts]) => ({
    category,
    posts: [...categoryPosts].sort((a, b) => (a.date < b.date ? 1 : -1)),
  }));

  // Category with the most recently published post leads.
  groups.sort((a, b) => (a.posts[0].date < b.posts[0].date ? 1 : -1));

  return groups;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ArticleFeed({posts}: {posts: Post[]}): ReactNode {
  const groups = groupByCategory(posts);

  return (
    <div className={styles.feed}>
      {groups.map((group) => (
        <section key={group.category} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.category}</h2>
          <ul className={styles.list}>
            {group.posts.map((post) => (
              <li key={post.href} className={styles.card}>
                <Link to={post.href} className={styles.cardLink}>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
