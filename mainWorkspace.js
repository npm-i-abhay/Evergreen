document.querySelector("#globe").innerHTML += handleEarth();

document.querySelector("#clickArrow").innerHTML += scrollBounce();

document.querySelector("#dumpTruck").innerHTML += animateTruck();

document.querySelector("#drivingTruck").innerHTML += truckAnimation();


// page 1, 2 and 3 ends here


// page4 StatPage/Falling garbage/ conversation and graph
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")

document.querySelector("#garbageItem1").innerHTML += handleGarbage("0em", "10em");

document.querySelector("#garbageItem2").innerHTML += handleGarbage("0em", "15em", "./images/garbage/appple 1.png", "fallingtwo");

document.querySelector("#garbageItem3").innerHTML += handleGarbage("0em", "15em", "./images/garbage/Bananna Peel.png");

document.querySelector("#garbageItem4").innerHTML += handleGarbage("0em", "5em", "./images/garbage/garbage bag.png", "fallingtwo");



document.querySelector("#pile").innerHTML += animateTrash();


document.querySelector("#ed").innerHTML += eddyUI();
document.querySelector("#travis").innerHTML += TravisUI();

document.querySelector("#interactiveGraph").innerHTML += animateBarChart();
document.querySelector("#button").innerHTML += animateButton();
document.querySelector("#button2").innerHTML += animateButton();
// page4 StatPage/Falling garbage,conversation and bar graph ends here




// mainCategory starts

document.querySelector("#statItem1").innerHTML += tilecomp();  
document.querySelector("#statItem2").innerHTML +=tilecomp("excus");
document.querySelector("#statItem3").innerHTML +=tilecomp("excus");
document.querySelector("#statItem4").innerHTML +=tilecomp("excus");


document.querySelector("#statItem1A").innerHTML += tilecomp();  
document.querySelector("#statItem2B").innerHTML +=tilecomp("excus");
document.querySelector("#statItem3C").innerHTML +=tilecomp("excus");

document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");

document.querySelector("#halfGlobe").innerHTML +=handleEarth("350px", "350px");
document.querySelector("#halfGlobe2").innerHTML +=handleEarth("350px", "350px");




// dos and donts

document.querySelector("#dos").innerHtml += dispDontRecycle()



// main category ends here




// sorting
document.querySelector("#blackbin").innerHTML += animateBlackBin();
document.querySelector("#greenbin").innerHTML += animateGreenBin();
document.querySelector("#bluebin").innerHTML += animateBlueBin();

// sorting ends


// result/ending page
document.querySelector("#compostPit").innerHTML += animatecompost();

// functionality 

// 


// shits done yo!
