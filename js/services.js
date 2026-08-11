/* ==========================================================================
   KAKATIYA PROFESSIONAL CLEANING SERVICES — SERVICES DATA & CONTROLLER
   100% Non-Pictorial Representation with Attractive Content & Scroll Animation
   ========================================================================== */

const SERVICES_DATA = [
  {
    id: 'home-deep-cleaning',
    title: 'Home Deep Cleaning',
    category: 'residential',
    icon: 'fa-house-chimney-crack',
    shortDesc: 'Complete deep cleaning for homes, including floors, walls, kitchens, bathrooms, furniture, and hard-to-reach areas.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Our Home Deep Cleaning service offers an all-inclusive hygienic overhaul of your entire residence in Hyderabad. We cover every corner, eliminating hidden dust mites, cobwebs, stubborn stains, and bacteria using industry-standard eco-friendly cleaning agents.',
    inclusions: [
      'Comprehensive dusting & cobweb removal from ceiling to floor',
      'Floor scrubbing & machine polishing for tiles/marble',
      'Deep cleaning of window frames, glass panes & wire meshes',
      'Door, switchboard & light fixture sanitization',
      'Balcony, fan, and air-con exterior cleaning',
      'Disinfection of high-touch handles & surfaces'
    ],
    duration: '4 - 6 Hours',
    recommendedFor: 'Independent Houses, Villas, 1/2/3/4 BHK Apartments in Hyderabad'
  },
  {
    id: 'kitchen-deep-cleaning',
    title: 'Kitchen Deep Cleaning',
    category: 'residential',
    icon: 'fa-kitchen-set',
    shortDesc: 'Detailed cleaning of kitchen surfaces, cabinets, countertops, tiles, appliances, grease, and stubborn dirt buildup.',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Kitchens accumulate tough oil grease, smoke soot, and food stains over time. Our specialized Kitchen Deep Cleaning service uses food-safe degreasers to restore your kitchen cabinets, chimney exteriors, platform counters, and wall tiles to spotless perfection.',
    inclusions: [
      'Degreasing of kitchen wall tiles, stove top & countertops',
      'Cabinet exterior & interior wipedown (if empty)',
      'Exhaust fan & chimney exterior degreasing',
      'Sink & faucet descaling and sanitization',
      'Appliance exterior cleaning (Fridge, Microwave, Oven)',
      'Floor scrubbing and trash area disinfection'
    ],
    duration: '2 - 3 Hours',
    recommendedFor: 'Residential Kitchens, Modular Kitchens, Pantry Spaces'
  },
  {
    id: 'bathroom-deep-cleaning',
    title: 'Bathroom Deep Cleaning',
    category: 'residential',
    icon: 'fa-toilet',
    shortDesc: 'Professional cleaning and sanitization of bathroom floors, tiles, wash basins, toilets, and other surfaces.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Hard water stains, limescale, mildew, and soap scum ruin bathroom aesthetics and foster harmful bacteria. Kakatiya bathroom specialists use hospital-grade descalers and anti-bacterial cleaners to sanitize every inch.',
    inclusions: [
      'Limescale & hard water stain removal from tiles & glass partitions',
      'Toilet bowl, seat, and bidet deep sanitization',
      'Wash basin, faucet & chrome fitting polishing',
      'Mirror, glass door & window mesh cleaning',
      'Floor tile scrubbing & grout line whitening',
      'Exhaust fan & drain de-clogging check'
    ],
    duration: '1.5 - 2.5 Hours',
    recommendedFor: 'Residential & Commercial Bathrooms across Hyderabad'
  },
  {
    id: 'sofa-cleaning',
    title: 'Sofa Cleaning',
    category: 'residential',
    icon: 'fa-couch',
    shortDesc: 'Deep cleaning of sofas and upholstered furniture to remove dust, stains, dirt, and unpleasant odors.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Sofas trap dust, pet hair, allergen particles, and spills. Our high-power extraction sofa cleaning uses eco-safe shampooing and deep vacuum extraction to lift deep-seated dirt without damaging fabric fibers.',
    inclusions: [
      'High-power dry vacuuming for dust & debris extraction',
      'Fabric shampooing & active foam stain treatment',
      'Hot water extraction / suction process',
      'Leather sofa conditioning (for leather furniture)',
      'Deodorization & anti-bacterial spray application',
      'Cushion & side panel thorough deep clean'
    ],
    duration: '1 - 2 Hours',
    recommendedFor: 'Fabric Sofas, Leather Loungers, Recliners, Dining Chairs'
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    category: 'residential',
    icon: 'fa-rug',
    shortDesc: 'Professional carpet cleaning to remove dust, dirt, stains, and odors while maintaining a fresh and hygienic environment.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Carpets absorb heavy foot traffic dirt and air humidity in Hyderabad homes and offices. We provide injection-extraction shampoo cleaning that revives carpet colors, eliminates odor, and removes deep dirt trapped in carpet piles.',
    inclusions: [
      'Industrial vacuuming of carpet fibers',
      'Targeted stain treatment for coffee/food spills',
      'Shampoo injection & agitator brush scrubbing',
      'Moisture extraction drying process',
      'Anti-microbial & scent treatment'
    ],
    duration: '1 - 3 Hours',
    recommendedFor: 'Residential Rugs, Office Carpet Tiles, Wall-to-Wall Carpeting'
  },
  {
    id: 'floor-cleaning-scrubbing',
    title: 'Floor Cleaning & Scrubbing',
    category: 'specialized',
    icon: 'fa-broom',
    shortDesc: 'Machine-assisted floor cleaning and scrubbing to remove stubborn dirt, stains, and buildup from different types of flooring.',
    img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Over time, floors lose their shine due to dirt build-up in tile grouts and surface grime. We utilize single-disc heavy duty rotary scrubbing machines with specialized floor pads suitable for Marble, Granite, Vitrified Tiles, and Epoxy floors.',
    inclusions: [
      'Single-disc rotary scrubbing machine cleaning',
      'Grout line deep cleaning & chemical treatment',
      'Stain removal for grout & tile surfaces',
      'Wet vacuum extraction of dirty residue',
      'Floor buffing & neutral shine restoration'
    ],
    duration: '2 - 5 Hours',
    recommendedFor: 'Apartment Floors, Commercial Halls, Showrooms, Villa Flooring'
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    category: 'commercial',
    icon: 'fa-building',
    shortDesc: 'Complete cleaning for offices and workplaces, including work areas, floors, washrooms, meeting rooms, and common areas.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'A pristine office boosts productivity and presents a professional impression to clients in HITEC City, Gachibowli, and across Hyderabad. Our office cleaning crew sanitizes workstations, IT peripherals, conference rooms, and high-footfall areas.',
    inclusions: [
      'Workstation, desk, keyboard & phone sanitization',
      'Conference room table & chair deep vacuuming',
      'Pantry area degreasing & water dispenser clean',
      'Restroom sanitization & restocking check',
      'Trash bin emptying & liner replacement',
      'Glass partition wiping & carpet vacuuming'
    ],
    duration: 'Tailored / Weekend / After-Hours',
    recommendedFor: 'IT Hubs, Corporate Offices, Co-Working Spaces, Law Firms'
  },
  {
    id: 'commercial-space-cleaning',
    title: 'Commercial Space Cleaning',
    category: 'commercial',
    icon: 'fa-store',
    shortDesc: 'Professional cleaning for shops, showrooms, malls, business spaces and other commercial establishments.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Commercial venues require pristine aesthetic appeal and high hygienic standards. We deliver comprehensive commercial cleaning for retail outlets, auto showrooms, shopping complexes, and financial branches in Hyderabad.',
    inclusions: [
      'Showroom glass facade & display clean',
      'High-traffic floor machine scrubbing',
      'Trial room & customer lounge deep cleaning',
      'Escalator/staircase handrail sanitization',
      'Air duct grill dusting & lighting fixture wiping'
    ],
    duration: 'Custom Schedule Available',
    recommendedFor: 'Retail Stores, Car Showrooms, Shopping Centers, Banks'
  },
  {
    id: 'hospital-healthcare-facility-cleaning',
    title: 'Hospital & Healthcare Facility Cleaning',
    category: 'healthcare',
    icon: 'fa-hospital',
    shortDesc: 'Professional cleaning and sanitization for hospitals, clinics, healthcare centers and medical facilities with strong attention to hygiene.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Healthcare environments mandate strict infection control protocols. Our trained healthcare sanitation staff use hospital-grade surface disinfectants to eliminate pathogens in clinics, diagnostic labs, and medical centers across Hyderabad.',
    inclusions: [
      'Terminal cleaning & disinfection of patient rooms',
      'Waiting lounge & reception desk sanitization',
      'Diagnostic equipment & bed frame surface wiping',
      'Medical-grade floor disinfection protocol',
      'Restroom anti-microbial deep treatment'
    ],
    duration: 'Custom Operations Protocol',
    recommendedFor: 'Hospitals, Polyclinics, Dental Clinics, Pathology Labs'
  },
  {
    id: 'restaurant-food-outlet-cleaning',
    title: 'Restaurant & Food Outlet Cleaning',
    category: 'commercial',
    icon: 'fa-utensils',
    shortDesc: 'Deep cleaning for restaurants, cafés, hotels, food outlets, kitchens, dining areas, floors and customer-facing spaces.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Food safety regulators and customers demand spotless kitchen and dining areas. Kakatiya provides heavy-duty grease removal, floor degreasing, and dining seating sanitization for Hyderabad eateries.',
    inclusions: [
      'Kitchen exhaust, hood & fry station degreasing',
      'Commercial grade kitchen floor scrubbing',
      'Dining table, booth & bar counter disinfection',
      'Food preparation table stainless steel polishing',
      'Drain line flushing & odor elimination'
    ],
    duration: 'Night Shifts / Off-Peak Hours',
    recommendedFor: 'Restaurants, Cafes, Bakeries, Cloud Kitchens, Hotel Pantries'
  },
  {
    id: 'move-in-move-out-cleaning',
    title: 'Move-In / Move-Out Cleaning',
    category: 'specialized',
    icon: 'fa-truck-ramp-box',
    shortDesc: 'Detailed cleaning before moving into a new home or after moving out of your old residence in Hyderabad.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Moving into a new home should start with a clean slate. Our move-in cleaning guarantees an immaculate environment, while our move-out service helps tenants leave their rented properties in landlord-approved condition.',
    inclusions: [
      'Interior cabinet, closet & shelf deep wiping',
      'Full kitchen grease & appliance cleaning',
      'Sanitization of all toilets & bathrooms',
      'Floor scrubbing & window track clearing',
      'Balcony washing & light fixture cleaning'
    ],
    duration: '4 - 7 Hours',
    recommendedFor: 'Tenants, Property Buyers, Landlords, Real Estate Agents'
  },
  {
    id: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    category: 'specialized',
    icon: 'fa-helmet-safety',
    shortDesc: 'Removal of construction dust, debris, stains, cement residue and leftover materials after construction or renovation.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Renovations leave fine plaster dust, paint splashes, and cement spots everywhere. Our post-construction cleaning team uses industrial HEPA vacuums and specialized scrapers to turn raw spaces into move-in ready homes.',
    inclusions: [
      'Paint drop & cement splatter removal from floors/windows',
      'HEPA vacuuming of fine plaster dust from walls & nooks',
      'Window glass paint scraping & polishing',
      'Floor machine scrubbing & tile buffing',
      'Electrical socket & trim dusting'
    ],
    duration: '1 - 2 Days',
    recommendedFor: 'Newly Built Villas, Renovated Apartments, Commercial Shells'
  },
  {
    id: 'apartment-community-cleaning',
    title: 'Apartment & Residential Community Cleaning',
    category: 'residential',
    icon: 'fa-city',
    shortDesc: 'Cleaning solutions for apartments, gated communities, common areas, corridors, staircases, parking areas and shared spaces.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Keep gated society common areas safe, hygienic, and welcoming. We partner with Resident Welfare Associations (RWAs) across Hyderabad for complete maintenance of clubhouses, corridors, lobby areas, and lifts.',
    inclusions: [
      'Staircase, elevator & lobby floor scrubbing',
      'Clubhouse gym & party hall deep sanitization',
      'Corridor railing & window wiping',
      'Basement parking area jet washing',
      'Security cabin & gatehouse cleaning'
    ],
    duration: 'Contractual / Recurring / One-time',
    recommendedFor: 'Gated Communities, Apartment Associations, Housing Societies'
  },
  {
    id: 'window-glass-cleaning',
    title: 'Window & Glass Cleaning',
    category: 'specialized',
    icon: 'fa-window-maximize',
    shortDesc: 'Professional cleaning of windows, glass doors, partitions and other glass surfaces for crystal-clear clarity.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Dust and water spots smudge exterior and interior glass. We use squeegee techniques, streak-free glass cleaners, and safe telescopic poles to leave your windows sparkling clear.',
    inclusions: [
      'Interior & exterior glass panel cleaning',
      'Window frame, track & sill vacuuming',
      'Hard water spot removal from glass',
      'Glass balcony partition squeegee clean',
      'Streak-free protective spray application'
    ],
    duration: '1 - 3 Hours',
    recommendedFor: 'High-Rise Apartments, Office Glass Partitions, Commercial Facades'
  },
  {
    id: 'sanitization-hygiene-cleaning',
    title: 'Sanitization & Hygiene Cleaning',
    category: 'specialized',
    icon: 'fa-shield-virus',
    shortDesc: 'Professional sanitization and hygiene-focused cleaning for residential and commercial environments across Hyderabad.',
    img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    fullDesc: 'Protect your family and staff from viruses, bacteria, and germ transmission. Our sanitization service utilizes ULV cold fogging and EPA-registered disinfectants for total surface airborne decontamination.',
    inclusions: [
      'ULV cold mist fogging of entire indoor air space',
      'High-touch surface anti-bacterial wiping',
      'HVAC air vent misting treatment',
      'Safe non-toxic food contact area sanitization',
      '99.9% germ elimination guarantee'
    ],
    duration: '1 - 2 Hours',
    recommendedFor: 'Homes, Daycares, Offices, Clinics, Event Spaces'
  }
];

function initServices() {
  renderServicesGrid('all');
  setupCategoryTabs();
}

function renderServicesGrid(filterCategory = 'all') {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === filterCategory);

  // 100% Non-Pictorial Representation with Attractive Content & Scroll Animation
  container.innerHTML = filtered.map((service, index) => {
    const feature1 = service.inclusions[0] || 'Verified Experienced Team';
    const feature2 = service.inclusions[1] || 'Eco-Friendly Safe Cleaning Solvents';

    return `
      <div class="service-card non-pictorial-card reveal-on-scroll" 
           data-id="${service.id}" 
           data-category="${service.category}"
           style="transition-delay: ${(index % 4) * 0.12}s;">
        
        <div class="service-card-top">
          <div class="service-icon-box icon-gradient-${service.category}">
            <i class="fa-solid ${service.icon}"></i>
          </div>
          <div class="service-meta-badge">
            <i class="fa-regular fa-clock"></i> ${service.duration}
          </div>
        </div>

        <div class="service-content">
          <div class="service-category-tag tag-${service.category}">${service.category.toUpperCase()} CLEANING</div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.shortDesc}</p>
          
          <div class="service-highlights-list">
            <div class="highlight-item">
              <i class="fa-solid fa-circle-check"></i> <span>${feature1}</span>
            </div>
            <div class="highlight-item">
              <i class="fa-solid fa-circle-check"></i> <span>${feature2}</span>
            </div>
          </div>

          <div class="service-card-actions">
            <button class="service-btn btn-details" onclick="openServiceModal('${service.id}')">
              View Details <i class="fa-solid fa-arrow-right"></i>
            </button>
            <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20want%20to%20book%20${encodeURIComponent(service.title)}" 
               target="_blank" rel="noopener noreferrer" class="btn-quick-wa-chip" title="Book via WhatsApp">
              <i class="fa-brands fa-whatsapp"></i> Book
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach IntersectionObserver for scroll reveal one by one
  triggerServicesScrollReveal();
}

function triggerServicesScrollReveal() {
  const cards = document.querySelectorAll('.service-card.reveal-on-scroll');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => {
    observer.observe(card);
  });
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn[data-category]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      renderServicesGrid(category);
    });
  });
}

function openServiceModal(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  const modalContainer = document.getElementById('serviceModalContainer');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-overlay active" id="serviceDetailModal" onclick="closeModalOnOverlay(event, 'serviceDetailModal')">
      <div class="modal-card service-modal-card">
        <button class="modal-close-btn" onclick="closeServiceModal()">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="service-modal-header-accent icon-gradient-${service.category}">
          <div class="service-modal-icon-lg">
            <i class="fa-solid ${service.icon}"></i>
          </div>
          <div>
            <span class="section-tag" style="background: rgba(255,255,255,0.2); color:#fff; margin-bottom:4px;">${service.category.toUpperCase()} CLEANING</span>
            <h2 style="color:#fff; font-size:1.75rem;">${service.title}</h2>
          </div>
        </div>
        <div class="service-modal-body">
          <div class="service-modal-meta">
            <div class="service-modal-meta-item">
              <i class="fa-solid fa-clock"></i> Duration: ${service.duration}
            </div>
            <div class="service-modal-meta-item">
              <i class="fa-solid fa-location-dot"></i> Location: All Over Hyderabad
            </div>
          </div>
          <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
            ${service.fullDesc}
          </p>
          
          <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 12px;">Key Service Inclusions:</h4>
          <div class="service-modal-features">
            ${service.inclusions.map(inc => `
              <div class="service-feature-item">
                <i class="fa-solid fa-circle-check"></i> <span>${inc}</span>
              </div>
            `).join('')}
          </div>

          <div style="background: var(--bg-soft); padding: 14px 18px; border-radius: 8px; margin-top: 18px; font-size: 0.88rem;">
            <strong>Recommended For:</strong> ${service.recommendedFor}
          </div>

          <div class="service-modal-actions">
            <a href="tel:9030798839" class="btn btn-primary" style="flex:1;">
              <i class="fa-solid fa-phone"></i> Call 9030798839
            </a>
            <a href="https://wa.me/919030798839?text=Hi%20Kakatiya%20Cleaning,%20I%20want%20to%20book%20${encodeURIComponent(service.title)}" 
               target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex:1;">
              <i class="fa-brands fa-whatsapp"></i> Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('serviceDetailModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
  document.body.style.overflow = '';
}
