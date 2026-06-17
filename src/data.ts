export interface Accommodation {
  id: string;
  name: string;
  pax: number;
  price: number;
  rooms: number;
  baths: number;
  airconds: number;
  wifi: boolean;
  image: string;
  tag: string;
  amenities: string[];
  description: string;
}

export interface EventPackage {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  priceEstimate: string;
  features: string[];
  image: string;
  perfectFor: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  eventDate: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'event' | 'homestay';
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'all' | 'pelamin' | 'eventspace' | 'homestay' | 'katering' | 'majlis';
  title: string;
  subtitle: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "studio",
    name: "Studio Unit",
    pax: 2,
    price: 150,
    rooms: 1,
    baths: 1,
    airconds: 1,
    wifi: true,
    tag: "Terlaris untuk Pasangan",
    image: "https://i.imgur.com/XMJxrxu.jpeg",
    amenities: ["1 Katil Queen Size", "1 Bilik Mandi Peribadi", "Sistem Aircond Penuh", "WiFi Percuma berkelajuan tinggi", "Kemudahan Iron & Iron Board", "Mini Fridge & Kettle", "Meja Makan"],
    description: "Nikmati ketenangan dalam ruang studio minimalis berkonsep moden-mewah. Sesuai untuk percutian pasangan, pengantin baru, atau urusan kerja singkat di Pokok Sena."
  },
  {
    id: "superior",
    name: "Superior Twin Unit",
    pax: 4,
    price: 200,
    rooms: 2,
    baths: 1,
    airconds: 2,
    wifi: true,
    tag: "Sesuai untuk Keluarga Kecil",
    image: "https://i.imgur.com/gT1Y5k5.jpeg",
    amenities: ["1 Katil Queen - 2 KatikSingle", "1 Bilik Mandi", "2 Unit Aircond Berasingan", "WiFi Percuma berkelajuan tinggi", "Ruang Tamu Selesa", "Kemudahan Iron & Iron Board", "Mini Fridge & Kettle"],
    description: "Ruang yang lebih luas dengan dua buah bilik tidur berasingan. Sesuai untuk percutian keluarga kecil yang menginginkan keselesaan."
  },
  {
    id: "family",
    name: "Homestay Keluarga RR",
    pax: 6,
    price: 350,
    rooms: 3,
    baths: 2,
    airconds: 4,
    wifi: true,
    tag: "Pakej Utama Keluarga Besar",
    image: "https://i.imgur.com/NiWPY9D.jpeg",
    amenities: ["2 Katil Queen - 1 Katil Double Deck", "2 Bilik Mandi", "4 Unit Aircond (Setiap Bilik & Ruang Tamu)", "WiFi Percuma berkelajuan tinggi", "Dapur Lengkap Perkakas Memasak", "Sofa & Tv", "Peti Sejuk & Mesin Basuh", "Parking Luas Berpagar"],
    description: "Rumah penginapan eksklusif. Dilengkapi dengan segala kemudahan rumah idaman, membolehkan seluruh keluarga besar berkumpul dan berehat dengan selesa sepanjang berlangsungnya majlis."
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: "wedding_gold",
    name: "Pakej 1000pax",
    subtitle: "Pakej Perkahwinan Lengkap",
    capacity: "500-1000 Pax",
    priceEstimate: "Bermula RM12,500",
    features: [
      "Kawasan Khemah Majlis (Arabian)",
      "Kawasan Terbuka hadapan Homestay",
      "Katering Sajian untuk tetamu",
      "Sajian Pengantin & Meja Beradab",
      "PA Sistem",
      "Parking Luas & Kawalan Lalulintas",
      "HOMESTAY UTAMA 3BILIK 2TANDAS 4 AIRCOND",
      "PERCUMA: Unit Roomstay & Superior Twin"
    ],
    image: "https://i.imgur.com/xITSroJ.jpeg",
    perfectFor: ["Majlis Resepsi Perkahwinan", "Kenduri Rakyat Makmur", "Majlis Sambutan Bertema"]
  },
  {
    id: "nikah_sweet",
    name: "Pakej Akad/Tunang",
    subtitle: "Sempurna untuk Akad Nikah & Pertunangan",
    capacity: "50 - 150 Pax",
    priceEstimate: "Bermula RM5,000",
    features: [
      "Sewa Ruang Kawasan Majlis",
      "Katering Makan Untuk Tetamu",
      "Kawasan Majlis Lengkap",
      "HOMESTAY UTAMA 3BILIK 2TANDAS 4 AIRCOND",
      "PERCUMA: Unit Roomstay & Superior Twin"
    ],
    image: "https://i.imgur.com/4LkzaBl.jpeg",
    perfectFor: ["Akad Nikah", "Majlis Pertunangan", "Aqiqah & Kesyukuran", "Majlis Hari Jadi Kakitangan Eksekutif"]
  },
  {
    id: "seminar_corp",
    name: "Kawasan Majlis (SPACE SAHAJA)",
    subtitle: "Pakej 3 HARI 2 MALAM Sesuai untuk pelbagai majlis",
    capacity: "1-1200 Pax",
    priceEstimate: "RM4,000.00",
    features: [
      "Sewaan Seluruh Kawasan RR HOMESTAY",
      "HOMESTAY UTAMA 3BILIK 2TANDAS 4 AIRCOND",
      "PERCUMA: Unit Roomstay & Superior Twin",
      "BOLEH ADDON MAKANAN",
      "BOLEH ADDON PA SISTEM",
      "Parking Luas"
    ],
    image: "https://i.imgur.com/mnWCWfQ.jpeg",
    perfectFor: ["Seminar & Bengkel Kerjaya", "Dinner Syarikat", "Mesyuarat Tahunan", "Team Building Kerajaan"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Puan Sri Rohana Kamal",
    role: "Ibu Pengantin Perempuan",
    comment: "Sangat bersyukur pilih RR untuk majlis perkahwinan anak perempuan sulung. Paling seronok sebab sepupu-sepupu datang dari jauh semua boleh sembang & tumpang tidur di Homestay Keluarga & bilik Studio yang sangat dekat sebelah dewan sahaja. Makanannya sedap, penganjuran pun sangat mesra, tetamu tak lekang memuji suasana yang dikelilingi pokok hijau yang tenang.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    eventDate: "Mei 2026",
    tag: "Majlis Perkahwinan"
  },
  {
    id: "t2",
    name: "Encik Amirul & Fatihah",
    role: "Pengantin Baru",
    comment: "Pelamin dewan sangat eksklusif nampak mahal macam di hotel 5-bintang. Krew pengurusan dewan sedia bantu segala urusan aturcara dari mula sampai tamat. Memang jimat kos apabila pakej perkahwinan sudah termasuk homestay premium untuk keluarga berehat lepas majlis akad nikah malam sebelumnya.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
    eventDate: "April 2025",
    tag: "Akad Nikah & Resepsi"
  },
  {
    id: "t3",
    name: "Dr. Hazim Zakaria",
    role: "Pengarah Seminar Korporat",
    comment: "Tempat yang paling ideal di Pokok Sena untuk mesyuarat dan seminar intensif. Tenang, bebas bising jalan raya, dan makan tenghari katering sedia masakan asli Kedah yang sungguh luar biasa lazat. Homestay Studio yang saya sewa sangat selesa dan bersih.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    eventDate: "Mac 2025",
    tag: "Acara Korporat"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq_capacity",
    question: "Berapakah kapasiti maksimum tetamu untuk eventspace?",
    answer: "Dewan utama dan kawasan Laman Luar RR boleh menempatkan sehingga 1200 orang tetamu dalam satu-satu masa. Untuk susunan majlis perkahwinan secara 'flow-through' (bergilir), kami sedia menampung kapasiti sehingga 1,000 orang tetamu dengan lancar tanpa kesesakan.",
    category: "general"
  },
  {
    id: "faq_all_in_one",
    question: "Adakah pakej RR Homestay & Eventsapce benar-benar merangkumi katering, penginapan dan pelamin sekaligus?",
    answer: "Ya benar! Falsafah utama RR adalah 'Semua Dalam Satu Lokasi'. Apabila anda menempah Pakej Perkahwinan Lengkap, anda akan mendapat sewaan homestay dan kawasan, set pelamin rumah, katering untuk jemputan, dan percuma penginapan homestay selesa di lokasi yang sama untuk keluarga pengantin.",
    category: "event"
  },
  {
    id: "faq_location",
    question: "Di manakah lokasi RR Homestay & Eventspace? Boleh saya datang melawat dahulu?",
    answer: "Kami terletak di Pokok Sena, Kedah—lokasi yang aman, tenang, dan strategik, kira-kira 20 minit pemanduan dari Alor Setar. Sudah semestinya boleh! Kami amat menggalakkan bakal pengantin atau penganjur program untuk membuat temu janji melawat tapak dewan dan melihat sendiri kualiti homestay kami sebelum membuat tempahan rasmi.",
    category: "general"
  },
  {
    id: "faq_booking",
    question: "Bagaimanakah cara untuk menyemak tarikh kosong dan membuat tempahan?",
    answer: "Cara terpantas dan termudah adalah dengan menekan butang butang 'Tempah Sekarang di WhatsApp' di sekeliling laman ini. Anda akan dihubungi terus oleh Pengurus Jualan RR untuk menyemak kalendar kosong, menyusun sebut harga mengikut keperluan belanjawan anda, dan mengunci tarikh istimewa anda.",
    category: "booking"
  },
  {
    id: "faq_custom_catering",
    question: "Bolehkah saya membawa katering sendiri atau perlu menggunakan katering RR?",
    answer: "Kami menyediakan pakej lengkap  + katering bagi memastikan kualiti kebersihan dan kelancaran servis terjamin. Bagaimanapun, sekiranya anda mempunyai katering pilihan tersendiri, kami sedia menawarkan pakej 'Kawasan Majlis (SPACE SAHAJA)' yang disertakan dengan sewaan unit homestay secara fleksibel.",
    category: "event"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    category: "pelamin",
    title: "Pelamin Utama",
    subtitle: "Hiasan pelamin moden kontemporari eksklusif"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1200",
    category: "dewan",
    title: "Ruang Meja Beradab",
    subtitle: "Susunan makan meja beradab mewah di dalam dewan"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    category: "homestay",
    title: "Studio Suite Bedding",
    subtitle: "Limpahan cahaya matahari pagi yang selesa"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    category: "katering",
    title: "Sajian Bertalam & Buffet",
    subtitle: "Katering tradisional enak yang memikat selera tetamu"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
    category: "homestay",
    title: "Superior Twin Suite",
    subtitle: "Dua bilik selesa lengkap penghawa dingin bergaya"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    category: "majlis",
    title: "Suasana Malam Laman",
    subtitle: "Limpahan lampu hiasan dolfin menghiasi laman gazebo"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=1200",
    category: "dewan",
    title: "Dewan Acara Terbuka & Tertutup",
    subtitle: "Pengudaraan semula jadi yang dikelilingi alam hijau Kedah"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
    category: "homestay",
    title: "Halaman Vila & Kolam Kid",
    subtitle: "Ruang santai keluarga luas berlatar landskap tropical"
  }
];
