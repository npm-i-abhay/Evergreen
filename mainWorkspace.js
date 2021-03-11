document.querySelector("#globe").innerHTML += handleEarth("500px", "500px");

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

document.querySelector("#statistics").innerHTML += statBar();


document.querySelector("#ed").innerHTML += eddyUI();
document.querySelector("#travis").innerHTML += TravisUI();
document.querySelector("#ed").innerHTML += chatUI();
document.querySelector("#travis").innerHTML += chat2UI();




document.querySelector("#interactiveGraph").innerHTML += animateBarChart();
document.querySelector("#button").innerHTML += animateButton();
document.querySelector("#button2").innerHTML += animateButton();
// page4 StatPage/Falling garbage,conversation and bar graph ends here




// mainCategory starts

document.querySelector("#statItem1").innerHTML += tilecomp();  
document.querySelector("#statItem2").innerHTML +=tilecomp("75% of the worlds glass is not recycled");
document.querySelector("#statItem3").innerHTML +=tilecomp("30% of the worlds paper is not recycled");
document.querySelector("#statItem4").innerHTML +=tilecomp("40.6% of the worlds Aluminum is not recycled");


document.querySelector("#statItem1A").innerHTML += tilecomp("30% of the worlds vegetables are thrown in the trash");  
document.querySelector("#statItem2B").innerHTML +=tilecomp("15% of the worlds fruit is thrown in the trash");
document.querySelector("#statItem3C").innerHTML +=tilecomp("9% of the worlds baked goods are thrown in the trash");

document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");

document.querySelector("#halfGlobe").innerHTML +=handleEarth("350px", "350px");
document.querySelector("#halfGlobe2").innerHTML +=handleEarth("350px", "350px");




// dos and donts



document.querySelector("#donts2").innerHTML += dispDosDonts('#F1B6B6','#ECC2C2','Don\'t Recycle','donts2');
document.querySelector("#donts2div").innerHTML += addItem('/images/plasticbag.png','Soft Plastic');
document.querySelector("#donts2div").innerHTML += addItem('/images/toiletpaper.png','Tissue Paper');
document.querySelector("#donts2div").innerHTML += addItem('/images/slipper.png', 'Reusable Items');
document.querySelector("#donts2div").innerHTML += addItem('/images/styrofoam.png','Styrofoam Items');



document.querySelector("#dos2").innerHTML += dispDosDonts('#AEE781','#CBF6A8','Recycle','dos2');
document.querySelector("#dos2div").innerHTML += addItem('/images/glass.png','Glass');
document.querySelector("#dos2div").innerHTML += addItem('/images/pbottle.png','Hard Plastic');
document.querySelector("#dos2div").innerHTML += addItem('/images/can.png', 'Metal');
document.querySelector("#dos2div").innerHTML += addItem('/images/book.png','Paper')









// main category ends here




// sorting
document.querySelector("#blackbin").innerHTML += animateBlackBin();
document.querySelector("#greenbin").innerHTML += animateGreenBin();
document.querySelector("#bluebin").innerHTML += animateBlueBin();
document.querySelector("#trash1").innerHTML += handleDrag()


// sorting ends


// result/ending page
document.querySelector("#compostPit").innerHTML += animatecompost();

// functionality 

//  bottle = document.querySelector(".dragger");
// console.log(bottle)
// bottle.onmousedown = function(event)
// {
//     bottle.style.position = "absolute"
//     bottle.style.zIndex = 1000;
//     document.body.sorting.appendChild(bottle);


// function dragAlong(bodX, bodY)
// {
//     bottle.style.left = bodX - bottle.offsetWidth / 2 + "px";
//     bottle.style.height = bodY - bottle.offsetHeight / 2 + "px";

// }
// dragAlong(event.bodX, event.bodY);


// function onMouseMove (event)
// {
//     dragAlong(event.bodX, event.bodY);
// }

// document.addEventListener('mousemove', onMouseMove);

// bottle.onmouseup = function ()
// {
//     document.removeEventListener('mousemove', onMouseMove );
//     bottle.onmouseup = null;
// }
// bottle.ondragstart = function ()
// {
//     return false;
// }

// }

// 


// shits done yo!
