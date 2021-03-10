function GarbageUI ()
{

 const container = document.getElementById('black');
    console.log(container);
    
    const animItem = bodymovin.loadAnimation
    (
        {
            wrapper:container,
            loop: false,
            autoplay: false,
            path:  'https://assets4.lottiefiles.com/packages/lf20_9s7fcilz.json'
        }

    );

    container.addEventListener('click', () => 
    
    {
        // container.classList.add('hide')
        animItem.goToAndPlay(0, true)
    }
    );


    
    
    
}

