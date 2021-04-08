
var tl = gsap.timeline({defaults:{durtaion: .1, ease:Power1.easeInOut, opacity: 0}})
    tl.from(".navbar",{ y: -100, transformOrigin:"center", opacity:0})
    tl.from(".heroimg-1",{ scale: .2, transformOrigin:"center", opacity:0})
    tl.from(".heroimg-2",{ scale: .2, transformOrigin:"center"} )
    tl.from(".heroimg-4",{ scale: .2, transformOrigin:"center"} )
    tl.from(".heroimg-3",{ scale: .2, transformOrigin:"center"} )
    tl.from(".reco",{x: 200, transformOrigin:"center"},"=.4" )
    tl.from(".skatepark",{ scale: 2, transformOrigin:"center"})
    tl.from(".hero-para",{ y: 200, transformOrigin:"center", opacity:0})
    tl.from(".booknowbtn",{ x: 200, transformOrigin:"center"} )

    var SMController2 = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
                        triggerElement: ".header",
                        triggerHook: 0
    })
    .setTween(tl)
    // .addIndicators()
    // .setPin('.roller-img')
    .addTo(SMController2)
    



    var tl1 = gsap.timeline();
    var tl2 = gsap.timeline();
    tl1.fromTo(".aboutHead",
    {duration: 1, y: -80,  opacity: 0},
    {duration: 1,  y: 0,  opacity: 1}
   ) 
   .fromTo(".aboutback",
    {duration: 1, y: -80,  opacity: 0},
    {duration: 1,  y: 0,  opacity: 1}
   ) 
    .fromTo(".roller-svg",
     {duration: 1, x: 100, y: 280, scale: .5, opacity: 0},
     {duration: 1, x: 50, y: 0, scale: 1, opacity: 1}
    ) 
    .fromTo(".info-img",
        {duration: 1, y: 200, scale: 0, opacity: 0},
        {duration: 1, y: 0, scale: 1, opacity: 1}  
    )
    .fromTo(".aboutimg",
        {duration: 1, scale: 1, opacity: .5},
        {duration: 1, scale: 1.5, opacity: 1}
    )
    .fromTo(".about-details",
        {duration: 1, x: -200, opacity: 0},
        {duration: 1, x: 0, opacity: 1}
    )

    var SMController1 = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
                        triggerElement: ".roller-img",
                        triggerHook: 0.2
    })
    .setTween(tl1)
    // .addIndicators()
    // .setPin('.roller-img')
    .addTo(SMController1)
     
    tl2.to(".roller-svg",1, {y: 2, transformOrigin: 'top'})

      
    const newNav = () => {
        let navigation = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
          if(document.body.scrollTop > 1 ||document.documentElement.scrollTop > 1 ) {
            navigation.classList.add('navback');
            
          } else {
            navigation.classList.add('navhide');
            navigation.classList.remove('navback')
          }
        });
      
      }
      
      newNav();


  
