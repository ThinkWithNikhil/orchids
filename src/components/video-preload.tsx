"use client";

import { useEffect } from "react";

export function VideoPreload() {
  useEffect(() => {
    // Preload critical hero video
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href = "/assets/launch.mp4";
    preloadLink.as = "video";
    preloadLink.type = "video/mp4";
    document.head.appendChild(preloadLink);

    // Prefetch hover videos for faster interaction
    const hoverVideos = [
      "/assets/hero-appdemo.mp4",
      "/assets/hero-gamedemo.mp4",
      "/assets/hero-tooldemo.mp4",
      "/assets/hero-website.mp4",
      "/assets/hero-uidemo.mp4",
    ];

    hoverVideos.forEach((video) => {
      const prefetchLink = document.createElement("link");
      prefetchLink.rel = "prefetch";
      prefetchLink.href = video;
      prefetchLink.as = "video";
      prefetchLink.type = "video/mp4";
      document.head.appendChild(prefetchLink);
    });
  }, []);

  return null;
}
