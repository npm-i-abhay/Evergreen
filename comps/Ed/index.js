function eddyUI(top="0px", top2="30px"){
    return`
    <img src="/images/sad ed.png" style="
	height: 200px;
	width: 250px;
	margin-top: 50px;
    position:absolute;
    left: 10px;
    top:${top};
    " onclick='eddyUI.chatBubble(this)'>
 
    `
}


eddyUI.chatBubble = () =>{
    document.getElementById("chat2").style.opacity="100";
}