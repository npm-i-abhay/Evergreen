document.querySelector("#globe").innerHTML += handleEarth();
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")

document.querySelector("#dumpTruck").innerHTML = animateTruck();
document.querySelector("#drivingTruck").innerHTML += truckAnimation ();
document.querySelector("#green").innerHTML += handleRecycle ();
document.querySelector("#black").innerHTML += GarbageUI();
document.querySelector("#scroll").innerHTML += scrollBounce();
document.querySelector("#ed").innerHTML += eddyUI()
document.querySelector("#travis").innerHTML += TravisUI()
document.querySelector("#ed").innerHTML += eddyUI("400px")
document.querySelector("#travis").innerHTML += TravisUI("600px", "650px")
document.querySelector("#travis").innerHTML += chatUI()


