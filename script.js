const cards = document.querySelectorAll('.card');
const modal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

   
   
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
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('cert-link')) return;
      const img = card.querySelector('img');
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });