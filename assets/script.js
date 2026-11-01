const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const CONTACT_EMAIL = "logeshvaranit@gmail.com";
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const senderEmail = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "General enquiry").trim();
    const message = String(data.get("message") || "").trim();

    const subject = "Portfolio enquiry - " + service;
    const body =
      "Hello Logeshvaran,\n\n" +
      "I would like to discuss an IT service/project.\n\n" +
      "Name: " + name + "\n" +
      "Email: " + senderEmail + "\n" +
      "Contact number: " + String(data.get("phone") || "").trim() + "\n" +
      "Service required: " + service + "\n\n"
      "Project details:\n" + message + "\n\n" +
      "Thank you.";

    // Open Gmail's compose window with the recipient and enquiry details prefilled.
    const gmailCompose =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" + encodeURIComponent(CONTACT_EMAIL) +
      "&su=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  });
}
