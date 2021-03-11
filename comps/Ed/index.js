function eddyUI(top="10px"){
    return`
    <img src="/images/sad ed.png" style="
	height: 200px;
	width: 250px;
	margin-top: 50px;
    position:absolute;
    left: 3px;
    top:${top};
    " onclick='eddyUI.chatBubble(this)'>
 
    `
}


eddyUI.chatBubble = () =>{
    document.getElementById("chat").style.opacity="100";
}