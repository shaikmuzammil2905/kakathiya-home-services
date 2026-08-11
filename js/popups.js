/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — POPUPS & CONVERSION TRIGGERS
   Enquiry Popup & Call Popup with intelligent triggers and ESC key support
   ========================================================================== */

function initPopups() {
  let hasTriggeredOnScroll = false;

  window.addEventListener('scroll', () => {
    // Add pulsing attention effect to side gift button on scroll
    const giftBtn = document.querySelector('.side-btn-gift');
    if (giftBtn) {
      if (window.scrollY > 150) {
        giftBtn.classList.add('pulse-on-scroll');
      } else {
        giftBtn.classList.remove('pulse-on-scroll');
      }
    }

    // Trigger Festive Offer Gift popup automatically after user scrolls down past 300px
    if (!hasTriggeredOnScroll && window.scrollY > 300 && !sessionStorage.getItem('kakatiya_popup_dismissed')) {
      hasTriggeredOnScroll = true;
      setTimeout(() => {
        openFestiveOfferPopup();
      }, 400);
    }
  });

  // Fallback timer if user remains at top of page after 7 seconds
  setTimeout(() => {
    if (!hasTriggeredOnScroll && !sessionStorage.getItem('kakatiya_popup_dismissed')) {
      hasTriggeredOnScroll = true;
      openFestiveOfferPopup();
    }
  }, 7000);
}

function openFestiveOfferPopup() {
  const container = document.getElementById('popupContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-overlay active" id="festiveOfferModal" onclick="closeModalOnOverlay(event, 'festiveOfferModal')">
      <div class="modal-card festive-offer-card" style="max-width: 520px;">
        <button class="modal-close-btn" onclick="closePopupModal('festiveOfferModal')" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        
        <div class="festive-top-badge">
          <i class="fa-solid fa-gift"></i> EXCLUSIVE FESTIVE OFFER
        </div>
        
        <h2 class="festive-title">
          GET <span class="highlight-green-wavy">20% OFF</span> YOUR CLEANING!
        </h2>
        
        <p class="festive-subtitle">
          Book any deep cleaning service today in Hyderabad & get an instant discount on machine floor scrubbing & sanitization!
        </p>

        <!-- Stats Counter Section (Image 3 Reference) -->
        <div class="festive-stats-card">
          <div class="festive-stat-item">
            <div class="festive-stat-value" id="festiveHomesCount">0+</div>
            <div class="festive-stat-label">HOMES<br>CLEANED</div>
          </div>
          <div class="festive-stat-item border-x">
            <div class="festive-stat-value">
              <span id="festiveRatingCount">0.0</span>
              <i class="fa-solid fa-star star-gold"></i>
            </div>
            <div class="festive-stat-label">RATING<br>SCORE</div>
          </div>
          <div class="festive-stat-item">
            <div class="festive-stat-value" id="festiveSatisfiedCount">0%</div>
            <div class="festive-stat-label">SATISFACTION</div>
          </div>
        </div>

        <!-- Coupon Code Card -->
        <div class="festive-coupon-box" onclick="copyCouponCode('KAKATIYA20SPECIAL')">
          <div class="coupon-left">
            <span class="coupon-label">USE COUPON CODE:</span>
            <strong class="coupon-code">KAKATIYA20SPECIAL</strong>
          </div>
          <div class="coupon-badge">20% OFF</div>
        </div>

        <!-- Action CTAs -->
        <div class="festive-actions">
          <button class="btn btn-festive-primary" onclick="applyDiscountAndBook('KAKATIYA20SPECIAL')">
            <i class="fa-solid fa-wand-magic-sparkles"></i> CLAIM DISCOUNT & BOOK NOW <i class="fa-solid fa-arrow-right"></i>
          </button>
          <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20want%20to%20claim%20the%2020%25%20OFF%20Exclusive%20Festive%20Offer%20(Code:%20KAKATIYA20SPECIAL)" 
             target="_blank" rel="noopener noreferrer" class="btn btn-festive-whatsapp">
            <i class="fa-brands fa-whatsapp"></i> CLAIM VIA WHATSAPP CHAT
          </a>
        </div>

        <div class="festive-footer-note">
          <i class="fa-solid fa-shield-halved"></i> Verified Eco-Friendly Products & Professional Equipment
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
  animateModalCounters();
}

function animateModalCounters() {
  // 1. Homes count: 0 -> 5,000+
  const homesEl = document.getElementById('festiveHomesCount');
  if (homesEl) {
    let count = 0;
    const target = 5000;
    const step = 150;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        homesEl.innerText = '5,000+';
        clearInterval(timer);
      } else {
        homesEl.innerText = count.toLocaleString() + '+';
      }
    }, 25);
  }

  // 2. Rating count: 0.0 -> 4.9
  const ratingEl = document.getElementById('festiveRatingCount');
  if (ratingEl) {
    let rating = 0;
    const timer = setInterval(() => {
      rating += 0.2;
      if (rating >= 4.9) {
        ratingEl.innerText = '4.9';
        clearInterval(timer);
      } else {
        ratingEl.innerText = rating.toFixed(1);
      }
    }, 45);
  }

  // 3. Satisfaction count: 0 -> 100%
  const satEl = document.getElementById('festiveSatisfiedCount');
  if (satEl) {
    let sat = 0;
    const timer = setInterval(() => {
      sat += 4;
      if (sat >= 100) {
        satEl.innerText = '100%';
        clearInterval(timer);
      } else {
        satEl.innerText = sat + '%';
      }
    }, 35);
  }
}

function copyCouponCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code);
  }
  showToast(`Coupon code "${code}" copied! Discount ready.`);
}

function applyDiscountAndBook(code) {
  closePopupModal('festiveOfferModal');
  openEnquiryPopup();
  showToast(`Coupon "${code}" applied! Please submit your details.`);
}

function openEnquiryPopup() {
  const container = document.getElementById('popupContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-overlay active" id="enquiryPopupModal" onclick="closeModalOnOverlay(event, 'enquiryPopupModal')">
      <div class="modal-card" style="max-width: 520px;">
        <button class="modal-close-btn" onclick="closePopupModal('enquiryPopupModal')">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="popup-icon-badge popup-logo-badge">
          <img src="assets/images/logo.png" alt="Kakatiya Logo" class="popup-badge-logo-img" />
        </div>
        <div class="modal-header text-center">
          <h3>Get Special Cleaning Offer!</h3>
          <p>Book professional cleaning across Hyderabad with instant quote</p>
        </div>
        <form onsubmit="handlePopupFormSubmit(event)">
          <div class="form-group" style="margin-bottom: 12px;">
            <label>Your Full Name *</label>
            <input type="text" id="popupName" class="form-control" placeholder="Enter your name" required />
          </div>
          <div class="form-group" style="margin-bottom: 12px;">
            <label>Phone Number *</label>
            <input type="tel" id="popupPhone" class="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" required />
          </div>
          <div class="form-group" style="margin-bottom: 12px;">
            <label>Required Service</label>
            <select id="popupService" class="form-control">
              <option value="Home Deep Cleaning">Home Deep Cleaning</option>
              <option value="Kitchen Deep Cleaning">Kitchen Deep Cleaning</option>
              <option value="Bathroom Deep Cleaning">Bathroom Deep Cleaning</option>
              <option value="Sofa Cleaning">Sofa Cleaning</option>
              <option value="Carpet Cleaning">Carpet Cleaning</option>
              <option value="Floor Scrubbing">Floor Scrubbing</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Commercial Cleaning">Commercial Space Cleaning</option>
              <option value="Post Construction Cleaning">Post Construction Cleaning</option>
              <option value="Sanitization Services">Sanitization & Hygiene</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 18px;">
            <label>Preferred Date</label>
            <input type="date" id="popupDate" class="form-control" />
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary" style="flex:1;">
              Submit Enquiry
            </button>
            <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20want%20to%20get%20a%20quick%20quote" 
               target="_blank" class="btn btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function openCallPopup() {
  const container = document.getElementById('popupContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-overlay active" id="callPopupModal" onclick="closeModalOnOverlay(event, 'callPopupModal')">
      <div class="modal-card text-center" style="max-width: 440px;">
        <button class="modal-close-btn" onclick="closePopupModal('callPopupModal')">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="popup-icon-badge" style="background: var(--primary-badge-bg); color: var(--primary-badge);">
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">Need Professional Cleaning?</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
          Call our expert team directly for instant pricing & scheduling anywhere in Hyderabad.
        </p>
        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-bottom: 24px;">
          <i class="fa-solid fa-phone"></i> 9030798839
        </div>
        <div style="display: flex; gap: 12px; justify-content: center;">
          <a href="tel:9030798839" class="btn btn-primary" style="flex: 1;">
            Call Now
          </a>
          <button onclick="closePopupModal('callPopupModal')" class="btn" style="background: var(--bg-soft); color: var(--text-dark);">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function closeModalOnOverlay(e, modalId) {
  if (e.target.id === modalId) {
    closePopupModal(modalId);
  }
}

function closePopupModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
  sessionStorage.setItem('kakatiya_popup_dismissed', 'true');
  document.body.style.overflow = '';
}

function handlePopupFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('popupName').value;
  const phone = document.getElementById('popupPhone').value;
  const service = document.getElementById('popupService').value;

  closePopupModal('enquiryPopupModal');

  showToast(`Thank you, ${name}! Your enquiry for ${service} has been received.`);
  
  setTimeout(() => {
    const waText = `Hi Kakatiya Cleaning Services,%0A%0AMy Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService Requested: ${encodeURIComponent(service)}`;
    window.open(`https://wa.me/919030798839?text=${waText}`, '_blank');
  }, 1000);
}

function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

