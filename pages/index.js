import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

import { Layout } from "../components/Layout"

export const databaseId = process.env.NOTION_DATABASE_ID;



const HomePage = ({posts}) => {
return (
	<div>
      <h1>Grid North</h1>
      <h2>Setting out on a new bearing and building a new future.</h2>
      <p>A journey from mid career profeesional to financial independence and beyond.</p>
      <a href="/about">
        <button>More about me</button>
      </a>
     

      
        <h3 className={styles.heading}>All Posts</h3>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-GB",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>Published:{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
    </div>
)
}

export default HomePage


export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
