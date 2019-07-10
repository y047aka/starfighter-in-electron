const { app } = require('electron')
const createWindow = require('./createWindow')

const isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == 'true') : false

if (isDev) {
  require('electron-reload')(__dirname)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})