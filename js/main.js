/**
 * Nova Pak Çanta Promosyon — Ortak Arayüz, Yana Kaydırmalı Hero Slider,
 * Aşağı İndikçe Şeffaflaşarak Kaybolan Hero ve Sabit WhatsApp Motoru
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const cornerCategories = document.getElementById('cornerCategories');
  const categoriesTrigger = document.getElementById('categoriesTrigger');
  const navLinks = document.querySelectorAll('.site-header .nav-link');
  const revealElements = document.querySelectorAll('.reveal');
  const heroScrollStage = document.getElementById('heroScrollStage');
  const heroSection = document.getElementById('anasayfa');

  // 1. ÜST MENÜ SCROLL DURUMU, AKTİF SEKME & HERO AŞAĞI İNDİKÇE BİZLE GELİP ŞEFFAFLAŞMA EFEKTİ
  let ticking = false;

  const updateOnScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollY > 24) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // Hero Aşağı İndikçe Bizle Geliyormuş Gibi (Sticky/Parallax Follow) Şeffaflaşarak Yok Olma Efekti
    if (heroScrollStage && heroSection) {
      const heroHeight = heroSection.offsetHeight || 760;
      const progress = Math.min(Math.max(scrollY / (heroHeight * 0.78), 0), 1);

      if (progress <= 0.005) {
        heroScrollStage.style.transform = 'translate3d(0, 0, 0) scale(1)';
        heroScrollStage.style.opacity = '1';
        heroScrollStage.style.filter = 'blur(0px)';
        heroScrollStage.style.pointerEvents = 'auto';
      } else {
        // Kullanıcı aşağı indikçe Hero da aşağı doğru süzülerek eşlik eder ve şeffaflaşıp kaybolur
        const followY = scrollY * 0.46;
        const scaleVal = 1 - progress * 0.055;
        const opacityVal = Math.max(0, 1 - Math.pow(progress, 1.08) * 1.15);
        const blurVal = (progress * 4.5).toFixed(2);

        heroScrollStage.style.transform = `translate3d(0, ${followY.toFixed(1)}px, 0) scale(${scaleVal.toFixed(4)})`;
        heroScrollStage.style.opacity = String(opacityVal.toFixed(3));
        heroScrollStage.style.filter = `blur(${blurVal}px)`;
        heroScrollStage.style.pointerEvents = opacityVal < 0.15 ? 'none' : 'auto';
      }
    }

    // Çok sayfalı yapıda her sayfanın kendi aktif menü sekmesi HTML üzerinde tanımlıdır.
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateOnScroll();

  // 2. HERO YANA KAYDIRMALI (SLIDER / CAROUSEL) MOTORU
  const slider = document.getElementById('heroSlider');
  const track = document.getElementById('heroSliderTrack');
  const slides = track ? Array.from(track.querySelectorAll('.hero-slide')) : [];
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (slider && track && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayTimer = null;
    const AUTO_PLAY_MS = 5200; // 5.2 saniyede bir kendiliğinden akıcı geçiş

    const goToSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      const stepPercent = 100 / totalSlides;
      track.style.transform = `translate3d(-${currentSlide * stepPercent}%, 0, 0)`;

      if (heroSection) {
        heroSection.setAttribute('data-hero-theme', String(currentSlide));
      }

      slides.forEach((slide, idx) => {
        slide.classList.toggle('is-active', idx === currentSlide);
      });

      dots.forEach((dot, idx) => {
        const isCurrent = idx === currentSlide;
        dot.classList.toggle('is-active', isCurrent);
        dot.setAttribute('aria-selected', String(isCurrent));
      });
    };

    const startAutoPlay = () => {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, AUTO_PLAY_MS);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startAutoPlay();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = Number(dot.getAttribute('data-slide-to'));
        goToSlide(target);
        startAutoPlay();
      });
    });

    // Dokunmatik (Swipe) Kaydırma Desteği
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    slider.addEventListener(
      'touchend',
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 45) {
          if (diff > 0) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(currentSlide - 1);
          }
          startAutoPlay();
        }
      },
      { passive: true }
    );

    // Sekme değiştiğinde performansı koru
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });

    goToSlide(0);
    startAutoPlay();
  }

  // 3. SAĞ KÖŞE AÇILIR KATEGORİLER MENÜSÜ ETKİLEŞİMİ & DİNAMİK KATEGORİ LİSTESİ
  if (cornerCategories) {
    const dropdownGrid = cornerCategories.querySelector('.corner-dropdown__grid');
    const catalog = window.NOVA_PAK_CATALOG;
    if (dropdownGrid && catalog && Array.isArray(catalog.categories)) {
      dropdownGrid.innerHTML = catalog.categories
        .map(
          (cat) => `
            <a href="kategori.html?cat=${cat.slug}" class="dropdown-cat-item">
              <img src="${cat.featuredImage}" alt="${cat.title}" class="dropdown-cat-item__thumb" loading="lazy" />
              <div class="dropdown-cat-item__info">
                <span class="dropdown-cat-item__num">${cat.badge || 'Kategori'}</span>
                <span class="dropdown-cat-item__name">${cat.title}</span>
              </div>
            </a>
          `
        )
        .join('');
    }
  }

  if (categoriesTrigger && cornerCategories) {
    categoriesTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = cornerCategories.classList.toggle('is-open');
      categoriesTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!cornerCategories.contains(e.target)) {
        cornerCategories.classList.remove('is-open');
        categoriesTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 4. SCROLL REVEAL (KADEMELİ BELİRME) ANİMASYONLARI
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el, idx) => {
      if (!el.classList.contains('is-visible')) {
        el.style.transitionDelay = `${(idx % 4) * 75}ms`;
        revealObserver.observe(el);
      }
    });
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 5. SAĞ ALT SABİT WHATSAPP ("BİZE ULAŞIN") SİMGESİ VE AÇILIR SOHBET PENCERESİ
  const waFloatWrap = document.getElementById('whatsappFloatWrap');
  const waFloatBtn = document.getElementById('whatsappFloatBtn');
  const waPopup = document.getElementById('whatsappPopup');
  const waPopupClose = document.getElementById('waPopupClose');

  if (waFloatWrap && waFloatBtn && waPopup) {
    waFloatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = waFloatWrap.classList.toggle('is-open');
      waPopup.setAttribute('aria-hidden', String(!isOpen));
    });

    if (waPopupClose) {
      waPopupClose.addEventListener('click', (e) => {
        e.stopPropagation();
        waFloatWrap.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
      });
    }

    document.addEventListener('click', (e) => {
      if (!waFloatWrap.contains(e.target)) {
        waFloatWrap.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // 6. ANASAYFA CANLI ÜRÜN VİTRİNİ KATEGORİ FİLTRELEME
  const filterPills = document.querySelectorAll('.home-filter-pill');
  const productCards = document.querySelectorAll('.home-product-card');
  const homeEmptyState = document.getElementById('homeEmptyState');

  if (filterPills.length > 0 && productCards.length > 0) {
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const targetCat = pill.getAttribute('data-filter');
        filterPills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');

        let matchCount = 0;
        productCards.forEach((card) => {
          const cardCat = card.getAttribute('data-cat');
          if (targetCat === 'all' || cardCat === targetCat) {
            matchCount++;
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px) scale(0.96)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });

        if (homeEmptyState) {
          if (matchCount === 0) {
            homeEmptyState.style.display = 'flex';
            setTimeout(() => {
              homeEmptyState.style.opacity = '1';
              homeEmptyState.style.transform = 'translateY(0)';
            }, 30);
          } else {
            homeEmptyState.style.opacity = '0';
            homeEmptyState.style.transform = 'translateY(10px)';
            setTimeout(() => {
              homeEmptyState.style.display = 'none';
            }, 250);
          }
        }
      });
    });
  }

  // 7. MOBİL MENÜ ÇEKMECESİ (DRAWER) ETKİLEŞİMİ
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileClose = document.getElementById('mobileDrawerClose');

  const openMobileDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('is-active');
      mobileOverlay.classList.add('is-active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('is-active');
      mobileOverlay.classList.remove('is-active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cornerCategories) cornerCategories.classList.remove('is-open');
      if (waFloatWrap) waFloatWrap.classList.remove('is-open');
      closeMobileDrawer();
    }
  });

  // 8. ÇOK DİLLİ SİSTEM (TR | EN BILINGUAL TRANSLATOR)
  const i18nDict = {
    // Navigasyon & Menü
    "Ürünlerimiz": "Products",
    "Promosyon Ürünleri": "Promotional Products",
    "Kurumsal": "Corporate",
    "Firma Profili": "Company Profile",
    "Kalite Belgeleri": "Quality Certificates",
    "Sıkça Sorulan Sorular": "FAQ",
    "Referanslarımız": "References",
    "İletişim": "Contact",
    "Yeni": "New",

    // Kategoriler & Sektörler
    "Tela Dikişli Çanta": "Nonwoven Stitched Bags",
    "Karton Çanta": "Paper Bags",
    "Craft Çanta": "Kraft Carrier Bags",
    "Hambez Çanta": "Cotton Canvas Bags",
    "Giyim Mağazacılığı": "Apparel & Retail",
    "Pastane & Fırın & Tatlı": "Bakery & Confectionery",
    "Kitap & Kırtasiye & Oyuncak": "Books, Stationery & Toys",
    "Kuruyemiş Sektörü": "Nuts & Dried Fruits",
    "Restaurant & Cafe": "Restaurant & Cafe",
    "Eczane Sektörü": "Pharmacy & Healthcare",
    "Market Sektörü": "Supermarket & Grocery",
    "Ana Kategoriler": "Main Categories",
    "Sektörel Çözümler": "Industry Solutions",
    "Kurumsal & Bilgi": "Corporate & Info",
    "Tüm Sektörler": "All Sectors",
    "Tüm Kategoriler": "All Categories",

    // Hero Alanı
    "01 / YÜKSEK MUKAVEMET • DOĞA DOSTU İMALAT": "01 / HIGH DURABILITY • ECO-FRIENDLY PRODUCTION",
    "Nova Pak Çanta Çözümleri": "Nova Pak Bag Solutions",
    "Ultrasonik dikişli nonwoven bez çantalardan lüks kraft ve karton ambalajlara; markanıza özel, çevre dostu ve toptan üretim gücü.": "From ultrasonic stitched nonwoven bags to luxury kraft and paper packaging; custom, eco-friendly wholesale manufacturing for your brand.",
    "Hızlı Sevkiyat": "Fast Dispatch",
    "Doğa Dostu İmalat": "Eco-Friendly Production",
    "Nonwoven • Kraft • Karton": "Nonwoven • Kraft • Paper",
    "02 / GERİ DÖNÜŞTÜRÜLEBİLİR • NONWOVEN TEKNOLOJİSİ": "02 / RECYCLABLE • NONWOVEN TECHNOLOGY",
    "Geri Dönüşümlü": "Recyclable",
    "Geri Dönüşümlü Eko Çanta": "Recycled Eco Bag",
    "Eko Modelleri İncele": "Browse Eco Models",
    "Ekolojik Teklif Al →": "Get Eco Quote →",
    "Sıfır Karbon Ayak İzi": "Zero Carbon Footprint",
    "Biyobozunur Lif • Doğal": "Biodegradable Fiber • Natural",
    "03 / DOĞAL KRAFT • ÇEVREYE DUYARLI AMBALAJ ALTERNATİFLERİ": "03 / NATURAL KRAFT • ECO-FRIENDLY PACKAGING ALTERNATIVES",
    "Büküm Saplı Kraft Çanta": "Twisted Handle Kraft Bag",
    "Büküm Saplı Kraft": "Twisted Handle Kraft",
    "Doğal Kağıt • Zarif Tasarım": "Natural Paper • Elegant Design",
    "Sürdürülebilir orman kaynaklarından saf selüloz lifleriyle, markanız için plastik yerine tercih edebileceğiniz doğa dostu ve zarif büküm saplı ambalaj alternatifleri.": "Eco-friendly, elegant twisted handle packaging made of pure cellulose fibers from sustainable forests.",
    "Kraft Modelleri İncele": "Browse Kraft Models",
    "04 / OTOMATİK İMALAT PARKURU • YÜKSEK HIZLI ÜRETİM": "04 / AUTOMATED PRODUCTION LINE • HIGH SPEED MANUFACTURING",
    "Ultrasonik Kaynak • Otomatik Hat": "Ultrasonic Stitching • Automated Line",
    "Anadolu Frisch Markt Tela Dikişli Çanta": "Anadolu Frisch Markt Stitched Bag",
    "Körük Tabanlı • Takviyeli Dikiş": "Gusseted Base • Reinforced Stitching",
    "Fotoğraftaki Model": "Featured Model",
    "Nova Pak Çanta Koleksiyonu": "Nova Pak Bag Collection",
    "Bez • Kraft • Karton": "Fabric • Kraft • Paperboard",
    "01 / GERİ DÖNÜŞTÜRÜLEBİLİR • NONWOVEN TEKNOLOJİSİ": "01 / RECYCLABLE • NONWOVEN TECHNOLOGY",
    "Tela Dikişli": "Nonwoven Stitched",
    "Yüksek mukavemetli dikiş takviyesi ve körüklü taban yapısıyla süpermarketler, giyim mağazaları ve etkinlikler için uzun ömürlü, doğaya dost bez çanta imalatı.": "High-strength stitched and gusseted eco-friendly nonwoven bags for supermarkets, fashion retail, and corporate events.",
    "Daha Fazla Bilgi": "Learn More",
    "Teklif Al →": "Get Quote →",
    "Çevreye Duyarlı": "Eco Minded",
    "Uzun Ömürlü & Dayanıklı": "Durable & Long-Lasting",
    "Yüksek Dayanıklılık": "High Durability",
    "Nonwoven Kumaş": "Nonwoven Fabric",
    "Tekrar": "Reusable",
    "Kullanılır": "Eco Bag",
    "Doğal": "Natural",
    "Kraft": "Kraft",
    "Doğa Dostu Kraft": "Eco Kraft",
    "02 / LÜKS AMERİKAN BRİSTOL • PRESTİJ AMBALAJ": "02 / LUXURY BRISTOL • PRESTIGE PACKAGING",
    "Amerikan Bristol ve kuşe kartondan üretilen, mat ve parlak selefon, varak yaldız ve gofre kabartma seçenekleriyle mağazanızın vitrin prestijini zirveye taşıyan çantalar.": "Premium paper bags manufactured with luxury Bristol cardstock, matte/gloss lamination, foil stamping, and embossed detailing.",
    "250 gr Bristol": "250 gsm Bristol",
    "Kurdele Sap": "Ribbon Handle",
    "Özel Varak Baskı": "Custom Foil Stamp",
    "Lüks &": "Luxury &",
    "Prestij": "Prestige",
    "Lüks & Prestij": "Luxury & Prestige",
    "03 / SÜRDÜRÜLEBİLİR AMBALAJ": "03 / SUSTAINABLE PACKAGING",
    "Doğal Kraft": "Natural Kraft",
    "Büküm Saplı": "Twisted Handle",
    "Gıda Dostu": "Food Safe",
    "04 / HER TARZ • SINIRSIZ ÖZEL İMALAT": "04 / ALL STYLES • UNLIMITED CUSTOM PRODUCTION",
    "Özel Üretim": "Custom Production",
    "Markanızın kurumsal renklerine, dilediğiniz ebat, körük ve kulp ölçülerine göre; yüksek taşıma mukavemetli, çevre dostu ve uzun ömürlü özel baskılı çanta imalatı.": "High-durability, eco-friendly custom printed bags manufactured according to your brand colors, custom dimensions, gusset and handle specs.",
    "Özel Ebat & Körük": "Custom Dimensions & Gusset",
    "Flekso & Ofset Baskı": "Flexo & Offset Printing",
    "Toptan Fabrika Satışı": "Wholesale Factory Sales",
    "Özel": "Custom",
    "İmalat": "Production",
    "Her Tarz ve Modelde": "In Every Style & Model",
    "Tüm Sektörlere Özel İmalat": "Custom Production for All Sectors",
    "Sınırsız Model & Özel İmalat": "Unlimited Models & Custom Manufacturing",
    "Her Modele ve İhtiyaca Uygun Özel Üretim Çantalar": "Custom Bags for Every Model and Requirement",
    "Tüm Modelleri Keşfet": "Explore All Models",
    "Sektörel Uzmanlık & Özel Tasarım": "Sector Expertise & Custom Design",
    "Tüm Sektörlere Uygun Ambalaj ve Çanta Çözümleri": "Packaging and Bag Solutions for All Sectors",
    "OTOMATİK İMALAT PARKURU • YÜKSEK HIZLI ÜRETİM": "AUTOMATED PRODUCTION FACILITY • HIGH-SPEED MANUFACTURING",
    "Otomatik İmalat Hattı": "Automated Production Line",
    "Fabrikadan Teklif Al →": "Factory Direct Quote →",
    "Yeniden Kullanılabilir": "Reusable",
    "Plastik yerine yeniden kullanılabilir bez çanta tercih ederek çevreye duyarlı bir adım atın.": "Take an eco-friendly step by choosing reusable fabric bags instead of plastic.",
    "Güçlendirilmiş dikiş ve sağlam kulp yapısıyla uzun ömürlü ve dayanıklı kullanım sunan bez çantalar.": "Fabric bags offering long-lasting, durable everyday use with reinforced stitching and sturdy handles.",
    "Doğa Dostu Alternatif": "Eco-Friendly Alternative",
    "Markanız için tek kullanımlık atıkları azaltan, çevreye saygılı sürdürülebilir ambalaj alternatifleri.": "Sustainable packaging alternatives for your brand that reduce single-use waste.",
    "Şık & Prestijli Tasarım": "Stylish & Prestige Design",
    "Kaliteli kurumsal logo baskısı ve estetik kumaş dokusuyla markanıza değer katan vitrin sunumu.": "Storefront presentation adding value to your brand with sharp logo printing and refined fabric textures.",
    "Çok Amaçlı Kullanım": "Multi-Purpose Utility",
    "Mağazacılıktan gıdaya, etkinliklerden günlük yaşama her alanda pratik ve fonksiyonel çözümler.": "Practical and functional solutions for fashion retail, groceries, events, and daily living.",
    "Yeniden Kullanılabilir & Çevreye Duyarlı Ambalaj": "Reusable & Eco-Minded Packaging",
    "Yıllık Çanta Üretimi": "Annual Bag Production",
    "Bulvar Döner • Baskı Hattı Aktif": "Bulvar Döner • Printing Line Active",

    // Rakamlar & Güvenilirlik
    "İhracat Ülkesi": "Export Countries",
    "Avrupa ve Ortadoğu perakende pazarlarına güvenli sevkiyat.": "Reliable shipments to European and Middle Eastern retail markets.",
    "Yıllık Kapasite": "Annual Capacity",
    "Otomatik dikiş ve baskı parkurunda yüksek hızlı imalat.": "High-speed automated stitching and advanced printing facility.",
    "Geri Dönüştürülebilir": "Recyclable Nonwoven",
    "Doğada çözünebilen, defalarca kullanılabilen çevreci kumaş yapısı.": "Biodegradable, durable, and 100% recyclable nonwoven materials.",
    "Doğrudan İmalatçı": "Direct Manufacturer",
    "Aracısız, fabrika çıkışlı en avantajlı toptan fiyat garantisi.": "Direct factory-gate pricing with no middlemen or extra margins.",

    // Vitrin & CTA
    "Öne Çıkan Koleksiyon": "Featured Showcase",
    "Geniş Ürün Yelpazesi": "Comprehensive Product Range",
    "Sektörünüze ve markanıza en uygun çanta modellerini keşfedin; toptan imalat avantajlarımızdan yararlanın.": "Explore customized packaging models tailored to your brand; benefit from direct wholesale manufacturing.",
    "Tüm Ürünleri İncele": "Browse All Products",
    "Kurumsal İmalatçı Avantajı": "Direct Manufacturer Advantage",
    "Doğrudan imalatçı fiyatlarıyla toptan tela dikişli çanta, karton çanta, craft çanta ve hambez çanta siparişleriniz için bize ulaşın.": "Contact us directly for wholesale nonwoven stitched, kraft, paper, and canvas bag orders at best manufacturer prices.",
    "WhatsApp ile Hızlı Teklif Al": "Get Instant WhatsApp Quote",
    "Firma Profilini İncele": "View Company Profile",
    "Bu kategoriye ait ürünler yakında eklenecektir": "Products in this category will be available soon",
    "Seçtiğiniz filtreleme kombinasyonu için şu anda sistemde ürün bulunmamaktadır. Özel üretim talepleriniz ve farklı ebat/baskı seçenekleri için doğrudan bizimle iletişime geçebilirsiniz.": "No products are currently available for this category filter. For custom sizes, colors, and branding, please contact us directly.",
    "Tüm Ürünleri Göster": "Show All Products",
    "Özel Sipariş Talebi": "Custom Order Inquiry",
    "WhatsApp Teklifi Al": "Get WhatsApp Quote",
    "Öne Çıkan": "Featured",

    // Kurumsal Başlıklar & Hero Alanları
    "01 • Kurumsal Kimlik & Üretim Gücü": "01 • Corporate Identity & Production Capacity",
    "Firma Profilimiz": "Company Profile",
    "03 • Entegre Ekosistem & Üretim Ağı": "03 • Integrated Ecosystem & Production Network",
    "Grup Şirketlerimiz": "Group Companies",
    "06 • Uluslararası Standartlar & Sertifikalar": "06 • International Standards & Certifications",
    "Kalite Belgeleri ve Sosyal Uygunluk": "Quality Certificates & Social Compliance",
    "Bize Ulaşın": "Get In Touch",
    "Doğrudan & Hızlı Erişim": "Direct & Fast Communication",
    "Kurumsal İletişim": "Corporate Contact",
    "Hızlı İletişim Formu": "Quick Contact Form",
    "WhatsApp Üzerinden Hemen Yazın": "Chat on WhatsApp Instantly",

    // Footer
    "Kurumsal Menü": "Corporate",
    "Ürün Grupları": "Product Lines",
    "Sektörler": "Sectors",
    "İletişim & Fabrika": "Contact & Factory",
    "Fabrika & Genel Merkez:": "Factory & Headquarters:",
    "Telefon:": "Phone:",
    "E-Posta:": "Email:",
    "Çalışma Saatleri:": "Working Hours:",
    "Pazartesi - Cumartesi: 08:30 - 18:30": "Monday - Saturday: 08:30 - 18:30",
    "Hafta Sonu WhatsApp Nöbetçi Hattı Aktiftir": "Weekend WhatsApp Duty Line Active",
    "Tüm hakları saklıdır.": "All rights reserved.",
    "Doğaya Saygılı, Geleceğe Değer Katan Ambalaj Çözümleri": "Eco-friendly Packaging Solutions for a Sustainable World",
    "Organize Sanayi Bölgesi, İstanbul": "Organized Industrial Zone, Istanbul, Turkey",
    "Firma Sahibi": "Founder & Managing Director",
    "💬 WhatsApp İletişim": "💬 WhatsApp Contact"
  };

  function translatePage(targetLang) {
    document.documentElement.lang = targetLang;
    
    // Buton aktiflik durumlarını güncelle
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      if (btn.dataset.lang === targetLang) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    try {
      localStorage.setItem('novapak_lang', targetLang);
    } catch (e) {}

    // Metin öğelerini tara ve çevir
    const textSelectors = [
      'nav a',
      'nav span',
      '.mobile-nav-link',
      '.mobile-nav-heading',
      '.hero-eyebrow__text',
      '.hero-title',
      '.hero-title span',
      '.hero-title__brand',
      '.hero-description',
      '.hero-reel-subtitle',
      '.hero-btn-more span',
      '.hero-btn-quote span',
      '.spec-pill',
      '.hero-spec-pill strong',
      '.hero-stamp-badge span',
      '.hero-floating-tag__badge',
      '.hero-floating-tag__title',
      '.hero-floating-tag__sub',
      '.hero-reel-card__caption',
      '.hero-video-badge span',
      '.home-stat-card__title',
      '.home-stat-card__desc',
      '.section-tag',
      '.section-title',
      '.section-desc',
      '.category-tab-btn',
      '.home-cta-banner__tag',
      '.home-cta-banner__title',
      '.home-cta-banner__desc',
      '.home-empty-state__title',
      '.home-empty-state__desc',
      '.home-empty-state__actions a',
      '.footer-brand__desc',
      '.footer-col__title',
      '.footer-links a',
      '.footer-bottom',
      '.footer-bottom-bar',
      '.footer-bottom__motto',
      '.page-hero__title',
      '.page-hero__desc',
      '.breadcrumb a',
      '.breadcrumb span'
    ];

    const elements = document.querySelectorAll(textSelectors.join(', '));
    elements.forEach(el => {
      // Sadece çocuk elementi olmayan veya metin içeren düğümler
      if (el.children.length === 0) {
        const currentText = el.textContent.trim();
        if (targetLang === 'en') {
          if (!el.dataset.origTr) {
            el.dataset.origTr = currentText;
          }
          if (i18nDict[currentText]) {
            el.textContent = i18nDict[currentText];
          }
        } else {
          if (el.dataset.origTr) {
            el.textContent = el.dataset.origTr;
          }
        }
      }
    });

    // Custom event fırlat (kategori sayfası vb. yakalayabilsin)
    window.dispatchEvent(new CustomEvent('novapak_lang_change', { detail: { lang: targetLang } }));
  }

  // Dil butonlarına tıklama dinleyicisi
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.dataset.lang;
      if (selectedLang) {
        translatePage(selectedLang);
      }
    });
  });

  // Sayfa ilk yüklendiğinde kaydedilmiş dili kontrol et
  const savedLang = localStorage.getItem('novapak_lang');
  if (savedLang && savedLang === 'en') {
    translatePage('en');
  }

});
