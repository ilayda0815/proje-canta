/**
 * Nova Pak Çanta Promosyon — Kategori Detay, Ürün, Fiyat ve Stok Sayfası Motoru (kategori.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalog = window.NOVA_PAK_CATALOG;
  if (!catalog || !Array.isArray(catalog.categories)) return;

  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  const catHeroIndex = document.getElementById('catHeroIndex');
  const catHeroTitle = document.getElementById('catHeroTitle');
  const catHeroDesc = document.getElementById('catHeroDesc');
  const catHeroImg = document.getElementById('catHeroImg');
  const catTabsBar = document.getElementById('catTabsBar');
  const catalogCount = document.getElementById('catalogCount');
  const productsGrid = document.getElementById('productsGrid');

  const searchInput = document.getElementById('productSearchInput');
  const stockFilterSelect = document.getElementById('stockFilterSelect');
  const priceSortSelect = document.getElementById('priceSortSelect');

  // URL'den aktif kategori slug'ını al (?cat=flash-bellekler vb.)
  const getInitialSlug = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || catalog.categories[0].slug;
  };

  let activeSlug = getInitialSlug();

  const formatPrice = (num) => {
    return num.toLocaleString('tr-TR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // 8 Kategori Hızlı Geçiş Sekmelerini Oluştur
  const renderTabs = () => {
    if (!catTabsBar) return;
    catTabsBar.innerHTML = catalog.categories
      .map((cat) => {
        const activeClass = cat.slug === activeSlug ? 'is-active' : '';
        return `
          <button type="button" class="cat-tab-pill ${activeClass}" data-slug="${cat.slug}">
            ${cat.index} &bull; ${cat.title}
          </button>
        `;
      })
      .join('');

    catTabsBar.querySelectorAll('.cat-tab-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        const newSlug = btn.getAttribute('data-slug');
        setCategory(newSlug, true);
      });
    });
  };

  // Ürün Kartlarını Filtrele, Sırala ve Ekrana Çiz
  const renderProducts = (categoryObj) => {
    if (!productsGrid || !categoryObj) return;

    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const stockFilter = stockFilterSelect ? stockFilterSelect.value : 'all';
    const sortBy = priceSortSelect ? priceSortSelect.value : 'default';

    let list = [...categoryObj.products];

    // Arama Filtresi
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.id.toLowerCase().includes(query) ||
          p.specs.some((s) => s.toLowerCase().includes(query))
      );
    }

    // Stok Durumu Filtresi
    if (stockFilter !== 'all') {
      list = list.filter((p) => p.stockStatus === stockFilter);
    }

    // Sıralama
    if (sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'stock_desc') {
      list.sort((a, b) => b.stock - a.stock);
    }

    if (catalogCount) {
      catalogCount.textContent = `${categoryObj.title} kategorisinde ${list.length} ürün listeleniyor`;
    }

    if (list.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 18px; border: 1px solid rgba(23,43,58,0.08);">
          <h3 style="font-family: var(--font-heading); color: var(--color-navy-dark); margin-bottom: 8px;">Arama kriterlerinize uygun ürün bulunamadı.</h3>
          <p style="color: var(--color-petrol-blue); font-size: 0.92rem;">Filtreleri sıfırlayarak tüm ürünleri görüntüleyebilirsiniz.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = list
      .map((item) => {
        const isLow = item.stockStatus === 'low_stock';
        const stockClass = isLow ? 'stock-pill--low' : 'stock-pill--in';
        const stockLabel = isLow
          ? `Sınırlı Stok: ${item.stock.toLocaleString('tr-TR')} Adet`
          : `Stokta Var: ${item.stock.toLocaleString('tr-TR')} Adet`;

        const waText = encodeURIComponent(
          `Merhaba Nova Pak, "${item.name}" (Kod: ${item.id} - Birim Fiyat: ${catalog.currency}${formatPrice(item.price)}) ürünü hakkında stok ve sipariş bilgisi almak istiyorum.`
        );
        const waLink = `https://wa.me/${catalog.whatsappNumber}?text=${waText}`;

        const specsHTML = [
          ...item.specs.map((s) => `<span class="spec-chip">${s}</span>`),
          `<span class="spec-chip">Min. Sipariş: ${item.minOrder} Adet</span>`
        ].join('');

        return `
          <article class="product-card">
            <div class="product-card__media">
              <img src="${item.image}" alt="${item.name}" class="product-card__img" />
              <div class="product-card__badges">
                <span class="product-card__sku">KOD: ${item.id}</span>
                <span class="product-card__tag">${item.badge}</span>
              </div>
            </div>

            <div class="product-card__body">
              <div class="stock-pill ${stockClass}">
                <span class="stock-pill__dot"></span>
                <span>${stockLabel}</span>
              </div>

              <h2 class="product-card__title">${item.name}</h2>

              <div class="product-card__specs">
                ${specsHTML}
              </div>

              <div class="product-card__footer">
                <div class="product-price">
                  <span class="product-price__label">Birim Fiyat (+KDV)</span>
                  <span class="product-price__val">${catalog.currency}${formatPrice(item.price)}</span>
                  <span class="product-price__unit">/ Adet</span>
                </div>

                <a href="${waLink}" target="_blank" rel="noopener" class="product-wa-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>WhatsApp ile Sor</span>
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  };

  // Aktif Kategoriyi Güncelle
  const setCategory = (slug, pushState = false) => {
    const found =
      catalog.categories.find((c) => c.slug === slug) || catalog.categories[0];
    activeSlug = found.slug;

    if (pushState && window.history && window.history.replaceState) {
      const newUrl = `${window.location.pathname}?cat=${found.slug}`;
      window.history.replaceState({ cat: found.slug }, '', newUrl);
    }

    document.title = `${found.title} — Fiyat & Stok | Nova Pak Çanta Promosyon`;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = found.title;
    if (catHeroIndex) catHeroIndex.textContent = `KATEGORİ ${found.index} / 08 — ${found.subtitle}`;
    if (catHeroTitle) catHeroTitle.textContent = found.title;
    if (catHeroDesc) catHeroDesc.textContent = found.description;
    if (catHeroImg) {
      catHeroImg.src = found.heroImage;
      catHeroImg.alt = found.title;
    }

    renderTabs();
    renderProducts(found);
  };

  // Filtre & Arama Olay Dinleyicileri
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const currentCat = catalog.categories.find((c) => c.slug === activeSlug);
      renderProducts(currentCat);
    });
  }
  if (stockFilterSelect) {
    stockFilterSelect.addEventListener('change', () => {
      const currentCat = catalog.categories.find((c) => c.slug === activeSlug);
      renderProducts(currentCat);
    });
  }
  if (priceSortSelect) {
    priceSortSelect.addEventListener('change', () => {
      const currentCat = catalog.categories.find((c) => c.slug === activeSlug);
      renderProducts(currentCat);
    });
  }

  // Başlangıçta Kategoriyi Yükle
  setCategory(activeSlug, false);
});
