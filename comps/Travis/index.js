function TravisUI(){
    return`
    <img src="/images/trashyTravis.jpg" style="
    height:250px;
    width 150px;
    " onclick='TravisUI.chatBubble()'>
    <div style="
    height:85px;
    width: 146px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 350px;
    opacity: 0;
    background-color:#C4C4C4;
    border-radius: 10px;
    text-align: center;
    "
    id="chat"
    >
    Hey Ed!
    </div>

    `
}


TravisUI.chatBubble = () =>{
    document.getElementById("chat").style.opacity="100";
}

//export const Travis = TravisUI();