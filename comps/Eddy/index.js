function eddyUI(){
    return`
    <img src="/images/edTheWorm.jpg" style="
	transform: scaleX(-1);
	height: 200px;
	width: 250px;
	" onclick='eddyUI.chatBubble()'>
	<img src="/images/chat.jpg" style="
    height:100px;
    width: 146px;
    position: absolute;
    top: 100px;
    left: 100px;
    opacity: 0;
    "
    id="chat2"
    >

    `
}


eddyUI.chatBubble = () =>{
    document.getElementById("chat2").style.opacity="100";
}

//export const Eddy = eddyUI();