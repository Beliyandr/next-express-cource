"use client";

import React, { useState } from "react";
import styles from "./lesson.module.css";

type LessonProps = {
  title: string;
  shortSummary?: string;
};

type LikeState = "unset" | "Liked" | "Dislake";

export const Lesson = ({ title, shortSummary }: LessonProps) => {
  const [likeState, setLikeState] = useState<LikeState>("unset");
  const setLike = () => {
    setLikeState("Liked");
  };
  return (
    <div>
      <details>
        <summary>
          <h2 className={styles.header}>
            {title}
            <button type="button" onClick={setLike}>
              {likeState === "unset" ? "Like" : likeState}
            </button>
          </h2>
        </summary>
        <p>{shortSummary}</p>
      </details>
    </div>
  );
};
