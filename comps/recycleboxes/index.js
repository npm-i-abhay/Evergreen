function dispRecycle(backgroundColour='#F1B6B6', foregroundColour='#ECC2C2',headerText='Don\'t recycle', className='dontrecycle'){
    document.querySelector('.'+className).style = 'height: 685px;width:50vw;background-color:' + backgroundColour + ';border-radius: 24px;z-index: -1;';
    return dispDontRecycle(foregroundColour,className,headerText);
  }
  
  function dispDontRecycle(foregroundColour,className,headerText){
    return '<h3 class="donttext" style="margin: 0 0 0 50px;font-family: sans-serif;color: rgb(255, 255, 255);font-size: 64px;height:20vh;">'+headerText+'<h3><div class="'+className+'div'+'" style ="display: flex;flex-direction: column;height: 45vh;width: 40vw;border-radius: 24px;align-self: auto;margin: auto;justify-content:center;background-color:'+foregroundColour+';z-index: 3;"></div>'
  }
  
  
  function addItem(img="placeholder.png", text="Soft Plastic"){
    return '<div class="items" style="flex:1 1 auto;display:flex;padding-left:2vw;padding-right:2vw;font-family: sans-serif;"><img src="'+img+'" height=45 width=45 style="flex: 0 0 auto;margin:auto;margin-right:2vw;"><p style="flex: 1 1 auto;margin:auto;">'+ text + '</p></div>'
  }
  
//function handleRecycle ()
//{
    //const binContainer = document.getElementById//('dontrecycle');
    
   // const animBin = bodymovin.loadAnimation
    //(
        {
    //        wrapper: binContainer,
    //        loop: false,
    //        autoplay: false,
     //       path: 'https://assets7.lottiefiles.com/packages/lf20_jjewedfz.json'
      //  }
   // );


   // binContainer.addEventListener('click', () =>
    
   // {
   //     animBin.goToAndPlay(0, true)
    //}
 
    //);


}