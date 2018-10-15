
const colors = ['yellow', 'green', 'blue' ,'#f15025', 'rbga(125,125,125,0.5)'];

const btn = document.getElementById('btn');

// add event listener
btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * colors.length);
    const body = document.body;
    
    body.style.backgroundColor = colors[random]

})