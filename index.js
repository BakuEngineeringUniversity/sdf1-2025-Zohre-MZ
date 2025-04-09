const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Function to create the browser window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Allows renderer process (HTML, JS) to access Node.js APIs
      contextIsolation: false // Allow using Node.js features directly
    }
  });

  // Load the index.html of the app
  win.loadFile('index.html');

  // Open DevTools (optional)
  win.webContents.openDevTools();
}

// When Electron has finished initialization, create the window
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});