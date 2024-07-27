gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    gsap.from('.car-img', {
        x: -600,
        duration: 2.5,
        delay: 0.5,
        onComplete: () => {
            setupScrollTriggers();
        }
    });
    gsap.to("#wheels",{
        rotate: 360,
        duration: 2.5,
        delay: 0.5,
    })
}

function setupScrollTriggers() {
    gsap.to(".text-img", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".text-img",
            scroller: 'body',
            start: "top 73%",
            onEnter: () => {
                gsap.to(".text-img", {
                    opacity: 1,
                    duration: 1.8,
                    onComplete: () => {
                        gsap.to(".text-img", {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                gsap.set(".text-img", { display: 'none' });
                                gsap.set(".text-img2", { display: 'block', opacity: 0 });
                                gsap.to(".text-img2", {
                                    opacity: 1,
                                    duration: 0.5,
                                    once: true,
                                });
                            }
                        });
                    }
                });
            }
        }
    });

    gsap.to(".car-img", {
        scrollTrigger: {
            trigger: '.car-img',
            scroller: 'body',
            start: "top 70%",
            scrub: false,
            once: true,
            onEnter: () => {
                gsap.to("#wheels", {
                    rotate: '+=360',
                    duration: 1.8,
                });
                gsap.to(".car-img", {
                    x: 320,
                    duration: 1.8,
                });
            }
        }
    });
    ScrollTrigger.create({
        trigger: '.car-img',
        scroller: 'body',
        start: "top 50%",
        scrub: false,
        once: true,
        onEnter: () => {
            gsap.to("#wheels", {
                rotate: '+=360',
                duration: 1.8,
            });
            gsap.to(".car-img", {
                x: 400,
                duration: 1.8,
            });
        }
    });
}

initAnimations();
