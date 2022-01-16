const ScrollAnimations = () => {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px",
    root: document.querySelector('#scrollArea'),
  };
  const appearOnScroll = new IntersectionObserver((
    enteries,
    appearOnScroll
  ) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");
       
      } else {
        entry.target.classList.add("appear");
        
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
};

export default ScrollAnimations;
