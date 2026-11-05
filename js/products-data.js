/**
 * NOVA PAK — TEK KULLANIMLI ÇANTA İMALATI
 * Merkezi Ürün, Kategori ve Sektör Veri Katmanı
 * 
 * Ana Ürün Kategorileri:
 * 1. Tela Dikişli Çanta (tela-dikisli)
 * 2. Karton Çanta (karton-canta)
 * 3. Craft Çanta (craft-canta)
 * 4. Hambez Çanta (hambez-canta)
 * 
 * Sektörel Filtreleme:
 * 1. Giyim Mağazacılığı Sektörü (giyim)
 * 2. Pastane & Fırın & Tatlı Sektörü (pastane-tatli)
 * 3. Kitap & Kırtasiye ve Oyuncak Sektörü (kitap-kirtasiye)
 * 4. Kuruyemiş Sektörü (kuruyemis)
 * 5. Restaurant & Cafe Sektörü (restaurant-cafe)
 * 6. Eczane Sektörü (eczane)
 * 7. Market Sektörü (market)
 */

const NOVA_PAK_CATALOG = {
  company: {
    name: "NOVA PAK",
    title: "Tek Kullanımlı Çanta İmalatı",
    motto: "Doğaya dost, geleceğe değer...",
    owner: "Özgür Kırmaz",
    ownerTitle: "Firma Sahibi",
    phone: "+90 532 123 45 67",
    whatsapp: "905305684416",
    email: "ozgur@novapak.com",
    address: "Organize Sanayi Bölgesi, İstanbul / TÜRKİYE",
    pillars: [
      { title: "Doğaya Dost Çözümler", desc: "Geri dönüştürülebilir, sürdürülebilir hammadde ile çevreye saygılı üretim." },
      { title: "Pratik Kullanım", desc: "Ergonomik kulp ve körük tasarımlarıyla mağaza ve müşteriler için maksimum konfor." },
      { title: "Kaliteli Üretim", desc: "Kopmaz dikişler, yüksek taşıma mukavemeti ve pürüzsüz baskı kalitesi." }
    ]
  },

  categories: [
    {
      id: "tela-dikisli",
      slug: "tela-dikisli",
      title: "Tela Dikişli Çanta",
      shortDesc: "Yüksek mukavemetli nonwoven kumaş ve takviyeli dikiş yapısıyla uzun ömürlü mağaza çantaları.",
      badge: "Nonwoven & Dikişli",
      featuredImage: "./assets/images/products/Claid-AI-26c17fc691144fb698aba62154f846ca.png"
    },
    {
      id: "karton-canta",
      slug: "karton-canta",
      title: "Karton Çanta",
      shortDesc: "Lüks Amerikan Bristol ve kuşe kartondan, selefon kaplamalı ve varak baskılı prestij çantaları.",
      badge: "Lüks Kutu & Bristol",
      featuredImage: "./assets/images/products/Claid-AI-3cdeb7f2d297441183da1131eb11523a.png"
    },
    {
      id: "craft-canta",
      slug: "craft-canta",
      title: "Craft Çanta",
      shortDesc: "Doğal kahverengi ve beyaz kraft kağıttan, büküm saplı, gıda ve perakende uyumlu ekolojik çantalar.",
      badge: "Doğal Kraft",
      featuredImage: "./assets/images/products/Claid-AI-a6485ac929da448fa342ac7c4150323a.png"
    },
    {
      id: "hambez-canta",
      slug: "hambez-canta",
      title: "Hambez Çanta",
      shortDesc: "Doğal pamuk ham kumaştan, yıkanabilir ve tekrar tekrar kullanılan doğa dostu bez çantalar.",
      badge: "Doğal Ham Pamuk",
      featuredImage: "./assets/images/products/Claid-AI-06dbf37fb7c7428c81dced601a54021d.png"
    }
  ],

  sectors: [
    {
      id: "giyim",
      slug: "giyim",
      title: "Giyim Mağazacılığı Sektörü",
      icon: "shopping-bag",
      desc: "Butikler, giyim mağazaları ve moda markaları için prestijli karton, tela ve craft çantalar."
    },
    {
      id: "pastane-tatli",
      slug: "pastane-tatli",
      title: "Pastane & Fırın & Tatlı Sektörü",
      icon: "coffee",
      desc: "Geniş taban körüklü, pasta ve tatlı kutularını devirmeden taşıyan özel üretim çantalar."
    },
    {
      id: "kitap-kirtasiye",
      slug: "kitap-kirtasiye",
      title: "Kitap & Kırtasiye ve Oyuncak Sektörü",
      icon: "book-open",
      desc: "Ağır kitapları, kırtasiye setlerini ve oyuncakları güvenle taşıyan takviyeli dikişli çantalar."
    },
    {
      id: "kuruyemis",
      slug: "kuruyemis",
      title: "Kuruyemiş Sektörü",
      icon: "sun",
      desc: "Baharat, kuruyemiş ve şekerleme ürünlerinin tazeliğini koruyan doğal kraft ambalaj çantaları."
    },
    {
      id: "restaurant-cafe",
      slug: "restaurant-cafe",
      title: "Restaurant & Cafe Sektörü",
      icon: "utensils",
      desc: "Take-away kahve, paket servis ve catering sunumlarına özel hambez ve craft çantalar."
    },
    {
      id: "eczane",
      slug: "eczane",
      title: "Eczane Sektörü",
      icon: "plus-circle",
      desc: "Medikal standartlara uygun, hijyenik ve pratik boyutlu eczane ve dermokozmetik çantaları."
    },
    {
      id: "market",
      slug: "market",
      title: "Market Sektörü",
      icon: "shopping-cart",
      desc: "Yüksek yük taşıma kapasitesine sahip süpermarket ve şarküteri boy dikişli tela çantalar."
    }
  ],

  products: [
    {
      id: "NP-101",
      name: "Dora Promosyon Lüks Karton Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Lüks Mağazacılık",
      image: "./assets/images/products/Claid-AI-02eb8d13d3784cba81c6c628694ad142.png",
      specs: ["300 gr Bristol Karton", "Mat Selefon Kaplama", "Kordon İp Sap", "Körüklü Kutu Tabanı"],
      description: "Giyim ve aksesuar mağazaları için kutu tabanlı, prestijli Amerikan Bristol karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-102",
      name: "U1 Coffee Organik Hambez Kahve Çantası",
      category: "tela-dikisli",
      sector: "restaurant-cafe",
      badge: "Organik Pamuk",
      image: "./assets/images/products/Claid-AI-06dbf37fb7c7428c81dced601a54021d.png",
      specs: ["Ham Pamuk Kumaş", "220 gr/m² Kanvas", "Geniş Taban Körüğü", "Yıkanabilir Kumaş"],
      description: "Kahve kavurucuları ve butik kafeler için take-away ve promosyon amaçlı hambez çanta.",
      minOrder: "500 Adet"
    },
    {
      id: "NP-103",
      name: "Saray Butik Desenli Craft Pastane Çantası",
      category: "tela-dikisli",
      sector: "pastane-tatli",
      badge: "Gıda Uygunluklu",
      image: "./assets/images/products/Claid-AI-09175fd65bc94f1d94610483aa79c20a.png",
      specs: ["120 gr Beyaz Kraft Kağıt", "Büküm Kağıt Sap", "Geniş Pasta Tabanı", "Renkli Ofset Baskı"],
      description: "Tatlı ve pasta kutularının yatay düzlemde taşınmasını sağlayan geniş tabanlı craft çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-104",
      name: "Les Coupons Pembe Butik Tela Dikişli Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Özel Renkli Tela",
      image: "./assets/images/products/Claid-AI-0aa8ea101f844f3ab31553e2158ad24a (1).png",
      specs: ["100 gr Nonwoven Kumaş", "Çift Sıra Dikiş Takviyesi", "Canlı Pembe Renk", "Yumuşak Dokunuş"],
      description: "Moda evleri ve bayan giyim mağazaları için şık, sağlam dikişli nonwoven çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-105",
      name: "Kurumsal Beyaz Dikişli Tela Çanta",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Kurumsal Standart",
      image: "./assets/images/products/Claid-AI-0c87209efaf64cf0b34ce3d550d499d3.png",
      specs: ["80 gr Saf Beyaz Tela", "Ultrasonik & Dikişli Birleşim", "A4 Evrak Ebatı", "Taşıma Kulplu"],
      description: "Eğitim kurumları, seminerler ve kırtasiyeler için ideal beyaz dikişli tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-106",
      name: "Minimal Beyaz Mağaza Tela Çantası",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Minimalist Seri",
      image: "./assets/images/products/Claid-AI-21286b6639654b0ba35254c0e3c09b8d.png",
      specs: ["90 gr Nonwoven Tela", "Kumaş Sap", "Yüksek Taşıma Kapasitesi", "Logo Baskı Alanı"],
      description: "Giyim perakendecileri için modern, sade ve ekonomik dikişli tela alışveriş çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-107",
      name: "HKM Turuncu Saplı Karton Mağaza Çantası",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Karakteristik Renk",
      image: "./assets/images/products/Claid-AI-26c17fc691144fb698aba62154f846ca.png",
      specs: ["250 gr Kroma Karton", "Grogren Kurdele Sap", "Parlak Selefon", "Karton Takviyeli Dip"],
      description: "Marka kimliğini vurgulayan turuncu kordon saplı, kalın karton giyim çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-108",
      name: "Arslantepe Geometrik Desenli Craft Çanta",
      category: "tela-dikisli",
      sector: "kuruyemis",
      badge: "Doğal Kraft",
      image: "./assets/images/products/Claid-AI-2ddd2e3ea3b542648568f68483dff8af.png",
      specs: ["140 gr Kahverengi Kraft", "Düz Kağıt Sap", "Hava Geçirgen Doku", "Tam Boy Desen Baskı"],
      description: "Kuruyemiş ve kuru gıda ürünlerinin nefes alarak taze kalmasını sağlayan craft çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-109",
      name: "Aydın Kuyumculuk VIP Siyah Karton Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "VIP Prestij",
      image: "./assets/images/products/Claid-AI-3cdeb7f2d297441183da1131eb11523a.png",
      specs: ["350 gr Mat Kuşe Karton", "Altın Varak Yaldız", "Bürümcük İp Sap", "Siyah Mat Selefon"],
      description: "Kuyumcu, saat ve lüks aksesuar markalarına özel altın yaldız işlemeli karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-110",
      name: "Dikey Tip Dikişli Fuar Tela Çantası",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Dikey Evrak",
      image: "./assets/images/products/Claid-AI-492be74607cc4b2cb8ead52a8bc4944c.png",
      specs: ["100 gr Kalın Nonwoven", "Dikey Körük Geometrisi", "Uzun Omuz Askısı", "Katalog Uyumlu"],
      description: "Katalog, kitap ve dokümanların rahatça taşınması için tasarlanan dikey tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-111",
      name: "Yatay Tip Kurumsal Konferans Tela Çantası",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Yatay Tip",
      image: "./assets/images/products/Claid-AI-4c61e93831294e41868e1fc06cb5f773.png",
      specs: ["80 gr Saf Tela", "Yatay Geniş Ağız", "Çift Dikişli Sap", "A3/A4 Uyumlu"],
      description: "Seminer, kongre ve eğitim etkinlikleri için geniş ağızlı yatay tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-112",
      name: "Alora Pure Doğal Hambez Eczane & Kozmetik Çantası",
      category: "tela-dikisli",
      sector: "eczane",
      badge: "Dermokozmetik",
      image: "./assets/images/products/Claid-AI-54992367ddaa4809b8264b4dc55b68f0.png",
      specs: ["Organik Pamuk", "Dermokozmetik Uyumlu", "Kumaş Saplı", "Hassas Cilt Dostu"],
      description: "Eczanelerin dermokozmetik ve doğal bakım reyonlarına özel organik ham pamuk çanta.",
      minOrder: "500 Adet"
    },
    {
      id: "NP-113",
      name: "Eczane Ekose Desenli Takviyeli Tela Çanta",
      category: "tela-dikisli",
      sector: "eczane",
      badge: "Eczane Özel",
      image: "./assets/images/products/Claid-AI-5c34b9b0440049f09723357d53436c0c.png",
      specs: ["90 gr Nonwoven Kumaş", "Kumaş Kulplu Dikiş", "Özel Eczane Ebatı", "Ekose Şık Desen"],
      description: "İlaç ve medikal ürünlerin güvenle taşınması için güçlendirilmiş dikişli eczane çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-114",
      name: "Classic Naturel Kanvas Hambez Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Doğal Kanvas",
      image: "./assets/images/products/Claid-AI-5d4a9bc5a0534e3bada0bad3acaa0ae4.png",
      specs: ["240 gr Kalın Kanvas", "Körüksüz Düz Kalıp", "Uzun Ömürlü Kullanım", "Omuz Askılı"],
      description: "Yıkanabilir kalın kanvas kumaştan, uzun ömürlü ve tekrar tekrar kullanılabilir hambez çanta.",
      minOrder: "500 Adet"
    },
    {
      id: "NP-115",
      name: "Sevinç 1957 Prestij Karton Pasta Çantası",
      category: "tela-dikisli",
      sector: "pastane-tatli",
      badge: "Pasta Tabanlı",
      image: "./assets/images/products/Claid-AI-61ff62f2ffdd4c8cb3287c6994e9d79c.png",
      specs: ["300 gr Amerikan Bristol", "Geniş Kare Kutu Tabanı", "Kordon İp Sap", "Yağ Dayanıklı Taban"],
      description: "Pasta, kek ve tatlı kutularının devrilmeden taşınmasını sağlayan kare tabanlı karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-116",
      name: "Millet Kütüphanesi Kitap Hambez Çantası",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Ağır Yük Dayanımlı",
      image: "./assets/images/products/Claid-AI-6b5a349b84d849f08a0e6d8265dfa429.png",
      specs: ["Ham Bez Pamuk", "Çapraz Dikişli Saplar", "Ağır Kitap Taşıma Gücü", "Geniş Hacim"],
      description: "Kitapevleri ve kütüphaneler için ağır kitap yüklerini kolayca taşıyan takviyeli ham bez çanta.",
      minOrder: "500 Adet"
    },
    {
      id: "NP-117",
      name: "TG Butik Lacivert Yaldızlı Karton Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Kurumsal Lacivert",
      image: "./assets/images/products/Claid-AI-6e93650617c44d179d25dd2ffedf82bd.png",
      specs: ["280 gr Bristol Karton", "Kurumsal Lacivert Renk", "Altın Yaldız Baskı", "Pamuk Halat Sap"],
      description: "Lüks butikler için lacivert zemin üzeri altın yaldız baskılı prestij karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-118",
      name: "Eya Kimya Çiçek Desenli Dikişli Tela Çanta",
      category: "tela-dikisli",
      sector: "eczane",
      badge: "Medikal & Kozmetik",
      image: "./assets/images/products/Claid-AI-71ce6fef5dba46e2b67bdff607af3574.png",
      specs: ["90 gr Nonwoven Kumaş", "Renkli Çiçek Baskısı", "Dikişli Sap Birleşimi", "Antibakteriyel Uyum"],
      description: "Eczane ve kozmetik satış noktaları için zarif çiçek motifli dikişli tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-119",
      name: "Harran Baklavacı Hasan Kutu Craft Çanta",
      category: "tela-dikisli",
      sector: "pastane-tatli",
      badge: "Baklava Tabanı",
      image: "./assets/images/products/Claid-AI-8bd941c2950442dabf366c7bfac026bd.png",
      specs: ["120 gr Yağ Tutmaz Kraft", "Baklava Tepsisi Uyumlu", "Büküm Kağıt Sap", "Kraft Doğallığı"],
      description: "Baklava tepsisi ve tatlı kutularına özel geniş körüklü kraft pastane çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-120",
      name: "Anadolu Frisch Markt Körük Tabanlı Tela Çanta",
      category: "tela-dikisli",
      sector: "market",
      badge: "20 kg Mukavemet",
      image: "./assets/images/products/Claid-AI-959fc157cb9d4b93a950816efff36855.png",
      specs: ["100 gr Kalın Nonwoven", "20 kg Taşıma Mukavemeti", "Geniş Körük Taban", "Çift Dikişli Sap"],
      description: "Market ve süpermarket alışverişlerinde yüzlerce kez kullanılan ağır hizmet tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-121",
      name: "Obir Natürel Kuruyemiş & Baharat Craft Çanta",
      category: "tela-dikisli",
      sector: "kuruyemis",
      badge: "Tazelik Koruyucu",
      image: "./assets/images/products/Claid-AI-a6485ac929da448fa342ac7c4150323a.png",
      specs: ["130 gr Doğal Kraft Kağıt", "Büküm Kağıt Sap", "Hava Alan Gözenekler", "Gıda Dostu"],
      description: "Taze kuruyemiş ve baharat paketlerinin nefes alarak lezzetini korumasını sağlayan craft çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-122",
      name: "UHKIA Tekstil Doğa Dostu Craft Alışveriş Çantası",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Geri Dönüşümlü",
      image: "./assets/images/products/Claid-AI-a6a2fd1ea0a146ccbf80983528550cde.png",
      specs: ["140 gr Kalın Kraft Kağıt", "Güçlendirilmiş Büküm Kulp", "Yüksek Taşıma Gücü", "Geri Dönüşümlü"],
      description: "Tekstil ve giyim perakendesinde çevre dostu duruş sergileyen kraft alışveriş çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-123",
      name: "Beyan Supermarkt Çok Amaçlı Market Tela Çantası",
      category: "tela-dikisli",
      sector: "market",
      badge: "Süpermarket Boy",
      image: "./assets/images/products/Claid-AI-ae5de1764bc14b658a979d5080af2a08.png",
      specs: ["100 gr Ağır Hizmet Tela", "Çift Kat Taban Takviyesi", "Ekstra Geniş Hacim", "Yeşil Doğa Konsepti"],
      description: "Zincir marketler ve gıda perakendecileri için geniş hacimli, sağlam dikişli market çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-124",
      name: "Eczane İstanbul Silüetli Özel Karton Çanta",
      category: "tela-dikisli",
      sector: "eczane",
      badge: "Eczane Prestij",
      image: "./assets/images/products/Claid-AI-aec1b4e388b24c5e9805fd3a634845b1.png",
      specs: ["230 gr Amerikan Bristol", "Özel Eczane Ebatı", "Kırmızı Şerit İp Sap", "İstanbul Silüet Baskı"],
      description: "Şık tasarımı ve kompakt boyutuyla eczaneler için özel olarak üretilen karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-125",
      name: "Melanj Gri Premium Dikişli Tela Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Kumaş Doku",
      image: "./assets/images/products/Claid-AI-aef44bc9eed54bbfa4bcf4c2a486d3f9.png",
      specs: ["Dokulu Kumaş Görünümü", "Lamine Tela Kumaş", "Körüksüz Düz Kesim", "Yumuşak Tutuş"],
      description: "Kumaş dokusu hissi veren melanj gri renkli, zarif dikişli tela butik çantası.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-126",
      name: "Piqo Shop Trend Moda Tela Çantası",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Trend Tasarım",
      image: "./assets/images/products/Claid-AI-b0bc2d4070254fa7a64c6e851752f8c7.png",
      specs: ["Koyu Zemin Renkli Baskı", "Dikişli Gövde & Sap", "90 gr Nonwoven", "Genç Giyim Konsepti"],
      description: "Genç giyim ve sokak modası mağazalarına hitap eden dinamik tasarımlı tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-127",
      name: "Mutlu Günler Fırını Kafe & Restoran Craft Çanta",
      category: "tela-dikisli",
      sector: "restaurant-cafe",
      badge: "Fırın & Kafe",
      image: "./assets/images/products/Claid-AI-ba9c3e3fddf24a44b3ec527177d4bca6.png",
      specs: ["110 gr Esmer Kraft Kağıt", "Geniş Ekmek & Pasta Tabanı", "Sıcak & Soğuk Dayanımı", "Desenli Baskı"],
      description: "Fırın, kafe ve restoranların paket servis ve unlu mamul sunumları için özel craft çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-128",
      name: "Oyuncak & Kırtasiye Çizgili Karton Çanta",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Neşeli Konsept",
      image: "./assets/images/products/Claid-AI-bed22cc825904f2cbec68858510c50ab.png",
      specs: ["250 gr Kuşe Karton", "Canlı Çizgili Renkler", "Beyaz Kordon İp Sap", "Parlak Koruyucu Selefon"],
      description: "Oyuncak mağazaları ve çocuk kırtasiyeleri için canlı renkli, sevimli karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-129",
      name: "Kurumsal Yardım & Dayanışma Tela Çantası",
      category: "tela-dikisli",
      sector: "market",
      badge: "Geniş Hacim",
      image: "./assets/images/products/Claid-AI-c67af8d0dac84419aa93b3434ad275aa.png",
      specs: ["Ağır Yük Taşıma Tabanı", "Takviyeli Çapraz Dikiş", "100 gr Kalın Tela", "Yardım Kolisi Uyumlu"],
      description: "Gıda paketleri ve kuru erzak taşımaya uygun, ekstra dayanıklı dikişli tela çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-130",
      name: "Kliver Süpermarket Turuncu Körük Çantası",
      category: "tela-dikisli",
      sector: "market",
      badge: "Süpermarket Boy",
      image: "./assets/images/products/Claid-AI-c6d7be6d08cc4884a609a32d04326fcc.png",
      specs: ["110 gr Kalın Nonwoven", "Süpermarket Körüğü", "Gıda Güvenliğine Uygun", "Kopmaz Kulplar"],
      description: "Market zincirleri için tasarlanmış geniş tabanlı ve yüksek yük taşıma mukavemetli çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-131",
      name: "Azra Çeyiz & Ev Tekstili Hambez Çanta",
      category: "tela-dikisli",
      sector: "giyim",
      badge: "Büyük Boy Hambez",
      image: "./assets/images/products/Claid-AI-cc9fed98660546fd89f439e70c606232.png",
      specs: ["Büyük Boy Battaniye Ebatı", "Ham Pamuk Kumaş", "Geniş Taban & Körük", "Nefes Alan Kumaş"],
      description: "Çeyiz, yorgan ve ev tekstili ürünleri için büyük ebatlı, doğal ve nefes alan hambez çanta.",
      minOrder: "500 Adet"
    },
    {
      id: "NP-132",
      name: "Kidsstep Çocuk Ayakkabı Karton Çanta",
      category: "tela-dikisli",
      sector: "kitap-kirtasiye",
      badge: "Ayakkabı Kutusu Boyu",
      image: "./assets/images/products/Claid-AI-d0a9968bf5814405aab72c7d935c5914.png",
      specs: ["Ayakkabı Kutusu Tabanı", "250 gr Bristol Karton", "Çocuk Sağlığına Uygun", "Kordon Sap"],
      description: "Çocuk ayakkabısı ve kırtasiye kutuları için özel taban ölçüsüne sahip karton çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-133",
      name: "Cakeworld Butik Pasta & Kurabiye Craft Çantası",
      category: "tela-dikisli",
      sector: "pastane-tatli",
      badge: "Butik Tatlı Boyu",
      image: "./assets/images/products/Claid-AI-d27d74d78a2d47dd952390049ad99f1e.png",
      specs: ["Kare Kutu Tabanı", "Doğal Ekolojik Kraft", "Kopmaz Büküm Kulp", "Özel Desenli Baskı"],
      description: "Butik kurabiye, pasta ve tatlı kutularını düz tutarak taşıyan zarif craft çanta.",
      minOrder: "1.000 Adet"
    },
    {
      id: "NP-134",
      name: "Boutica Coffy & Paste Hambez Kahve Çantası",
      category: "tela-dikisli",
      sector: "restaurant-cafe",
      badge: "Cafe & Lounge",
      image: "./assets/images/products/Claid-AI-fb41d2c83a2647af8a7bd3ccd2e38d2a.png",
      specs: ["Take-away Kahve Uyumlu", "Ham Pamuk Kumaş", "Minimalist Tipografi", "Yıkanabilir Kalite"],
      description: "Şık kafeler, kahve zincirleri ve lounge mekanlar için çevre dostu bez kahve çantası.",
      minOrder: "500 Adet"
    }
  ]
};

// Global dışa aktarım
if (typeof window !== "undefined") {
  window.NOVA_PAK_CATALOG = NOVA_PAK_CATALOG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = NOVA_PAK_CATALOG;
}
