const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;
const isMac = process.platform === 'darwin';

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
    // {role: 'appMenu'}
    ...(isMac ? [{
        label: app.name
    }] : []),
    {
        label: 'File',
        submenu: [
            { label: 'New Todo'},
            { 
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];