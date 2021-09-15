
function renderHome() {
    document.body.append(renderNav());
    document.body.append(renderContent());
    document.body.append(renderFooter());
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
    let homeLink = document.createElement("a");
    homeLink.classList.add("nav__link");
    homeLink.classList.add("active");
    homeLink.id = "home";
    homeLink.href = "#";
    homeLink.textContent = "Home";
    li.appendChild(homeLink);
    let li1 = document.createElement("li");
    let menuLink = document.createElement("a");
    menuLink.classList.add("nav__link");
    menuLink.id = "menu";
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    li1.appendChild(menuLink);
    let li2 = document.createElement("li");
    let contactLink = document.createElement("a");
    contactLink.classList.add("nav__link");
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
    p.textContent = `Serving up the best tacos on the East Coast since 2017.  
    Creativity and attention to detail help craft our mouth-watering recipes.
    Dont hesitate, stop by and let one of our tacos "hit the spot!"`;
    heroDescription.appendChild(p);
    hero.appendChild(heroHeader);
    hero.appendChild(heroDescription);
    container.append(hero);
    return container;
}

function renderFooter() {
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    let small = document.createElement("small");
    const date = new Date().getFullYear();
    small.innerHTML = `&copy; ${date} Coded & Created By Natasha Johnson`;
    footer.appendChild(small);
    return footer;
}

export {renderHome, renderNav, renderContent};
