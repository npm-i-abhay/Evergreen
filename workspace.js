document.querySelector(".dontrecycle").innerHTML += dispRecycle('#F1B6B6','#ECC2C2','Don\'t Recycle','dontrecycle'); 



document.querySelector(".dontrecyclediv").innerHTML += addItem('plasticbag.png','Soft Plastic');
document.querySelector(".dontrecyclediv").innerHTML += addItem('toiletpaper.png','Tissue Paper');
document.querySelector(".dontrecyclediv").innerHTML += addItem('slipper.png', 'Reusable Items');
document.querySelector(".dontrecyclediv").innerHTML += addItem('styrofoam.png','Styrofoam Items');



document.querySelector(".dorecycle").innerHTML += dispRecycle('#AEE781','#CBF6A8','Recycle','dorecycle'); 



document.querySelector(".dorecyclediv").innerHTML += addItem('placeholder.png','Glass');
document.querySelector(".dorecyclediv").innerHTML += addItem('placeholder.png','Hard Plastic');
document.querySelector(".dorecyclediv").innerHTML += addItem('placeholder.png', 'Metal');
document.querySelector(".dorecyclediv").innerHTML += addItem('placeholder.png','Paper');


var script=document.createElement('script');
 script.src="./comps/compost/index.js";
document.head.appendChild(script);

document.querySelector("#compost").innerHTML += animatecompost();
//document.getElementById("compost").innerHTML += animatecompost();
