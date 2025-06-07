// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Fill the name dynamically
  const nameSpan = document.getElementById('name');
  const userName = prompt('Please enter your name:', 'Your Name');
  if (nameSpan) {
    nameSpan.textContent = userName || 'Guest';
  }
})

        // Optional: attempt to play the audio as soon as the page loads
        window.onload = function() {
            const audio = document.getElementById('music');
            // Try to play the audio; handle promise for modern browsers
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    console.log("Autoplay prevented:", error);
                });
            }
        };

  document.getElementById('playBtn').addEventListener('click', () => {
    const iframe = document.getElementById('myVideo');
    iframe.style.display = 'block';
    // Optionally, set the src with autoplay and mute if not already set
    iframe.src = 'https://www.youtube.com/embed/AOOwKKHSyns?autoplay=1&mute=1';
  });

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

  // Set max date to today on page load
  document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    const todayStr = `${year}-${month}-${day}`;

    const tanggalInput = document.getElementById('tanggal');
    tanggalInput.setAttribute('max', todayStr);
    tanggalInput.value = todayStr;

    // Store globally for validation
    window.todayStr = todayStr;

    // Also, initialize current date-time string if needed
    // (You can define currentDateTimeString here if you want)
  });

// Attach event listener to the form
document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const namaInput = document.getElementById('nama');
  const tanggalInput = document.getElementById('tanggal');
  const emailInput = document.getElementById('email');
  const pesanInput = document.getElementById('pesan');
  const jenkelRadios = document.querySelectorAll('input[name="jeniskelamin"]');

  const nama = namaInput.value.trim();
  const tanggal = tanggalInput.value;
  const email = emailInput.value.trim();
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

  // Validate email
  if (!email.includes('@') || !email.includes('.com')) {
    errorDiv.textContent = 'Please enter a valid email containing "@" and ".com".';
    resultDiv.innerHTML = '';
    return;
  }
  
  // Date validation
  if (!tanggal > window.todayStr) {
    alert('Tanggal tidak boleh melebihi hari ini.');
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
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${jeniskelamin}</p>
    <p><strong>Message:</strong> ${pesan}</p>
    <p><strong>Current Date & Time:</strong><br> ${currentDateTimeString}</p>
  `;

  // Reset the form fields
  document.getElementById('dataForm').reset();
});