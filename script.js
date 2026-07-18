// =========================
// GOJE WELLNESS SCRIPT
// =========================

// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }
});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".fade-up").forEach((item) => {
    observer.observe(item);
});

// Back to Top Button
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        if (window.scrollY > 300) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    }

});

// Smooth Back To Top
if (topBtn) {

    topBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// Sticky Navigation Shadow
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.1)";

    } else {

        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,.06)";

    }

});

// Appointment Form → WhatsApp
const form = document.querySelector("#appointmentForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("#name").value;
        const phone = document.querySelector("#phone").value;
        const age = document.querySelector("#age").value;
        const gender = document.querySelector("#gender").value;
        const address = document.querySelector("#address").value;
        const condition = document.querySelector("#condition").value;
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;
        const homeVisit = document.querySelector("#homevisit").value;

        const message =
`Good day Doctor.

I would like to book a physiotherapy appointment.

Full Name: ${name}

Phone Number: ${phone}

Age: ${age}

Gender: ${gender}

Address: ${address}

Condition: ${condition}

Preferred Date: ${date}

Preferred Time: ${time}

Home Visit: ${homeVisit}

Thank you.`;

        window.open(
            `https://wa.me/2348025506344?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

}

// Active Navigation Link
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.style.color = "#14B8A6";

    }

});
