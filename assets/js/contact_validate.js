// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Validation
  if (!data.name || !data.email || !data.message) {
    alert("Please fill in all required fields marked with *");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Here you would typically send the data to your server
  console.log("Form submitted:", data);

  // Show success message
  alert(
    "Thank you for contacting us, " +
      data.name +
      "! We will get back to you within 24 hours at " +
      data.email
  );

  // Reset form
  this.reset();
});

// Add input animation
document.querySelectorAll("input, select, textarea").forEach((element) => {
  element.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.01)";
  });

  element.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});
