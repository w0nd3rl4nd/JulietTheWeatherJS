import { app, BrowserWindow, ipcMain } from 'electron'
const createWindow = () => {
    const window = new BrowserWindow({
        // width: 500,
        // height: 530,
        width: 1200,
        height:700,
        titleBarStyle: 'hidden',
        // titleBarOverlay: true,
        resizable: false,
        fullscreenable: false,
        maximizable: false,
    })

    window.loadFile('src/index.html')
    window.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })


})

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') app.quit()
})