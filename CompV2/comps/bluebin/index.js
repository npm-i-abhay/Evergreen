function animateBin(){
    const svgContainer = document.getElementById("bin");

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_hvcwnlgl.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}

