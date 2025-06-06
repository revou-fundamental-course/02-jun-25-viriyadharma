// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Fill the name dynamically
  const nameSpan = document.getElementById('name');
  const userName = prompt('Please enter your name:', 'Your Name');
  if (nameSpan) {
    nameSpan.textContent = userName || 'Guest';
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  
  if (slider) {
    const slides = slider.children;
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
      // Ensure index wraps around
      if (index >= totalSlides) {
        index = 0;
      } else if (index < 0) {
        index = totalSlides - 1;
      }
      // Apply transform to slide container
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Function to go to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    // Optional: previous slide function
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }

    // Start automatic slide transition
    const slideInterval = setInterval(nextSlide, 3000);

    // Initialize the slider position
    showSlide(currentIndex);
  }
});

// Select the toggle button and nav
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Attach event listener to the form
document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const namaInput = document.getElementById('nama');
  const tanggalInput = document.getElementById('tanggal');
  const pesanInput = document.getElementById('pesan');
  const jenkelRadios = document.querySelectorAll('input[name="jeniskelamin"]');

  const nama = namaInput.value.trim();
  const tanggal = tanggalInput.value;
  const pesan = pesanInput.value.trim();

  // Get selected gender
  let jeniskelamin = '';
  for (const radio of jenkelRadios) {
    if (radio.checked) {
      jeniskelamin = radio.value;
      break;
    }
  }

  // Validate "Nama" to not contain numbers
  const hasNumber = /\d/.test(nama);
  if (hasNumber) {
    alert('Nama tidak boleh mengandung angka.');
    namaInput.focus();
    return;
  }

  // Validate that gender is selected
  if (!jeniskelamin) {
    alert('Silakan pilih Jenis Kelamin.');
    return;
  }

  // Show the "Hasil" heading
  document.getElementById('hasilTitle').style.display = 'block';

  // Display the result in the right box
  const resultDiv = document.getElementById('resultContent');
  resultDiv.innerHTML = `
    <p><strong>Name:</strong> ${nama}</p>
    <p><strong>Date:</strong> ${tanggal}</p>
    <p><strong>Gender:</strong> ${jeniskelamin}</p>
    <p><strong>Message:</strong> ${pesan}</p>
  `;

  // Reset the form fields
  document.getElementById('dataForm').reset();
});