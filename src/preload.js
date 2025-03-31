import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('windowControls', {
    minimize: () => ipcRenderer.invoke('minimize'),
    close: () => ipcRenderer.invoke('close')
});