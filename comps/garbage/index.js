function handleGarbage(top="5em", left="20em", url="/images/garbage/grouped garbage.png", name="falling")
{
    return`
    <div id='someGarbage' >
    <img style="
    display:flex;
    position:relative;
    left:${left};
    top: ${top};
    animation: ${name} 2s linear 0s infinite;" 
    src="${url}" alt="">

    </div>
    
    `
}



