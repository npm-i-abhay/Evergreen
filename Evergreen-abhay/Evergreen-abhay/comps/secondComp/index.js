function handleRecycle ()
{
    const binContainer = document.getElementById('greenbin');
    
    const animBin = bodymovin.loadAnimation
    (
        {
            wrapper: binContainer,
            loop: false,
            autoplay: false,
            //path: 'https://assets8.lottiefiles.com/packages/lf20_kdqfk8zc.json'
            // path: 'https://assets9.lottiefiles.com/packages/lf20_cd9e0ayh.json'
            path: 'https://assets8.lottiefiles.com/packages/lf20_il6cnf14.json'
        }
    );


    binContainer.addEventListener('click', () =>
    
    {
        animBin.goToAndPlay(0, true)
    }
    
    );


}

// export const recycle = handleRecycle();