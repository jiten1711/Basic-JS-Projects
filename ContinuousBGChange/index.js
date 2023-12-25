const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')

start.addEventListener('click', startChanging)
stop.addEventListener('click', stopChanging)
let si
function startChanging() {
    si = setInterval(() => {
        let rand = Math.random().toString().substring(2,8)
        let bg = '#' + rand
        //console.log(bg)
        body.style.backgroundColor = bg
    }, 1000)
}

function stopChanging() {
    clearInterval(si);
}