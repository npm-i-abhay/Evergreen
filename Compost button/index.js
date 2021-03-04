const start = document.querySelector('button');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_klvecctw.json'
});

start.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})