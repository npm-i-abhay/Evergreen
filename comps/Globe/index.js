function handleEarth (width="150px",height="150px")
{
    return `
    
<div  style="
    position: relative; 
    // border: 2px solid black; 
    border-radius: 50px;
    width: ${width}; height: ${height};   
    align-items: center; 
    display: flex; 
    justify-content: center;
    "> 
    
    <img onload="handleEarth.addAnimation(this)"  style="object-fit: contain;
     height: 100%;
     width: 100%; 
    //  animation-name:example; 
    //  animation-duration: 10s;
    
    //  animation-iteration-count: infinite;
    //  animation-timing-function: linear; 
    " src="./images/Interactive  globe.png" alt="image of earth">


</div>
    
    `
}

handleEarth.addAnimation = (el) =>
{
    el.style.animation = "example 10s linear 0s infinite "
}


// export const globe = handleEarth()