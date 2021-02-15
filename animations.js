tl = gsap.timeline();

function idle() {
  tl.to("#head, #features", {
    y: 10,
    duration: 2,
    ease: "elastic",
    yoyo: true,
    repeat: 10,
  });
  tl.to(
    ".eyes",
    {
      yoyo: true,
      repeat: 1,
      attr: {
        d:
          "M97.9201 97.5642C95.9201 97.5642 94.4201 97.1642 94.4201 99.5642C94.4201 101.964 95.9201 101.564 97.9201 101.564C99.9201 101.564 101.62 101.964 101.62 99.5642C101.62 97.1642 99.9201 97.5642 97.9201 97.5642Z",
      },
    },
    "-=4"
  );
}

function animateDeath() {
  gsap.to("#head, #features", {
    y: 0,
    ease: "power2",
    rotation: 5,
  });
  gsap.to("#eyes", { opacity: 0 });
  gsap.to("#nose", { opacity: 0 });
  gsap.to("#eyes-dead", { opacity: 1 });
  gsap.to("#nose-flat", { opacity: 1 });
  gsap.to("#tounge", { opacity: 1 });
  tl.pause();
}
