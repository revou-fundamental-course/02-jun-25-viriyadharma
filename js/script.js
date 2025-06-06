// Fill the name dynamically
document.addEventListener('DOMContentLoaded', () => {
  // Assuming #name is an input element
  const nameInput = document.getElementById('name');
  const userName = prompt('Please enter your name:', 'Your Name');
  if (nameInput) {
    nameInput.textContent  = userName || 'Guest';
  }

  // Sliding functionality
  const slider = document.getElementById('slider');
  if (slider) {
    const totalSlides = slider.children.length;
    let currentIndex = 0;

    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
  }

  // Smooth scroll with offset (combine into one)
  const headerOffset = 40; // adjust as needed
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  }
);