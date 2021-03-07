function animateTruck ()
{
  


 const container = document.getElementById('dumpTruck');
    console.log(container);
    
    const animItem = bodymovin.loadAnimation
    (
        {
            wrapper:container,
            loop: false,
            autoplay: false,
            path:  'https://assets1.lottiefiles.com/packages/lf20_qdmr8wxk.json'
        }

    );

    container.addEventListener('click', () => 
    
    {
        // container.classList.add('hide')
        animItem.goToAndPlay(0, true)
    }
    );


    
    
    
}
// export const greenTruck = animateTruck();


