function animatecompost ()
{
    const binContainer = document.getElementById('compostPit');

    const animBin = bodymovin.loadAnimation
    (
        {
            wrapper: binContainer,
            loop: true,
            autoplay: true,
            path: 'https://assets7.lottiefiles.com/packages/lf20_jjewedfz.json'
        }
    );


    binContainer.addEventListener('click', () =>
    
    {
        animBin.goToAndPlay(0, true)
    }
    
    );


}
