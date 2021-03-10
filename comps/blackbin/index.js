function animateBlackBin(){
    const svgContainer = document.getElementById("black");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_rfznze0c.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}