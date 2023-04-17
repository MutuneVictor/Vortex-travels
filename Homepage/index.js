/* Navigation Active Class */
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});

/* Scroll to Top Button */
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/* Form Validation */
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorContainer = document.getElementById("error-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    errorContainer.innerHTML = "Please fill in all fields.";
  } else {
    errorContainer.innerHTML = "";
    form.submit();
  }
});
