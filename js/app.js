/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — MAIN APP CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  
  // Initialize Modules
  if (typeof initServices === 'function') initServices();
  if (typeof initBeforeAfterSlider === 'function') initBeforeAfterSlider();
  if (typeof initGallery === 'function') initGallery();
  if (typeof initBlog === 'function') initBlog();
  if (typeof initPopups === 'function') initPopups();

  setupHeaderScroll();
  setupMobileMenu();
  setupStatCounters();
  setupBookingForm();
  setupSmoothScroll();
});

// Preloader Progress Simulation (Image 4 Reference)
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  const progressBar = document.getElementById('preloaderProgressBar');
  const percentText = document.getElementById('preloaderPercent');

  if (!preloader || !progressBar || !percentText) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 9) + 5;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = '100%';
      percentText.innerText = '100%';
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }, 250);
    } else {
      progressBar.style.width = `${progress}%`;
      percentText.innerText = `${progress}%`;
    }
  }, 35);
}

// Sticky Header Scroll Handler
function setupHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  });
}

// Mobile Menu Navigation Toggle
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Stat Counters Animation when scrolled into view
function setupStatCounters() {
  const counterElements = document.querySelectorAll('.stat-number[data-count]');
  if (!counterElements.length) return;

  let hasAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(el => {
      const targetStr = el.getAttribute('data-count');
      const isPlus = targetStr.includes('+');
      const isText = isNaN(parseInt(targetStr));
      
      if (isText) return; // Keep as text like "All Over"

      const target = parseInt(targetStr);
      let current = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 20);

      const timer = setInterval(() => {
        current += Math.ceil(target / 50);
        if (current >= target) {
          el.innerText = `${target}${isPlus ? '+' : ''}`;
          clearInterval(timer);
        } else {
          el.innerText = `${current}${isPlus ? '+' : ''}`;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-wrapper');
  if (statsSection) observer.observe(statsSection);
}

// Booking Enquiry Form Submission Handler
function setupBookingForm() {
  const bookingForm = document.getElementById('mainBookingForm');
  if (!bookingForm) return;

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const service = document.getElementById('formService').value;
    const date = document.getElementById('formDate').value;
    const property = document.getElementById('formProperty').value;
    const message = document.getElementById('formMessage').value;

    // Show instant success modal
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
      popupContainer.innerHTML = `
        <div class="modal-overlay active" id="successModal" onclick="closeModalOnOverlay(event, 'successModal')">
          <div class="modal-card text-center" style="max-width: 480px;">
            <button class="modal-close-btn" onclick="closeSuccessModal()">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="popup-icon-badge" style="background: rgba(37, 211, 102, 0.1); color: var(--whatsapp-green);">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2 style="font-size: 1.8rem; color: var(--text-dark); margin-bottom: 10px;">Thank You!</h2>
            <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">
              Your enquiry has been received. Our team will contact you shortly to confirm your booking details.
            </p>
            <div style="display: flex; gap: 12px;">
              <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}.%20Name:%20${encodeURIComponent(name)}" 
                 target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex:1;">
                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <button onclick="closeSuccessModal()" class="btn" style="background: var(--bg-soft); color: var(--text-dark);">
                Done
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.style.overflow = 'hidden';
    }

    bookingForm.reset();
  });
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.getElementById('siteHeader').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
