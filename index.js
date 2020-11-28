const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;
const isMac = process.platform === 'darwin';

let mainWindow;
let addWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add New Todo'
    });

    addWindow.loadURL(`file://${__dirname}/add.html`);
}

const menuTemplate = [
    // {role: 'appMenu'}
    ...(isMac ? [{
        label: app.name
    }] : []),
    {
        label: 'File',
        submenu: [
            { 
                label: 'New Todo',
                click() { createAddWindow(); }
            },
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