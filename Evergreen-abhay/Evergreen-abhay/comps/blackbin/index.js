function animateBlackBin(){
    const svgContainer = document.getElementById("blackbin");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_ehtbstqc.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}