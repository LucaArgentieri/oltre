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

export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function animateNavbar() {
  tl.add("navbar");
  tl.from(
    "nav div",
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.01,
      ease: "power2.out",
    },
    "navbar"
  );
}

export function animateMobileMenu(status) {
  tl.add("navbarMobile");

  if (status) {
    gsap.fromTo(
      ".nav_menu_open",
      {
        y: 100,
        pointerEvents: "none",
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        pointerEvents: "all",
      }
    );
  } else {
    gsap.to(".nav_menu_open", {
      y: "-100vh",
      duration: 0.5,

      onComplete: () => {
        gsap.to(".nav_menu_open", {
          opacity: 0,
          pointerEvents: "none",
        });
      },
    });
  }
}

export function animateHeroText() {
  tl.add("start");

  tl.from(
    [".hero .text .title"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    },
    "start",
    "+=10"
  );
  tl.from(
    [".hero .text p"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      delay: 0.1,
      ease: "power2.out",
    },
    "start",
    "+=10"
  );

  tl.fromTo(
    [".hero .button"],
    {
      y: 50,
    },
    {
      duration: 0.75,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 0.2,
    },
    "start",
    "+=10"
  );
}

export function animateMainText() {
  tl.add("start");
  gsap.from(
    [".maintext .text img"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.1,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "start",
    "+=0"
  );
  gsap.from(
    [".maintext .text .title"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "start",
    "+=0"
  );
  gsap.from(
    [".maintext .text .desc"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "start",
    "+=0"
  );
}

export function animateSvg(cursorX, cursorY) {
  let easing = 0.05;

  gsap.to(".svg_container .image", {
    x: cursorX * easing,
    y: cursorY * easing,
    duration: 1.3,
  });
}

export function clipPathImg() {
  gsap.fromTo(
    ".imagesgroup-1-1",
    {
      opacity: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scrollTrigger: {
        trigger: ".imagesgroup",
      },
    }
  );

  gsap.fromTo(
    ".imagesgroup-1-2",
    {
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scrollTrigger: {
        trigger: ".imagesgroup",
      },
    }
  );

  gsap.fromTo(
    ".imagesgroup-2-1",
    {
      opacity: 0,
      clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
    },
    {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      scrollTrigger: {
        trigger: ".imagesgroup",
      },
    }
  );

  gsap.fromTo(
    ".imagesgroup-2-2",
    {
      opacity: 0,
      clipPath: "polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
    },
    {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      scrollTrigger: {
        trigger: ".imagesgroup",
      },
    }
  );
}

export function animateShopText() {
  tl.add("shop");
  tl.from(
    [".shop .desc .title"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.1,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "shop",
    "+=0"
  );
  tl.from(
    [".shop .desc .text"],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "shop",
    "+=0"
  );
  tl.from(
    [
      ".shop .desc .price",
      ".shop .desc .dots",
      ".shop .button",
      ".shop .accordion",
      ".shop .reviews",
      ".shop .input",
    ],
    {
      duration: 0.75,
      opacity: 0,
      y: 50,
      stagger: 0.01,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        start: () => "top 50%",
        trigger: ".maintext",
      },
    },
    "shop",
    "+=0"
  );
}

export function imageStagger() {
  tl.add("img");
  tl.fromTo(
    [".shop .main .mini-img img"],
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.1,
    },
    "img"
  );
  tl.fromTo(
    [".shop .main .full-img img"],
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.1,
    },
    "img"
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
    height: 0,
    duration: 0.3,
  });
}
