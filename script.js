const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); //text animation
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5}) //slider page comes in
tl.to(".intro", {y:"-100%", duration:1})
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

gsap.fromTo('.titlee', {autoAlpha:0}, {autoAlpha:1, rotation:360, delay:4.5})

gsap.fromTo(".hr-title", {opacity:0}, {opacity:1, delay:5.3})

gsap.fromTo('.cat-1', {opacity:0}, {opacity:1, delay:5.7, ease:"elestic.out(1, 0.3)"})

gsap.fromTo('.cat2', {y:-500}, {duration: 3, ease: "bounce.out", y:50})

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)



gsap.to('.cat3', {autoAlpha:1, 
    ScrollTrigger: {
        trigger: ".cat3",
        start: "top top",
        once: false,
        scrub: true
    }});

gsap.fromTo(".parf", {autoAlpha:0}, {autoAlpha:1, delay:6})