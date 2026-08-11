/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — GALLERY & VIEW OUR WORKS
   Full HD Photo & Video Portfolio Renderer with Exact Image-Matched Titles
   ========================================================================== */

const GALLERY_ITEMS = [
  // --- HD VIDEO DEMONSTRATIONS (8 Videos matched to actual thumbnail images) ---
  {
    id: 'v1',
    type: 'video',
    category: 'sofa',
    categoryName: 'Furniture & Dining',
    title: 'Cafeteria & Dining Hall Table Cleaning Video',
    videoSrc: 'assets/videos/work-video-1.mp4',
    poster: 'assets/images/gallery/work-11.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v2',
    type: 'video',
    category: 'home',
    categoryName: 'Home Interior',
    title: 'Bedroom Modular Wardrobe & Cabinet Cleaning Video',
    videoSrc: 'assets/videos/work-video-2.mp4',
    poster: 'assets/images/gallery/work-12.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v3',
    type: 'video',
    category: 'commercial',
    categoryName: 'Commercial Office',
    title: 'Corporate Office Corridor & Door Sanitization Video',
    videoSrc: 'assets/videos/work-video-3.mp4',
    poster: 'assets/images/gallery/work-9.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v4',
    type: 'video',
    category: 'commercial',
    categoryName: 'Commercial Office',
    title: 'Corporate Office Reception & Lobby Deep Clean Video',
    videoSrc: 'assets/videos/work-video-4.mp4',
    poster: 'assets/images/gallery/work-10.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v5',
    type: 'video',
    category: 'floor',
    categoryName: 'Machine Scrubbing',
    title: 'Professional Cleaning Scrubber & Machine Setup Video',
    videoSrc: 'assets/videos/work-video-5.mp4',
    poster: 'assets/images/gallery/work-8.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v6',
    type: 'video',
    category: 'bathroom',
    categoryName: 'Bathroom Cleaning',
    title: 'Bathroom Toilet Bowl & Tile Descaling Video',
    videoSrc: 'assets/videos/work-video-6.mp4',
    poster: 'assets/images/gallery/work-21.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v7',
    type: 'video',
    category: 'commercial',
    categoryName: 'Commercial Space',
    title: 'Commercial Showroom & Counter Deep Clean Video',
    videoSrc: 'assets/videos/work-video-7.mp4',
    poster: 'assets/images/gallery/work-17.png',
    badge: 'HD VIDEO'
  },
  {
    id: 'v8',
    type: 'video',
    category: 'commercial',
    categoryName: 'Workstation & Carpet',
    title: 'IT Office Workstation & Chair Vacuuming Video',
    videoSrc: 'assets/videos/work-video-8.mp4',
    poster: 'assets/images/gallery/work-16.png',
    badge: 'HD VIDEO'
  },

  // --- HD WORK PHOTOS (28 Images precisely matched to visual content) ---
  { id: 8, type: 'photo', category: 'floor', categoryName: 'Machine Scrubbing', title: 'Professional Floor Scrubber & Vacuum Machine Setup', img: 'assets/images/gallery/work-8.png' },
  { id: 9, type: 'photo', category: 'commercial', categoryName: 'Commercial Office', title: 'Corporate Office Corridor & Door Sanitization', img: 'assets/images/gallery/work-9.png' },
  { id: 10, type: 'photo', category: 'commercial', categoryName: 'Commercial Office', title: 'Corporate Office Reception & Lobby Deep Clean', img: 'assets/images/gallery/work-10.png' },
  { id: 11, type: 'photo', category: 'sofa', categoryName: 'Furniture & Dining', title: 'Cafeteria & Dining Table Furniture Cleaning', img: 'assets/images/gallery/work-11.png' },
  { id: 12, type: 'photo', category: 'home', categoryName: 'Home Interior', title: 'Modular Bedroom Wardrobe & Cabinet Deep Clean', img: 'assets/images/gallery/work-12.png' },
  { id: 13, type: 'photo', category: 'commercial', categoryName: 'Commercial Office', title: 'Commercial Office Glass Partition & Workstation Clean', img: 'assets/images/gallery/work-13.png' },
  { id: 14, type: 'photo', category: 'bathroom', categoryName: 'Bathroom Cleaning', title: 'Bathroom Glass Shower Enclosure & Tile Descaling', img: 'assets/images/gallery/work-14.png' },
  { id: 15, type: 'photo', category: 'floor', categoryName: 'Floor Scrubbing', title: 'Commercial Hall Tile Floor Scrubbing & Polish', img: 'assets/images/gallery/work-15.png' },
  { id: 16, type: 'photo', category: 'commercial', categoryName: 'Workstation & Office', title: 'IT Park Office Workstation & Chair Vacuuming', img: 'assets/images/gallery/work-16.png' },
  { id: 17, type: 'photo', category: 'commercial', categoryName: 'Commercial Space', title: 'Retail Showroom Display Counter & Hall Deep Clean', img: 'assets/images/gallery/work-17.png' },
  { id: 18, type: 'photo', category: 'home', categoryName: 'Home Exterior', title: 'Independent Villa Exterior & Balcony Deep Clean', img: 'assets/images/gallery/work-18.png' },
  { id: 19, type: 'photo', category: 'commercial', categoryName: 'Commercial Office', title: 'Office Corridor & Fire Safety Door Surface Wipedown', img: 'assets/images/gallery/work-19.png' },
  { id: 20, type: 'photo', category: 'commercial', categoryName: 'Glass Cleaning', title: 'High Elevation Glass Facade Squeegee Cleaning', img: 'assets/images/gallery/work-20.png' },
  { id: 21, type: 'photo', category: 'bathroom', categoryName: 'Bathroom Cleaning', title: 'Bathroom Toilet Bowl & Wall Tile Sanitization', img: 'assets/images/gallery/work-21.png' },
  { id: 22, type: 'photo', category: 'bathroom', categoryName: 'Floor Scrubbing', title: 'Bathroom Tile Machine Scrubber Cleaning', img: 'assets/images/gallery/work-22.png' },
  { id: 23, type: 'photo', category: 'sofa', categoryName: 'Carpet Vacuuming', title: 'Office Cabin Carpet Vacuum Extraction', img: 'assets/images/gallery/work-23.png' },
  { id: 24, type: 'photo', category: 'commercial', categoryName: 'Commercial Office', title: 'Commercial Office Corridor Floor Tile Shine', img: 'assets/images/gallery/work-24.png' },
  { id: 26, type: 'photo', category: 'sofa', categoryName: 'Carpet Vacuuming', title: 'Commercial Office & Lounge Carpet Extraction', img: 'assets/images/gallery/work-26.png' },
  { id: 28, type: 'photo', category: 'sofa', categoryName: 'Carpet Vacuuming', title: 'Retail Store Carpet Vacuuming & Deep Clean', img: 'assets/images/gallery/work-28.png' },
  { id: 30, type: 'photo', category: 'bathroom', categoryName: 'Floor Scrubbing', title: 'Restroom Tile Single-Disc Rotary Machine Scrubbing', img: 'assets/images/gallery/work-30.png' },
  { id: 32, type: 'photo', category: 'home', categoryName: 'Air Duct & Vent', title: 'Air Duct Vent & Wall Dust Vacuum Extraction', img: 'assets/images/gallery/work-32.png' },
  { id: 34, type: 'photo', category: 'home', categoryName: 'Glass Cleaning', title: 'Exterior Window Glass Squeegee Polish', img: 'assets/images/gallery/work-34.png' },
  { id: 36, type: 'photo', category: 'sofa', categoryName: 'Carpet Vacuuming', title: 'Master Bedroom Carpet & Furniture Deep Vacuuming', img: 'assets/images/gallery/work-36.png' },
  { id: 38, type: 'photo', category: 'kitchen', categoryName: 'Kitchen Degreasing', title: 'Modular Kitchen Chimney & Stove Hood Degreasing', img: 'assets/images/gallery/work-38.png' },
  { id: 40, type: 'photo', category: 'home', categoryName: 'Floor Scrubbing', title: 'Luxury Villa Living Room Floor Deep Scrubbing', img: 'assets/images/gallery/work-40.png' },
  { id: 42, type: 'photo', category: 'kitchen', categoryName: 'Kitchen Cleaning', title: 'Kitchen Stovetop & Platform Counter Scrubbing', img: 'assets/images/gallery/work-42.png' },
  { id: 44, type: 'photo', category: 'bathroom', categoryName: 'Bathroom Cleaning', title: 'Commercial Restroom Washbasin & Fitting Sanitization', img: 'assets/images/gallery/work-44.png' },
  { id: 46, type: 'photo', category: 'sofa', categoryName: 'Sofa Shampooing', title: 'Fabric Sofa Cushion Shampooing & Vacuum Extraction', img: 'assets/images/gallery/work-46.png' }
];

let activeGalleryList = [...GALLERY_ITEMS];
let currentGalleryFilter = 'all';
let currentLightboxIndex = 0;
let currentFilteredGallery = [...activeGalleryList];
let currentPhotosOnly = activeGalleryList.filter(g => g.type === 'photo');

async function initGallery() {
  await loadGalleryFromSupabase();
  setupGalleryCategoryTabs();

  if (typeof subscribeToTableChanges === 'function') {
    subscribeToTableChanges('gallery', async () => {
      await loadGalleryFromSupabase();
    });
  }
}

async function loadGalleryFromSupabase() {
  if (typeof getPublicGallery === 'function') {
    const remoteData = await getPublicGallery();
    if (remoteData && Array.isArray(remoteData)) {
      activeGalleryList = remoteData.map(g => ({
        id: g.id,
        type: g.type || 'photo',
        category: g.category,
        categoryName: g.category_name || g.categoryName || '',
        title: g.title,
        videoSrc: g.video_src || g.videoSrc || '',
        poster: g.poster || g.img || '',
        img: g.img || g.poster || '',
        badge: g.badge || (g.type === 'video' ? 'HD VIDEO' : 'HD PHOTO')
      }));
    }
  }
  renderGalleryGrid(currentGalleryFilter);
}

function renderGalleryGrid(filter = 'all') {
  currentGalleryFilter = filter;
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  if (filter === 'all') {
    currentFilteredGallery = [...activeGalleryList];
  } else if (filter === 'videos') {
    currentFilteredGallery = activeGalleryList.filter(g => g.type === 'video');
  } else if (filter === 'photos') {
    currentFilteredGallery = activeGalleryList.filter(g => g.type === 'photo');
  } else {
    currentFilteredGallery = activeGalleryList.filter(g => g.category === filter);
  }

  currentPhotosOnly = currentFilteredGallery.filter(g => g.type === 'photo');

  container.innerHTML = currentFilteredGallery.map((item, index) => {
    const isVideo = item.type === 'video';
    const thumbnail = isVideo ? item.poster : item.img;
    const badgeText = isVideo ? (item.badge || 'HD VIDEO') : 'HD PHOTO';
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
          <div class="gallery-category-name">${item.categoryName || 'Cleaning Service'}</div>
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
          <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
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
