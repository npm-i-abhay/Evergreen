function animateButton(){
    return `
    <div class="button" style='
    width: 340px;
    height: 110px;
    background: #619364;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    '>

    <div id="apple">
    </div>

    <div id="text" style='margin-right: 40px; font-size:1.5em;'>
    Compost
    </div>
    
    </div>
    `
    function appleAnimation(){
        const svgContainer = document.getElementById('apple')
        
        const animateItem = bodymovin.loadAnimation({
            wrapper:svgContainer,
            animType: 'svg', 
            autoplay: false,
            loop: false,
            path: 'https://assets7.lottiefiles.com/packages/lf20_wacnyh75.json'   
        });
        
        svgContainer.addEventListener('click', () => {
            animItem.goToAndPlay(0,true);
        });
    }

}

//export const button = buttonUI()