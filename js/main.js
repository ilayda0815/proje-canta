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

  // Dil ayarını Türkçe olarak sabitle
  try {
    localStorage.removeItem('novapak_lang');
    document.documentElement.lang = 'tr';
  } catch (e) {}

  // 7. ÜRÜN RESMİ BÜYÜTEÇ (IMAGE MAGNIFIER / ZOOM) MODÜLÜ
  function initProductImageMagnifier() {
    // Dokunmatik ekranlarda ve mobilde (992px altı) büyüteci devre dışı bırak
    const isTouchOrMobile =
      window.matchMedia('(hover: none) or (pointer: coarse)').matches ||
      window.innerWidth < 992;
    if (isTouchOrMobile) return;

    let lens = document.getElementById('productZoomLens');
    if (!lens) {
      lens = document.createElement('div');
      lens.id = 'productZoomLens';
      lens.className = 'product-zoom-lens';
      lens.setAttribute('aria-hidden', 'true');
      document.body.appendChild(lens);
    }

    const ZOOM_FACTOR = 2.4;
    const LENS_SIZE = 210;
    let currentMedia = null;
    let currentImg = null;

    const hideLens = () => {
      lens.classList.remove('is-active');
      currentMedia = null;
      currentImg = null;
    };

    document.addEventListener('mouseover', (e) => {
      if (window.innerWidth < 992) return;

      const media = e.target.closest(
        '.product-card__media, .home-product-card__media, .corp-series-card__media'
      );
      if (!media) return;

      const img = media.querySelector('img');
      if (!img) return;

      const imgSrc = img.currentSrc || img.src;
      if (!imgSrc) return;

      currentMedia = media;
      currentImg = img;

      lens.style.backgroundImage = `url("${imgSrc}")`;
      lens.classList.add('is-active');
    });

    document.addEventListener('mousemove', (e) => {
      if (!currentMedia || !currentImg) return;

      const rect = currentMedia.getBoundingClientRect();

      // Fare görsel sınırlarından dışarı çıktıysa hemen kapat
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        hideLens();
        return;
      }

      // Oransal koordinatlar
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const pctX = Math.max(0, Math.min(100, (mouseX / rect.width) * 100));
      const pctY = Math.max(0, Math.min(100, (mouseY / rect.height) * 100));

      // Büyüteç konumlandırması (imlecin yanında, ekran sınırlarına göre zekice kaydırılır)
      let targetLeft = e.clientX + 25;
      let targetTop = e.clientY - LENS_SIZE / 2;

      // Sağ ekrandan taşma kontrolü (ekranın sağına sığmazsa imlecin soluna al)
      if (targetLeft + LENS_SIZE + 20 > window.innerWidth) {
        targetLeft = e.clientX - LENS_SIZE - 25;
      }

      // Üst ve alt ekran sınır kontrolleri
      if (targetTop < 20) {
        targetTop = 20;
      } else if (targetTop + LENS_SIZE + 20 > window.innerHeight) {
        targetTop = window.innerHeight - LENS_SIZE - 20;
      }

      lens.style.left = `${Math.round(targetLeft)}px`;
      lens.style.top = `${Math.round(targetTop)}px`;

      // Büyütülmüş görsel boyutu ve odak noktası
      const bgW = rect.width * ZOOM_FACTOR;
      const bgH = rect.height * ZOOM_FACTOR;
      lens.style.backgroundSize = `${Math.round(bgW)}px ${Math.round(bgH)}px`;
      lens.style.backgroundPosition = `${pctX.toFixed(2)}% ${pctY.toFixed(2)}%`;
    });

    document.addEventListener('mouseout', (e) => {
      if (!currentMedia) return;
      const related = e.relatedTarget;
      if (!related || !currentMedia.contains(related)) {
        hideLens();
      }
    });

    window.addEventListener('scroll', hideLens, { passive: true });
  }

  initProductImageMagnifier();

});
