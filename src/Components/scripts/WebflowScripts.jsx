"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function WebflowScripts() {
  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");
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
      <Script id="webflow-gsap-init" strategy="afterInteractive">
        {`
          window.addEventListener('load', function () {
            if (!window.gsap) return;
            var gsap = window.gsap;
            gsap.registerPlugin(window.ScrollTrigger, window.SplitText, window.Observer);

            document.querySelectorAll('.count-up-number-animation').forEach(function (element, index) {
              var targetValue = parseFloat(element.getAttribute('data-count')) || 0;
              gsap.fromTo(
                element,
                { textContent: 0 },
                {
                  textContent: targetValue,
                  duration: 2,
                  ease: 'power1.out',
                  snap: { textContent: 1 },
                  delay: index * 0.1,
                  scrollTrigger: { trigger: element, start: 'top 80%', once: true },
                  onUpdate: function () {
                    element.textContent = Math.round(parseFloat(element.textContent)).toLocaleString();
                  },
                }
              );
            });

            document.querySelectorAll('.testimonial-marquee-row').forEach(function (row) {
              row.querySelectorAll('.marquee-row-testimonials').forEach(function (track) {
                gsap.to(track, { xPercent: -50, ease: 'none', duration: 40, repeat: -1 });
              });
            });

            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          });
        `}
      </Script>
    </>
  );
}
