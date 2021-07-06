import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline();

export function scrollTo(index) {
  gsap.to(window, {
    scrollTo: {
      y: `.img${index}`,
      offsetY: 150,
    },
    duration: 1,
  });
}

export function setAccordionContent() {
  gsap.to(".accordion_content", {
    autoAlpha: 0,
    height: 0,
    duration: 0,
  });
}

export function animateAccordion() {
  tl.to(".details-svg", {
    duration: 0.3,
    rotateX: 180,
  });
  tl.to(".accordion_content", {
    autoAlpha: 1,
    height: "auto",
    duration: 0.3,
  });
}

export function reverseAccordion() {
  tl.to(".details-svg", {
    duration: 0.3,
    rotateX: 0,
  });
  tl.to(".accordion_content", {
    autoAlpha: 0,
    height: "auto",
    duration: 0.3,
  });
}
