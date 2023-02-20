export const categories =[
  
    {
      category :'phone',
    source:require('../assets/categories/phone.jpg'),
  },
  {
    category:'computer',
    source:require('../assets/categories/computer.png'),
  },
  {
    category:'tv',
    source:require('../assets/categories/tv.png'),
  },
  {
    category:'earbuds',
    source :require('../assets/categories/earbuds.png'),
    
  },
  {
    category:'keyboard',
    source:require('../assets/categories/keyboard.png')
  },
  { 
   category:'mouse',
    source: require('../assets/categories/mouse.png')
  },
  {
   category:'charger',
    source: require('../assets/categories/charger.png')
  }
  
  ]

export const Items = [
    {
      id: 1,
      category: 'phone',
      categoryImage :require('../assets/categories/phone.jpg'),
      productName: 'Samsung S22 ',
      productPrice: '3999 DT',
      description: "Écran 6.1 AMOLED dynamique 2X, HDR10+ (1080 x 2340 pixels) - Systéme d'exploitation: Android 12 - Processeur: Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) Octa-core (1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510) - Mémoire RAM: 8Go - Stockage: 256Go - Appareil photo Arrière: TRIO 50MP + 10MP + 12MP - Appareil Photo Frontale: 10MP - Connectivité: Wifi, 5G et Bluetooth, Double SIM - Capteur d'empreintes digitales - Capacité Batterie: 3700 mAh - Résistant IP68 - Couleur: Noir - Garantie: 1 an",
      productImage: require('./product/s22.png'),
      productImageList: [
        require('./product/s22.png'),
        require('./product/s22-1.png'),
        require('./product/s22-2.png'),
      ],
    },
    {
      id: 2,
      category: 'phone',
      categoryImage :require('../assets/categories/phone.jpg'),
      productName: 'iPhone 13 128 GO',
      productPrice: '3599 DT',
      description:"Ecran 6,1 OLED Super Retina XDR HDR - Résolution: 2532 x 1170 pixels à 460 ppp - Processeur:  Puce A15 Bionic (5 nm) Hexa-core ( 2 x 3.22 GHz Avalanche + 4 x X.X GHz Blizzard) - GPU Graphics Apple 4 Coeurs - Système d'exploitation: iOS 15 - Mémoire RAM: 4 Go - Stockage: 128 Go - Appareil photo Arrière: Dual Pixels: 12 MégaPixels Grand‑angle avec ouverture ƒ/1,6 + 12 MégaPixels Ultra grand‑angle avec ouverture ƒ/2,4 et champ de vision de 120° - Appareil Avant: 12 MégaPixels avec Ouverture ƒ/2,2 - Video 4K HDR avec Wifi, Réseau 5G , GPS , NFC et Bluetooth 5.0 - Batterie: Li-Ion 3240 mAh - Face ID - Couleur: Noir - Garantie: 1 an",
      productImage: require('./product/iphone13.png'),
      productImageList: [
        require('./product/iphone13.png'),
        require('./product/iphone13-1.png'),
        require('./product/iphone13-2.png')
      ],
    },
    {
      id: 3,
      category: 'tv',
      categoryImage :require('../assets/categories/tv.png'),
      productName: 'telefunken 32',
      productPrice: '599 DT',
      description:"Téléviseur TELEFUNKEN 32 LED HD Avec recepteur integré - Résolution: 1366 x 768 Pixels - Luminosité (cd/m2): 200 nits - Taux de rafraîchissement: 60 Hz - App préinstallée: minuterie d'arrêt - Système de protection des yeux - Connecteurs: 2x ports HDMI, 1x port USB - Sortie audio : 2 x 8 W - Dimensions: 720x188.5x480x7mm(avec support) ,  720x81x423.4mm(sans support) - Poids: 5 kg - Couleur: Noir - Garantie: 3 ans ",
      productImage: require('./product/telefunken32.png'),
      productImageList: [
        require('./product/telefunken32.png'),
      ],
    },
    {
      id: 4,
      category: 'tv',
      categoryImage :require('../assets/categories/tv.png'),
      productName: 'Vega 32',
      productPrice: '599 DT',
      description:'Téléviseur VEGA 32" HD LED - Résolution 1366 x 768 - Aspect ratio 16:9 - 2x Hauts Parleurs 6W - Luminosité: 180 cd/m² - Contraste 3000:1 - Angle de vue: 178° x 178° - Maximum colors 16.7M - Temps de réponse 8.5 ms - 1x Entrée (ATV+DVB-C/T/T2) - 3x HDMI - 1x USB - Couleur Noir - Dimensions: 720x188.5x480x7mm(avec support) ,  720x81x423.4mm(sans support) - Poids: 5 kg - Couleur: Noir - Garantie: 3 ans',
      productImage: require('./product/vega32.png'),
      productImageList: [
        require('./product/vega32.png'),
      ],
    },
    {
      id: 5,
      category: 'earbuds',
      categoryImage :require('../assets/categories/earbuds.png'),
      productName: 'infinix XE 22',
      productPrice: '59 DT',
      description:"Écouteurs Bluetooth Sans Fil Infinix XE20 - Technologie de Connectivité: Bluetooth  - Autonomie : 4 heures - Temps de charge écouteurs : 2 heures - Boîtier de charge : 2,5 heures - Distance de transmission : 10 m - Pavée IPX4 Résistant à l'eau - Latence: 60ms - Couleur: Noir - Garantie: 1 an",
      productImage: require('./product/infinixXe22.png'),
      productImageList: [
        require('./product/infinixXe22.png'),
        require('./product/infinixXe22-1.png'),
      ],
    },
    {
      id: 6,
      category: 'phone',
      categoryImage :require('../assets/categories/phone.jpg'),
      productName: 'Samsung A53',
      productPrice: '1899 DT',
      description:"Double Sim - Ecran 6.5 Infinity-O, Super AMOLED, Full HD+ 1080 x 2400 pixels - 120 Hz, HDR, Gorilla Glass 5, HDR10+ - Processeur Exynos 1280 Octo-Core cadencé à 2.4 GHz - RAM 8 Go - Mémoire 128 Go - Android 12 + Samsung One UI 4.1 - Appareil Photo 64 MP (f/1.8, OIS) + 12 MP (ultra grand angle, f/2.2, FOV 120°) + 5 MP (macro, f/2.4) + 5 MP (portrait, f/2.4), autofocus, Flash, panorama, vidéo 4K, caméra frontale de 32 MP (f/2.2) - Connectivité BlueTooth 5.1 - Wi-Fi - Wi-Fi Direct - USB Type C - Jack 3.5mm - Reconnaissance faciale - Lecteur d'empreinte digitale sous l'écran - Batterie 5000 mAh - Charge rapide 25W - Dimensions 159.6 x 74.8 x 8.1 mm - Poids 189 g - Couleur Bleu - Garantie 1 an",
      productImage: require('./product/a53.png'),
      productImageList: [
        require('./product/a53.png'),
        require('./product/a53-1.png'),
        require('./product/a53-2.png')
      ],
    },
    {
      id: 7,
      category: 'tv',
      categoryImage :require('../assets/categories/tv.png'),
      productName: 'Vega 32',
      productPrice: '599 DT',
      description:'Televion Vega ecran 32 puce FHD',
      productImage: require('./product/vega32.png'),
      productImageList: [
        require('./product/vega32.png'),
      ],
    },
  ];