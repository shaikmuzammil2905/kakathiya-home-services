/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — BLOG & ARTICLE READER
   10 Full SEO-Optimized Articles
   ========================================================================== */

const BLOG_POSTS = [
  {
    id: 'why-professional-home-deep-cleaning-is-important',
    title: 'Why Professional Home Deep Cleaning Is Important for Hyderabad Residences',
    category: 'Home Care',
    date: 'August 10, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover how professional deep cleaning removes hidden dust mites, hard water stains, and airborne allergens in Hyderabad homes.',
    content: `
      <p>Hyderabad’s rapid urban expansion and warm climate bring unique environmental challenges to local households. Fine dust from ongoing construction, traffic exhaust, and seasonal humidity settle deep within couch fabrics, air conditioning vents, and floor grout lines. Regular sweeping and mopping only handle surface-level dirt.</p>
      
      <h3>1. Elimination of Hidden Allergens & Dust Mites</h3>
      <p>Microscopic dust mites thrive in mattresses, soft carpets, and sofa cushions. Standard household vacuums often recycle fine dust back into the air. Professional home deep cleaners use high-powered extraction machines with HEPA filters that trap 99.9% of dust particles, significantly improving indoor air quality for asthmatic family members and children.</p>

      <h3>2. Effective Hard Water Stain & Limescale Scrubbing</h3>
      <p>Borewell and municipal hard water in areas like Kukatpally, Madhapur, and Manikonda leaves white mineral crusts on bathroom tiles, glass partitions, and chrome faucets. Specialized acidic descalers used by Kakatiya Cleaning break down tough mineral deposits without eroding your expensive tile glaze.</p>

      <h3>3. Protection of Property Investment</h3>
      <p>Marble and vitrified floors lose their natural sheen over time if grime accumulates in tile pores. Periodic machine-assisted floor scrubbing prevents permanent discoloration, extending the lifespan of your flooring and furniture.</p>
    `
  },
  {
    id: 'how-often-should-you-deep-clean-your-home',
    title: 'How Often Should You Deep Clean Your Home in Hyderabad?',
    category: 'Guides',
    date: 'August 05, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A practical recommended timeline for scheduling deep cleaning for apartments, independent houses, and gated communities.',
    content: `
      <p>Maintaining a hygienic living environment requires a balance between daily maintenance and periodic professional deep cleaning. Depending on your location in Hyderabad and lifestyle, here is the ideal schedule recommended by cleaning experts:</p>

      <h3>Complete Home Deep Cleaning: Every 4 to 6 Months</h3>
      <p>For most families living near main roads or high-density areas in Hyderabad, scheduling a thorough top-to-bottom deep clean twice or thrice a year ensures that cobwebs, window track dust, and ceiling fan soot never pile up.</p>

      <h3>Kitchen & Bathroom Deep Cleaning: Every 2 to 3 Months</h3>
      <p>Kitchens experience daily oil grease accumulation while bathrooms deal with moisture and soap scum. Scheduling deep kitchen degreasing and bathroom tile descaling quarterly prevents bacterial buildup and foul odors.</p>

      <h3>Sofa & Carpet Shampooing: Every 6 Months</h3>
      <p>If you have pets or young kids, upholstered furniture absorbs spills and body oils quickly. Professional shampooing twice a year keeps soft furnishings fresh and hygienic.</p>
    `
  },
  {
    id: 'benefits-of-professional-kitchen-cleaning',
    title: 'Top Benefits of Professional Kitchen Deep Cleaning',
    category: 'Kitchen Care',
    date: 'July 28, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Learn how deep cleaning your kitchen chimney, countertops, and cabinets prevents pest infestations and fire hazards.',
    content: `
      <p>Indian cooking uses rich spices and oils that vaporize during high-heat frying. Over time, vaporized grease coats chimney filters, kitchen tile walls, exhaust fans, and cabinet tops, creating sticky grime that attracts cockroaches and pests.</p>

      <h3>Pest Prevention & Food Safety</h3>
      <p>Cockroaches and ants nest behind greasy cabinets and under sinks. Kakatiya food-safe degreasing wipes away grease food sources, ensuring a hygienic food preparation area.</p>

      <h3>Fire Hazard Reduction</h3>
      <p>Thick oil residue inside chimney hoods and exhaust fans poses a fire hazard when cooking at high temperatures. Removing grease buildup ensures proper airflow and safety.</p>
    `
  },
  {
    id: 'how-professional-bathroom-cleaning-improves-hygiene',
    title: 'How Professional Bathroom Cleaning Improves Family Hygiene',
    category: 'Sanitization',
    date: 'July 20, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Detailed insight into bacterial control, mold removal, and limescale descaling in modern residential bathrooms.',
    content: `
      <p>Bathrooms are moisture-rich zones where mold spores, E. coli, and mildew multiply rapidly. Standard surface wiping leaves bacteria intact inside grout lines and behind toilet bowls.</p>
      <p>Our deep cleaning protocol utilizes anti-bacterial disinfectants combined with high-pressure tile scrubbing that eradicates 99.9% of harmful micro-organisms, restoring sanitary peace of mind.</p>
    `
  },
  {
    id: 'home-cleaning-tips-for-hyderabad-families',
    title: 'Essential Home Cleaning Tips for Hyderabad Families',
    category: 'Tips',
    date: 'July 15, 2026',
    readTime: '3 min read',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Simple daily and weekly habits to keep your home dust-free during peak summer and monsoon seasons in Telangana.',
    content: `
      <p>Keep your home looking fresh between professional service visits with these practical tips:</p>
      <ul>
        <li>Use micro-fiber dusting cloths instead of dry feather dusters to trap dust particles.</li>
        <li>Place double doormats at balcony and main entrances to catch incoming red soil.</li>
        <li>Squeegee shower glass panels immediately after bathing to reduce hard water stain marks.</li>
      </ul>
    `
  },
  {
    id: 'office-cleaning-why-workplace-hygiene-matters',
    title: 'Office Cleaning: Why Workplace Hygiene Matters for Productivity',
    category: 'Commercial',
    date: 'July 08, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How clean workstations, sanitized keyboards, and fresh office carpets reduce employee sick leaves and boost morale.',
    content: `
      <p>In corporate centers like Jubilee Hills, Gachibowli, and Financial District, a clean workplace is essential for employee health and corporate branding. Computer keyboards contain up to 400 times more bacteria than a toilet seat if left un-sanitized. Regular office deep cleaning ensures a healthy, energized team.</p>
    `
  },
  {
    id: 'how-to-prepare-your-home-for-move-in-cleaning',
    title: 'How to Prepare Your Home for a Move-In Deep Cleaning Service',
    category: 'Relocation',
    date: 'June 29, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A step-by-step checklist to get maximum efficiency from your move-in cleaning appointment in Hyderabad.',
    content: `
      <p>Planning to move into a newly purchased flat or rented apartment? Schedule your deep clean BEFORE unpacking boxes. Having empty rooms allows cleaning crews complete access to clean inside wardrobes, scrub bare floors, and polish kitchen cabinets without moving heavy furniture.</p>
    `
  },
  {
    id: 'post-construction-cleaning-what-you-need-to-know',
    title: 'Post-Construction Cleaning: What You Need to Know After Renovation',
    category: 'Specialized',
    date: 'June 18, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why post-renovation cleanup requires specialized tools, paint scrapers, and industrial HEPA vacuum cleaners.',
    content: `
      <p>Construction dust is composed of silica, cement particles, and dry wall dust that can damage air conditioners and irritate lungs if not thoroughly removed. Post-construction cleaning uses multi-stage industrial vacuuming and careful chemical paint spot removal.</p>
    `
  },
  {
    id: 'professional-sofa-cleaning-vs-diy-cleaning',
    title: 'Professional Sofa Cleaning vs DIY Cleaning: Which Is Better?',
    category: 'Upholstery',
    date: 'June 10, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Comparing home DIY spot scrubbing with professional injection-extraction sofa shampooing machines.',
    content: `
      <p>Rubbing sofa stains with household detergent often pushes the liquid deeper into the cushion foam, causing damp mold growth inside. Professional extraction machines inject cleaning solution and immediately suck out dirty moisture, drying the sofa rapidly and preserving fabric integrity.</p>
    `
  },
  {
    id: 'why-regular-commercial-cleaning-is-important',
    title: 'Why Regular Commercial Cleaning Is Important for Hyderabad Retail & Dining',
    category: 'Commercial',
    date: 'June 01, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Maintain customer trust and pass hygiene audits with commercial deep cleaning for showrooms and restaurants.',
    content: `
      <p>Clean floors, sparkling glass doors, and spotless restrooms leave a lasting first impression on shoppers and restaurant guests. Commercial cleaning builds customer loyalty and protects brand reputation in competitive Hyderabad hubs.</p>
    `
  }
];

function initBlog() {
  renderBlogGrid();
}

function renderBlogGrid() {
  const container = document.getElementById('blogGrid');
  if (!container) return;

  container.innerHTML = BLOG_POSTS.map(post => `
    <article class="blog-card" onclick="openBlogModal('${post.id}')">
      <div class="blog-img">
        <img src="${post.img}" alt="${post.title}" loading="lazy" />
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
          <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-read-more">
          Read Full Article <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </article>
  `).join('');
}

function openBlogModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const modalContainer = document.getElementById('blogModalContainer');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="blogReaderModal" onclick="closeModalOnOverlay(event, 'blogReaderModal')">
      <div class="modal-card blog-modal-card">
        <button class="modal-close-btn" onclick="closeBlogModal()">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="blog-modal-header">
          <span class="section-tag">${post.category.toUpperCase()}</span>
          <h1 class="blog-modal-title">${post.title}</h1>
          <div class="blog-modal-meta">
            <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
            <span><i class="fa-solid fa-user-check"></i> Kakatiya Cleaning Experts</span>
          </div>
        </div>
        <img src="${post.img}" alt="${post.title}" class="blog-modal-img" />
        <div class="blog-modal-content">
          ${post.content}
        </div>
        <div class="blog-modal-cta">
          <h3>Need Professional Cleaning Services in Hyderabad?</h3>
          <p style="margin: 10px 0 18px 0; color: var(--text-muted);">
            Book our trained professionals for home, office, kitchen or sofa cleaning today.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="tel:9030798839" class="btn btn-primary">
              <i class="fa-solid fa-phone"></i> Call 9030798839
            </a>
            <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20read%20your%20blog%20post%20and%20want%20to%20enquire" 
               target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  const modal = document.getElementById('blogReaderModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
  document.body.style.overflow = '';
}
