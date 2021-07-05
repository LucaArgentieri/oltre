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

export function animateAccordionButton() {
  gsap.fromTo(
    ".accordion_button",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
    }
  );
}

export function setAccordionContent() {
  gsap.to(".accordion_content", {
    autoAlpha: 0,
    height: 0,
    duration: 0,
  });
}

export function animateAccordion() {
  animateAccordionButton();
  tl.to(".accordion_content", {
    autoAlpha: 1,
    height: "auto",
    duration: 0,
  });
}

export function reverseAccordion() {
  animateAccordionButton();
  tl.to(".accordion_content", {
    autoAlpha: 0,
    height: "auto",
    duration: 0,
  });
}
