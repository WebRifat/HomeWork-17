let counters = document.querySelectorAll('.counter');




counters.forEach(counter => {
    
    let endingValue = counter.dataset.num;

    let count = 0;
    let duration = 100;

    let counting = setInterval(() => {

        counter.innerHTML = count++;
        if (count > endingValue) {
            clearInterval(counting);

        }
        
        // console.log(count)

    }, (duration / endingValue))
    
});



// msg 
let btn = document.querySelector('.btn');
let msg = document.querySelector('.msg');






btn.addEventListener('click', () => {

    msg.classList.add('active');

    setTimeout(() => {
    msg.classList.remove('active');
        
    }, 5000);

})