const start = document.querySelector('svg');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_hvcwnlgl.json'
});

start.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})