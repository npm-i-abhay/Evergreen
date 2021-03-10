function handleChat(text="The chat")
{
    return `
    <div style='
    padding:1em; 
    height: 4em;
    width: 5em;
    border:1px solid black;
    border-radius:1.5em;
    color:white;
    font-family: arial ;
    background-color:grey;
    align-items:center;
    text-align:center;
    justify-items:center;
    transition: all 1s;
    
    ' >
    ${text}
    
    </div>
    
    `
}




export const chatChat = handleChat();