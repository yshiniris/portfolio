
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }

// Certifications
// Get modal elements
const modal = document.getElementById("certModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.getElementById("modalClose");

// Get all cards
const cards = document.querySelectorAll(".card");

// When an image is clicked, open modal
cards.forEach(card => {
  const img = card.querySelector("img");
  img.addEventListener("click", () => {
    modal.style.display = "block"; // show modal
    modalImage.src = img.src;
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.desc;
    modalLink.href = card.dataset.link;
  });
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
