const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true, // set to false for security
    }
})

  mainWindow.loadFile('src/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)
