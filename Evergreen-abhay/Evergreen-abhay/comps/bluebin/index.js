function animateBlueBin(){
    const svgContainer = document.getElementById("bluebin");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_ndlewtje.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}

