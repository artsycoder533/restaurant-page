
function renderHome() {
    document.body.append(renderNav());
	document.body.append(renderContent());
}

function renderNav() {
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    let navHeader = document.createElement("div");
    navHeader.classList.add("nav__header");
    let navHeading = document.createElement("h2");
    navHeading.classList.add("nav__logo");
    navHeading.textContent = "The Taco Spot";
    navHeader.appendChild(navHeading);
    let navLinks = document.createElement("ul");
    navLinks.classList.add("nav__links");
    let li = document.createElement("li");
    li.classList.add("nav__link");
    let homeLink = document.createElement("a");
    homeLink.id = "home";
    homeLink.href = "#";
    homeLink.textContent = "Home";
    li.appendChild(homeLink);
    let li1 = document.createElement("li");
    li1.classList.add("nav__link");
    let menuLink = document.createElement("a");
    menuLink.id = "menu";
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    li1.appendChild(menuLink);
    let li2 = document.createElement("li");
    li2.classList.add("nav__link");
    let contactLink = document.createElement("a");
    contactLink.id = "contact";
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    li2.appendChild(contactLink);
    navLinks.appendChild(li);
    navLinks.appendChild(li1);
    navLinks.appendChild(li2);
    nav.append(navHeader, navLinks);
    return nav;
}

function renderContent() {
    let container = document.createElement("div");
    container.id = "content";
    let hero = document.createElement("section");
    hero.classList.add("hero");
    let heroHeader = document.createElement("section");
    heroHeader.classList.add("hero__header");
    let h2 = document.createElement("h2");
    h2.classList.add("hero__heading");
    h2.textContent = "Everyday is for Tacos, not just Tuesday!";
    heroHeader.appendChild(h2);
    let heroDescription = document.createElement("article");
    heroDescription.classList.add("hero__description");
    let p = document.createElement("p");
    p.classList.add("hero__text");
    p.textContent = "Serving up the best tacos on the East Coast since 2017.  Creativity and attention to detail help craft our mouth-watering recipes.  Dont hesitate, stop by and let one of our tacos 'hit the spot!'";
    heroDescription.appendChild(p);
    hero.appendChild(heroHeader);
    hero.appendChild(heroDescription);
    let footer = document.createElement("footer");
    let small = document.createElement("small");
    small.textContent = "";
    container.append(hero);
    return container;
}



export {renderHome, renderNav, renderContent};
