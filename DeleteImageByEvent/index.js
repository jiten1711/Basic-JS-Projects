images.addEventListener('click', (e) => {
    let tag = e.target.tagName
    if(tag === 'IMG') {
        let ll = e.target.parentElement
        ll.remove()
    }
})

// google.addEventListener('click', (e) => {
//     e.preventDefault()
// })