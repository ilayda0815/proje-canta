/**
 * NOVA PAK ÇANTA PROMOSYON — MERKEZİ KATEGORİ, ÜRÜN, FİYAT VE STOK VERİ MİMARİSİ
 * ================================================================================
 * İleride yeni ürün eklemek, fiyatları veya stok adetlerini güncellemek için
 * yalnızca bu dosyadaki ilgili kategori dizisini düzenlemeniz yeterlidir.
 */

window.NOVA_PAK_CATALOG = {
  whatsappNumber: '905000000000', // Kurumsal WhatsApp numarası (ülke kodu ile)
  currency: '₺',

  categories: [
    {
      slug: 'flash-bellekler',
      index: '01',
      title: 'Flash Bellekler',
      subtitle: 'Dijital Prestij Serisi',
      heroImage: 'assets/images/flash-bellekler.png',
      description: 'Gece laciverti ve bakır metal gövdeli, deri kılıflı, lazer kazıma ve UV baskıya uygun USB 3.0 & Type-C kurumsal bellek koleksiyonumuz.',
      products: [
        {
          id: 'NP-FB-101',
          name: 'Nova Copper Spin 32GB Metal USB 3.0',
          image: 'assets/images/flash-bellekler.png',
          price: 245.00,
          minOrder: 50,
          stock: 1450,
          stockStatus: 'in_stock', // 'in_stock' | 'low_stock' | 'pre_order'
          badge: 'Çok Satan',
          specs: ['32 GB USB 3.0', 'Bakır & Lacivert Gövde', 'Çift Yönlü Lazer Baskı']
        },
        {
          id: 'NP-FB-102',
          name: 'Nova Dual Type-C & USB 64GB Prestij Bellek',
          image: 'assets/images/flash-bellekler.png',
          price: 340.00,
          minOrder: 50,
          stock: 820,
          stockStatus: 'in_stock',
          badge: 'Type-C Uyumlu',
          specs: ['64 GB Yüksek Hız', 'Type-C + USB-A Çift Giriş', 'VIP Kutulu Sunum']
        },
        {
          id: 'NP-FB-103',
          name: 'Nova Leather Executive Deri Anahtarlıklı 32GB',
          image: 'assets/images/flash-bellekler.png',
          price: 290.00,
          minOrder: 50,
          stock: 190,
          stockStatus: 'low_stock',
          badge: 'Sınırlı Stok',
          specs: ['32 GB Bellek', 'Hakiki Deri Kılıf', 'Bakır Halka Detaylı']
        },
        {
          id: 'NP-FB-104',
          name: 'Nova Slim Metallic 16GB Kurumsal Seri',
          image: 'assets/images/flash-bellekler.png',
          price: 195.00,
          minOrder: 100,
          stock: 2400,
          stockStatus: 'in_stock',
          badge: 'Ekonomik Prestij',
          specs: ['16 GB Kapasite', 'Paslanmaz Bakır Kaplama', 'Mıknatıslı Kutu Dahil']
        }
      ]
    },
    {
      slug: 'yedek-bataryalar',
      index: '02',
      title: 'Yedek Bataryalar',
      subtitle: 'Kesintisiz Enerji Serisi',
      heroImage: 'assets/images/yedek-bataryalar.png',
      description: 'Mat gece laciverti dokulu, bakır çerçeveli, hızlı şarj destekli ve ışıklı logo uygulamasına uygun kurumsal powerbank modelleri.',
      products: [
        {
          id: 'NP-PB-201',
          name: 'Nova PowerPro 10.000 mAh Bakır Çerçeveli Powerbank',
          image: 'assets/images/yedek-bataryalar.png',
          price: 680.00,
          minOrder: 25,
          stock: 640,
          stockStatus: 'in_stock',
          badge: '22.5W Hızlı Şarj',
          specs: ['10.000 mAh Li-Polymer', 'Çift USB + Type-C PD', 'Lazer / Işıklı Logo']
        },
        {
          id: 'NP-PB-202',
          name: 'Nova UltraMax 20.000 mAh Yönetici Powerbank Seti',
          image: 'assets/images/yedek-bataryalar.png',
          price: 960.00,
          minOrder: 25,
          stock: 310,
          stockStatus: 'in_stock',
          badge: 'VIP Kutulu',
          specs: ['20.000 mAh Kapasite', 'Örgülü Bakır Kablo Dahil', 'LED Şarj Göstergesi']
        },
        {
          id: 'NP-PB-203',
          name: 'Nova MagSlim 5.000 mAh Kablosuz Magsafe Batarya',
          image: 'assets/images/yedek-bataryalar.png',
          price: 590.00,
          minOrder: 50,
          stock: 120,
          stockStatus: 'low_stock',
          badge: 'Kablosuz Şarj',
          specs: ['5.000 mAh Ultra İnce', '15W Magsafe Uyumlu', 'Soft-Touch Yüzey']
        }
      ]
    },
    {
      slug: 'teknolojik-urunler',
      index: '03',
      title: 'Teknolojik Ürünler',
      subtitle: 'Akıllı Donanım Koleksiyonu',
      heroImage: 'assets/images/teknolojik-urunler.png',
      description: 'Kablosuz şarj standları, kumaş dokulu Bluetooth hoparlörler, TWS kulaklıklar ve örgülü şarj kablolarından oluşan yeni nesil teknoloji promosyonları.',
      products: [
        {
          id: 'NP-TK-301',
          name: 'Nova Acoustic Copper Bluetooth 5.3 Hoparlör',
          image: 'assets/images/teknolojik-urunler.png',
          price: 890.00,
          minOrder: 25,
          stock: 420,
          stockStatus: 'in_stock',
          badge: 'Premium Ses',
          specs: ['10W Çift Sürücü', 'Gece Laciverti Kumaş Doku', '12 Saat Pil Ömrü']
        },
        {
          id: 'NP-TK-302',
          name: 'Nova Halo 15W Masaüstü Kablosuz Hızlı Şarj Pedi',
          image: 'assets/images/teknolojik-urunler.png',
          price: 440.00,
          minOrder: 50,
          stock: 950,
          stockStatus: 'in_stock',
          badge: 'Ofis Favorisi',
          specs: ['15W Fast Qi Şarj', 'Bakır Alaşım Çerçeve', 'Kaydırmaz Deri Yüzey']
        },
        {
          id: 'NP-TK-303',
          name: 'Nova Pods ANC Kurumsal TWS Kulaklık',
          image: 'assets/images/teknolojik-urunler.png',
          price: 780.00,
          minOrder: 30,
          stock: 150,
          stockStatus: 'low_stock',
          badge: 'Yeni Nesil',
          specs: ['Aktif Gürültü Engelleme', 'Bakır Şeritli Şarj Kutusu', 'Kutu Üzeri Logo Baskı']
        }
      ]
    },
    {
      slug: 'vip-kutulu-setler',
      index: '04',
      title: 'VIP Kutulu Setler',
      subtitle: 'Yönetici & Protokol Serisi',
      heroImage: 'assets/images/vip-kutulu-setler.png',
      description: 'Bakır şeritli özel tasarım hediye kutularında ajanda, metal roller kalem, deri kartvizitlik ve anahtarlık kombinasyonları.',
      products: [
        {
          id: 'NP-VP-401',
          name: 'Nova Royal 4’lü Yönetici VIP Hediye Seti',
          image: 'assets/images/vip-kutulu-setler.png',
          price: 1150.00,
          minOrder: 25,
          stock: 500,
          stockStatus: 'in_stock',
          badge: 'Protokol Serisi',
          specs: ['Termo Deri Ajanda', 'Bakır Detaylı Roller Kalem', 'Deri Kartvizitlik & Anahtarlık']
        },
        {
          id: 'NP-VP-402',
          name: 'Nova Prestige 3’lü Mıknatıslı Kutulu Set',
          image: 'assets/images/vip-kutulu-setler.png',
          price: 890.00,
          minOrder: 30,
          stock: 720,
          stockStatus: 'in_stock',
          badge: 'Popüler Seçim',
          specs: ['Bakır Kenarlı Defter', 'Metal İmza Kalemi', 'Özel Süngerli Kutu']
        },
        {
          id: 'NP-VP-403',
          name: 'Nova CEO Teknoloji & Kırtasiye Karma VIP Kutu',
          image: 'assets/images/vip-kutulu-setler.png',
          price: 1680.00,
          minOrder: 20,
          stock: 95,
          stockStatus: 'low_stock',
          badge: 'Özel Koleksiyon',
          specs: ['10.000 mAh Powerbank + 32GB USB', 'Deri Ajanda & Kalem', 'Gofre / Lazer Baskı Dahil']
        }
      ]
    },
    {
      slug: 'cam-urunler',
      index: '05',
      title: 'Cam Ürünler',
      subtitle: 'Sağlık & Zarafet Koleksiyonu',
      heroImage: 'assets/images/cam-urunler.png',
      description: 'Deri kılıflı ve bakır kapaklı borosilikat cam mataralar, çift cidarlı kupalar ve kurumsal sunum bardakları.',
      products: [
        {
          id: 'NP-CM-501',
          name: 'Nova Pure 550ml Deri Kılıflı & Bakır Kapaklı Cam Matara',
          image: 'assets/images/cam-urunler.png',
          price: 360.00,
          minOrder: 50,
          stock: 1100,
          stockStatus: 'in_stock',
          badge: 'Eko-Elit',
          specs: ['Borosilikat Isıya Dayanıklı Cam', 'Gece Laciverti Deri Kılıf', 'Sızdırmaz Bakır Kapak']
        },
        {
          id: 'NP-CM-502',
          name: 'Nova ThermoGlass Çift Cidarlı 350ml Cam Kupa Seti',
          image: 'assets/images/cam-urunler.png',
          price: 295.00,
          minOrder: 50,
          stock: 680,
          stockStatus: 'in_stock',
          badge: '2’li Kutu',
          specs: ['Çift Cidarlı Yalıtım', 'Fırınlanmış Kurumsal Logo', 'Özel Silindir Kutu']
        }
      ]
    },
    {
      slug: 'masa-setleri',
      index: '06',
      title: 'Masa Setleri',
      subtitle: 'Makam & Ofis Düzeni',
      heroImage: 'assets/images/masa-setleri.png',
      description: 'Deri sümen takımları, fırçalanmış bakır kalemlikler ve masaüstü düzenleyicilerden oluşan prestijli ofis ürünleri.',
      products: [
        {
          id: 'NP-MS-601',
          name: 'Nova Executive 7 Parça Deri & Bakır Masa Sümen Takımı',
          image: 'assets/images/masa-setleri.png',
          price: 1850.00,
          minOrder: 15,
          stock: 210,
          stockStatus: 'in_stock',
          badge: 'Makam Serisi',
          specs: ['Çift Dikişli Deri Sümen', 'Bakır Kalemlik & Ataşlık', 'Notluk, Zımba ve Cetvel Dahil']
        },
        {
          id: 'NP-MS-602',
          name: 'Nova Minimalist 4 Parça Masaüstü Organizer Seti',
          image: 'assets/images/masa-setleri.png',
          price: 980.00,
          minOrder: 25,
          stock: 340,
          stockStatus: 'in_stock',
          badge: 'Modern Ofis',
          specs: ['Deri Masa Matı (80x40cm)', 'Deri & Bakır Kalemlik', 'Kartvizit Standı']
        }
      ]
    },
    {
      slug: 'kirtasiye-urunleri',
      index: '07',
      title: 'Kırtasiye Ürünleri',
      subtitle: 'Kurumsal Kimlik & Toplantı',
      heroImage: 'assets/images/kirtasiye-urunleri.png',
      description: 'Bakır spiralli defterler, roller kalemler ve özel dokulu zarf & notluk setleriyle kurumsal yazışmalarınıza değer katın.',
      products: [
        {
          id: 'NP-KR-701',
          name: 'Nova CopperWire A5 Bakır Spiralli Sert Kapak Defter & Kalem',
          image: 'assets/images/kirtasiye-urunleri.png',
          price: 320.00,
          minOrder: 50,
          stock: 1600,
          stockStatus: 'in_stock',
          badge: 'Toplantı Seti',
          specs: ['100gr Fildişi Hamur Kağıt', 'Bakır İkiz Spiral & Lastik', 'Metal Roller Kalem Dahil']
        },
        {
          id: 'NP-KR-702',
          name: 'Nova Atelier Kurumsal Zarf, Küp Notluk & Bakır Klips Seti',
          image: 'assets/images/kirtasiye-urunleri.png',
          price: 410.00,
          minOrder: 50,
          stock: 540,
          stockStatus: 'in_stock',
          badge: 'Özel Tasarım',
          specs: ['Dokulu Lacivert & Antrasit Zarflar', 'Masaüstü Küp Notluk', 'Bakır Binder Klipsler']
        }
      ]
    },
    {
      slug: 'cantalar',
      index: '08',
      title: 'Çantalar',
      subtitle: 'Özel Üretim Serisi',
      heroImage: 'assets/images/cantalar.png',
      description: 'Geri dönüştürülmüş ham bez, netbag file, deri desenli ve deri saplı kanvas tote, büzgülü bez torba ve sırt çantalarında logonuza özel elit üretim.',
      products: [
        {
          id: 'NP-CN-801',
          name: 'Nova Botanical Özel Desen Baskılı Kanvas Tote & Büzgülü Set',
          image: 'assets/images/hero-floating.png',
          price: 185.00,
          minOrder: 100,
          stock: 3800,
          stockStatus: 'in_stock',
          badge: 'İmza Serisi',
          specs: ['320gr Kanvas & Gabardin', 'Tam Yüzey Desen Baskı', 'Deri Kordon & Omuz Askısı']
        },
        {
          id: 'NP-CN-802',
          name: 'Nova EcoRecycle Geri Dönüştürülmüş & Deri Saplı Ham Bez Çanta',
          image: 'assets/images/hero-recycled-bags.png',
          price: 145.00,
          minOrder: 100,
          stock: 4500,
          stockStatus: 'in_stock',
          badge: '%100 Geri Dönüşüm',
          specs: ['%100 Re-Cotton Pamuk', 'Deri Kulp & Köşe Detaylı', '3B Kabartma & Eko-Baskı']
        },
        {
          id: 'NP-CN-803',
          name: 'Nova NetBag Bakır Halkalı Organik Örgü File & Bez Çanta',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 165.00,
          minOrder: 100,
          stock: 2900,
          stockStatus: 'in_stock',
          badge: 'Netbag Serisi',
          specs: ['Esnek Organik Pamuk File', 'Bakır Halka Kulplar', 'İç Desenli Kese Kombinli']
        },
        {
          id: 'NP-CN-804',
          name: 'Nova Drawstring Halat Kordonlu Büzgülü Bez Sırt & Torba Çanta',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 140.00,
          minOrder: 100,
          stock: 3600,
          stockStatus: 'in_stock',
          badge: 'Büzgülü Seri',
          specs: ['Kalın Örgü Pamuk Halat', 'Bakır Kuşgözü Takviyeli', 'Etkinlik & Fuar Sırt Torbası']
        },
        {
          id: 'NP-CN-805',
          name: 'Nova LeatherTouch Deri Saplı & Deri Tabanlı Kanvas Çanta (380gr)',
          image: 'assets/images/hero-leather-bags.png',
          price: 390.00,
          minOrder: 50,
          stock: 1850,
          stockStatus: 'in_stock',
          badge: 'Deri Detaylı VIP',
          specs: ['380gr Ağır Gramajlı Kanvas', 'Deri Desenli Sap & Taban', 'Bakır Perçin ve Gofre Etiket']
        },
        {
          id: 'NP-CN-806',
          name: 'Nova Voyager Deri Tokalı 15.6" Kanvas & Oxford Sırt Çantası',
          image: 'assets/images/cantalar.png',
          price: 1290.00,
          minOrder: 30,
          stock: 850,
          stockStatus: 'in_stock',
          badge: 'Yönetici Serisi',
          specs: ['Su Geçirmez Kanvas Dokuma', '15.6" Darbe Korumalı Bölme', 'Bakır Fermuar & Deri Toka']
        }
      ]
    }
  ]
};
