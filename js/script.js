let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

let scene = new ScrollMagic.Scene({
    triggerElement: 'main',
    duration: "100%",
    triggerHook: 0

})

.setTween(timeline)
.setPin("main")
.addTo(controller)

timeline
    .to('.hello-text', 10, {y: -300, duration: 3})
    .fromTo('.tashkent-img', {y: -50}, {y: 0, duration: 3}, "-=3")
    .to('.info', 3, {top: "0%"}, "-=3")
    .fromTo(".cards", {opacity: 0}, {opacity: 1, duration: 3})
    .fromTo(".lorem-texts", {opacity: 0}, {opacity: 1, duration: 3})


init_pointer({
    pointerColor: "#fff",
    ringSize: 20,
    ringClickSize: 15
});