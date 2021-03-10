function animateTrash(){
    const svgContainer = document.getElementById('trashpile');

const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg', 
    autoplay: false,
    loop: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_wmbv9bjr.json'
});

svgContainer.addEventListener('click', () => {
    animItem.goToAndPlay(0,true);
})
}