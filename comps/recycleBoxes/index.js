function dispDosDonts(backgroundColour, foregroundColour, headerText, idName)
{
  document.querySelector('#'+idName).style = 'height: 685px;width:50vw;background-color:' + backgroundColour + ';border-radius: 24px;z-index: -1;';
  return dispDontRecycle(foregroundColour,idName,headerText);
}

function dispDontRecycle(foregroundColour,idName,headerText)
{
  
  return '<h3 id="donttext" style="margin: 0 0 0 50px;font-family: sans-serif;color: rgb(255, 255, 255);font-size: 2em;height:15vh;text-align:center;">'+headerText+'</h3><div id="'+idName+'div'+'" style ="display: flex;flex-direction: column;height: 60vh;width: 40vw;border-radius: 24px;align-self: auto;margin: auto;justify-content:center;background-color:'+foregroundColour+';z-index: 3;"></div>'

}


function addItem(img="placeholder.png", text="Soft Plastic")
{
  return '<div class="items" style="flex:1 1 auto;display:flex;padding-left:2vw;padding-right:2vw;"><img src="'+img+'" height=45 width=45 style="flex: 0 0 auto;margin:auto;margin-right:2vw;"><p style="flex: 1 1 auto;margin:auto;text-align:left;font-size:0.5em;">'+ text + '</p></div>'
}pageXOffset;