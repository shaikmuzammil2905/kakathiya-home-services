/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — GALLERY & LIGHTBOX
   ========================================================================== */

const GALLERY_ITEMS = [
  { id: 1, category: 'home', title: 'Villa Living Room Deep Cleaning', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'kitchen', title: 'Modular Kitchen Tile Degreasing', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'bathroom', title: 'Luxury Bathroom Sanitation', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'sofa', title: '7-Seater Fabric Sofa Shampoo', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'carpet', title: 'Corporate Office Carpet Extraction', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'office', title: 'IT Park Workstation Disinfection', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { id: 7, category: 'commercial', title: 'Retail Showroom Floor Polish', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { id: 8, category: 'floor', title: 'Marble Floor Machine Scrubbing', img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80' },
  { id: 9, category: 'post-construction', title: 'Post-Renovation Dust Removal', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
  { id: 10, category: 'glass', title: 'Facade Glass Squeegee Cleaning', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80' },
  { id: 11, category: 'home', title: 'Master Bedroom Deep Dusting', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80' },
  { id: 12, category: 'kitchen', title: 'Kitchen Chimney & Stove Cleaning', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80' }
];

let currentLightboxIndex = 0;
let currentFilteredGallery = [...GALLERY_ITEMS];

function initGallery() {
  renderGalleryGrid('all');
  setupGalleryCategoryTabs();
}

function renderGalleryGrid(category = 'all') {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  currentFilteredGallery = category === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === category);

  container.innerHTML = currentFilteredGallery.map((item, index) => `
    <div class="gallery-item" onclick="openLightbox(${index})">
      <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'" />
      <div class="gallery-overlay">
        <div class="gallery-zoom-icon">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </div>
        <div class="gallery-title">${item.title}</div>
      </div>
    </div>
  `).join('');
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

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = currentFilteredGallery[index];
  if (!item) return;

  const modalContainer = document.getElementById('lightboxContainer');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="lightboxModal" onclick="closeModalOnOverlay(event, 'lightboxModal')">
      <div class="lightbox-card">
        <button class="modal-close-btn" onclick="closeLightbox()" style="background:#fff; color:#000;">
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
        <div class="lightbox-caption">${item.title} (${index + 1} of ${currentFilteredGallery.length})</div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = currentFilteredGallery.length - 1;
  } else if (currentLightboxIndex >= currentFilteredGallery.length) {
    currentLightboxIndex = 0;
  }
  openLightbox(currentLightboxIndex);
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
  document.body.style.overflow = '';
}
