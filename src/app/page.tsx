import Image from "next/image";
import styles from "./page.module.css";
import db from "./db.json";
import { Lesson } from "./lesson";

async function getData(): Promise<typeof db> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(db);
    }, 1000);
  });
}

export default async function Home() {
  const dbs = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <ul>
          {dbs.map((post) => (
            <li key={post.name}>
              <Lesson title={post.name} shortSummary={post.header} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
