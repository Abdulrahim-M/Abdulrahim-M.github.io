document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "✅ Message sent!";
      form.reset();
    });
  });
  