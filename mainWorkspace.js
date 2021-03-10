document.querySelector("#globe").innerHTML += handleEarth();
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")


document.querySelector("#dumpTruck").innerHTML += animateTruck();
document.querySelector("#garbageItem1").innerHTML += handleGarbage();

document.querySelector("#garbageItem2").innerHTML += handleGarbage("0em", "25em", "./images/garbage/appple 1.png", "");

document.querySelector("#garbageItem3").innerHTML += handleGarbage("0em", "35em", "./images/garbage/Bananna Peel.png");

document.querySelector("#garbageItem4").innerHTML += handleGarbage("0em", "5em", "./images/garbage/garbage bag.png", "fallingtwo");

document.querySelector("#green").innerHTML += handleRecycle ();