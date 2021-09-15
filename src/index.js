import "./style.css";

import {renderHome, renderContent} from "./render.js";
import { menu } from "./menu.js";
import { contact } from "./contact";

window.addEventListener("DOMContentLoaded", renderHome());
const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");

homeTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
contactTab.addEventListener("click", switchTab);

function switchTab(e) {
    const oldContent = document.getElementById("content");
    if (e.target.id === "home") {
        oldContent.firstChild.remove();
        oldContent.append(renderContent());
    }
    else if (e.target.id ==="menu") {
        oldContent.firstChild.remove();
        oldContent.append(menu());
    }
    else if (e.target.id === "contact") {
        oldContent.firstChild.remove();
        oldContent.append(contact());
    }
}

//menuTab.addEventListener("click", menu);

