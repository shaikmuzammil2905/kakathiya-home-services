-- ==========================================================================
-- KAKATIYA PROFESSIONAL CLEANING SERVICES — SUPABASE DATABASE SCHEMA & SEED
-- Execute this script in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ==========================================================================

-- 1. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    icon TEXT DEFAULT 'fa-broom',
    short_desc TEXT,
    full_desc TEXT,
    img TEXT,
    cloudinary_public_id TEXT,
    inclusions JSONB DEFAULT '[]'::jsonb,
    duration TEXT,
    recommended_for TEXT,
    price TEXT,
    button_text TEXT,
    button_link TEXT,
    is_visible BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. GALLERY TABLE
CREATE TABLE IF NOT EXISTS public.gallery (
    id TEXT PRIMARY KEY,
    type TEXT DEFAULT 'photo',
    category TEXT NOT NULL,
    category_name TEXT,
    title TEXT NOT NULL,
    img TEXT,
    video_src TEXT,
    poster TEXT,
    badge TEXT,
    cloudinary_public_id TEXT,
    is_visible BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. VIEW OUR WORK TABLE
CREATE TABLE IF NOT EXISTS public.view_our_work (
    id TEXT PRIMARY KEY,
    type TEXT DEFAULT 'photo',
    category TEXT NOT NULL,
    category_name TEXT,
    title TEXT NOT NULL,
    img TEXT,
    video_src TEXT,
    poster TEXT,
    badge TEXT,
    cloudinary_public_id TEXT,
    is_visible BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.view_our_work ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Public Read Services" ON public.services;
DROP POLICY IF EXISTS "Admin Full Access Services" ON public.services;
DROP POLICY IF EXISTS "Public Read Gallery" ON public.gallery;
DROP POLICY IF EXISTS "Admin Full Access Gallery" ON public.gallery;
DROP POLICY IF EXISTS "Public Read ViewOurWork" ON public.view_our_work;
DROP POLICY IF EXISTS "Admin Full Access ViewOurWork" ON public.view_our_work;

-- RLS Policies for Services
CREATE POLICY "Public Read Services" ON public.services
    FOR SELECT USING (is_visible = true OR auth.role() = 'authenticated');

CREATE POLICY "Admin Full Access Services" ON public.services
    FOR ALL USING (auth.role() = 'authenticated');

-- RLS Policies for Gallery
CREATE POLICY "Public Read Gallery" ON public.gallery
    FOR SELECT USING (is_visible = true OR auth.role() = 'authenticated');

CREATE POLICY "Admin Full Access Gallery" ON public.gallery
    FOR ALL USING (auth.role() = 'authenticated');

-- RLS Policies for View Our Work
CREATE POLICY "Public Read ViewOurWork" ON public.view_our_work
    FOR SELECT USING (is_visible = true OR auth.role() = 'authenticated');

CREATE POLICY "Admin Full Access ViewOurWork" ON public.view_our_work
    FOR ALL USING (auth.role() = 'authenticated');

-- Enable Realtime for all 3 tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.services;
ALTER PUBLICATION supabase_realtime ADD TABLE public.gallery;
ALTER PUBLICATION supabase_realtime ADD TABLE public.view_our_work;

-- --------------------------------------------------------------------------
-- SEED DATA (Run once to populate initial website content into Supabase)
-- --------------------------------------------------------------------------

INSERT INTO public.services (id, title, category, icon, short_desc, full_desc, img, inclusions, duration, recommended_for, sort_order) VALUES
('home-deep-cleaning', 'Home Deep Cleaning', 'residential', 'fa-house-chimney-crack', 'Complete deep cleaning for homes, including floors, walls, kitchens, bathrooms, furniture, and hard-to-reach areas.', 'Our Home Deep Cleaning service offers an all-inclusive hygienic overhaul of your entire residence in Hyderabad. We cover every corner, eliminating hidden dust mites, cobwebs, stubborn stains, and bacteria using industry-standard eco-friendly cleaning agents.', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', '["Comprehensive dusting & cobweb removal from ceiling to floor", "Floor scrubbing & machine polishing for tiles/marble", "Deep cleaning of window frames, glass panes & wire meshes", "Door, switchboard & light fixture sanitization", "Balcony, fan, and air-con exterior cleaning", "Disinfection of high-touch handles & surfaces"]'::jsonb, '4 - 6 Hours', 'Independent Houses, Villas, 1/2/3/4 BHK Apartments in Hyderabad', 1),

('kitchen-deep-cleaning', 'Kitchen Deep Cleaning', 'residential', 'fa-kitchen-set', 'Detailed cleaning of kitchen surfaces, cabinets, countertops, tiles, appliances, grease, and stubborn dirt buildup.', 'Kitchens accumulate tough oil grease, smoke soot, and food stains over time. Our specialized Kitchen Deep Cleaning service uses food-safe degreasers to restore your kitchen cabinets, chimney exteriors, platform counters, and wall tiles to spotless perfection.', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80', '["Degreasing of kitchen wall tiles, stove top & countertops", "Cabinet exterior & interior wipedown (if empty)", "Exhaust fan & chimney exterior degreasing", "Sink & faucet descaling and sanitization", "Appliance exterior cleaning (Fridge, Microwave, Oven)", "Floor scrubbing and trash area disinfection"]'::jsonb, '2 - 3 Hours', 'Residential Kitchens, Modular Kitchens, Pantry Spaces', 2),

('bathroom-deep-cleaning', 'Bathroom Deep Cleaning', 'residential', 'fa-toilet', 'Professional cleaning and sanitization of bathroom floors, tiles, wash basins, toilets, and other surfaces.', 'Hard water stains, limescale, mildew, and soap scum ruin bathroom aesthetics and foster harmful bacteria. Kakatiya bathroom specialists use hospital-grade descalers and anti-bacterial cleaners to sanitize every inch.', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', '["Limescale & hard water stain removal from tiles & glass partitions", "Toilet bowl, seat, and bidet deep sanitization", "Wash basin, faucet & chrome fitting polishing", "Mirror, glass door & window mesh cleaning", "Floor tile scrubbing & grout line whitening", "Exhaust fan & drain de-clogging check"]'::jsonb, '1.5 - 2.5 Hours', 'Residential & Commercial Bathrooms across Hyderabad', 3),

('sofa-cleaning', 'Sofa Cleaning', 'residential', 'fa-couch', 'Deep cleaning of sofas and upholstered furniture to remove dust, stains, dirt, and unpleasant odors.', 'Sofas trap dust, pet hair, allergen particles, and spills. Our high-power extraction sofa cleaning uses eco-safe shampooing and deep vacuum extraction to lift deep-seated dirt without damaging fabric fibers.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80', '["High-power dry vacuuming for dust & debris extraction", "Fabric shampooing & active foam stain treatment", "Hot water extraction / suction process", "Leather sofa conditioning (for leather furniture)", "Deodorization & anti-bacterial spray application", "Cushion & side panel thorough deep clean"]'::jsonb, '1 - 2 Hours', 'Fabric Sofas, Leather Loungers, Recliners, Dining Chairs', 4),

('carpet-cleaning', 'Carpet Cleaning', 'residential', 'fa-rug', 'Professional carpet cleaning to remove dust, dirt, stains, and odors while maintaining a fresh and hygienic environment.', 'Carpets absorb heavy foot traffic dirt and air humidity in Hyderabad homes and offices. We provide injection-extraction shampoo cleaning that revives carpet colors, eliminates odor, and removes deep dirt trapped in carpet piles.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', '["Industrial vacuuming of carpet fibers", "Targeted stain treatment for coffee/food spills", "Shampoo injection & agitator brush scrubbing", "Moisture extraction drying process", "Anti-microbial & scent treatment"]'::jsonb, '1 - 3 Hours', 'Residential Rugs, Office Carpet Tiles, Wall-to-Wall Carpeting', 5),

('floor-cleaning-scrubbing', 'Floor Cleaning & Scrubbing', 'specialized', 'fa-broom', 'Machine-assisted floor cleaning and scrubbing to remove stubborn dirt, stains, and buildup from different types of flooring.', 'Over time, floors lose their shine due to dirt build-up in tile grouts and surface grime. We utilize single-disc heavy duty rotary scrubbing machines with specialized floor pads suitable for Marble, Granite, Vitrified Tiles, and Epoxy floors.', 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80', '["Single-disc rotary scrubbing machine cleaning", "Grout line deep cleaning & chemical treatment", "Stain removal for grout & tile surfaces", "Wet vacuum extraction of dirty residue", "Floor buffing & neutral shine restoration"]'::jsonb, '2 - 5 Hours', 'Apartment Floors, Commercial Halls, Showrooms, Villa Flooring', 6),

('office-cleaning', 'Office Cleaning', 'commercial', 'fa-building', 'Complete cleaning for offices and workplaces, including work areas, floors, washrooms, meeting rooms, and common areas.', 'A pristine office boosts productivity and presents a professional impression to clients in HITEC City, Gachibowli, and across Hyderabad. Our office cleaning crew sanitizes workstations, IT peripherals, conference rooms, and high-footfall areas.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', '["Workstation, desk, keyboard & phone sanitization", "Conference room table & chair deep vacuuming", "Pantry area degreasing & water dispenser clean", "Restroom sanitization & restocking check", "Trash bin emptying & liner replacement", "Glass partition wiping & carpet vacuuming"]'::jsonb, 'Tailored / Weekend / After-Hours', 'IT Hubs, Corporate Offices, Co-Working Spaces, Law Firms', 7),

('commercial-space-cleaning', 'Commercial Space Cleaning', 'commercial', 'fa-store', 'Professional cleaning for shops, showrooms, malls, business spaces and other commercial establishments.', 'Commercial venues require pristine aesthetic appeal and high hygienic standards. We deliver comprehensive commercial cleaning for retail outlets, auto showrooms, shopping complexes, and financial branches in Hyderabad.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', '["Showroom glass facade & display clean", "High-traffic floor machine scrubbing", "Trial room & customer lounge deep cleaning", "Escalator/staircase handrail sanitization", "Air duct grill dusting & lighting fixture wiping"]'::jsonb, 'Custom Schedule Available', 'Retail Stores, Car Showrooms, Shopping Centers, Banks', 8),

('hospital-healthcare-facility-cleaning', 'Hospital & Healthcare Facility Cleaning', 'healthcare', 'fa-hospital', 'Professional cleaning and sanitization for hospitals, clinics, healthcare centers and medical facilities with strong attention to hygiene.', 'Healthcare environments mandate strict infection control protocols. Our trained healthcare sanitation staff use hospital-grade surface disinfectants to eliminate pathogens in clinics, diagnostic labs, and medical centers across Hyderabad.', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80', '["Terminal cleaning & disinfection of patient rooms", "Waiting lounge & reception desk sanitization", "Diagnostic equipment & bed frame surface wiping", "Medical-grade floor disinfection protocol", "Restroom anti-microbial deep treatment"]'::jsonb, 'Custom Operations Protocol', 'Hospitals, Polyclinics, Dental Clinics, Pathology Labs', 9),

('restaurant-food-outlet-cleaning', 'Restaurant & Food Outlet Cleaning', 'commercial', 'fa-utensils', 'Deep cleaning for restaurants, cafés, hotels, food outlets, kitchens, dining areas, floors and customer-facing spaces.', 'Food safety regulators and customers demand spotless kitchen and dining areas. Kakatiya provides heavy-duty grease removal, floor degreasing, and dining seating sanitization for Hyderabad eateries.', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', '["Kitchen exhaust, hood & fry station degreasing", "Commercial grade kitchen floor scrubbing", "Dining table, booth & bar counter disinfection", "Food preparation table stainless steel polishing", "Drain line flushing & odor elimination"]'::jsonb, 'Night Shifts / Off-Peak Hours', 'Restaurants, Cafes, Bakeries, Cloud Kitchens, Hotel Pantries', 10),

('move-in-move-out-cleaning', 'Move-In / Move-Out Cleaning', 'specialized', 'fa-truck-ramp-box', 'Detailed cleaning before moving into a new home or after moving out of your old residence in Hyderabad.', 'Moving into a new home should start with a clean slate. Our move-in cleaning guarantees an immaculate environment, while our move-out service helps tenants leave their rented properties in landlord-approved condition.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80', '["Interior cabinet, closet & shelf deep wiping", "Full kitchen grease & appliance cleaning", "Sanitization of all toilets & bathrooms", "Floor scrubbing & window track clearing", "Balcony washing & light fixture cleaning"]'::jsonb, '4 - 7 Hours', 'Tenants, Property Buyers, Landlords, Real Estate Agents', 11),

('post-construction-cleaning', 'Post-Construction Cleaning', 'specialized', 'fa-helmet-safety', 'Removal of construction dust, debris, stains, cement residue and leftover materials after construction or renovation.', 'Renovations leave fine plaster dust, paint splashes, and cement spots everywhere. Our post-construction cleaning team uses industrial HEPA vacuums and specialized scrapers to turn raw spaces into move-in ready homes.', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', '["Paint drop & cement splatter removal from floors/windows", "HEPA vacuuming of fine plaster dust from walls & nooks", "Window glass paint scraping & polishing", "Floor machine scrubbing & tile buffing", "Electrical socket & trim dusting"]'::jsonb, '1 - 2 Days', 'Newly Built Villas, Renovated Apartments, Commercial Shells', 12),

('apartment-community-cleaning', 'Apartment & Residential Community Cleaning', 'residential', 'fa-city', 'Cleaning solutions for apartments, gated communities, common areas, corridors, staircases, parking areas and shared spaces.', 'Keep gated society common areas safe, hygienic, and welcoming. We partner with Resident Welfare Associations (RWAs) across Hyderabad for complete maintenance of clubhouses, corridors, lobby areas, and lifts.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80', '["Staircase, elevator & lobby floor scrubbing", "Clubhouse gym & party hall deep sanitization", "Corridor railing & window wiping", "Basement parking area jet washing", "Security cabin & gatehouse cleaning"]'::jsonb, 'Contractual / Recurring / One-time', 'Gated Communities, Apartment Associations, Housing Societies', 13),

('window-glass-cleaning', 'Window & Glass Cleaning', 'specialized', 'fa-window-maximize', 'Professional cleaning of windows, glass doors, partitions and other glass surfaces for crystal-clear clarity.', 'Dust and water spots smudge exterior and interior glass. We use squeegee techniques, streak-free glass cleaners, and safe telescopic poles to leave your windows sparkling clear.', 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80', '["Interior & exterior glass panel cleaning", "Window frame, track & sill vacuuming", "Hard water spot removal from glass", "Glass balcony partition squeegee clean", "Streak-free protective spray application"]'::jsonb, '1 - 3 Hours', 'High-Rise Apartments, Office Glass Partitions, Commercial Facades', 14),

('sanitization-hygiene-cleaning', 'Sanitization & Hygiene Cleaning', 'specialized', 'fa-shield-virus', 'Professional sanitization and hygiene-focused cleaning for residential and commercial environments across Hyderabad.', 'Protect your family and staff from viruses, bacteria, and germ transmission. Our sanitization service utilizes ULV cold fogging and EPA-registered disinfectants for total surface airborne decontamination.', 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80', '["ULV cold mist fogging of entire indoor air space", "High-touch surface anti-bacterial wiping", "HVAC air vent misting treatment", "Safe non-toxic food contact area sanitization", "99.9% germ elimination guarantee"]'::jsonb, '1 - 2 Hours', 'Homes, Daycares, Offices, Clinics, Event Spaces', 15)
ON CONFLICT (id) DO NOTHING;

-- SEED GALLERY & VIEW OUR WORK DATA
INSERT INTO public.gallery (id, type, category, category_name, title, video_src, poster, img, badge, sort_order) VALUES
('v1', 'video', 'sofa', 'Furniture & Dining', 'Cafeteria & Dining Hall Table Cleaning Video', 'assets/videos/work-video-1.mp4', 'assets/images/gallery/work-11.png', 'assets/images/gallery/work-11.png', 'HD VIDEO', 1),
('v2', 'video', 'home', 'Home Interior', 'Bedroom Modular Wardrobe & Cabinet Cleaning Video', 'assets/videos/work-video-2.mp4', 'assets/images/gallery/work-12.png', 'assets/images/gallery/work-12.png', 'HD VIDEO', 2),
('v3', 'video', 'commercial', 'Commercial Office', 'Corporate Office Corridor & Door Sanitization Video', 'assets/videos/work-video-3.mp4', 'assets/images/gallery/work-9.png', 'assets/images/gallery/work-9.png', 'HD VIDEO', 3),
('v4', 'video', 'commercial', 'Commercial Office', 'Corporate Office Reception & Lobby Deep Clean Video', 'assets/videos/work-video-4.mp4', 'assets/images/gallery/work-10.png', 'assets/images/gallery/work-10.png', 'HD VIDEO', 4),
('v5', 'video', 'floor', 'Machine Scrubbing', 'Professional Cleaning Scrubber & Machine Setup Video', 'assets/videos/work-video-5.mp4', 'assets/images/gallery/work-8.png', 'assets/images/gallery/work-8.png', 'HD VIDEO', 5),
('v6', 'video', 'bathroom', 'Bathroom Cleaning', 'Bathroom Toilet Bowl & Tile Descaling Video', 'assets/videos/work-video-6.mp4', 'assets/images/gallery/work-21.png', 'assets/images/gallery/work-21.png', 'HD VIDEO', 6),
('v7', 'video', 'commercial', 'Commercial Space', 'Commercial Showroom & Counter Deep Clean Video', 'assets/videos/work-video-7.mp4', 'assets/images/gallery/work-17.png', 'assets/images/gallery/work-17.png', 'HD VIDEO', 7),
('v8', 'video', 'commercial', 'Workstation & Carpet', 'IT Office Workstation & Chair Vacuuming Video', 'assets/videos/work-video-8.mp4', 'assets/images/gallery/work-16.png', 'assets/images/gallery/work-16.png', 'HD VIDEO', 8),
('8', 'photo', 'floor', 'Machine Scrubbing', 'Professional Floor Scrubber & Vacuum Machine Setup', NULL, NULL, 'assets/images/gallery/work-8.png', 'HD PHOTO', 9),
('9', 'photo', 'commercial', 'Commercial Office', 'Corporate Office Corridor & Door Sanitization', NULL, NULL, 'assets/images/gallery/work-9.png', 'HD PHOTO', 10),
('10', 'photo', 'commercial', 'Commercial Office', 'Corporate Office Reception & Lobby Deep Clean', NULL, NULL, 'assets/images/gallery/work-10.png', 'HD PHOTO', 11),
('11', 'photo', 'sofa', 'Furniture & Dining', 'Cafeteria & Dining Table Furniture Cleaning', NULL, NULL, 'assets/images/gallery/work-11.png', 'HD PHOTO', 12),
('12', 'photo', 'home', 'Home Interior', 'Modular Bedroom Wardrobe & Cabinet Deep Clean', NULL, NULL, 'assets/images/gallery/work-12.png', 'HD PHOTO', 13),
('13', 'photo', 'commercial', 'Commercial Office', 'Commercial Office Glass Partition & Workstation Clean', NULL, NULL, 'assets/images/gallery/work-13.png', 'HD PHOTO', 14),
('14', 'photo', 'bathroom', 'Bathroom Cleaning', 'Bathroom Glass Shower Enclosure & Tile Descaling', NULL, NULL, 'assets/images/gallery/work-14.png', 'HD PHOTO', 15),
('15', 'photo', 'floor', 'Floor Scrubbing', 'Commercial Hall Tile Floor Scrubbing & Polish', NULL, NULL, 'assets/images/gallery/work-15.png', 'HD PHOTO', 16),
('16', 'photo', 'commercial', 'Workstation & Office', 'IT Park Office Workstation & Chair Vacuuming', NULL, NULL, 'assets/images/gallery/work-16.png', 'HD PHOTO', 17),
('17', 'photo', 'commercial', 'Commercial Space', 'Retail Showroom Display Counter & Hall Deep Clean', NULL, NULL, 'assets/images/gallery/work-17.png', 'HD PHOTO', 18),
('18', 'photo', 'home', 'Home Exterior', 'Independent Villa Exterior & Balcony Deep Clean', NULL, NULL, 'assets/images/gallery/work-18.png', 'HD PHOTO', 19),
('19', 'photo', 'commercial', 'Commercial Office', 'Office Corridor & Fire Safety Door Surface Wipedown', NULL, NULL, 'assets/images/gallery/work-19.png', 'HD PHOTO', 20),
('20', 'photo', 'commercial', 'Glass Cleaning', 'High Elevation Glass Facade Squeegee Cleaning', NULL, NULL, 'assets/images/gallery/work-20.png', 'HD PHOTO', 21),
('21', 'photo', 'bathroom', 'Bathroom Cleaning', 'Bathroom Toilet Bowl & Wall Tile Sanitization', NULL, NULL, 'assets/images/gallery/work-21.png', 'HD PHOTO', 22),
('22', 'photo', 'bathroom', 'Floor Scrubbing', 'Bathroom Tile Machine Scrubber Cleaning', NULL, NULL, 'assets/images/gallery/work-22.png', 'HD PHOTO', 23),
('23', 'photo', 'sofa', 'Carpet Vacuuming', 'Office Cabin Carpet Vacuum Extraction', NULL, NULL, 'assets/images/gallery/work-23.png', 'HD PHOTO', 24),
('24', 'photo', 'commercial', 'Commercial Office', 'Commercial Office Corridor Floor Tile Shine', NULL, NULL, 'assets/images/gallery/work-24.png', 'HD PHOTO', 25),
('26', 'photo', 'sofa', 'Carpet Vacuuming', 'Commercial Office & Lounge Carpet Extraction', NULL, NULL, 'assets/images/gallery/work-26.png', 'HD PHOTO', 26),
('28', 'photo', 'sofa', 'Carpet Vacuuming', 'Retail Store Carpet Vacuuming & Deep Clean', NULL, NULL, 'assets/images/gallery/work-28.png', 'HD PHOTO', 27),
('30', 'photo', 'bathroom', 'Floor Scrubbing', 'Restroom Tile Single-Disc Rotary Machine Scrubbing', NULL, NULL, 'assets/images/gallery/work-30.png', 'HD PHOTO', 28),
('32', 'photo', 'home', 'Air Duct & Vent', 'Air Duct Vent & Wall Dust Vacuum Extraction', NULL, NULL, 'assets/images/gallery/work-32.png', 'HD PHOTO', 29),
('34', 'photo', 'home', 'Glass Cleaning', 'Exterior Window Glass Squeegee Polish', NULL, NULL, 'assets/images/gallery/work-34.png', 'HD PHOTO', 30),
('36', 'photo', 'sofa', 'Carpet Vacuuming', 'Master Bedroom Carpet & Furniture Deep Vacuuming', NULL, NULL, 'assets/images/gallery/work-36.png', 'HD PHOTO', 31),
('38', 'photo', 'kitchen', 'Kitchen Degreasing', 'Modular Kitchen Chimney & Stove Hood Degreasing', NULL, NULL, 'assets/images/gallery/work-38.png', 'HD PHOTO', 32),
('40', 'photo', 'home', 'Floor Scrubbing', 'Luxury Villa Living Room Floor Deep Scrubbing', NULL, NULL, 'assets/images/gallery/work-40.png', 'HD PHOTO', 33),
('42', 'photo', 'kitchen', 'Kitchen Cleaning', 'Kitchen Stovetop & Platform Counter Scrubbing', NULL, NULL, 'assets/images/gallery/work-42.png', 'HD PHOTO', 34),
('44', 'photo', 'bathroom', 'Bathroom Cleaning', 'Commercial Restroom Washbasin & Fitting Sanitization', NULL, NULL, 'assets/images/gallery/work-44.png', 'HD PHOTO', 35),
('46', 'photo', 'sofa', 'Sofa Shampooing', 'Fabric Sofa Cushion Shampooing & Vacuum Extraction', NULL, NULL, 'assets/images/gallery/work-46.png', 'HD PHOTO', 36)
ON CONFLICT (id) DO NOTHING;

-- Populate view_our_work table with gallery seed data as baseline
INSERT INTO public.view_our_work (id, type, category, category_name, title, video_src, poster, img, badge, sort_order)
SELECT id, type, category, category_name, title, video_src, poster, img, badge, sort_order
FROM public.gallery
ON CONFLICT (id) DO NOTHING;

-- --------------------------------------------------------------------------
-- SUPABASE AUTH ADMIN USER INITIAL CREATION
-- Default Email: admin@kakatiyacleaning.com
-- Default Password: Admin@12345 (Change immediately after login via Admin Panel)
-- --------------------------------------------------------------------------

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@kakatiyacleaning.com',
  crypt('Admin@12345', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now()
)
ON CONFLICT (email) DO NOTHING;

