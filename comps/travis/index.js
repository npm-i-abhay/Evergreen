function TravisUI(){
    return`
    <img src="/images/trashy travis.png" style="
    height:250px;
    width 150px;
    margin-top:50px;
    position:absolute;
    top:250px;
    
    " onclick='TravisUI.chatBubble()'>
   
    `
}


TravisUI.chatBubble = () =>{
    document.getElementById("chat2").style.opacity="100";

}
