import path from "path";
import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "./app";
import { QMainWindow, QLabel, QSystemTrayIcon, QIcon, QMenu, QAction } from "@nodegui/nodegui";

process.title = "CopyPocket";

Renderer.render(<App />);

const win = new QMainWindow();
win.setWindowTitle("Meme Search");
const label = new QLabel();
label.setText("Hello World");
win.setCentralWidget(label);
systemTrayIcon(win);
win.show();

global.win = win;

// This is for hot reloading (this will be stripped off in production by webpack)
if (module.hot) {
    module.hot.accept(["./app"], function () {
        Renderer.forceUpdate();
    });
}

function systemTrayIcon(win: QMainWindow) {
    const iconImg = require("../assets/logo.png").default;
    const icon = new QIcon(path.resolve(__dirname, iconImg));
    const tray = new QSystemTrayIcon();
    tray.setIcon(icon);
    tray.show();

    // Menu that should pop up when clicking on systray icon.
    const menu = new QMenu();
    tray.setContextMenu(menu);

    //Each item in the menu is called an action
    const visibleAction = new QAction();
    menu.addAction(visibleAction);
    visibleAction.setText("Show/Hide");
    visibleAction.addEventListener("triggered", () => {
        if (win.isVisible()) {
            win.hide();
        } else {
            win.show();
        }
    });

    global.tray = tray;
}
