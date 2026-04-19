import Image from "next/image";
import styles from "./page.module.css";
import db from "./db.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <ul>
          {db.map((post) => (
            <li key={post.name}>
              <h2>{post.name}</h2>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
