function contact() {
    const contact = document.createElement("section");
    contact.classList.add("contact");
    const details = document.createElement("article");
    details.classList.add("contact__details");
    const address = document.createElement("div");
    address.classList.add("contact__address");
    let p1 = document.createElement("p");
    p1.textContent = "The Taco Spot";
    let p2 = document.createElement("p");
    p2.textContent = "137 W 39th Street";
    let p3 = document.createElement("p");
    p3.textContent = "Tacoville, TO 64551";
    address.append(p1, p2, p3);
    const hours = document.createElement("div");
    hours.classList.add("contact__address");
    hours.textContent = `Mon - Thurs: 11:00AM - 10:00PM
    Fri - Sat: 11:00AM - 12:00AM
    Closed Sunday`;
    const phone = document.createElement("div");
    phone.classList.add("contact__address");
    phone.textContent = `281-330-8004`;
    const contactForm = document.createElement("article");
    contactForm.classList.add("contact__form");
    details.append(address, hours, phone);
    contact.append(contactForm, details);
    return contact;
}

function createForm() {
    const form = document.createElement("form");

}

export { contact };

