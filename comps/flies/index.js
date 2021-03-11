function moveFlies(animName="flyfly")
{
    return`
    <div style="
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100px; 
    height: 100px;
    // border: 2px solid black; " id="fly">
        
        
        <img  style=" position: absolute; animation-name: ${animName}; animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;" src="./images/Fly.png" alt="">
    </div>

    `
}
