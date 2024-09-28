jQuery(function () { // wait for document ready
	// init
	console.log('scroll!!!!')
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
		.fromTo("section.panel.turqoise", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left

	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "300%"
	})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});