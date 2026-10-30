# Nova Pak Çanta Promosyon — Proje Mimarisi ve Tasarım Not Defteri

Bu belge, **Nova Pak Çanta Promosyon** web sitesinin çok sayfalı kurumsal mimari yapısını, merkezi ürün/fiyat/stok veri katmanını (`js/products-data.js`), Netpak referanslı tescilli bez çanta serilerini, renk paletini ve WhatsApp iletişim altyapısını açıklar.

---

## 1. Dosya ve Klasör Mimarisi

```text
canta/
├── index.html                  # Anasayfa (Logo -> index.html, Ürünlerimiz & Kurumsal Dropdown, 3'lü Hero Slider, 6 Seri Vitrini, Ar-Ge & Sertifikalar)
├── kurumsal.html               # Kurumsal Sayfası (Firma Profili, Yönetim, Grup Şirketleri, Misyon/Vizyon, Online Katalog, Kalite Belgeleri, Ödüller, SSS, Ar-Ge & Patent)
├── promosyon.html              # Ürünlerimiz Sayfası (Tescilli 6 Amiral Gemisi Çanta Grubu Koleksiyonu)
├── referanslarimiz.html        # Referanslarımız Sayfası (İstatistikler, Kalite Standartları ve Sektörel Çözümler)
├── iletisim.html               # İletişim Sayfası (WhatsApp Hızlı İletişim Merkezi, Showroom ve Telefon/E-posta Bilgileri)
├── kategori.html               # Kategori/Seri Detay Sayfası (Netbag, Netstrong, Netcool, Netgo, Nethandle, Neteco ürünleri, filtreleme, fiyat ve stok)
├── PROJE_NOTLARI.md            # Mimari, veri yapısı ve tasarım rehberi not defteri
├── css/
│   ├── variables.css           # Renk paleti, tipografi, gölge ve geçiş (transition) değişkenleri
│   └── style.css               # Tüm sayfaların, dropdownların, kartların ve sağ alt sabit WhatsApp bileşeninin stilleri
├── js/
│   ├── products-data.js        # 6 tescilli serinin alt ürünleri, fiyatları, stok adetleri ve ürün kodları (Veri Katmanı)
│   ├── main.js                 # Ortak menü, Hero slider, scroll-fade efekti ve sabit WhatsApp motoru
│   └── category-page.js        # kategori.html sayfasının dinamik ürün/fiyat/stok çizim, filtreleme ve sıralama motoru
└── assets/
    └── images/                 # İşlenmiş ve optimize edilmiş görseller
        ├── logo-clean.png              # Arka planı temizlenmiş 1:1 dairesel logo ("NOVA PAK / Çanta Promosyon")
        ├── hero-floating.png           # Slayt 01: Netstrong & Nethandle Kurumsal Kanvas Koleksiyonu
        ├── hero-recycled-bags.png      # Slayt 02: Neteco %100 Geri Dönüştürülmüş Bez Çantalar
        ├── hero-leather-bags.png       # Deri saplı & ağır hizmet kanvas modelleri
        ├── hero-netbag-drawstring.png  # Slayt 03: Netbag File, Netgo Büzgülü & Netcool Serileri
        ├── cantalar.png                # Termal & Kurumsal Çanta Modelleri
        ├── kirtasiye-urunleri.png      # Fuar & Etkinlik Çantaları
        └── ...
```

---

## 2. Navigasyon & Menü Mimarisi

- **Logo:** Tıklandığında doğrudan `index.html` (Anasayfa) sayfasına gider. Navbar üzerinde ayrıca "Anasayfa" metin linki yer almaz.
- **Ürünlerimiz (Dropdown):**
  - `Netbag` (`kategori.html?cat=netbag`)
  - `Netstrong` (`kategori.html?cat=netstrong`)
  - `Netcool` (`kategori.html?cat=netcool`)
  - `Netgo` (`kategori.html?cat=netgo`)
  - `Nethandle` (`kategori.html?cat=nethandle`)
  - `Neteco` (`kategori.html?cat=neteco`)
  - `Tüm Ürünleri İncele` (`promosyon.html`)
- **Kurumsal (Dropdown & Ayrı Sayfalar):**
  - `Firma Profili` (`firma-profili.html`)
  - `Yönetim ve Ekibimiz` (`yonetim-ve-ekibimiz.html`)
  - `Grup Şirketleri` (`grup-sirketleri.html`)
  - `Misyon ve Vizyonu` (`misyon-ve-vizyon.html`)
  - `Online Katalog` (`online-katalog.html`)
  - `Kalite Belgeleri ve Sosyal Uygunluk` (`kalite-belgeleri.html`)
  - `Sponsorluklar ve Ödüller` (`sponsorluklar-ve-oduller.html`)
  - `Sıkça Sorulan Sorular` (`sss.html`)
  - `Ar-Ge ve Patent Çalışmaları` (`arge-ve-patent.html`)
- **Referanslarımız:** `referanslarimiz.html`
- **İletişim:** `iletisim.html`

---

## 3. Güncel Renk Paleti (Design Tokens)

| Kullanım | Renk | HEX |
| :--- | :--- | :--- |
| **Web sitesi ana arka planı** | Doğal Krem | `#F5F1E8` |
| **Logo** | Orman Yeşili | `#244C3B` |
| **Navigasyon** | Koyu Yeşil | `#19382D` |
| **Butonlar** | Orman Yeşili | `#244C3B` |
| **Hover ve küçük vurgular** | Bakır | `#B97955` |
| **Ürün kartları** | Beyaz | `#FFFFFF` |
| **İkincil alanlar** | Kum Beji | `#DED2C2` |

---

## 4. Netpak Referanslı Kurumsal Değerler

- **Tekrar Kullanılır (Reusable):** Ortalama 104 kez kullanılan ve yüzlerce tek kullanımlık plastik poşeti ikame eden doğa dostu bez çanta üretimi.
- **Ar-Ge & Patent Odaklı Üretim:** İpliksiz yüksek frekanslı ultrasonik kaynak teknolojisi, patentli kulp ve körük geometrileri.
- **Uluslararası Kalite Sertifikaları:** ISO 9001, ISO 14001, SEDEX / SMETA, GOTS, GRS (Global Recycled Standard), OEKO-TEX® Standard 100.
