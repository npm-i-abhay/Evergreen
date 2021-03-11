function animateBlueBin(){
    const svgContainer = document.getElementById("bluebin");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_yo7z7ux6.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}