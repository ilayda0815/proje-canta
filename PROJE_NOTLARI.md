# Nova Pak Çanta Promosyon — Proje Mimarisi ve Tasarım Not Defteri

Bu belge, **Nova Pak Çanta Promosyon** web sitesinin iki sayfalı (`index.html` ve `kategori.html`) mimari yapısını, merkezi ürün/fiyat/stok veri katmanını (`js/products-data.js`), renk paletini ve WhatsApp iletişim altyapısını açıklar.

---

## 1. Dosya ve Klasör Mimarisi

```text
canta/
├── index.html                  # Anasayfa (4'lü Bez Çanta Yana Kaydırmalı Hero Slider + Popüler Kategoriler Grid)
├── promosyon.html              # Promosyon Sayfası (Tüm 8 Promosyon Kategorisi Koleksiyonu)
├── referanslarimiz.html        # Referanslarımız Sayfası (İstatistikler, Kalite Standartları ve Sektörel Referanslar)
├── iletisim.html               # İletişim Sayfası (WhatsApp Hızlı İletişim Merkezi, Showroom ve Telefon/E-posta Bilgileri)
├── kategori.html               # Kategori Detay Sayfası (Alt ürünler, birim fiyatlar, canlı stok adetleri, filtreleme ve sıralama)
├── PROJE_NOTLARI.md            # Mimari, veri yapısı ve tasarım rehberi not defteri
├── css/
│   ├── variables.css           # Renk paleti, tipografi, gölge ve geçiş (transition) değişkenleri
│   └── style.css               # Tüm sayfaların, kartların ve sağ alt sabit WhatsApp bileşeninin stilleri
├── js/
│   ├── products-data.js        # 8 kategorinin alt ürünleri, fiyatları, stok adetleri ve ürün kodları (Veri Katmanı)
│   ├── main.js                 # Ortak menü, Hero slider, scroll-fade efekti ve sabit WhatsApp motoru
│   └── category-page.js        # kategori.html sayfasının dinamik ürün/fiyat/stok çizim, filtreleme ve sıralama motoru
└── assets/
    └── images/                 # İşlenmiş ve standart isimlendirilmiş görseller
        ├── logo-clean.png              # Arka planı temizlenmiş şeffaf logo ("NOVA PAK / Çanta Promosyon")
        ├── hero-floating.png           # Slayt 01: Özel Tasarım Bez Çanta & Kanvas Koleksiyonu
        ├── hero-recycled-bags.png      # Slayt 02: Geri Dönüştürülmüş & Ham Bez Çantalar
        ├── hero-leather-bags.png       # Slayt 03: Deri Desenli & Deri Saplı Kanvas Bez Çantalar
        ├── hero-netbag-drawstring.png  # Slayt 04: Netbag File & Büzgülü Bez Çantalar
        ├── flash-bellekler.png         # 01. Kategori: Flash Bellekler
        ├── yedek-bataryalar.png        # 02. Kategori: Yedek Bataryalar
        ├── teknolojik-urunler.png      # 03. Kategori: Teknolojik Ürünler
        ├── vip-kutulu-setler.png       # 04. Kategori: VIP Kutulu Setler
        ├── cam-urunler.png             # 05. Kategori: Cam Ürünler
        ├── masa-setleri.png            # 06. Kategori: Masa Setleri
        ├── kirtasiye-urunleri.png      # 07. Kategori: Kırtasiye Ürünleri
        └── cantalar.png                # 08. Kategori: Bez Çantalar & Çanta Koleksiyonu
```

---

## 2. Güncel Renk Paleti (Design Tokens)

| Kullanım | Renk | HEX |
| :--- | :--- | :--- |
| **Web sitesi ana arka planı** | Doğal Krem | `#F5F1E8` |
| **Logo** | Orman Yeşili | `#244C3B` |
| **Navigasyon** | Koyu Yeşil | `#19382D` |
| **Butonlar** | Orman Yeşili | `#244C3B` |
| **Hover ve küçük vurgular** | Bakır | `#B97955` |
| **Ürün kartları** | Beyaz | `#FFFFFF` |
| **İkincil alanlar** | Kum Beji | `#DED2C2` |

- Ana sayfadaki **Asimetrik Bento Grid** kartlarından veya sağ üstteki **Kategoriler** açılır menüsünden herhangi bir kategoriye tıklandığında ilgili kategori sayfası açılır:
  - Örn: `kategori.html?cat=flash-bellekler`, `kategori.html?cat=cantalar` vb.
- **Merkezi Veri Yönetimi (`js/products-data.js`):**
  - Her kategorinin altında ürünler (`products` dizisi) yer alır.
  - Her ürün nesnesi şu alanlara sahiptir:
    - `id`: Ürün Kodu (Örn: `'NP-CN-801'`)
    - `name`: Ürün Adı
    - `price`: Birim Fiyat (`₺`)
    - `minOrder`: Minimum Sipariş Adedi
    - `stock`: Güncel Stok Adedi (Örn: `850`)
    - `stockStatus`: `'in_stock'` (*Stokta Var*) veya `'low_stock'` (*Sınırlı Stok*)
    - `badge`: Ürün Etiketi (Örn: `'Çok Satan'`, `'İmza Modeli'`)
    - `specs`: Teknik özellik etiketleri dizisi
- **Dinamik Özellikler (`js/category-page.js`):**
  - Sayfa üstündeki 8 kategori sekmesinden sayfa yenilenmeden kategoriler arası anında geçiş yapılabilir.
  - Ürün adı veya ürün koduna göre **anlık arama**, **stok durumuna göre filtreleme** ve **fiyata/stok adedine göre sıralama** yapılabilir.
  - Her ürün kartındaki **"WhatsApp ile Sor"** butonu, o ürünün adını, kodunu ve fiyatını içeren hazır mesajla doğrudan WhatsApp sohbetini başlatır.

---

## 3. WhatsApp "Bize Ulaşın" Altyapısı

1. **Sağ Alt Sabit WhatsApp Simgesi (`.whatsapp-float-wrap`):**
   - Hem `index.html` hem de `kategori.html` sayfalarında sağ alt köşede sürekli bekler.
   - Tıklandığında mini WhatsApp sohbet penceresi açılır; kullanıcı tek tıkla **Fiyat & Stok Bilgisi** veya **Özel Üretim & Sipariş** hattına bağlanabilir.
2. **İletişim Bölümü (`#iletisim`):**
   - Klasik teklif formu yerine doğrudan WhatsApp hızlı iletişim kartları (*Fiyat & Stok Bilgisi Alın*, *Katalog & Numune İste*, *Özel Baskı & Tasarım Desteği*) ile kurgulanmıştır.
