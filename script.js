function myFunction() {
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("toggle-btn");
  nav.classList.toggle("active");
  toggleBtn.classList.toggle("toggle-btn-active");
  //   console.log(1);
}

document.addEventListener("DOMContentLoaded", () => {
  let t1 = gsap.timeline();
  t1.from("header", {
    y: -100,
    opacity: 1,
    duration: 1.5,
    ease: "expo.inOut",
  })
    .from(".text-group > *", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.5,
    })
    .from(".img-group .item", {
      y: -1000,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    })
    .to(".img-group .item:nth-child(2)", {
      y: -30,
      x: -35,
      rotation: -375,
      duration: 2.5,
      ease: "expo.inOut",
    })
    .to(".img-group .item:nth-child(4)", {
      y: -40,
      duration: 2.5,
      ease: "expo.inOut",
    })
    .to(".img-group .item:nth-child(5)", {
      y: -30,
      rotation: 15,
      duration: 2.5,
      ease: "expo.inOut",
    })
    .to(".img-group .item:nth-child(3)", {
      y: 70,
      duration: 2.5,
      ease: "expo.inOut",
    });
});
