function handleEarth ()
{
    return `
    
<div style="
    position: relative; 
    border: 2px solid black; 
    width: 250px; height: 300px;   
    align-items: center; 
    display: flex; 
    justify-content: center;"> 
    
    <img style="object-fit: contain;
     height: 80%;
     width: 80%; 
     animation-name:example; 
     animation-duration: 10s;
    //  animation-iteration-count: infinite;
    //  animation-timing-function: linear; 
    " src="./images/Interactive  globe.png" alt="image of earth">


</div>
    
    `
}


// export const globe = handleEarth()