function handleGarbage(top="5em", left="20em", url="/images/garbage/grouped garbage.png")
{
    return`
    <div>
    <img style="
    position: absolute;
    left:${left};
    top: ${top};
    animation: falling 5s linear 0s;" src="${url}" alt="">

    </div>
    
    `
}

