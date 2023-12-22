buttons = document.querySelectorAll('.button')
//console.log(buttons)
body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        //console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
});