/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — VIEW OUR WORKS CONTROLLER
   ========================================================================== */

let activeWorksList = [];
let currentWorksFilter = 'all';
let worksLightboxIndex = 0;
let filteredWorksList = [];
let photosOnlyWorks = [];

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initWorksPage === 'function') {
    initWorksPage();
  }
});

async function initWorksPage() {
  await loadWorksFromSupabase();
  setupWorksCategoryTabs();

  if (typeof subscribeToTableChanges === 'function') {
    subscribeToTableChanges('view_our_work', async () => {
      await loadWorksFromSupabase();
    });
  }
}

async function loadWorksFromSupabase() {
  if (typeof getPublicWorks === 'function') {
    const remoteData = await getPublicWorks();
    if (remoteData && Array.isArray(remoteData)) {
      activeWorksList = remoteData.map(w => ({
        id: w.id,
        type: w.type || 'photo',
        category: w.category,
        categoryName: w.category_name || w.categoryName || '',
        title: w.title,
        videoSrc: w.video_src || w.videoSrc || '',
        poster: w.poster || w.img || '',
        img: w.img || w.poster || '',
        badge: w.badge || (w.type === 'video' ? 'HD VIDEO' : 'HD PHOTO')
      }));
    }
  }

  // Fallback to GALLERY_ITEMS if view_our_work table has not been populated yet
  if (!activeWorksList.length && typeof GALLERY_ITEMS !== 'undefined') {
    activeWorksList = [...GALLERY_ITEMS];
  }

  renderWorksGrid(currentWorksFilter);
}

function renderWorksGrid(filter = 'all') {
  currentWorksFilter = filter;
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  if (filter === 'all') {
    filteredWorksList = [...activeWorksList];
  } else if (filter === 'videos') {
    filteredWorksList = activeWorksList.filter(w => w.type === 'video');
  } else if (filter === 'photos') {
    filteredWorksList = activeWorksList.filter(w => w.type === 'photo');
  } else {
    filteredWorksList = activeWorksList.filter(w => w.category === filter);
  }

  photosOnlyWorks = filteredWorksList.filter(w => w.type === 'photo');

  if (!filteredWorksList.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: #ccc; margin-bottom: 16px;"></i>
        <h3 style="color: var(--text-dark); margin-bottom: 8px;">No Works Available</h3>
        <p style="color: var(--text-muted);">There are currently no items in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredWorksList.map((item, index) => {
    const isVideo = item.type === 'video';
    const thumbnail = isVideo ? item.poster : item.img;
    const badgeText = isVideo ? (item.badge || 'HD VIDEO') : 'HD PHOTO';
    const badgeClass = isVideo ? 'badge-video' : 'badge-photo';
    
    return `
      <div class="gallery-item ${isVideo ? 'gallery-video-item' : ''}" onclick="handleWorkItemClick('${item.id}', ${index})">
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

function setupWorksCategoryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-gallery-category');
      renderWorksGrid(cat);
    });
  });
}

function handleWorkItemClick(id, index) {
  const item = filteredWorksList[index] || activeWorksList.find(w => w.id == id);
  if (!item) return;

  if (item.type === 'video') {
    if (typeof openVideoModal === 'function') {
      openVideoModal(item);
    }
  } else {
    const photoIndex = photosOnlyWorks.findIndex(p => p.id === item.id);
    if (typeof openLightbox === 'function') {
      openLightbox(photoIndex >= 0 ? photoIndex : 0);
    }
  }
}
