let insert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=> {
    let key = e.key === ' '? 'Space' : e.key
    insert.innerHTML = `
    <div>
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>        
    </div>
    `
})

    