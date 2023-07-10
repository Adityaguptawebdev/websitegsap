var tl=gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
})
tl.from("#main h1",{
    y:100,
   opacity:0,
   stagger:0.3,
})
tl.from("#main #leftimg img",{
    x:-100,
   opacity:0,
   stagger:0.3,
})
tl.from("#main #rightimg img",{
    x:100,
   opacity:0,
   stagger:0.3,
})