/**
 * NOVA PAK — TEK KULLANIMLI ÇANTA İMALATI
 * Kategori & Sektörel Filtreleme Motoru (kategori.html)
 * 
 * Özellikler:
 * - Çanta Modelleri Filtresi (Tela Dikişli, Karton Çanta, Craft Çanta, Hambez Çanta ve Özel Üretim)
 * - Sektörel Çözümler Filtreleme (Giyim, Pastane/Fırın, Kitap/Kırtasiye, Kuruyemiş, Restoran/Kafe, Eczane, Market)
 * - Canlı Arama Motoru
 * - Boş Durum (Empty State): Ürün bulunamadığında "Bu kategoriye ait ürünler yakında eklenecektir" mesajı
 * - Stok bilgisi tamamen kaldırılmıştır
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalog = window.NOVA_PAK_CATALOG;
  if (!catalog || !Array.isArray(catalog.products)) return;

  // DOM Elemanları
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  const catHeroTitle = document.getElementById('catHeroTitle');
  const catHeroDesc = document.getElementById('catHeroDesc');
  const catHeroTag = document.getElementById('catHeroTag');
  const catTabsBar = document.getElementById('catTabsBar');
  const sectorFilterSelect = document.getElementById('sectorFilterSelect');
  const searchInput = document.getElementById('productSearchInput');
  const catalogCount = document.getElementById('catalogCount');
  const productsGrid = document.getElementById('productsGrid');
  const emptyStateCard = document.getElementById('emptyStateCard');
  const activeFiltersBar = document.getElementById('activeFiltersBar');

  // URL Parametrelerinden başlangıç durumunu al
  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      cat: params.get('cat') || 'all',
      sector: params.get('sector') || 'all'
    };
  };

  const initialParams = getUrlParams();
  let currentCategory = initialParams.cat;
  let currentSector = initialParams.sector;

  // Kategori Bilgi Metinleri
  const categoryMeta = {
    'all': {
      title: 'Tüm Çanta Koleksiyonu',
      tag: 'NOVA PAK İMALAT KATALOĞU',
      desc: 'Tela dikişli, lüks karton, doğal craft ve pamuk hambez çanta modellerimizle tüm sektörlere özel üretim.'
    },
    'tela-dikisli': {
      title: 'Tela Dikişli Çanta',
      tag: 'DAYANIKLI NONWOVEN',
      desc: 'Güçlendirilmiş ultrasonik dikişleri ve yüksek taşıma kapasitesiyle perakende ve market sektörlerinin vazgeçilmez tercihi.'
    },
    'karton-canta': {
      title: 'Karton Çanta',
      tag: 'LÜKS & PRESTİJ KARTON',
      desc: 'Amerikan Bristol ve kuşe kartondan, mat/parlak selefon kaplamalı ve varak yaldız baskılı kurumsal prestij çantaları.'
    },
    'craft-canta': {
      title: 'Craft Çanta',
      tag: 'DOĞAL KRAFT',
      desc: 'Doğal kahverengi ve beyaz kraft kağıttan, büküm saplı, gıda ve perakende mağazalarına uygun çevre dostu çantalar.'
    },
    'hambez-canta': {
      title: 'Hambez Çanta',
      tag: 'DOĞAL PAMUK',
      desc: 'Yıkanabilir organik ham pamuk kumaştan, yüzlerce kez kullanılabilen ve markanızın prestijini yıllarca taşıyan bez çantalar.'
    }
  };

  // Sektör Bilgi Metinleri
  const getSectorTitle = (secId) => {
    const found = catalog.sectors.find((s) => s.id === secId);
    return found ? found.title : 'Tüm Sektörler';
  };

  // URL'i güncelle (Sayfa yenilenmeden)
  const syncUrl = () => {
    if (window.history && window.history.replaceState) {
      const url = new URL(window.location);
      if (currentCategory && currentCategory !== 'all') {
        url.searchParams.set('cat', currentCategory);
      } else {
        url.searchParams.delete('cat');
      }

      if (currentSector && currentSector !== 'all') {
        url.searchParams.set('sector', currentSector);
      } else {
        url.searchParams.delete('sector');
      }

      window.history.replaceState({}, '', url);
    }
  };

  // Başlık ve Hero Alanını Güncelle
  const updateHero = () => {
    const meta = categoryMeta[currentCategory] || categoryMeta['all'];
    const sectorLabel = currentSector !== 'all' ? ` — ${getSectorTitle(currentSector)}` : '';

    if (catHeroTitle) catHeroTitle.textContent = `${meta.title}${sectorLabel}`;
    if (catHeroTag) catHeroTag.textContent = meta.tag;
    if (catHeroDesc) catHeroDesc.textContent = meta.desc;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = meta.title;

    document.title = `${meta.title}${sectorLabel} | Nova Pak Tek Kullanımlı Çanta İmalatı`;
  };

  // Çanta Modelleri Sekmelerini Render Et
  const renderCategoryTabs = () => {
    if (!catTabsBar) return;

    const allTabs = [
      { id: 'all', title: 'Tüm Kategoriler' },
      ...catalog.categories
    ];

    catTabsBar.innerHTML = allTabs
      .map((tab) => {
        const isActive = tab.id === currentCategory ? 'is-active' : '';
        return `
          <button type="button" class="cat-tab-pill ${isActive}" data-cat-id="${tab.id}">
            ${tab.title}
          </button>
        `;
      })
      .join('');

    catTabsBar.querySelectorAll('.cat-tab-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat-id');
        renderCategoryTabs();
        updateHero();
        syncUrl();
        renderProducts();
      });
    });
  };

  // Sektör Seçim Açılır Kutusunu (Dropdown) Doldur
  const initSectorFilter = () => {
    if (!sectorFilterSelect) return;

    sectorFilterSelect.innerHTML = `
      <option value="all">Sektörel Filtre: Tüm Sektörler</option>
      ${catalog.sectors
        .map(
          (s) => `
        <option value="${s.id}" ${s.id === currentSector ? 'selected' : ''}>
          ${s.title}
        </option>
      `
        )
        .join('')}
    `;

    sectorFilterSelect.addEventListener('change', (e) => {
      currentSector = e.target.value;
      updateHero();
      syncUrl();
      renderProducts();
    });
  };

  // Aktif Filtre Rozetlerini Render Et
  const renderActiveFilterBadges = () => {
    if (!activeFiltersBar) return;

    const badges = [];

    if (currentCategory !== 'all') {
      const catObj = catalog.categories.find((c) => c.id === currentCategory);
      const catName = catObj ? catObj.title : currentCategory;
      badges.push(`
        <span class="active-filter-badge">
          Kategori: <strong>${catName}</strong>
          <button type="button" data-clear="cat" aria-label="Kategori filtresini kaldır">&times;</button>
        </span>
      `);
    }

    if (currentSector !== 'all') {
      const secName = getSectorTitle(currentSector);
      badges.push(`
        <span class="active-filter-badge">
          Sektör: <strong>${secName}</strong>
          <button type="button" data-clear="sector" aria-label="Sektör filtresini kaldır">&times;</button>
        </span>
      `);
    }

    const query = searchInput ? searchInput.value.trim() : '';
    if (query) {
      badges.push(`
        <span class="active-filter-badge">
          Arama: <strong>"${query}"</strong>
          <button type="button" data-clear="search" aria-label="Arama filtresini kaldır">&times;</button>
        </span>
      `);
    }

    if (badges.length > 0) {
      activeFiltersBar.style.display = 'flex';
      activeFiltersBar.innerHTML = `
        <span class="active-filters-label">Aktif Filtreler:</span>
        ${badges.join('')}
        <button type="button" class="clear-all-filters-btn" id="clearAllFiltersBtn">Tümünü Temizle</button>
      `;

      activeFiltersBar.querySelectorAll('button[data-clear]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const type = btn.getAttribute('data-clear');
          if (type === 'cat') currentCategory = 'all';
          if (type === 'sector') {
            currentSector = 'all';
            if (sectorFilterSelect) sectorFilterSelect.value = 'all';
          }
          if (type === 'search') {
            if (searchInput) searchInput.value = '';
          }
          renderCategoryTabs();
          updateHero();
          syncUrl();
          renderProducts();
        });
      });

      const clearAllBtn = document.getElementById('clearAllFiltersBtn');
      if (clearAllBtn) {
        clearAllBtn.addEventListener('click', resetAllFilters);
      }
    } else {
      activeFiltersBar.style.display = 'none';
      activeFiltersBar.innerHTML = '';
    }
  };

  // Tüm Filtreleri Sıfırla
  const resetAllFilters = () => {
    currentCategory = 'all';
    currentSector = 'all';
    if (sectorFilterSelect) sectorFilterSelect.value = 'all';
    if (searchInput) searchInput.value = '';
    renderCategoryTabs();
    updateHero();
    syncUrl();
    renderProducts();
  };

  // Ürün Kartı HTML'i
  const createProductCard = (item) => {
    const waText = encodeURIComponent(
      `Merhaba Nova Pak, "${item.name}" (Model: ${item.id}) hakkında toptan imalat fiyat teklifi ve numune talep etmek istiyorum.`
    );
    const waLink = `https://wa.me/${catalog.company.whatsapp}?text=${waText}`;

    const catObj = catalog.categories.find((c) => c.id === item.category);
    const catName = catObj ? catObj.title : item.category;

    const secObj = catalog.sectors.find((s) => s.id === item.sector);
    const secName = secObj ? secObj.title : item.sector;

    const specsHTML = item.specs
      .map((s) => `<span class="spec-chip">${s}</span>`)
      .join('');

    return `
      <article class="product-card overflow-hidden" data-category="${item.category}" data-sector="${item.sector}">
        <div class="product-card__media overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="product-card__img w-full h-full object-cover" loading="lazy" />
          <div class="product-card__badges">
            <span class="product-card__sku">${item.id}</span>
            <span class="product-card__tag">${item.badge}</span>
          </div>
        </div>

        <div class="product-card__body">
          <div class="product-card__meta">
            <span class="product-sector-tag">${secName}</span>
            <span class="product-cat-tag">${catName}</span>
          </div>

          <h2 class="product-card__title">${item.name}</h2>
          
          <p class="product-card__desc">${item.description}</p>

          <div class="product-card__specs">
            ${specsHTML}
            <span class="spec-chip spec-chip--highlight">Min. ${item.minOrder}</span>
          </div>

          <div class="product-card__footer">
            <div class="product-order-info">
              <span class="product-order-label">Özel Logo &amp; Baskı</span>
              <span class="product-order-val">İmalatçı Fiyatı</span>
            </div>

            <a href="${waLink}" target="_blank" rel="noopener" class="product-wa-btn" aria-label="${item.name} için WhatsApp teklifi al">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Fiyat Teklifi Al</span>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // Ürünleri Filtrele ve Ekrana Çiz
  const renderProducts = () => {
    if (!productsGrid) return;

    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();

    let list = [...catalog.products];

    // 1. Kategori Filtresi
    if (currentCategory && currentCategory !== 'all') {
      list = list.filter((p) => p.category === currentCategory);
    }

    // 2. Sektör Filtresi
    if (currentSector && currentSector !== 'all') {
      list = list.filter((p) => p.sector === currentSector);
    }

    // 3. Canlı Arama Filtresi
    if (query) {
      list = list.filter((p) => {
        const inName = p.name.toLowerCase().includes(query);
        const inId = p.id.toLowerCase().includes(query);
        const inDesc = p.description.toLowerCase().includes(query);
        const inSpecs = p.specs.some((s) => s.toLowerCase().includes(query));
        const inSector = getSectorTitle(p.sector).toLowerCase().includes(query);
        return inName || inId || inDesc || inSpecs || inSector;
      });
    }

    // Sayaç Metni
    if (catalogCount) {
      catalogCount.textContent = `Toplam ${list.length} ürün listeleniyor`;
    }

    renderActiveFilterBadges();

    // BOŞ DURUM (EMPTY STATE) KONTROLÜ
    if (list.length === 0) {
      productsGrid.style.display = 'none';
      if (emptyStateCard) {
        emptyStateCard.style.display = 'flex';

        // Sıfırlama butonuna event bağla
        const resetBtn = emptyStateCard.querySelector('#emptyStateResetBtn');
        if (resetBtn) {
          resetBtn.onclick = resetAllFilters;
        }
      }
    } else {
      productsGrid.style.display = 'grid';
      if (emptyStateCard) {
        emptyStateCard.style.display = 'none';
      }
      productsGrid.innerHTML = list.map((item) => createProductCard(item)).join('');
    }
  };

  // Canlı Arama Dinleyicisi (Debounce ile)
  if (searchInput) {
    let timeoutId;
    searchInput.addEventListener('input', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        renderProducts();
      }, 200);
    });
  }

  // İlk Başlatma
  renderCategoryTabs();
  initSectorFilter();
  updateHero();
  renderProducts();
});
