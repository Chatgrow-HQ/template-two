"use client";

import { useEffect } from "react";

const staggerSelector = [
  ".imm-service",
  ".imm-value-list article",
  ".imm-price-grid article",
  ".imm-contact__list a",
  ".imm-hero__note span",
].join(",");

export default function SectionAnimator() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll("main > section"));
    const staggerItems = Array.from(document.querySelectorAll(staggerSelector));

    root.classList.add("motion-ready");
    staggerItems.forEach((item, index) => {
      const siblings = Array.from(item.parentElement?.children ?? []);
      item.style.setProperty("--reveal-index", String(Math.max(0, siblings.indexOf(item))));
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return () => {
        root.classList.remove("motion-ready");
        staggerItems.forEach((item) => item.style.removeProperty("--reveal-index"));
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
      staggerItems.forEach((item) => item.style.removeProperty("--reveal-index"));
    };
  }, []);

  return null;
}
