function animateBarChart(){
    const svgContainer = document.getElementById('interactiveGraph');

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_ggkwliq4.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}