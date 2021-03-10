function truckAnimation ()
{

 const container = document.getElementById('drivingTruck');
    console.log(container);
    
    const animItem = bodymovin.loadAnimation
    (
        {
            wrapper:container,
            loop: false,
            autoplay: false,
            path:  'https://assets2.lottiefiles.com/private_files/lf30_9q1sksgo.json'
        }

    );

    container.addEventListener('click', () => 
    
    {
        // container.classList.add('hide')
        animItem.goToAndPlay(0, true)
    }
    );


    
    
    
}