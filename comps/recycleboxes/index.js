function handleRecycle ()
{
    const binContainer = document.getElementById('dontrecycle');
    
    const animBin = bodymovin.loadAnimation
    (
        {
            wrapper: binContainer,
            loop: false,
            autoplay: false,
            path: 'https://assets7.lottiefiles.com/packages/lf20_jjewedfz.json'
        }
    );


    binContainer.addEventListener('click', () =>
    
    {
        animBin.goToAndPlay(0, true)
    }
    
    );


}