/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — ADMIN PANEL CONTROLLER
   ========================================================================== */

let currentAdminTab = 'services';
let pendingDeleteInfo = null; // { id, section }

let adminServicesData = [];
let adminGalleryData = [];
let adminWorksData = [];

document.addEventListener('DOMContentLoaded', () => {
  initAdminApp();
});

async function initAdminApp() {
  const sb = getSupabase();
  if (!sb) {
    showLoginAlert('Supabase client failed to load. Please check network connection.');
    return;
  }

  // Check Supabase Auth Session
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    showDashboardView(session.user);
  } else {
    showLoginView();
  }

  // Auth State Listener
  sb.auth.onAuthStateChange((event, session) => {
    if (session) {
      showDashboardView(session.user);
    } else {
      showLoginView();
    }
  });
}

// --------------------------------------------------------------------------
// AUTHENTICATION LOGIC
// --------------------------------------------------------------------------

function showLoginView() {
  document.getElementById('loginView').style.display = 'flex';
  document.getElementById('dashboardView').style.display = 'none';
}

function showDashboardView(user) {
  document.getElementById('loginView').style.display = 'none';
  document.getElementById('dashboardView').style.display = 'block';
  
  const userBadge = document.getElementById('currentUserBadge');
  if (userBadge && user) {
    userBadge.innerHTML = `<i class="fa-solid fa-user-shield"></i> ${user.email}`;
  }

  switchAdminTab(currentAdminTab);
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const submitBtn = document.getElementById('loginSubmitBtn');

  hideLoginAlert();
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing in...';

  try {
    const sb = getSupabase();
    const { data, error } = await sb.auth.signInWithPassword({ email, password });

    if (error) {
      showLoginAlert(error.message || 'Invalid email or password.');
    } else if (data.session) {
      showDashboardView(data.session.user);
    }
  } catch (err) {
    showLoginAlert(err.message || 'An unexpected error occurred.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Sign In to Admin Panel';
  }
}

async function handleAdminLogout() {
  const sb = getSupabase();
  if (sb) {
    await sb.auth.signOut();
  }
  showLoginView();
}

async function handlePasswordChange(e) {
  e.preventDefault();
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const btn = document.getElementById('changePasswordBtn');

  if (newPassword !== confirmPassword) {
    showDashboardAlert('New passwords do not match!', 'danger');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Updating password...';

  try {
    const sb = getSupabase();
    const { error } = await sb.auth.updateUser({ password: newPassword });

    if (error) {
      showDashboardAlert(error.message || 'Password update failed.', 'danger');
    } else {
      showDashboardAlert('Admin password updated successfully! Please use your new password next time.', 'success');
      document.getElementById('changePasswordForm').reset();
    }
  } catch (err) {
    showDashboardAlert(err.message || 'Error updating password.', 'danger');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-key"></i> Update Password Now';
  }
}

function showLoginAlert(msg) {
  const alertEl = document.getElementById('loginAlert');
  alertEl.innerText = msg;
  alertEl.style.display = 'block';
}

function hideLoginAlert() {
  const alertEl = document.getElementById('loginAlert');
  alertEl.style.display = 'none';
}

function showDashboardAlert(msg, type = 'success') {
  const alertEl = document.getElementById('dashboardAlert');
  alertEl.className = `alert-banner alert-${type}`;
  alertEl.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'triangle-exclamation'}"></i> ${msg}`;
  alertEl.style.display = 'flex';
  setTimeout(() => {
    alertEl.style.display = 'none';
  }, 4000);
}

// --------------------------------------------------------------------------
// TAB NAVIGATION
// --------------------------------------------------------------------------

function switchAdminTab(tabName) {
  currentAdminTab = tabName;

  const tabs = ['services', 'gallery', 'works', 'password', 'migration'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const panel = document.getElementById(`${t}Tab`);
    if (btn && panel) {
      if (t === tabName) {
        btn.classList.add('active');
        panel.style.display = 'block';
      } else {
        btn.classList.remove('active');
        panel.style.display = 'none';
      }
    }
  });

  if (tabName === 'services') fetchAndRenderAdminServices();
  if (tabName === 'gallery') fetchAndRenderAdminGallery();
  if (tabName === 'works') fetchAndRenderAdminWorks();
}

// --------------------------------------------------------------------------
// SERVICES SECTION LOGIC
// --------------------------------------------------------------------------

async function fetchAndRenderAdminServices() {
  const tbody = document.getElementById('servicesTableBody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:20px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading Services...</td></tr>';

  let data = await getAdminServices();
  if (!data) {
    // If table empty or not created yet, fallback to static list for admin viewing
    data = typeof SERVICES_DATA !== 'undefined' ? SERVICES_DATA.map((s, idx) => ({ ...s, is_visible: true, sort_order: idx + 1 })) : [];
  }
  adminServicesData = data;
  renderAdminServicesTable();
}

function renderAdminServicesTable() {
  const tbody = document.getElementById('servicesTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('searchServices')?.value || '').toLowerCase();
  const categoryFilter = document.getElementById('filterCategoryServices')?.value || 'all';

  const filtered = adminServicesData.filter(s => {
    const matchesSearch = (s.title || '').toLowerCase().includes(searchQuery) || (s.short_desc || s.shortDesc || '').toLowerCase().includes(searchQuery);
    const matchesCat = categoryFilter === 'all' || s.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:30px; color:var(--admin-muted);">No Services Found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map((item, idx) => {
    const imgUrl = item.img || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80';
    const isVisible = item.is_visible !== false;
    const dateStr = item.updated_at ? new Date(item.updated_at).toLocaleDateString() : 'N/A';

    return `
      <tr>
        <td style="font-weight: 700; color: var(--admin-muted);">${item.sort_order || (idx + 1)}</td>
        <td>
          <img src="${imgUrl}" alt="${item.title}" class="table-img-thumb" onerror="this.src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80'" />
        </td>
        <td>
          <strong style="color: var(--admin-primary); font-size: 0.95rem;">${item.title}</strong>
          <div style="font-size: 0.8rem; color: var(--admin-muted); text-transform: uppercase;">
            <i class="fa-solid ${item.icon || 'fa-broom'}"></i> ${item.category}
          </div>
        </td>
        <td>${item.duration || 'N/A'}</td>
        <td>
          <span class="badge ${isVisible ? 'badge-visible' : 'badge-hidden'}">
            <i class="fa-solid ${isVisible ? 'fa-eye' : 'fa-eye-slash'}"></i> ${isVisible ? 'Visible' : 'Hidden'}
          </span>
        </td>
        <td style="font-size: 0.85rem; color: var(--admin-muted);">${dateStr}</td>
        <td>
          <div class="action-btns">
            <button class="btn-icon" onclick="openEditServiceModal('${item.id}')" title="Edit Service">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-icon" onclick="toggleItemVisibility('services', '${item.id}', ${!isVisible})" title="${isVisible ? 'Hide Service' : 'Show Service'}">
              <i class="fa-solid ${isVisible ? 'fa-eye-slash' : 'fa-eye'}"></i>
            </button>
            <button class="btn-icon btn-icon-danger" onclick="promptDeleteConfirmation('services', '${item.id}')" title="Delete Permanently">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// GALLERY SECTION LOGIC
// --------------------------------------------------------------------------

async function fetchAndRenderAdminGallery() {
  const tbody = document.getElementById('galleryTableBody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:20px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading Gallery...</td></tr>';

  let data = await getAdminGallery();
  if (!data) {
    data = typeof GALLERY_ITEMS !== 'undefined' ? GALLERY_ITEMS.map((g, idx) => ({ ...g, is_visible: true, sort_order: idx + 1 })) : [];
  }
  adminGalleryData = data;
  renderAdminGalleryTable();
}

function renderAdminGalleryTable() {
  const tbody = document.getElementById('galleryTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('searchGallery')?.value || '').toLowerCase();
  const categoryFilter = document.getElementById('filterCategoryGallery')?.value || 'all';

  const filtered = adminGalleryData.filter(g => {
    const matchesSearch = (g.title || '').toLowerCase().includes(searchQuery);
    const matchesCat = categoryFilter === 'all' || g.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:30px; color:var(--admin-muted);">No Gallery Items Found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map((item, idx) => {
    const isVideo = item.type === 'video';
    const thumbUrl = isVideo ? (item.poster || item.img) : item.img;
    const isVisible = item.is_visible !== false;
    const dateStr = item.updated_at ? new Date(item.updated_at).toLocaleDateString() : 'N/A';

    return `
      <tr>
        <td style="font-weight: 700; color: var(--admin-muted);">${item.sort_order || (idx + 1)}</td>
        <td>
          <img src="${thumbUrl}" alt="${item.title}" class="table-img-thumb" onerror="this.src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80'" />
        </td>
        <td>
          <strong style="color: var(--admin-primary); font-size: 0.95rem;">${item.title}</strong>
          <div style="font-size: 0.8rem; color: var(--admin-muted); text-transform: uppercase;">
            ${item.category_name || item.categoryName || item.category}
          </div>
        </td>
        <td>
          <span class="badge badge-type">
            <i class="fa-solid ${isVideo ? 'fa-video' : 'fa-image'}"></i> ${isVideo ? 'Video' : 'Photo'}
          </span>
        </td>
        <td>
          <span class="badge ${isVisible ? 'badge-visible' : 'badge-hidden'}">
            <i class="fa-solid ${isVisible ? 'fa-eye' : 'fa-eye-slash'}"></i> ${isVisible ? 'Visible' : 'Hidden'}
          </span>
        </td>
        <td style="font-size: 0.85rem; color: var(--admin-muted);">${dateStr}</td>
        <td>
          <div class="action-btns">
            <button class="btn-icon" onclick="openEditGalleryModal('${item.id}')" title="Edit Item">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-icon" onclick="toggleItemVisibility('gallery', '${item.id}', ${!isVisible})" title="${isVisible ? 'Hide Item' : 'Show Item'}">
              <i class="fa-solid ${isVisible ? 'fa-eye-slash' : 'fa-eye'}"></i>
            </button>
            <button class="btn-icon btn-icon-danger" onclick="promptDeleteConfirmation('gallery', '${item.id}')" title="Delete Permanently">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// VIEW OUR WORK SECTION LOGIC
// --------------------------------------------------------------------------

async function fetchAndRenderAdminWorks() {
  const tbody = document.getElementById('worksTableBody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:20px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading View Our Work items...</td></tr>';

  let data = await getAdminWorks();
  if (!data) {
    data = typeof GALLERY_ITEMS !== 'undefined' ? GALLERY_ITEMS.map((g, idx) => ({ ...g, is_visible: true, sort_order: idx + 1 })) : [];
  }
  adminWorksData = data;
  renderAdminWorksTable();
}

function renderAdminWorksTable() {
  const tbody = document.getElementById('worksTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('searchWorks')?.value || '').toLowerCase();
  const categoryFilter = document.getElementById('filterCategoryWorks')?.value || 'all';

  const filtered = adminWorksData.filter(w => {
    const matchesSearch = (w.title || '').toLowerCase().includes(searchQuery);
    const matchesCat = categoryFilter === 'all' || w.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:30px; color:var(--admin-muted);">No Work Items Found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map((item, idx) => {
    const isVideo = item.type === 'video';
    const thumbUrl = isVideo ? (item.poster || item.img) : item.img;
    const isVisible = item.is_visible !== false;
    const dateStr = item.updated_at ? new Date(item.updated_at).toLocaleDateString() : 'N/A';

    return `
      <tr>
        <td style="font-weight: 700; color: var(--admin-muted);">${item.sort_order || (idx + 1)}</td>
        <td>
          <img src="${thumbUrl}" alt="${item.title}" class="table-img-thumb" onerror="this.src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80'" />
        </td>
        <td>
          <strong style="color: var(--admin-primary); font-size: 0.95rem;">${item.title}</strong>
          <div style="font-size: 0.8rem; color: var(--admin-muted); text-transform: uppercase;">
            ${item.category_name || item.categoryName || item.category}
          </div>
        </td>
        <td>
          <span class="badge badge-type">
            <i class="fa-solid ${isVideo ? 'fa-video' : 'fa-image'}"></i> ${isVideo ? 'Video' : 'Photo'}
          </span>
        </td>
        <td>
          <span class="badge ${isVisible ? 'badge-visible' : 'badge-hidden'}">
            <i class="fa-solid ${isVisible ? 'fa-eye' : 'fa-eye-slash'}"></i> ${isVisible ? 'Visible' : 'Hidden'}
          </span>
        </td>
        <td style="font-size: 0.85rem; color: var(--admin-muted);">${dateStr}</td>
        <td>
          <div class="action-btns">
            <button class="btn-icon" onclick="openEditWorkModal('${item.id}')" title="Edit Item">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-icon" onclick="toggleItemVisibility('works', '${item.id}', ${!isVisible})" title="${isVisible ? 'Hide Item' : 'Show Item'}">
              <i class="fa-solid ${isVisible ? 'fa-eye-slash' : 'fa-eye'}"></i>
            </button>
            <button class="btn-icon btn-icon-danger" onclick="promptDeleteConfirmation('works', '${item.id}')" title="Delete Permanently">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// HIDE / SHOW VISIBILITY TOGGLE
// --------------------------------------------------------------------------

async function toggleItemVisibility(section, id, newVisibility) {
  try {
    if (section === 'services') {
      const item = adminServicesData.find(s => s.id === id);
      if (item) {
        item.is_visible = newVisibility;
        await saveService(item);
        renderAdminServicesTable();
        showDashboardAlert(`Service '${item.title}' is now ${newVisibility ? 'Visible' : 'Hidden'}.`);
      }
    } else if (section === 'gallery') {
      const item = adminGalleryData.find(g => g.id === id);
      if (item) {
        item.is_visible = newVisibility;
        await saveGallery(item);
        renderAdminGalleryTable();
        showDashboardAlert(`Gallery item '${item.title}' is now ${newVisibility ? 'Visible' : 'Hidden'}.`);
      }
    } else if (section === 'works') {
      const item = adminWorksData.find(w => w.id === id);
      if (item) {
        item.is_visible = newVisibility;
        await saveWork(item);
        renderAdminWorksTable();
        showDashboardAlert(`Work item '${item.title}' is now ${newVisibility ? 'Visible' : 'Hidden'}.`);
      }
    }
  } catch (err) {
    showDashboardAlert(err.message || 'Error updating visibility', 'danger');
  }
}

// --------------------------------------------------------------------------
// ADD / EDIT MODAL LOGIC
// --------------------------------------------------------------------------

function openAddServiceModal() {
  resetModalForm();
  document.getElementById('modalFormTitle').innerText = 'Add New Service';
  document.getElementById('formItemSection').value = 'services';
  document.getElementById('serviceFieldsGroup').style.display = 'block';
  document.getElementById('typeFieldGroup').style.display = 'none';
  document.getElementById('formSortOrder').value = adminServicesData.length + 1;

  openAdminModal('itemFormModal');
}

function openEditServiceModal(id) {
  resetModalForm();
  const item = adminServicesData.find(s => s.id === id);
  if (!item) return;

  document.getElementById('modalFormTitle').innerText = 'Edit Service';
  document.getElementById('formItemId').value = item.id;
  document.getElementById('formItemSection').value = 'services';
  document.getElementById('serviceFieldsGroup').style.display = 'block';
  document.getElementById('typeFieldGroup').style.display = 'none';

  document.getElementById('formTitle').value = item.title || '';
  document.getElementById('formCategory').value = item.category || 'residential';
  document.getElementById('formIcon').value = item.icon || 'fa-broom';
  document.getElementById('formShortDesc').value = item.short_desc || item.shortDesc || '';
  document.getElementById('formFullDesc').value = item.full_desc || item.fullDesc || '';
  document.getElementById('formDuration').value = item.duration || '';
  document.getElementById('formRecommendedFor').value = item.recommended_for || item.recommendedFor || '';
  document.getElementById('formSortOrder').value = item.sort_order || 0;
  document.getElementById('formIsVisible').value = String(item.is_visible !== false);

  if (item.img) {
    document.getElementById('formImageUrl').value = item.img;
    showImagePreview(item.img);
  }

  openAdminModal('itemFormModal');
}

function openAddGalleryModal() {
  resetModalForm();
  document.getElementById('modalFormTitle').innerText = 'Add Gallery Item';
  document.getElementById('formItemSection').value = 'gallery';
  document.getElementById('serviceFieldsGroup').style.display = 'none';
  document.getElementById('typeFieldGroup').style.display = 'block';
  document.getElementById('formSortOrder').value = adminGalleryData.length + 1;

  openAdminModal('itemFormModal');
}

function openEditGalleryModal(id) {
  resetModalForm();
  const item = adminGalleryData.find(g => g.id === id);
  if (!item) return;

  document.getElementById('modalFormTitle').innerText = 'Edit Gallery Item';
  document.getElementById('formItemId').value = item.id;
  document.getElementById('formItemSection').value = 'gallery';
  document.getElementById('serviceFieldsGroup').style.display = 'none';
  document.getElementById('typeFieldGroup').style.display = 'block';

  document.getElementById('formTitle').value = item.title || '';
  document.getElementById('formCategory').value = item.category || 'home';
  document.getElementById('formType').value = item.type || 'photo';
  document.getElementById('formSortOrder').value = item.sort_order || 0;
  document.getElementById('formIsVisible').value = String(item.is_visible !== false);

  const imgUrl = item.img || item.poster;
  if (imgUrl) {
    document.getElementById('formImageUrl').value = imgUrl;
    showImagePreview(imgUrl);
  }

  openAdminModal('itemFormModal');
}

function openAddWorkModal() {
  resetModalForm();
  document.getElementById('modalFormTitle').innerText = 'Add View Our Work Item';
  document.getElementById('formItemSection').value = 'works';
  document.getElementById('serviceFieldsGroup').style.display = 'none';
  document.getElementById('typeFieldGroup').style.display = 'block';
  document.getElementById('formSortOrder').value = adminWorksData.length + 1;

  openAdminModal('itemFormModal');
}

function openEditWorkModal(id) {
  resetModalForm();
  const item = adminWorksData.find(w => w.id === id);
  if (!item) return;

  document.getElementById('modalFormTitle').innerText = 'Edit Work Item';
  document.getElementById('formItemId').value = item.id;
  document.getElementById('formItemSection').value = 'works';
  document.getElementById('serviceFieldsGroup').style.display = 'none';
  document.getElementById('typeFieldGroup').style.display = 'block';

  document.getElementById('formTitle').value = item.title || '';
  document.getElementById('formCategory').value = item.category || 'home';
  document.getElementById('formType').value = item.type || 'photo';
  document.getElementById('formSortOrder').value = item.sort_order || 0;
  document.getElementById('formIsVisible').value = String(item.is_visible !== false);

  const imgUrl = item.img || item.poster;
  if (imgUrl) {
    document.getElementById('formImageUrl').value = imgUrl;
    showImagePreview(imgUrl);
  }

  openAdminModal('itemFormModal');
}

function resetModalForm() {
  document.getElementById('adminItemForm').reset();
  document.getElementById('formItemId').value = '';
  document.getElementById('formImageUrl').value = '';
  document.getElementById('formCloudinaryPublicId').value = '';
  document.getElementById('imagePreviewContainer').style.display = 'none';
}

async function handleImageFileChange(e) {
  const file = e.target.files[0];
  if (!file) return;

  const saveBtn = document.getElementById('saveItemBtn');
  saveBtn.disabled = true;
  saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading Image to Cloudinary...';

  try {
    const res = await uploadToCloudinary(file);
    document.getElementById('formImageUrl').value = res.secure_url;
    document.getElementById('formCloudinaryPublicId').value = res.public_id;
    showImagePreview(res.secure_url);
    showDashboardAlert('Image uploaded successfully to Cloudinary!', 'success');
  } catch (err) {
    alert(err.message || 'Error uploading image to Cloudinary');
  } finally {
    saveBtn.disabled = false;
    saveBtn.innerHTML = 'Save Item';
  }
}

function showImagePreview(url) {
  const container = document.getElementById('imagePreviewContainer');
  const img = document.getElementById('imagePreviewImg');
  img.src = url;
  container.style.display = 'block';
}

async function handleSaveItem(e) {
  e.preventDefault();
  const section = document.getElementById('formItemSection').value;
  const itemId = document.getElementById('formItemId').value;

  const saveBtn = document.getElementById('saveItemBtn');
  saveBtn.disabled = true;
  saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';

  try {
    if (section === 'services') {
      const obj = {
        id: itemId || undefined,
        title: document.getElementById('formTitle').value.trim(),
        category: document.getElementById('formCategory').value.trim(),
        icon: document.getElementById('formIcon').value.trim() || 'fa-broom',
        short_desc: document.getElementById('formShortDesc').value.trim(),
        full_desc: document.getElementById('formFullDesc').value.trim(),
        duration: document.getElementById('formDuration').value.trim(),
        recommended_for: document.getElementById('formRecommendedFor').value.trim(),
        img: document.getElementById('formImageUrl').value || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
        cloudinary_public_id: document.getElementById('formCloudinaryPublicId').value || undefined,
        sort_order: parseInt(document.getElementById('formSortOrder').value) || 0,
        is_visible: document.getElementById('formIsVisible').value === 'true'
      };

      await saveService(obj);
      showDashboardAlert('Service saved successfully!');
      await fetchAndRenderAdminServices();

    } else if (section === 'gallery') {
      const obj = {
        id: itemId || undefined,
        title: document.getElementById('formTitle').value.trim(),
        category: document.getElementById('formCategory').value.trim(),
        type: document.getElementById('formType').value,
        img: document.getElementById('formImageUrl').value || 'assets/images/gallery/work-8.png',
        poster: document.getElementById('formImageUrl').value || 'assets/images/gallery/work-8.png',
        cloudinary_public_id: document.getElementById('formCloudinaryPublicId').value || undefined,
        sort_order: parseInt(document.getElementById('formSortOrder').value) || 0,
        is_visible: document.getElementById('formIsVisible').value === 'true'
      };

      await saveGallery(obj);
      showDashboardAlert('Gallery item saved successfully!');
      await fetchAndRenderAdminGallery();

    } else if (section === 'works') {
      const obj = {
        id: itemId || undefined,
        title: document.getElementById('formTitle').value.trim(),
        category: document.getElementById('formCategory').value.trim(),
        type: document.getElementById('formType').value,
        img: document.getElementById('formImageUrl').value || 'assets/images/gallery/work-8.png',
        poster: document.getElementById('formImageUrl').value || 'assets/images/gallery/work-8.png',
        cloudinary_public_id: document.getElementById('formCloudinaryPublicId').value || undefined,
        sort_order: parseInt(document.getElementById('formSortOrder').value) || 0,
        is_visible: document.getElementById('formIsVisible').value === 'true'
      };

      await saveWork(obj);
      showDashboardAlert('Work item saved successfully!');
      await fetchAndRenderAdminWorks();
    }

    closeAdminModal('itemFormModal');
  } catch (err) {
    alert(err.message || 'Error saving item');
  } finally {
    saveBtn.disabled = false;
    saveBtn.innerHTML = 'Save Item';
  }
}

// --------------------------------------------------------------------------
// DELETE PERMANENTLY CONFIRMATION LOGIC
// --------------------------------------------------------------------------

function promptDeleteConfirmation(section, id) {
  pendingDeleteInfo = { section, id };
  openAdminModal('deleteConfirmModal');
}

async function executePermanentDelete() {
  if (!pendingDeleteInfo) return;

  const { section, id } = pendingDeleteInfo;
  const btn = document.getElementById('confirmDeleteBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Deleting...';

  try {
    if (section === 'services') {
      await deleteService(id);
      showDashboardAlert('Service deleted permanently from website and database.');
      await fetchAndRenderAdminServices();
    } else if (section === 'gallery') {
      await deleteGallery(id);
      showDashboardAlert('Gallery item deleted permanently.');
      await fetchAndRenderAdminGallery();
    } else if (section === 'works') {
      await deleteWork(id);
      showDashboardAlert('Work item deleted permanently.');
      await fetchAndRenderAdminWorks();
    }
    closeAdminModal('deleteConfirmModal');
  } catch (err) {
    alert(err.message || 'Error deleting item permanently');
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Delete Permanently';
    pendingDeleteInfo = null;
  }
}

// --------------------------------------------------------------------------
// MANUAL 1-TIME MIGRATION HANDLER
// --------------------------------------------------------------------------

async function handleManualMigrationClick() {
  const btn = document.getElementById('migrationBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Migrating static content to Supabase...';

  try {
    const staticServices = typeof SERVICES_DATA !== 'undefined' ? SERVICES_DATA : [];
    const staticGallery = typeof GALLERY_ITEMS !== 'undefined' ? GALLERY_ITEMS : [];

    const res = await manualOneTimeDataMigration(staticServices, staticGallery);
    showDashboardAlert(`Migration Completed! Services: ${res.servicesMigrated}, Gallery: ${res.galleryMigrated}, Works: ${res.worksMigrated}`);
    
    // Refresh tables
    fetchAndRenderAdminServices();
    fetchAndRenderAdminGallery();
    fetchAndRenderAdminWorks();
  } catch (err) {
    showDashboardAlert(err.message || 'Error during data migration', 'danger');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Migrate Static Content to Supabase';
  }
}

// --------------------------------------------------------------------------
// MODAL HELPER UTILS
// --------------------------------------------------------------------------

function openAdminModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeAdminModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}
