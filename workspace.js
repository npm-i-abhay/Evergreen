  var script=document.createElement('script');
  script.src="./comps/compost/index.js";
  document.head.appendChild(script);

  document.querySelector("#compost").innerHTML += animatecompost();
  //document.getElementById("compost").innerHTML += animatecompost();
