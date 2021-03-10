function handleEarth ()
{
    return `
    
<div style="
    position: relative; 
    // border: 2px solid black; 
    border-radius: 50px;
    width: 150px; height: 150px;   
    align-items: center; 
    display: flex; 
    justify-content: center;
    "> 
    
    <img style="object-fit: contain;
     height: 100%;
     width: 100%; 
     animation-name:example; 
     animation-duration: 10s;
    
    //  animation-iteration-count: infinite;
    //  animation-timing-function: linear; 
    " src="./images/Interactive  globe.png" alt="image of earth">


</div>
    
    `
}


// export const globe = handleEarth()