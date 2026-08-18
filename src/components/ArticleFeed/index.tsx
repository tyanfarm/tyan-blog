import {useState} from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Post} from '@site/src/data/posts';

import styles from './styles.module.css';

const PREVIEW_COUNT = 3;
const PEEK_COUNT = 2;

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

function PostCard({post}: {post: Post}): ReactNode {
  return (
    <li className={styles.card}>
      <Link to={post.href} className={styles.cardLink}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <time className={styles.date} dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </Link>
    </li>
  );
}

export default function ArticleFeed({posts}: {posts: Post[]}): ReactNode {
  const groups = groupByCategory(posts);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggle(category: string) {
    setExpanded((prev) => ({...prev, [category]: !prev[category]}));
  }

  return (
    <div className={styles.feed}>
      {groups.map((group) => {
        const isExpanded = expanded[group.category] ?? false;
        const hasMore = group.posts.length > PREVIEW_COUNT;
        const shownPosts = isExpanded ? group.posts : group.posts.slice(0, PREVIEW_COUNT);
        const peekPosts = group.posts.slice(PREVIEW_COUNT, PREVIEW_COUNT + PEEK_COUNT);

        return (
          <section key={group.category} className={styles.group}>
            <h2 className={styles.groupTitle}>{group.category}</h2>
            <ul className={styles.list}>
              {shownPosts.map((post) => (
                <PostCard key={post.href} post={post} />
              ))}
            </ul>
            {hasMore && (
              <div className={styles.moreWrap}>
                {!isExpanded && (
                  <div className={styles.peek} aria-hidden="true">
                    <ul className={styles.list}>
                      {peekPosts.map((post) => (
                        <PostCard key={post.href} post={post} />
                      ))}
                    </ul>
                    <div className={styles.peekFade} />
                  </div>
                )}
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={() => toggle(group.category)}>
                  {isExpanded ? 'Show less' : `Show more (${group.posts.length - PREVIEW_COUNT})`}
                </button>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
