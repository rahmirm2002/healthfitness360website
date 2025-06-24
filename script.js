// Alert message for 'Get Started' button
function alertMessage() {
    alert("Welcome! Let's get started on your fitness journey!");
  }
  
  // Submit form event
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    document.getElementById("contact-form").reset();
  });
  