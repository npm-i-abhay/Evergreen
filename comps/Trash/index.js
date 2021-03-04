function TrashUI(){
    return`
	<img src="/images/bin.jpg" 
	id="bin"
	style="
	height: 250px;
	width: 150px;
	"
	onclick='TrashUI.HandleClick()'
	>


    `
}





TrashUI.HandleClick = () =>{
	document.getElementById("bin").style.left="0px";
}



//export const Trash = TrashUI();