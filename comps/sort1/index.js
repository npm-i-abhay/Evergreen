function handleDrag (left="2em", top="4em", url="./images/glass.png")
{
  return `
  
  <img class='dragger' style="
    display:flex;
    object-fit:contain;
    margin-right:0;
    position:relative;
    left:${left};
    top: ${top};" 
    src="${url}" alt="">
  
  `   
}