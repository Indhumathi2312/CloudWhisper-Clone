let subtitleSplits = [];
let scrollRevealInitialized = false;

function numberWithCommas(x, decimals = 0) {
  return x.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function isInitiallyHidden(el) {
  if (el.dataset.revealed === "true") return false;
  const inlineOpacity = el.style.opacity;
  if (inlineOpacity === "0" || inlineOpacity === 0) return true;
  return parseFloat(window.getComputedStyle(el).opacity) < 0.05;
}

function revealElement(el, options = {}) {
  const gsap = window.gsap;
  if (!gsap || el.dataset.revealed === "true") return;

  el.dataset.revealed = "true";
  const duration = options.duration ?? 0.85;
  const delay = options.delay ?? 0;

  gsap.to(el, {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration,
    delay,
    ease: "power2.out",
    overwrite: true,
    onComplete: () => {
      el.style.removeProperty("opacity");
      el.style.removeProperty("filter");
      el.style.removeProperty("transform");
    },
  });
}

function collectRevealTargets() {
  const seen = new Set();
  const targets = [];

  const add = (el) => {
    if (!el || seen.has(el)) return;
    seen.add(el);
    targets.push(el);
  };

  document.querySelectorAll("[data-w-id]").forEach(add);
  document.querySelectorAll("main [style*='opacity']").forEach((el) => {
    if (isInitiallyHidden(el)) add(el);
  });

  return targets;
}

function revealInViewport() {
  collectRevealTargets().forEach((el) => {
    if (!isInitiallyHidden(el)) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      revealElement(el);
    }
  });
}

function revealAllHidden() {
  collectRevealTargets().forEach((el) => {
    if (isInitiallyHidden(el)) {
      revealElement(el, { duration: 0.35 });
    }
  });
}

function initScrollReveal() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = collectRevealTargets();

  if (reducedMotion) {
    targets.forEach((el) => {
      el.dataset.revealed = "true";
      el.style.removeProperty("opacity");
      el.style.removeProperty("filter");
      el.style.removeProperty("transform");
    });
    return;
  }

  let heroIndex = 0;

  targets.forEach((el) => {
    if (el.dataset.revealBound === "true") return;
    if (!isInitiallyHidden(el)) return;

    el.dataset.revealBound = "true";
    const inHero = el.closest("section.hero-v2");
    const isSoftBlur =
      el.style.filter?.includes("blur(3px)") || el.style.filter?.includes("blur(3");

    if (inHero) {
      revealElement(el, { delay: heroIndex * 0.1, duration: 0.85 });
      heroIndex += 1;
      return;
    }

    if (isSoftBlur) {
      ScrollTrigger.create({
        trigger: el.closest(".integrations-square-icons-container") || el,
        start: "top 78%",
        once: true,
        onEnter: () => revealElement(el, { duration: 0.8 }),
      });
      return;
    }

    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => revealElement(el),
    });
  });

  revealInViewport();

  if (!scrollRevealInitialized) {
    scrollRevealInitialized = true;
    ScrollTrigger.addEventListener("refresh", revealInViewport);
    window.setTimeout(revealAllHidden, 3000);
  }
}

function initMarqueeAnimation() {
  const gsap = window.gsap;
  const Observer = window.Observer;
  if (!gsap || !Observer) return;

  const items = document.querySelectorAll(".marquee-scroll-item");
  if (!items.length) return;

  const marqueeObject = { value: 1 };
  const marqueeTimeline = gsap.timeline({
    repeat: -1,
    onReverseComplete: () => marqueeTimeline.progress(1),
  });

  marqueeTimeline.fromTo(
    ".marquee-scroll-item",
    { xPercent: 0 },
    { xPercent: -100, duration: 50, ease: "none" }
  );

  Observer.create({
    target: window,
    type: "wheel,scroll,touch",
    onChangeY: (self) => {
      let velocity = self.velocityY * 0.002;
      velocity = gsap.utils.clamp(-40, 40, velocity);
      marqueeTimeline.timeScale(velocity);

      const restingSpeed = velocity < 0 ? -1 : 1;
      gsap.fromTo(
        marqueeObject,
        { value: velocity },
        {
          value: restingSpeed,
          duration: 1,
          onUpdate: () => marqueeTimeline.timeScale(marqueeObject.value),
        }
      );
    },
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    marqueeTimeline.pause();
  }
}

function initTestimonialMarquee() {
  const gsap = window.gsap;
  if (!gsap) return;

  document.querySelectorAll(".testimonial-marquee-row").forEach((row, rowIndex) => {
    const tracks = row.querySelectorAll(".marquee-row-testimonials");
    if (!tracks.length) return;

    const isBottom = row.classList.contains("bottom");
    tracks.forEach((track, trackIndex) => {
      gsap.fromTo(
        track,
        { xPercent: isBottom ? -100 : 0 },
        {
          xPercent: isBottom ? 0 : -50,
          ease: "none",
          duration: 38 + rowIndex * 4 + trackIndex * 2,
          repeat: -1,
        }
      );
    });
  });
}

function initTitleGradientAnimation() {
  const gsap = window.gsap;
  const overlay = document.querySelector(".title-overlay");
  if (!gsap || !overlay) return;

  window.addEventListener("mousemove", (e) => {
    const xPercent = Math.round((e.clientX / window.innerWidth) * 100);
    const yPercent = Math.round((e.clientY / window.innerHeight) * 200);
    gsap.to(overlay, {
      "--x": `${xPercent}%`,
      "--y": `${yPercent}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  });
}

function initSubtitleAnimation() {
  const gsap = window.gsap;
  const SplitText = window.SplitText;
  if (!gsap || !SplitText) return;

  subtitleSplits.forEach((split) => split.revert?.());
  subtitleSplits = [];

  document.querySelectorAll(".subtitle").forEach((subtitle) => {
    const splitText = new SplitText(subtitle, { type: "chars" });
    subtitleSplits.push(splitText);
    gsap.to(splitText.chars, {
      keyframes: [
        { opacity: 0.3, filter: "blur(1px)", duration: 0.4 },
        { opacity: 1, filter: "blur(0px)", duration: 0.4 },
      ],
      repeat: -1,
      repeatDelay: 2,
      stagger: 0.04,
    });
  });
}

function initCounterAnimation() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.utils.toArray(".count-up-number-animation").forEach((element, index) => {
    const targetValue = parseFloat(element.getAttribute("data-count")) || 100;
    const decimals = targetValue % 1 !== 0 ? 1 : 0;

    gsap.fromTo(
      element,
      { textContent: 0 },
      {
        textContent: targetValue,
        duration: 2,
        ease: "power1.out",
        snap: decimals ? { textContent: 0.1 } : { textContent: 1 },
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true,
          toggleActions: "play none none none",
        },
        onUpdate() {
          element.textContent = numberWithCommas(parseFloat(element.textContent), decimals);
        },
      }
    );
  });
}

let scrollBatchInitialized = false;
let resizeListenerBound = false;

function bindResizeRefresh() {
  if (resizeListenerBound) return;
  resizeListenerBound = true;
  window.addEventListener("resize", () => window.ScrollTrigger?.refresh());
}

function initScrollBatch() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const items = document.querySelectorAll(".animate-on-scroll");
  if (!items.length) return;

  if (scrollBatchInitialized) return;
  scrollBatchInitialized = true;

  ScrollTrigger.batch(".animate-on-scroll", {
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeave: (batch) =>
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  });
}

export function runTemplateAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return false;

  if (window.Observer && window.SplitText) {
    gsap.registerPlugin(ScrollTrigger, window.Observer, window.SplitText);
  } else {
    gsap.registerPlugin(ScrollTrigger);
  }

  initScrollReveal();
  initMarqueeAnimation();
  initTestimonialMarquee();
  initTitleGradientAnimation();
  initSubtitleAnimation();
  initCounterAnimation();
  initScrollBatch();
  bindResizeRefresh();

  ScrollTrigger.refresh();
  revealInViewport();
  return true;
}

export function cleanupTemplateAnimations() {
  subtitleSplits.forEach((split) => split.revert?.());
  subtitleSplits = [];
  window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
  document.querySelectorAll("[data-reveal-bound], [data-revealed]").forEach((el) => {
    delete el.dataset.revealBound;
    delete el.dataset.revealed;
  });
  scrollBatchInitialized = false;
  scrollRevealInitialized = false;
}
