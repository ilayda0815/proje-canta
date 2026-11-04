/**
 * NOVA PAK — Promosyon Ürünleri Modüler Veri ve Render Motoru (promosyon.html)
 * 
 * Bu modül; Firebase Realtime Database, Cloud Firestore, REST API veya yerel veri kaynağından
 * gelecek promosyon ürünlerini otomatik olarak dinleyip döngüye sokarak sayfaya render eder.
 * 
 * Veri olmadığında (şu anki varsayılan durum) şık ve kurumsal bir "Yapım Aşamasında / Çok Yakında"
 * arayüzü sunar; veri eklendiğinde ise HTML şablonuna dokunmadan kartları dinamik listeler.
 */

class PromotionCatalogManager {
  constructor(options = {}) {
    this.options = {
      containerId: 'promotionProductsGrid',
      emptyStateId: 'promotionEmptyState',
      countId: 'promotionCountBadge',
      whatsappNumber: '905305684416',
      ...options
    };

    // Şu an için arayüzde ürün yok (boş / yapım aşamasında)
    this.items = [];
    this.isLoaded = false;
  }

  init() {
    this.container = document.getElementById(this.options.containerId);
    this.emptyState = document.getElementById(this.options.emptyStateId);
    this.countBadge = document.getElementById(this.options.countBadge);

    // İlk çizim: Veri boş olduğu için şık yapım aşamasında görünümü aktive olur
    this.render();

    // Dışarıdan veya gelecekteki Firebase/Admin tetikleyicileri için event listener
    window.addEventListener('novaPak:addPromotions', (e) => {
      if (Array.isArray(e.detail)) {
        this.setItems(e.detail);
      }
    });
  }

  /**
   * Yeni ürün listesi atar ve arayüzü otomatik yeniler
   * @param {Array} newItems 
   */
  setItems(newItems = []) {
    this.items = Array.isArray(newItems) ? newItems : [];
    this.isLoaded = true;
    this.render();
  }

  /**
   * REST API'den promosyon ürünlerini çeker
   * @param {string} endpointUrl 
   */
  async fetchFromApi(endpointUrl) {
    try {
      const response = await fetch(endpointUrl);
      if (!response.ok) throw new Error('API bağlantı hatası');
      const data = await response.json();
      this.setItems(data.products || data);
    } catch (err) {
      console.warn('Promosyon API yüklenirken hata oluştu:', err);
      this.render();
    }
  }

  /**
   * Firebase Firestore veya Realtime Database dinleyicisi bağlar
   * @param {Function} unsubscribeFunction 
   */
  bindFirebaseListener(subscribeFn) {
    if (typeof subscribeFn === 'function') {
      subscribeFn((snapshotData) => {
        this.setItems(snapshotData);
      });
    }
  }

  /**
   * Tek bir promosyon ürün kartı HTML şablonu
   */
  renderCard(item) {
    const waText = encodeURIComponent(
      `Merhaba Nova Pak, "${item.name}" promosyon ürünü hakkında fiyat ve baskı detayları için bilgi almak istiyorum.`
    );
    const waLink = `https://wa.me/${this.options.whatsappNumber}?text=${waText}`;

    const specsHTML = Array.isArray(item.specs)
      ? item.specs.map((s) => `<span class="spec-chip">${s}</span>`).join('')
      : '';

    return `
      <article class="product-card promotion-card overflow-hidden">
        <div class="product-card__media overflow-hidden">
          <img src="${item.image || 'assets/images/nova-pak-logo-clean.png'}" alt="${item.name}" class="product-card__img w-full h-full object-cover" loading="lazy" />
          <div class="product-card__badges">
            <span class="product-card__sku">${item.code || 'PROMO'}</span>
            <span class="product-card__tag">${item.badge || 'Promosyon'}</span>
          </div>
        </div>

        <div class="product-card__body">
          <h3 class="product-card__title">${item.name}</h3>
          <p style="font-size: 0.86rem; color: var(--color-anthracite); opacity: 0.85; margin-bottom: 14px; line-height: 1.6;">
            ${item.description || 'Kurumsal logolu özel üretim promosyon ürünü.'}
          </p>

          <div class="product-card__specs">
            ${specsHTML}
            ${item.minOrder ? `<span class="spec-chip">Min: ${item.minOrder}</span>` : ''}
          </div>

          <div class="product-card__footer">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary-navy);">
              ${item.delivery || 'Hızlı Termin'}
            </span>

            <a href="${waLink}" target="_blank" rel="noopener" class="product-wa-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Teklif Al</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  /**
   * Ana render motoru: Ürün varsa döngüye sokup listeler, yoksa yapım aşamasında gösterir
   */
  render() {
    if (!this.container) return;

    if (this.countBadge) {
      this.countBadge.textContent = `${this.items.length} Ürün`;
    }

    if (!this.items || this.items.length === 0) {
      // Ürün yoksa: Grid gizlenir, şık boş durum / yapım aşamasında kartı gösterilir
      this.container.style.display = 'none';
      if (this.emptyState) {
        this.emptyState.style.display = 'block';
      }
    } else {
      // Ürün varsa: Döngüye sokularak dinamik render edilir
      this.container.style.display = 'grid';
      if (this.emptyState) {
        this.emptyState.style.display = 'none';
      }
      this.container.innerHTML = this.items.map((item) => this.renderCard(item)).join('');
    }
  }
}

// Global başlatma
document.addEventListener('DOMContentLoaded', () => {
  window.PromotionManager = new PromotionCatalogManager();
  window.PromotionManager.init();
});
