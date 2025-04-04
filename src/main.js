import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path';
import fs from 'fs';

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
            contextIsolation: false,
            spellcheck: false
        },
        icon: '../graphic_res/weather/Rainy.png'
    })

    window.loadFile('src/index.html')
    ipcMain.on('open-dev-tools', () => {
        window.webContents.openDevTools();
    });
} 

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

ipcMain.handle('getWeatherConfig', () => {
    try {
        const configPath = path.join(app.getAppPath(), 'weatherconfig.json');
        return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch (error) {
        console.error('Config error:', error);
        return { location: { city: "Urithiru", latitude: 80.0000, longitude:0.0000 }, testing: true };
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') app.quit()
})