gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();











// // using dom to make our first event 

// var cursor = document.querySelector("#cursor")
// var page1Content = document.querySelector("#page1-content")

// // using vanilla js 
// // page1Content.addEventListener("mousemove", function(dets){
// // cursor.style.left=dets.x +"px";
// // cursor.style.top=dets.y+"px";
// // })

// // using gsap 
// page1Content.addEventListener("mousemove", function(dets){
// gsap.to("#cursor",{
// x:dets.x,
// y:dets.y
// })
// })

// page1Content.addEventListener("mouseenter", function(dets){
//     gsap.to("#cursor",{
//     scale:1,
//     opacity:1
//     })
//     })
//     page1Content.addEventListener("mouseleave", function(dets){
//         gsap.to("#cursor",{
//        scale:0,
//        opacity:0
//         })
//         })

function cursorEffect(){
var cursor = document.querySelector("#cursor")
var page1Content = document.querySelector("#page1-content")
page1Content.addEventListener("mousemove", function(dets){
gsap.to("#cursor",{
x:dets.x,
y:dets.y
})
})
page1Content.addEventListener("mouseenter", function(dets){
    gsap.to("#cursor",{
    scale:1,
    opacity:1
    })
    })
    page1Content.addEventListener("mouseleave", function(dets){
        gsap.to("#cursor",{
       scale:0,
       opacity:0
        })
        })
}        
cursorEffect();

function page2Animation(){
    gsap.from(".elem h2",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })
}
page2Animation();

function h1Animation(){
    gsap.from("#page1 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 60%",
            end:"top 17%",
            scrub:2
        }
    })
}
h1Animation();
function animation(){
    gsap.from("#page6 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            start:"top 40%",
            end:"top 17%"
            
        }
    })
}
animation();

function cursorEffect1(){
    var cursor1 = document.querySelector("#cursor1")
    var page4Content = document.querySelector("#page4")
    page4Content.addEventListener("mousemove", function(dets){
    gsap.to("#cursor1",{
    x:dets.x-900,
    y:dets.y-200
    })
    })
    page4Content.addEventListener("mouseenter", function(dets){
        gsap.to("#cursor1",{
            x:1,
                y:1,
        scale:1,
        opacity:1
        })
    })
        page4Content.addEventListener("mouseleave", function(dets){
            gsap.to("#cursor1",{
                x:0,
                y:0,
           scale:0,
           opacity:0
            })
        })       
    }        
cursorEffect1();


// var cursor1 = document.querySelector("#cursor1")
// var page4 = document.querySelector("#page4")

// // using vanilla js 
// page4.addEventListener("mousemove", function(dets){
// cursor1.style.left=dets.x +"px";
// cursor1.style.top=dets.y+"px";
// })
// page4.addEventListener("mouseenter", function(dets){
//     cursor1.style.left=dets.x +"px";
//     cursor1.style.top=dets.y+"px";
//     })

// page4.addEventListener("mouseleave", function(dets){
   
//     cursor1.style.opacity=0;
//     })



        