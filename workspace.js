document.querySelector("#donts2").innerHTML += dispRecycle('#F1B6B6','#ECC2C2','Don\'t Recycle','dontrecycle'); 



document.querySelector("#donts2").innerHTML += addItem('plasticbag.png','Soft Plastic');
document.querySelector("#donts2").innerHTML += addItem('toiletpaper.png','Tissue Paper');
document.querySelector("#donts2").innerHTML += addItem('slipper.png', 'Reusable Items');
document.querySelector("#donts2").innerHTML += addItem('styrofoam.png','Styrofoam Items');



document.querySelector("#dos2").innerHTML += dispRecycle('#AEE781','#CBF6A8','Recycle','dorecycle'); 



document.querySelector("#dos2").innerHTML += addItem('placeholder.png','Glass');
document.querySelector("#dos2").innerHTML += addItem('placeholder.png','Hard Plastic');
document.querySelector("#dos2").innerHTML += addItem('placeholder.png', 'Metal');
document.querySelector("#dos2").innerHTML += addItem('placeholder.png','Paper');


var script=document.createElement('script');
 script.src="./comps/compost/index.js";
document.head.appendChild(script);

document.querySelector("#compost").innerHTML += animatecompost();
//document.getElementById("compost").innerHTML += animatecompost();
