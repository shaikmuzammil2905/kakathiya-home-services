/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — GALLERY & VIEW OUR WORKS
   Full HD Photo & Video Portfolio Renderer
   ========================================================================== */

const GALLERY_ITEMS = [
  // --- HD VIDEO DEMONSTRATIONS (8 Videos) ---
  {
    id: 'v1',
    type: 'video',
    category: 'sofa',
    title: 'Fabric Sofa Foam Scrubbing & Extraction Video',
    videoSrc: 'assets/videos/work-video-1.mp4',
    poster: 'assets/images/gallery/work-11.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v2',
    type: 'video',
    category: 'floor',
    title: 'Single-Disc Rotary Floor Machine Scrubbing Video',
    videoSrc: 'assets/videos/work-video-2.mp4',
    poster: 'assets/images/gallery/work-12.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v3',
    type: 'video',
    category: 'kitchen',
    title: 'Modular Kitchen Tile Degreasing & Steam Clean Video',
    videoSrc: 'assets/videos/work-video-3.mp4',
    poster: 'assets/images/gallery/work-9.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v4',
    type: 'video',
    category: 'bathroom',
    title: 'Bathroom Descaling & Limescale Removal Video',
    videoSrc: 'assets/videos/work-video-4.mp4',
    poster: 'assets/images/gallery/work-10.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v5',
    type: 'video',
    category: 'home',
    title: 'Villa Living Room Deep Cleaning Demonstration Video',
    videoSrc: 'assets/videos/work-video-5.mp4',
    poster: 'assets/images/gallery/work-8.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v6',
    type: 'video',
    category: 'sofa',
    title: 'Corporate Office Carpet Shampoo Extraction Video',
    videoSrc: 'assets/videos/work-video-6.mp4',
    poster: 'assets/images/gallery/work-21.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v7',
    type: 'video',
    category: 'commercial',
    title: 'Post-Construction Tile Dust & Paint Scrubbing Video',
    videoSrc: 'assets/videos/work-video-7.mp4',
    poster: 'assets/images/gallery/work-17.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v8',
    type: 'video',
    category: 'home',
    title: 'Balcony & Exterior Window Frame Jet Wash Video',
    videoSrc: 'assets/videos/work-video-8.mp4',
    poster: 'assets/images/gallery/work-16.png',
    badge: 'HD VIDEO'
  },

  // --- HD WORK PHOTOS (28 Images) ---
  { id: 8, type: 'photo', category: 'home', title: 'Villa Living Room Deep Cleaning', img: 'assets/images/gallery/work-8.png' },
  { id: 9, type: 'photo', category: 'kitchen', title: 'Modular Kitchen Tile Degreasing', img: 'assets/images/gallery/work-9.png' },
  { id: 10, type: 'photo', category: 'bathroom', title: 'Bathroom Descaling & Tile Whitening', img: 'assets/images/gallery/work-10.png' },
  { id: 11, type: 'photo', category: 'sofa', title: 'L-Shaped Fabric Sofa Shampooing', img: 'assets/images/gallery/work-11.png' },
  { id: 12, type: 'photo', category: 'floor', title: 'Marble Floor Machine Buffing & Scrubbing', img: 'assets/images/gallery/work-12.png' },
  { id: 13, type: 'photo', category: 'home', title: 'Master Bedroom Deep Dusting & Sanitization', img: 'assets/images/gallery/work-13.png' },
  { id: 14, type: 'photo', category: 'kitchen', title: 'Kitchen Chimney & Stove Hood Degreasing', img: 'assets/images/gallery/work-14.png' },
  { id: 15, type: 'photo', category: 'commercial', title: 'Corporate Workstation Disinfection', img: 'assets/images/gallery/work-15.png' },
  { id: 16, type: 'photo', category: 'home', title: 'Balcony Glass Squeegee Cleaning', img: 'assets/images/gallery/work-16.png' },
  { id: 17, type: 'photo', category: 'commercial', title: 'Post-Renovation Tile Cement Splatter Removal', img: 'assets/images/gallery/work-17.png' },
  { id: 18, type: 'photo', category: 'bathroom', title: 'Luxury Bathroom Glass & Fitting Polish', img: 'assets/images/gallery/work-18.png' },
  { id: 19, type: 'photo', category: 'sofa', title: 'Dining Table Chair Fabric Shampooing', img: 'assets/images/gallery/work-19.png' },
  { id: 20, type: 'photo', category: 'floor', title: 'Residential Villa Full Floor Scrubbing', img: 'assets/images/gallery/work-20.png' },
  { id: 21, type: 'photo', category: 'sofa', title: 'Office Carpet Tile Extraction', img: 'assets/images/gallery/work-21.png' },
  { id: 22, type: 'photo', category: 'home', title: 'High Ceiling Fan & Light Fixture Dusting', img: 'assets/images/gallery/work-22.png' },
  { id: 23, type: 'photo', category: 'kitchen', title: 'Apartment Move-In Kitchen Sanitation', img: 'assets/images/gallery/work-23.png' },
  { id: 24, type: 'photo', category: 'commercial', title: 'Commercial Showroom Floor Buffing', img: 'assets/images/gallery/work-24.png' },
  { id: 26, type: 'photo', category: 'home', title: '3BHK Villa Complete Deep Clean Setup', img: 'assets/images/gallery/work-26.png' },
  { id: 28, type: 'photo', category: 'kitchen', title: 'Kitchen Countertop & Backsplash Polish', img: 'assets/images/gallery/work-28.png' },
  { id: 30, type: 'photo', category: 'bathroom', title: 'Bathroom Tile Grout Whitening & Sanitation', img: 'assets/images/gallery/work-30.png' },
  { id: 32, type: 'photo', category: 'sofa', title: '7-Seater Sectional Sofa Deep Cleaning', img: 'assets/images/gallery/work-32.png' },
  { id: 34, type: 'photo', category: 'floor', title: 'Marble Floor Heavy Single-Disc Scrubbing', img: 'assets/images/gallery/work-34.png' },
  { id: 36, type: 'photo', category: 'commercial', title: 'Office Reception & Lobby Floor Shine', img: 'assets/images/gallery/work-36.png' },
  { id: 38, type: 'photo', category: 'home', title: 'Window Glass & Metal Mesh Deep Cleaning', img: 'assets/images/gallery/work-38.png' },
  { id: 40, type: 'photo', category: 'commercial', title: 'Post-Construction Floor Paint Splatter Scrubbing', img: 'assets/images/gallery/work-40.png' },
  { id: 42, type: 'photo', category: 'commercial', title: 'Healthcare Clinic UV & Fog Decontamination', img: 'assets/images/gallery/work-42.png' },
  { id: 44, type: 'photo', category: 'kitchen', title: 'Commercial Restaurant Kitchen Deep Degreasing', img: 'assets/images/gallery/work-44.png' },
  { id: 46, type: 'photo', category: 'home', title: 'Luxury Apartment Deep Clean Finish', img: 'assets/images/gallery/work-46.png' }
];

let currentLightboxIndex = 0;
let currentFilteredGallery = [...GALLERY_ITEMS];
let currentPhotosOnly = GALLERY_ITEMS.filter(g => g.type === 'photo');

function initGallery() {
  renderGalleryGrid('all');
  setupGalleryCategoryTabs();
}

function renderGalleryGrid(filter = 'all') {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  if (filter === 'all') {
    currentFilteredGallery = [...GALLERY_ITEMS];
  } else if (filter === 'videos') {
    currentFilteredGallery = GALLERY_ITEMS.filter(g => g.type === 'video');
  } else if (filter === 'photos') {
    currentFilteredGallery = GALLERY_ITEMS.filter(g => g.type === 'photo');
  } else {
    currentFilteredGallery = GALLERY_ITEMS.filter(g => g.category === filter);
  }

  currentPhotosOnly = currentFilteredGallery.filter(g => g.type === 'photo');

  container.innerHTML = currentFilteredGallery.map((item, index) => {
    const isVideo = item.type === 'video';
    const thumbnail = isVideo ? item.poster : item.img;
    const badgeText = isVideo ? (item.badge || 'VIDEO') : 'HD PHOTO';
    const badgeClass = isVideo ? 'badge-video' : 'badge-photo';
    
    return `
      <div class="gallery-item ${isVideo ? 'gallery-video-item' : ''}" onclick="handleGalleryItemClick('${item.id}', ${index})">
        <img src="${thumbnail}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'" />
        
        <div class="gallery-badge-tag ${badgeClass}">
          <i class="fa-solid ${isVideo ? 'fa-play' : 'fa-camera'}"></i> ${badgeText}
        </div>

        ${isVideo ? `
          <div class="gallery-play-btn-pulse">
            <div class="play-icon-circle">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
        ` : ''}

        <div class="gallery-bottom-caption">
          <div class="gallery-card-title">${item.title}</div>
        </div>

        <div class="gallery-overlay">
          <div class="gallery-zoom-icon">
            <i class="fa-solid ${isVideo ? 'fa-circle-play' : 'fa-magnifying-glass-plus'}"></i>
          </div>
          <div class="gallery-title">${item.title}</div>
          <span class="gallery-click-hint">${isVideo ? 'Click to Play Video' : 'Click to View HD Photo'}</span>
        </div>
      </div>
    `;
  }).join('');
}

function setupGalleryCategoryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-gallery-category');
      renderGalleryGrid(cat);
    });
  });
}

function handleGalleryItemClick(id, index) {
  const item = currentFilteredGallery[index] || GALLERY_ITEMS.find(g => g.id == id);
  if (!item) return;

  if (item.type === 'video') {
    openVideoModal(item);
  } else {
    // Find index among photos only for lightbox navigation
    const photoIndex = currentPhotosOnly.findIndex(p => p.id === item.id);
    openLightbox(photoIndex >= 0 ? photoIndex : 0);
  }
}

function openVideoModal(item) {
  const container = document.getElementById('lightboxContainer') || document.body;
  
  // Remove existing modal if any
  const existing = document.getElementById('videoModal');
  if (existing) existing.remove();

  const modalHtml = `
    <div class="modal-overlay active" id="videoModal" onclick="closeModalOnOverlay(event, 'videoModal')">
      <div class="video-modal-card text-center">
        <button class="modal-close-btn" onclick="closeVideoModal()" style="background:#ffffff; color:#000;">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="video-modal-header">
          <div class="video-badge-tag"><i class="fa-solid fa-circle-play"></i> LIVE DEMONSTRATION</div>
          <h3 class="video-modal-title">${item.title}</h3>
        </div>

        <div class="video-wrapper">
          <video src="${item.videoSrc}" poster="${item.poster}" controls autoplay playsinline class="modal-video-player"></video>
        </div>

        <div class="video-modal-footer">
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px;">
            Kakatiya Professional Cleaning Services — Quality Work Demonstrated Live in Hyderabad
          </p>
          <div style="display:flex; gap:12px; justify-content:center;">
            <a href="tel:9030798839" class="btn btn-primary">
              <i class="fa-solid fa-phone"></i> Call 9030798839
            </a>
            <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20saw%20this%20video%20'${encodeURIComponent(item.title)}'%20and%20want%20to%20book%20a%20service" 
               target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> Book This Service
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = modalHtml;
  document.body.appendChild(tempDiv.firstElementChild);
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    // Pause video player before removing
    const video = modal.querySelector('video');
    if (video) video.pause();
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 250);
  }
  document.body.style.overflow = '';
}

function openLightbox(photoIndex) {
  if (!currentPhotosOnly.length) currentPhotosOnly = GALLERY_ITEMS.filter(g => g.type === 'photo');
  
  currentLightboxIndex = photoIndex;
  const item = currentPhotosOnly[currentLightboxIndex];
  if (!item) return;

  const modalContainer = document.getElementById('lightboxContainer') || document.body;

  const existing = document.getElementById('lightboxModal');
  if (existing) existing.remove();

  const modalHtml = `
    <div class="modal-overlay active" id="lightboxModal" onclick="closeModalOnOverlay(event, 'lightboxModal')">
      <div class="lightbox-card">
        <button class="modal-close-btn" onclick="closeLightbox()" style="background:#ffffff; color:#000000; z-index:100;">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="lightbox-img-wrapper">
          <img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="lightbox-caption">${item.title} (${currentLightboxIndex + 1} of ${currentPhotosOnly.length})</div>
      </div>
    </div>
  `;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = modalHtml;
  document.body.appendChild(tempDiv.firstElementChild);
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  if (!currentPhotosOnly.length) return;
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = currentPhotosOnly.length - 1;
  } else if (currentLightboxIndex >= currentPhotosOnly.length) {
    currentLightboxIndex = 0;
  }
  openLightbox(currentLightboxIndex);
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 250);
  }
  document.body.style.overflow = '';
}

// Global modal overlay click helper
function closeModalOnOverlay(e, modalId) {
  if (e.target.id === modalId) {
    if (modalId === 'videoModal') closeVideoModal();
    else if (modalId === 'lightboxModal') closeLightbox();
    else {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 250);
      }
      document.body.style.overflow = '';
    }
  }
}
