function handleRecycle ()
{
    const binContainer = document.getElementById('greenBin');
    
    const animBin = bodymovin.loadAnimation
    (
        {
            wrapper: binContainer,
            loop: false,
            autoplay: false,
            path: 'https://assets9.lottiefiles.com/packages/lf20_cd9e0ayh.json'
        }
    );


    binContainer.addEventListener('click', () =>
    
    {
        animBin.goToAndPlay(0, true)
    }
    
    );


}

// export const recycle = handleRecycle();