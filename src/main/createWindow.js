const { BrowserWindow } = require('electron')

let win = null

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL(`file://${ __dirname }/../index.html`)
  win.on('closed', () => { win = null })
}

module.exports = createWindow