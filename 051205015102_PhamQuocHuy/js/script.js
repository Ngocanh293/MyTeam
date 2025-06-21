document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const closeBtn = thankYouMessage.querySelector(".close-btn");

  // Handle contact form
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    thankYouMessage.style.display = "block";
    contactForm.reset();
  });

  closeBtn.addEventListener("click", function () {
    thankYouMessage.style.display = "none";
  });

  // Handle scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
  });
});
