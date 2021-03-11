function statBar ()
{
    return`
    <div onclick="statBar.handleHeight(this)" style="
    position: relative;
    display;flex;
    left:60em;
    height:5em;
    width:15em;
    background-color:green;
    color:white;
    padding:1em;
    transition:all 2s;
    ">
    something here
    </div>
    `
}

statBar.handleHeight = (el)=>
{
    el.style.height= "25em"
}