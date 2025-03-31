import { app, BrowserWindow, ipcMain } from 'electron'
import { fileURLToPath } from 'url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    const window = new BrowserWindow({
        width: 500,
        height: 530,
        // width: 1200,
        // height:700,
        titleBarStyle: 'hidden',
        // titleBarOverlay: true,
        resizable: false,
        fullscreenable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.loadFile('src/index.html')
    // window.webContents.openDevTools()
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

ipcMain.handle("minimize", () => {
    BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.handle("close", () => {
    BrowserWindow.getFocusedWindow().destroy();
})