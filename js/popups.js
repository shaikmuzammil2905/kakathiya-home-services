/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — POPUPS & CONVERSION TRIGGERS
   Enquiry Popup & Call Popup with intelligent triggers and ESC key support
   ========================================================================== */

function initPopups() {
  // Show popup automatically after 12 seconds if not already shown in session
  if (!sessionStorage.getItem('kakatiya_popup_dismissed')) {
    setTimeout(() => {
      openEnquiryPopup();
    }, 12000);
  }
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
        <div class="popup-icon-badge">
          <i class="fa-solid fa-sparkles"></i>
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
  
  // Optionally open WhatsApp with pre-filled message
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
