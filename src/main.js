import { app, BrowserWindow, ipcMain } from 'electron'

const createWindow = () => {
    const window = new BrowserWindow({
        width: 600,
        height: 600,
        // width: 1200,
        // height:700,
        titleBarStyle: 'hidden',
        titleBarOverlay: true,
        resizable: false,
        fullscreenable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
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