"use client";

import Script from "next/script";
import { useEffect } from "react";
import { initAll, cleanupAnimations } from "./initAnimations";

export default function WebflowScripts() {
  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");

    const removeWebflowBadge = () => {
      document.querySelectorAll(".w-webflow-badge, .brix-badges-wrapper").forEach((el) => {
        el.remove();
      });
    };

    const checkAndInit = () => {
      removeWebflowBadge();
      if (window.gsap && window.ScrollTrigger && window.Observer && window.SplitText) {
        initAll();
        removeWebflowBadge();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    removeWebflowBadge();
    const badgeObserver = new MutationObserver(removeWebflowBadge);
    badgeObserver.observe(document.body, { childList: true, subtree: true });

    if (document.readyState === "complete") {
      checkAndInit();
    } else {
      window.addEventListener("load", checkAndInit);
    }

    return () => {
      window.removeEventListener("load", checkAndInit);
      badgeObserver.disconnect();
      cleanupAnimations();
    };
  }, []);

  return (
    <>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=682751255bcef0a07bed2a01"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/682751255bcef0a07bed2a01/js/webflow.schunk.f2efb3c5440a81cf.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/682751255bcef0a07bed2a01/js/webflow.schunk.7704852a5c4fb6ce.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/682751255bcef0a07bed2a01/js/webflow.schunk.f919141e3448519b.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/682751255bcef0a07bed2a01/js/webflow.schunk.121b0d7ff03e0f4a.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/682751255bcef0a07bed2a01/js/webflow.68f34ceb.75cd7d01b2c40958.js"
        strategy="afterInteractive"
      />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/Observer.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" strategy="afterInteractive" />
    </>
  );
}
