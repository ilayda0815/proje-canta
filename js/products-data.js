/**
 * NOVA PAK ÇANTA PROMOSYON — MERKEZİ ÜRÜN GRUPLARI, FİYAT VE STOK VERİ MİMARİSİ
 * ================================================================================
 * Ürünlerimiz: Netbag, Netstrong, Netcool, Netgo, Nethandle, Neteco
 */

window.NOVA_PAK_CATALOG = {
  whatsappNumber: '905000000000',
  currency: '₺',

  categories: [
    {
      slug: 'netbag',
      index: '01',
      title: 'Netbag',
      subtitle: 'Yeni Nesil Bez Çanta Serisi',
      heroImage: 'assets/images/hero-floating.png',
      description: 'Çift kulplu, ultrasonik kaynak ve dikiş takviyeli yapısıyla market, perakende mağazacılık ve günlük kurumsal kullanımlar için geliştirilen yeni nesil bez çanta serisi.',
      products: [
        {
          id: 'NP-NB-101',
          name: 'Netbag Classic Körüksüz Kurumsal Bez Çanta (35x40 cm)',
          image: 'assets/images/hero-floating.png',
          price: 48.00,
          minOrder: 250,
          stock: 12500,
          stockStatus: 'in_stock',
          badge: 'Yüksek Stok',
          specs: ['Ultrasonik Kaynak / Dikişli', '100gr - 140gr Tela & Ham Bez', 'Çift Yön Kurumsal Baskı']
        },
        {
          id: 'NP-NB-102',
          name: 'Netbag Plus Alt ve Yan Körüklü Mağaza Çantası (40x35x12 cm)',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 64.00,
          minOrder: 250,
          stock: 8400,
          stockStatus: 'in_stock',
          badge: 'Çok Satan',
          specs: ['12 cm Geniş Körük', 'Takviyeli Çift Kulp', 'Flekso & Serigrafi Baskı']
        },
        {
          id: 'NP-NB-103',
          name: 'Netbag Botanical Tam Yüzey Desen Baskılı Tote Çanta',
          image: 'assets/images/hero-floating.png',
          price: 95.00,
          minOrder: 100,
          stock: 4200,
          stockStatus: 'in_stock',
          badge: 'Özel Tasarım',
          specs: ['240gr Pamuklu Dokuma', 'Tam Yüzey Empirme Baskı', 'Uzun Omuz Askılı']
        },
        {
          id: 'NP-NB-104',
          name: 'Netbag Mesh Organik Örgü File & Bez Kombinasyonlu Çanta',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 135.00,
          minOrder: 100,
          stock: 3100,
          stockStatus: 'in_stock',
          badge: 'Prestij Serisi',
          specs: ['Organik Pamuk Örgü File', 'Bakır Halka Detaylı Kulp', 'İç Kese Kombinli']
        }
      ]
    },
    {
      slug: 'netstrong',
      index: '02',
      title: 'Netstrong',
      subtitle: 'Yüksek Dayanımlı & Ağır Hizmet Serisi',
      heroImage: 'assets/images/hero-leather-bags.png',
      description: 'Güçlendirilmiş taban, çapraz kulp dikişi ve ağır gramajlı kanvas/laminasyonlu kumaş yapısıyla 15–25 kg taşıma kapasitesine sahip ultra dayanıklı çanta serisi.',
      products: [
        {
          id: 'NP-NS-201',
          name: 'Netstrong HeavyDuty 380gr Ağır Gramaj Kanvas Çanta',
          image: 'assets/images/hero-leather-bags.png',
          price: 210.00,
          minOrder: 100,
          stock: 3600,
          stockStatus: 'in_stock',
          badge: '20 Kg Kapasite',
          specs: ['380gr Su İtici Kanvas', 'Çapraz Takviyeli Kolon Kulp', 'Taban Mukavva Destekli']
        },
        {
          id: 'NP-NS-202',
          name: 'Netstrong LeatherPro Deri Saplı & Deri Tabanlı VIP Çanta',
          image: 'assets/images/hero-leather-bags.png',
          price: 340.00,
          minOrder: 50,
          stock: 1450,
          stockStatus: 'in_stock',
          badge: 'VIP Kurumsal',
          specs: ['Ağır Gramajlı Kanvas Gövde', 'Bakır Perçinli Deri Sap', 'Deri Taban Koruması']
        },
        {
          id: 'NP-NS-203',
          name: 'Netstrong LamineOPP Yüksek Hacimli Market & Fuar Çantası',
          image: 'assets/images/cantalar.png',
          price: 85.00,
          minOrder: 250,
          stock: 6800,
          stockStatus: 'in_stock',
          badge: 'Su Geçirmez',
          specs: ['OPP Laminasyonlu Dokuma', 'Fotografik Ofset Baskı', 'Yırtılmaz Gövde Teknolojisi']
        }
      ]
    },
    {
      slug: 'netcool',
      index: '03',
      title: 'Netcool',
      subtitle: 'Termal & Isı Yalıtımlı Soğutucu Seri',
      heroImage: 'assets/images/cantalar.png',
      description: 'Soğuk zincir, gıda, market ve açık hava etkinlikleri için özel alüminyum folyo ve PE köpük laminasyonlu, ısı koruyucu termal bez çanta çözümleri.',
      products: [
        {
          id: 'NP-NC-301',
          name: 'Netcool ThermoBox Fermuarlı Isı Yalıtımlı Soğutucu Çanta (20L)',
          image: 'assets/images/cantalar.png',
          price: 165.00,
          minOrder: 100,
          stock: 2900,
          stockStatus: 'in_stock',
          badge: '6 Saat Isı Koruma',
          specs: ['Alüminyum Termal İç Katman', 'Üstten Çift Fermuarlı Kapak', '20 Litre Geniş Hacim']
        },
        {
          id: 'NP-NC-302',
          name: 'Netcool Market Cırt Kapaklı Termal Alışveriş Çantası',
          image: 'assets/images/hero-floating.png',
          price: 115.00,
          minOrder: 200,
          stock: 5200,
          stockStatus: 'in_stock',
          badge: 'Soğuk Zincir',
          specs: ['3mm PE Köpük İzolasyon', 'Sızdırmaz İç Astar', 'Markanıza Özel Logo Baskı']
        },
        {
          id: 'NP-NC-303',
          name: 'Netcool VIP Piknik & Kurumsal Hediye Termo Çanta',
          image: 'assets/images/hero-leather-bags.png',
          price: 280.00,
          minOrder: 50,
          stock: 890,
          stockStatus: 'low_stock',
          badge: 'Deri Detaylı Termo',
          specs: ['Kanvas Dış Yüzey + Termo İç', 'Ayarlanabilir Omuz Askısı', 'Ön Evrak/Aksesuar Cebi']
        }
      ]
    },
    {
      slug: 'netgo',
      index: '04',
      title: 'Netgo',
      subtitle: 'Pratik, Büzgülü & Katlanabilir Seri',
      heroImage: 'assets/images/hero-netbag-drawstring.png',
      description: 'Hareket halindeki günlük yaşama, spor organizasyonlarına, festival ve kongrelere uygun hafif, büzgülü sırt ve katlanabilir cep tipi bez çanta serisi.',
      products: [
        {
          id: 'NP-NG-401',
          name: 'Netgo Drawstring Kalın Pamuk Halatlı Büzgülü Sırt Çantası',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 92.00,
          minOrder: 150,
          stock: 7400,
          stockStatus: 'in_stock',
          badge: 'Etkinlik Favorisi',
          specs: ['Kalın Örgü Pamuk Halat', 'Bakır Kuşgözü Takviyeli', 'Su İtici Dokuma Kumaş']
        },
        {
          id: 'NP-NG-402',
          name: 'Netgo LeatherCord Deri Büzgü Stoperli Lüks Kese Çanta',
          image: 'assets/images/hero-floating.png',
          price: 130.00,
          minOrder: 100,
          stock: 3200,
          stockStatus: 'in_stock',
          badge: 'Lansman Serisi',
          specs: ['Deri Stoper & Askı Detayı', 'Yumuşak Dokulu Gabardin', 'VIP Ürün/Hediye Kesesi']
        },
        {
          id: 'NP-NG-403',
          name: 'Netgo Pocket Katlanabilir Cüzdan Tipi Pratik Bez Çanta',
          image: 'assets/images/hero-recycled-bags.png',
          price: 78.00,
          minOrder: 200,
          stock: 4600,
          stockStatus: 'in_stock',
          badge: 'Katlanabilir Tasarım',
          specs: ['Kendi Cebine Katlanır', 'Çıtçıtlı Kapama', 'Çantada Yer Kaplamaz']
        }
      ]
    },
    {
      slug: 'nethandle',
      index: '05',
      title: 'Nethandle',
      subtitle: 'Ergonomik & Patentli Kulp Tasarım Serisi',
      heroImage: 'assets/images/hero-floating.png',
      description: 'Tutma sapı ve gövde entegrasyonu ergonomik olarak tasarlanmış; el geçmeli, yumuşak takviye kulplu, çift askılı ve kurumsal mağaza kullanımına özel çantalar.',
      products: [
        {
          id: 'NP-NH-501',
          name: 'Nethandle ErgoSoft Yumuşak Kulp Takviyeli Mağaza Çantası',
          image: 'assets/images/hero-floating.png',
          price: 68.00,
          minOrder: 250,
          stock: 9100,
          stockStatus: 'in_stock',
          badge: 'Ergonomik Tutuş',
          specs: ['El Acıtmayan Çift Kat Kulp', 'Ultrasonik Gövde Kaynağı', 'Mağaza & Perakende Serisi']
        },
        {
          id: 'NP-NH-502',
          name: 'Nethandle DualStrap Hem El Hem Omuz Askılı Hibrit Çanta',
          image: 'assets/images/hero-netbag-drawstring.png',
          price: 125.00,
          minOrder: 100,
          stock: 3800,
          stockStatus: 'in_stock',
          badge: 'Çift Fonksiyonlu',
          specs: ['Kısa El Sapı + Uzun Omuz Askısı', 'Çift Renk Taban Kombini', '280gr Kanvas Kumaş']
        },
        {
          id: 'NP-NH-503',
          name: 'Nethandle DieCut El Geçmeli Fuar & Katalog Çantası',
          image: 'assets/images/kirtasiye-urunleri.png',
          price: 42.00,
          minOrder: 500,
          stock: 15000,
          stockStatus: 'in_stock',
          badge: 'Fuar & Kongre',
          specs: ['Takviyeli El Geçme Yuvası', 'A4 Katalog & Dosya Uyumlu', 'Ekonomik Yüksek Adet']
        }
      ]
    },
    {
      slug: 'neteco',
      index: '06',
      title: 'Neteco',
      subtitle: '%100 Geri Dönüştürülmüş & Doğa Dostu Seri',
      heroImage: 'assets/images/hero-recycled-bags.png',
      description: 'Geri dönüştürülmüş pamuk (Re-Cotton) ve rPET içeriklerden üretilen, GOTS ve uluslararası çevre standartlarına uygun, sıfır atık vizyonlu çevreci çanta serisi.',
      products: [
        {
          id: 'NP-NE-601',
          name: 'Neteco Re-Cotton %100 Geri Dönüştürülmüş Kanvas Tote Çanta',
          image: 'assets/images/hero-recycled-bags.png',
          price: 118.00,
          minOrder: 100,
          stock: 6400,
          stockStatus: 'in_stock',
          badge: '%100 Geri Dönüşüm',
          specs: ['Sertifikalı Re-Cotton İplik', 'Su Bazlı Ekolojik Boya', '3B Kabartma / Nakış Uyumlu']
        },
        {
          id: 'NP-NE-602',
          name: 'Neteco RawOrganic Ağartılmamış Doğal Ham Bez Çanta (140-220gr)',
          image: 'assets/images/hero-recycled-bags.png',
          price: 62.00,
          minOrder: 250,
          stock: 11200,
          stockStatus: 'in_stock',
          badge: 'Sıfır Kimyasal',
          specs: ['%100 Doğal Ekru Ham Bez', 'Körüklü / Körüksüz Seçenek', 'Doğa Dostu Sürdürülebilir']
        },
        {
          id: 'NP-NE-603',
          name: 'Neteco EcoLuxe Deri Köşeli Geri Dönüştürülmüş Büzgülü Kese',
          image: 'assets/images/hero-recycled-bags.png',
          price: 145.00,
          minOrder: 100,
          stock: 2700,
          stockStatus: 'in_stock',
          badge: 'Eko-Prestij',
          specs: ['Geri Dönüştürülmüş Yeşil Dokuma', 'Vegan Deri Köşe & Sap', 'Karbon Ayak İzi Azaltılmış']
        }
      ]
    }
  ]
};
