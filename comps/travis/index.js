function TravisUI(top="200px"){
    return`
    <img src="/images/trashy travis.png" style="
    height:250px;
    width 150px;
    margin-top:50px;
    position:absolute;
    top:${top};
    
    " onclick='TravisUI.chatBubble()'>
   
    `
}


TravisUI.chatBubble = () =>{
    document.getElementById("chat").style.opacity="100";

}
