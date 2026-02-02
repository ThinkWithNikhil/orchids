"use client";

import { useEffect } from "react";

export function VideoPreload() {
  useEffect(() => {
    // Preload critical hero video
    const heroVideo = "/assets/launch.mp4";
    const existingHero = document.querySelector(
      `link[rel="preload"][href="${heroVideo}"]`
    );
    if (!existingHero) {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.href = heroVideo;
      preloadLink.as = "video";
      preloadLink.type = "video/mp4";
      // Hint to the browser this is high priority (supported in some browsers)
      preloadLink.setAttribute("fetchpriority", "high");
      document.head.appendChild(preloadLink);
    }

    // Preload hover videos for instant first interaction (higher priority than prefetch)
    const hoverVideos = [
      "/assets/hero-appdemo.mp4",
      "/assets/hero-gamedemo.mp4",
      "/assets/hero-tooldemo.mp4",
      "/assets/hero-website.mp4",
      "/assets/hero-uidemo.mp4",
    ];

    hoverVideos.forEach((video) => {
      const existing = document.querySelector(`link[rel="preload"][href="${video}"]`);
      if (existing) return;

      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.href = video;
      preloadLink.as = "video";
      preloadLink.type = "video/mp4";
      preloadLink.setAttribute("fetchpriority", "high");
      document.head.appendChild(preloadLink);
    });
  }, []);

  return null;
}
