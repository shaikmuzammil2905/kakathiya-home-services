/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — SUPABASE & CLOUDINARY CONFIG
   ========================================================================== */

const SUPABASE_URL = 'https://bnngyzslkggdidsqlxje.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubmd5enNsa2dnZGlkc3FseGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MzY2MjYsImV4cCI6MjEwMjAxMjYyNn0.Su1TJykNVYU7spNEwtIrsuMrc1ype_qC5j_fMQ2S14o';

const CLOUDINARY_CLOUD_NAME = 'oji0dkxb';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

let dbClient = null;

function getSupabase() {
  if (!dbClient && window.supabase && typeof window.supabase.createClient === 'function') {
    dbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return dbClient;
}

// --------------------------------------------------------------------------
// SERVICES API
// --------------------------------------------------------------------------

async function getPublicServices() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('services')
    .select('*')
    .eq('is_visible', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching public services:', error);
    return null;
  }
  return data;
}

async function getAdminServices() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('services')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching admin services:', error);
    return null;
  }
  return data;
}

async function saveService(serviceObj) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  serviceObj.updated_at = new Date().toISOString();
  if (!serviceObj.id) {
    serviceObj.id = 'svc-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    serviceObj.created_at = new Date().toISOString();
  }

  const { data, error } = await sb
    .from('services')
    .upsert([serviceObj])
    .select();

  if (error) throw error;
  return data ? data[0] : serviceObj;
}

async function deleteService(id) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  const { error } = await sb
    .from('services')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}

// --------------------------------------------------------------------------
// GALLERY API
// --------------------------------------------------------------------------

async function getPublicGallery() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('gallery')
    .select('*')
    .eq('is_visible', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching public gallery:', error);
    return null;
  }
  return data;
}

async function getAdminGallery() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('gallery')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching admin gallery:', error);
    return null;
  }
  return data;
}

async function saveGallery(galleryObj) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  galleryObj.updated_at = new Date().toISOString();
  if (!galleryObj.id) {
    galleryObj.id = 'gal-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    galleryObj.created_at = new Date().toISOString();
  }

  const { data, error } = await sb
    .from('gallery')
    .upsert([galleryObj])
    .select();

  if (error) throw error;
  return data ? data[0] : galleryObj;
}

async function deleteGallery(id) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  const { error } = await sb
    .from('gallery')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}

// --------------------------------------------------------------------------
// VIEW OUR WORK API
// --------------------------------------------------------------------------

async function getPublicWorks() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('view_our_work')
    .select('*')
    .eq('is_visible', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching public works:', error);
    return null;
  }
  return data;
}

async function getAdminWorks() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from('view_our_work')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching admin works:', error);
    return null;
  }
  return data;
}

async function saveWork(workObj) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  workObj.updated_at = new Date().toISOString();
  if (!workObj.id) {
    workObj.id = 'work-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    workObj.created_at = new Date().toISOString();
  }

  const { data, error } = await sb
    .from('view_our_work')
    .upsert([workObj])
    .select();

  if (error) throw error;
  return data ? data[0] : workObj;
}

async function deleteWork(id) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  const { error } = await sb
    .from('view_our_work')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}

// --------------------------------------------------------------------------
// REALTIME SUBSCRIPTION HELPER
// --------------------------------------------------------------------------

function subscribeToTableChanges(tableName, callback) {
  const sb = getSupabase();
  if (!sb) return null;

  const channel = sb
    .channel(`public:${tableName}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, (payload) => {
      console.log(`Realtime update on table ${tableName}:`, payload);
      callback(payload);
    })
    .subscribe();

  return channel;
}

// --------------------------------------------------------------------------
// CLOUDINARY UNSIGNED UPLOAD
// --------------------------------------------------------------------------

async function uploadToCloudinary(file) {
  if (!file) throw new Error('No file provided for upload');
  
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(url, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Cloudinary upload failed: ${errText}`);
  }

  const json = await res.json();
  return {
    secure_url: json.secure_url,
    public_id: json.public_id
  };
}

// --------------------------------------------------------------------------
// MANUAL 1-TIME MIGRATION (Executed ONLY via Admin Panel Button)
// --------------------------------------------------------------------------

async function manualOneTimeDataMigration(staticServices, staticGallery) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase client not initialized');

  let results = { servicesMigrated: 0, galleryMigrated: 0, worksMigrated: 0 };

  if (Array.isArray(staticServices) && staticServices.length > 0) {
    const preparedServices = staticServices.map((s, idx) => ({
      id: s.id,
      title: s.title,
      category: s.category || 'residential',
      icon: s.icon || 'fa-broom',
      short_desc: s.shortDesc || s.short_desc || '',
      full_desc: s.fullDesc || s.full_desc || '',
      img: s.img || '',
      inclusions: s.inclusions || [],
      duration: s.duration || '',
      recommended_for: s.recommendedFor || s.recommended_for || '',
      price: s.price || null,
      button_text: s.buttonText || s.button_text || null,
      button_link: s.buttonLink || s.button_link || null,
      is_visible: true,
      sort_order: idx + 1,
      updated_at: new Date().toISOString()
    }));

    const { data: sData, error: sErr } = await sb.from('services').upsert(preparedServices).select();
    if (sErr) console.error('Error migrating services:', sErr);
    else results.servicesMigrated = sData ? sData.length : preparedServices.length;
  }

  if (Array.isArray(staticGallery) && staticGallery.length > 0) {
    const preparedGallery = staticGallery.map((g, idx) => ({
      id: String(g.id),
      type: g.type || 'photo',
      category: g.category || 'home',
      category_name: g.categoryName || g.category_name || '',
      title: g.title || '',
      img: g.img || g.poster || '',
      video_src: g.videoSrc || g.video_src || null,
      poster: g.poster || g.img || null,
      badge: g.badge || (g.type === 'video' ? 'HD VIDEO' : 'HD PHOTO'),
      is_visible: true,
      sort_order: idx + 1,
      updated_at: new Date().toISOString()
    }));

    const { data: gData, error: gErr } = await sb.from('gallery').upsert(preparedGallery).select();
    if (gErr) console.error('Error migrating gallery:', gErr);
    else results.galleryMigrated = gData ? gData.length : preparedGallery.length;

    const { data: wData, error: wErr } = await sb.from('view_our_work').upsert(preparedGallery).select();
    if (wErr) console.error('Error migrating view_our_work:', wErr);
    else results.worksMigrated = wData ? wData.length : preparedGallery.length;
  }

  return results;
}
