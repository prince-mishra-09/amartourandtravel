
"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./TravelIntro.module.css";

const scenes = [
  {
    title: "CHITRAKOOT",
    subtitle: "A journey begins here.",
    label: "01 / DISCOVER",
  },
  {
    title: "INSIDE TRAVEL",
    subtitle: "Every road has a story.",
    label: "02 / EXPLORE",
  },
  {
    title: "OCCASIONAL TRAVEL",
    subtitle: "Make every getaway count.",
    label: "03 / JOURNEY",
  },
  {
    title: "AMAR TOUR AND TRAVELS",
    subtitle: "Your Journey, Our Responsibility.",
    label: "04 / YOUR JOURNEY STARTS HERE",
  },
];

const sceneClasses = [
  styles.scene1,
  styles.scene2,
  styles.scene3,
  styles.scene4,
];

export default function TravelIntro({
  children,
}: {
  children: ReactNode;
}) {
  const [scene, setScene] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scene < scenes.length - 1) {
      const timer = window.setTimeout(() => {
        setScene((current) => current + 1);
      }, 950);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setExiting(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [scene]);

  useEffect(() => {
    if (!exiting) return;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [exiting]);

  return (
    <>
      {children}

      {visible && (
        <div
          className={`${styles.loader} ${
            exiting ? styles.exiting : ""
          }`}
          role="status"
          aria-label={`Loading introduction: ${scenes[scene].title}`}
        >
          <div
            className={`${styles.scene} ${sceneClasses[scene]}`}
            key={scene}
          >
            <div className={styles.mapTexture} aria-hidden="true" />

            <div className={styles.topBar}>
              <span>AMAR TOUR & TRAVELS</span>
              <span>{scenes[scene].label}</span>
            </div>

            <svg
              className={styles.routeMap}
              viewBox="0 0 360 220"
              fill="none"
              aria-hidden="true"
            >
              <path
                className={styles.routeBase}
                d="M18 174 C65 174 54 100 108 116 S151 185 210 120 S277 45 340 54"
              />
              <path
                className={styles.routeLine}
                pathLength="1"
                d="M18 174 C65 174 54 100 108 116 S151 185 210 120 S277 45 340 54"
              />

              <circle
                className={styles.originPin}
                cx="18"
                cy="174"
                r="5"
              />
              <circle
                className={styles.destinationPin}
                cx="340"
                cy="54"
                r="6"
              />
              <circle
                className={styles.destinationPulse}
                cx="340"
                cy="54"
                r="12"
              />
            </svg>

            <div className={styles.content}>
              <span className={styles.eyebrow}>
                EXPLORE · DISCOVER · TRAVEL
              </span>

              <h1 className={styles.title}>
                {scenes[scene].title}
              </h1>

              <p className={styles.subtitle}>
                {scenes[scene].subtitle}
              </p>
            </div>

            <div className={styles.bottomBar}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${((scene + 1) / scenes.length) * 100}%`,
                  }}
                />
              </div>

              <span>
                0{scene + 1} <span className={styles.muted}>/ 04</span>
              </span>
            </div>

            <button
              className={styles.skipButton}
              onClick={() => setExiting(true)}
              type="button"
              suppressHydrationWarning
            >
              Skip intro ↗
            </button>
          </div>
        </div>
      )}
    </>
  );
}
