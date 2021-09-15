import avocado from "./images/avocado.jpg";
import carneasada from "./images/carneasada.jpg";
import chips from "./images/chips.jpg";
import fish from "./images/fish.jpg";
import vegetarian from "./images/vegetarian.jpg";

function menu() {
    const menu = document.createElement("section");
    menu.classList.add("menu");
    const title = document.createElement("h2");
    title.classList.add("menu__title");
    title.textContent = "Menu";
    menu.appendChild(title);
    const avocadoImg = img(avocado);
    const carneasadaImg = img(carneasada);
    const chipsImg = img(chips);
    const fishImg = img(fish);
    const vegetarianImg = img(vegetarian);
    const menuItemImgs = [avocadoImg, carneasadaImg, chipsImg, fishImg, vegetarianImg];
    const menuItemDescriptions = ["Avocado Dip $6.99", "Carne Asada Tacos $10.99", "3 Chip Sampler Platter  $7.99", "Fried Fish Tacos  $9.99", "Vegetarian Tacos $8.99"];
    menuItemImgs.forEach(function (menuItem, index) {
			menu.appendChild(
				createMenuItem(
					menuItemDescriptions[index],
					"menu__item",
					"menu__description",
					"menu__img",
					menuItem
				)
			);
		});
    return menu;
}

function img(src) {
    const img = new Image();
    img.src = src;
    return img;
}

function createMenuItem(description, className1, className2, className3, img) {
    const menuItem = document.createElement("section");
    menuItem.classList.add(className1);
    const menuDescription = document.createElement("article");
    menuDescription.classList.add(className2);
    menuDescription.textContent = description;
    const menuImg = document.createElement("article");
    menuImg.classList.add(className3);
    menuImg.appendChild(img);
    menuItem.append(menuImg, menuDescription);
    return menuItem;
}

export {menu};