const { ipcRenderer } = require('electron')
console.log('Loaded Script')

document.getElementById('minimize').addEventListener('click', () => {
    console.log('Minimize!~')
    ipcRenderer.invoke("minimize");
})

document.getElementById('close').addEventListener('click', () => {
    console.log('Close!~')
    ipcRenderer.invoke("close");
})