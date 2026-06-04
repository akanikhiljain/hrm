"use client";

import { useEffect, useState } from "react";

type TypeWriterProps = {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
};

export function TypeWriter({
  words,
  speed = 75,
  deleteSpeed = 35,
  pauseDuration = 2000,
  className = "",
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text === currentWord) {
        const t = setTimeout(() => setPhase("paused"), pauseDuration);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        speed,
      );
      return () => clearTimeout(t);
    }

    if (phase === "paused") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text === "") {
        setPhase("typing");
        setWordIndex((i) => i + 1);
        return;
      }
      const t = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(t);
    }
  }, [text, wordIndex, phase, words, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={`typewriter-wrap ${className}`}>
      <span>{text}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
