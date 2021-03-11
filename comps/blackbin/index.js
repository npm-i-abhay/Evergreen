function animateBlackBin(){
    const svgContainer = document.getElementById("blackbin");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_j3nrkfs4.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}