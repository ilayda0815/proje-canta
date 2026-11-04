# 🛍️ Nova Pak — Doğa Dostu Çanta İmalatı & Kurumsal Ambalaj Çözümleri

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Responsive](https://img.shields.io/badge/Mobile-Responsive-success?style=flat-square)](#)

> **Nova Pak**, sürdürülebilir, doğa dostu ve tekrar kullanılabilir endüstriyel bez çanta üretiminde lider konumda bulunan bir imalatçı markadır. Bu proje, firmanın modern kurumsal kimliğini, 34+ profesyonel stüdyo ürün çekimini, dinamik filtreleme altyapısını ve fabrika üretim gücünü yansıtan elit web platformudur.

---

## ✨ Öne Çıkan Özellikler

- **🎨 Lüks Kurumsal Renk Paleti:** Kurumsal Lacivert (`#102D4C`), Kraft Kahverengi (`#A58465`), Doğal Keten Beji (`#F3EDE3`) ve Temiz Beyaz ile elit ve ferah tasarım dili.
- **🔄 Akıcı 4 Aşamalı Hero Slider:** 
  - Özel animasyonlu açılış ve slayt geçişleri (5.2 saniyelik otomatik periyot)
  - Hero 11 & Hero 12 stüdyo kompozisyonları ve yüzen damga rozetleri (`hero-stamp-badge`)
  - Doğrudan slayt içerisine entegre yüksek kaliteli fabrika üretim videosu (WebM formatı ve poster desteği).
- **📦 Sınırsız Model & Dinamik Ürün Kataloğu:**
  - 34 adet yüksek çözünürlüklü stüdyo ürün fotoğrafı
  - Lüks stüdyo vitrini (`contain` ve degrade zemin) ile ürün kulpları ve körükleri kesilmeden net görüntüleme
  - Kategori ve sektörel (Giyim, Pastane, Kırtasiye, Kuruyemiş, Cafe, Eczane, Market) anlık filtreleme
  - Dinamik modal detay pencereleri ve boş kategori durumları (Empty State).
- **🌐 Çift Dil Desteği (TR | EN):** 
  - Header'da konumlandırılmış `TR | EN` dil kapsülü
  - Sayfa yenilenmeden dinamik sözlük çevirisi ve `localStorage` ile dil tercihi hatırlama.
- **💬 Doğrudan WhatsApp Sipariş & Teklif Entegrasyonu:**
  - Ürün kodunu, adını ve kategori bilgisini otomatik mesaja dönüştüren akıllı WhatsApp yönlendirmesi
  - Sabit hızlı iletişim butonu.
- **📄 Zengin Kurumsal Sayfalar:**
  - [Firma Profili](firma-profili.html), [Kalite Belgeleri](kalite-belgeleri.html), [Sıkça Sorulan Sorular](sss.html), [Kurumsal](kurumsal.html), [Yönetim ve Ekibimiz](yonetim-ve-ekibimiz.html), [Referanslarımız](referanslarimiz.html), [İletişim](iletisim.html) vb.
- **📱 %100 Responsive:** Mobil cihazlar, tabletler ve masaüstü geniş ekranlar için kusursuz uyum.

---

## 📁 Proje Dizin Yapısı

```text
├── assets/
│   ├── images/
│   │   ├── products/              # 34+ Profesyonel ürün stüdyo görselleri
│   │   ├── nova-pak-logo-*.png    # Kurumsal logo varyantları (şeffaf, beyaz, temiz)
│   │   ├── hero11.png             # 1. Hero slaytı dekoratif arka planı
│   │   ├── hero12-cutout.png      # 3. Hero slaytı dekupe kraft çanta görseli
│   │   └── nova-pak-uretim-poster.jpg # Video kapak görseli
│   └── videos/
│       └── nova-pak-uretim.webm   # Fabrika otomatik imalat parkuru videosu
├── css/
│   ├── variables.css              # Renk paleti, tipografi ve tasarım değişkenleri
│   └── style.css                  # BEM metodolojisiyle yapılandırılmış ana stil dosyası
├── js/
│   ├── products-data.js           # 34 ürünlük detaylı veri tabanı (JSON tabanlı JS)
│   ├── category-page.js           # Kategori sayfası dinamik filtreleme ve kart render motoru
│   ├── promotions-manager.js      # Promosyon ürünleri yöneticisi
│   └── main.js                    # Hero slider, dil çeviri motoru (TR/EN), mobil menü
├── .gitattributes                 # Çapraz platform satır sonu (LF) normalizasyonu
├── .gitignore                      # Sistem, IDE ve geçici dosyaları hariç tutma kuralları
├── index.html                     # Ana sayfa
├── kategori.html                  # Ürün kataloğu ve sektörel filtreleme sayfası
├── promosyon.html                 # Promosyon ürünleri sayfası
├── kurumsal.html                  # Kurumsal ana sayfa
├── firma-profili.html             # Firma profili
├── kalite-belgeleri.html          # Uluslararası kalite belgeleri ve sertifikalar
├── sss.html                       # Sıkça sorulan sorular
├── iletisim.html                  # İletişim formu ve adres bilgileri
├── referanslarimiz.html           # Müşteri ve kurumsal referanslar
├── misyon-ve-vizyon.html          # Misyon ve vizyon
├── yonetim-ve-ekibimiz.html       # Yönetim kadrosu ve ekip
├── grup-sirketleri.html           # Entegre grup şirketleri bilgisi
├── sponsorluklar-ve-oduller.html  # Ödüller ve sosyal sorumluluk
├── PROJE_NOTLARI.md               # Detaylı geliştirme ve entegrasyon raporu
├── robots.txt                     # Arama motoru tarama yönergeleri
├── sitemap.xml                    # Arama motoru site haritası
└── LICENSE                        # MIT Lisansı
```

---

## 🚀 Yerel Olarak Çalıştırma

Bu proje herhangi bir derleme (build) aracı gerektirmeyen saf (Vanilla) HTML5, CSS3 ve Modern JavaScript ile geliştirilmiştir.

### Seçenek 1: VS Code Live Server ile
1. Projeyi VS Code ile açın.
2. `Live Server` eklentisini kullanarak `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğini seçin.

### Seçenek 2: Python HTTP Server ile
Terminal veya komut satırından proje dizinine gidip aşağıdaki komutu çalıştırın:

```bash
# Python 3 ile
python3 -m http.server 8000
```
Ardından tarayıcınızdan `http://localhost:8000` adresine gidin.

### Seçenek 3: Node.js `serve` ile
```bash
npx serve .
```

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Semantik etiketler, erişilebilirlik (ARIA) standartları ve SEO uyumlu meta etiketleri.
- **CSS3:** BEM mimarisi, CSS Custom Properties (CSS Değişkenleri), Flexbox, CSS Grid, akıcı animasyonlar (`@keyframes`).
- **Vanilla JavaScript (ES6+):** Harici kütüphane bağımlılığı olmaksızın çalışan slider, filtreleme, sözlük/dil çevirisi motoru.
- **Google Fonts:** Plus Jakarta Sans & Inter font aileleri.
- **Video:** HTML5 `<video>` ve WebM formatında yüksek sıkıştırmalı akıcı imalat videosu.

---

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında korunmaktadır.
