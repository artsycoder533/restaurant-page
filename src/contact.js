function contact() {
    const contact = document.createElement("section");
    contact.classList.add("contact");
    const details = document.createElement("article");
    details.classList.add("contact__details");
    const address = document.createElement("div");
    address.classList.add("contact__address");
    const p1 = document.createElement("p");
    p1.textContent = "The Taco Spot";
    const p2 = document.createElement("p");
    p2.textContent = "137 W 39th Street";
    const p3 = document.createElement("p");
    p3.textContent = "Tacoville, TO 64551";
    address.append(p1, p2, p3);
    const hours = document.createElement("div");
    hours.classList.add("contact__hours");
    const p4 = document.createElement("p");
    p4.textContent = "Mon - Thurs: 11:00AM - 10:00PM";
    const p5 = document.createElement("p");
    p5.textContent = "Fri - Sat: 11:00AM - 12:00AM";
    const p6 = document.createElement("p");
    p6.textContent = "Sun - CLOSED";
    hours.append(p4, p5, p6);
    const phone = document.createElement("div");
    phone.classList.add("contact__phone");
    const p7 = document.createElement("p");
	p7.textContent = "281-330-8004";
    phone.appendChild(p7);
    const contactForm = document.createElement("article");
    contactForm.append(createForm());
    contactForm.classList.add("contact__form");
    details.append(address, hours, phone);
    contact.append(contactForm, details);
    return contact;
}

function createForm() {
    const form = document.createElement("form");
    form.classList.add("form");
    const name = document.createElement("input");
    name.classList.add("form__name");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Name");
    const email = document.createElement("input");
    email.classList.add("form__email");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email");
    const message = document.createElement("textarea");
    message.classList.add("form__message");
    message.setAttribute("type", "email");
    message.setAttribute("placeholder", "Message");
    const sendBtn = document.createElement("button");
    sendBtn.classList.add("btn");
    sendBtn.textContent = "SEND";
    form.append(name, email, message, sendBtn);
    return form;
}

export { contact };

