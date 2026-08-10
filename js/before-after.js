/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — BEFORE & AFTER INTERACTIVE SLIDER
   ========================================================================== */

const BEFORE_AFTER_ITEMS = [
  {
    id: 'kitchen',
    title: 'Kitchen Deep Cleaning',
    desc: 'Eliminated heavy oil grease, soot & stubborn stove stains.',
    beforeImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Descaling & Sanitization',
    desc: 'Removed hard water scale, grout stains & restored wall tile shine.',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'sofa',
    title: 'Sofa Shampoo & Extraction',
    desc: 'Extracted deep dust, sweat odor & spill spots from fabric upholstery.',
    beforeImg: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'floor',
    title: 'Floor Machine Scrubbing',
    desc: 'Polished vitrified tiles & scrubbed dark grout lines clean.',
    beforeImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80'
  }
];

function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterContainer');
  const navContainer = document.getElementById('beforeAfterNav');
  if (!container || !navContainer) return;

  // Render Nav Buttons
  navContainer.innerHTML = BEFORE_AFTER_ITEMS.map((item, index) => `
    <button class="ba-nav-btn ${index === 0 ? 'active' : ''}" onclick="switchBeforeAfterTab('${item.id}')">
      ${item.title}
    </button>
  `).join('');

  // Render Slider Box
  container.innerHTML = BEFORE_AFTER_ITEMS.map((item, index) => `
    <div class="ba-item ${index === 0 ? 'active' : ''}" id="ba-item-${item.id}">
      <div class="ba-comparison" id="ba-comp-${item.id}">
        <div class="ba-img-before">
          <img src="${item.beforeImg}" alt="Before Cleaning - ${item.title}" />
          <span class="ba-label ba-label-before">BEFORE</span>
        </div>
        <div class="ba-img-after" id="ba-after-${item.id}">
          <img src="${item.afterImg}" alt="After Cleaning - ${item.title}" />
          <span class="ba-label ba-label-after">AFTER CLEANING</span>
        </div>
        <div class="ba-handle" id="ba-handle-${item.id}">
          <div class="ba-handle-circle">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>
        </div>
      </div>
      <p class="text-center" style="margin-top: 14px; font-weight:600; color: var(--text-muted);">
        ${item.desc}
      </p>
    </div>
  `).join('');

  // Attach slider drag event handlers
  BEFORE_AFTER_ITEMS.forEach(item => {
    setupDragSlider(item.id);
  });
}

function switchBeforeAfterTab(itemId) {
  document.querySelectorAll('.ba-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.ba-nav-btn').forEach(el => el.classList.remove('active'));

  const targetItem = document.getElementById(`ba-item-${itemId}`);
  if (targetItem) targetItem.classList.add('active');

  const activeBtn = Array.from(document.querySelectorAll('.ba-nav-btn')).find(btn => 
    btn.getAttribute('onclick').includes(itemId)
  );
  if (activeBtn) activeBtn.classList.add('active');
}

function setupDragSlider(itemId) {
  const container = document.getElementById(`ba-comp-${itemId}`);
  const afterImg = document.getElementById(`ba-after-${itemId}`);
  const handle = document.getElementById(`ba-handle-${itemId}`);
  if (!container || !afterImg || !handle) return;

  let isDragging = false;

  const moveSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    afterImg.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  const startDrag = (e) => {
    isDragging = true;
    moveSlider(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const onMove = (e) => {
    if (!isDragging) return;
    moveSlider(e.clientX || (e.touches && e.touches[0].clientX));
  };

  container.addEventListener('mousedown', startDrag);
  container.addEventListener('touchstart', startDrag, { passive: true });

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);

  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove, { passive: true });
}
