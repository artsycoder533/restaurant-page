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
    const tabs = document.querySelectorAll(".nav__link");
    if (e.target.id === "home") {
        oldContent.firstChild.remove();
        oldContent.append(renderContent());
        addActive(e.target, tabs);
    }
    else if (e.target.id === "menu") {
        oldContent.firstChild.remove();
        oldContent.append(menu());
        addActive(e.target, tabs);
    }
    else if (e.target.id === "contact") {
        oldContent.firstChild.remove();
        oldContent.append(contact());
        addActive(e.target, tabs);
    }
}

function addActive(target, tabs) {
    const tabLinks = Array.from(tabs);
    tabLinks.forEach(function (link) {
        console.log(link.id, target.id);
        if (link.id == target.id) {
            console.log("active");
            link.classList.add("active");
        } else {
            link.classList.remove("active");
            console.log("not active");
        }
    });
}



