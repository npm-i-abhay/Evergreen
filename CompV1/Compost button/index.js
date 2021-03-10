function appleanimation(){
const svgContainer = document.getElementById('button');

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_wacnyh75.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}