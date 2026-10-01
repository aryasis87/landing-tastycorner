/* ==========================================================================
   Tasty Corner — "Struk Mingguan": buletin strategi untuk usaha makanan dan
   minuman kecil, terbit tiap Senin. Satu sumber isi untuk beranda, arsip
   edisi, dan kalkulator. Semua harga dan angka adalah contoh purwarupa.
   ========================================================================== */

export const SITE = 'https://landing-tastycorner.vercel.app';

export const rp = (n) => `Rp ${Math.round(n).toLocaleString('id-ID')}`;
export const persen = (n) => `${Math.round(n)}%`;

// Menu yang "dibedah" di tiap edisi: baris bahan [nama, biaya per porsi]
export const EDISI = [
  {
    slug: '041-es-kopi-susu',
    nomor: '041',
    tanggal: 'Senin, 28 September 2026',
    judul: 'Es kopi susu Rp 18.000 itu untung berapa?',
    angka: ['48%', 'food cost es kopi susu seharga Rp 18.000 — kemasannya saja 14% dari HPP'],
    menu: { nama: 'Es kopi susu 250 ml', harga: 18000, bahan: [['Espresso 14 g', 3500], ['Susu segar 150 ml', 3000], ['Gula aren cair 20 ml', 700], ['Es batu 120 g', 300], ['Gelas, tutup, sedotan', 1200]] },
    promo: {
      judul: 'Promo "beli 2 gratis 1"',
      baris: [['Pendapatan 3 gelas', 36000], ['HPP 3 gelas', -26100]],
      kesimpulan: 'Tanpa promo, dua gelas menghasilkan margin Rp 18.600. Dengan promo, tiga gelas hanya menyisakan Rp 9.900 — margin per transaksi turun hampir separuh, padahal Anda menyajikan satu gelas lebih banyak.',
    },
    catatan: [
      'Banyak kedai menghitung HPP kopi dari biji dan susu saja. Gelas, tutup, sedotan, dan kantong menambah Rp 1.200–1.800 per cangkir — dan harganya naik lebih cepat daripada susu.',
      'Kalau food cost sudah di atas 45%, jangan buru-buru menaikkan harga. Cek dulu ukuran gelas: turun dari 250 ml ke 220 ml memangkas susu 20 ml tanpa banyak yang sadar.',
    ],
    pelajaran: 'Hitung kemasan sebagai bahan, bukan biaya lain-lain.',
  },
  {
    slug: '040-komisi-pesan-antar',
    nomor: '040',
    tanggal: 'Senin, 21 September 2026',
    judul: 'Komisi pesan-antar 20%: harga menu online harus naik berapa?',
    angka: ['Rp 27.500', 'harga online yang menjaga margin nasi ayam geprek tetap sama dengan harga di warung Rp 22.000'],
    menu: { nama: 'Nasi ayam geprek', harga: 22000, bahan: [['Ayam 1 potong (fillet 120 g)', 5200], ['Nasi 200 g', 1600], ['Tepung & minyak', 1300], ['Sambal bawang', 800], ['Lalapan & kemasan', 600]] },
    promo: {
      judul: 'Dijual di aplikasi dengan harga yang sama',
      baris: [['Harga menu', 22000], ['Komisi platform 20%', -4400], ['HPP', -9500]],
      kesimpulan: 'Margin turun dari Rp 12.500 menjadi Rp 8.100 per porsi. Untuk mempertahankan Rp 12.500, harga online perlu (12.500 + 9.500) ÷ 0,8 = Rp 27.500.',
    },
    catatan: [
      'Menaikkan harga online itu lazim; yang tidak lazim adalah menaikkannya tanpa menghitung. Pelanggan membandingkan dengan warung lain di aplikasi, bukan dengan harga di etalase Anda.',
      'Bila Rp 27.500 terasa terlalu mahal, pilih jalan tengah: naikkan ke Rp 25.000 dan kurangi porsi nasi online menjadi 180 g.',
    ],
    pelajaran: 'Hitung harga online dari margin yang ingin dijaga, bukan dari harga warung ditambah sedikit.',
  },
  {
    slug: '039-menu-laris',
    nomor: '039',
    tanggal: 'Senin, 14 September 2026',
    judul: 'Menu paling laris belum tentu yang menghidupi',
    angka: ['3 dari 4', 'kedai pembaca yang menu terlarisnya justru punya margin rupiah paling kecil'],
    menu: { nama: 'Mie goreng spesial', harga: 17000, bahan: [['Mie telur basah 150 g', 2400], ['Telur 1 butir', 2200], ['Ayam suwir 40 g', 2600], ['Sayur & bumbu', 1500], ['Minyak & kemasan', 1100]] },
    catatan: [
      'Mie goreng terjual 120 porsi seminggu dengan margin Rp 7.200 per porsi. Nasi goreng kampung hanya 60 porsi, tapi marginnya Rp 11.000. Selisihnya tidak terlihat bila hanya membaca jumlah pesanan.',
      'Jangan hapus menu laris. Letakkan menu bermargin tinggi di posisi pertama papan menu, dan beri foto yang lebih besar.',
    ],
    pelajaran: 'Urutkan menu menurut margin rupiah, lalu bandingkan dengan urutan menurut jumlah terjual.',
  },
  {
    slug: '038-harga-cabai',
    nomor: '038',
    tanggal: 'Senin, 7 September 2026',
    judul: 'Harga cabai naik 40%: menu mana yang paling kena?',
    angka: ['+Rp 1.100', 'tambahan HPP per porsi ayam penyet ketika harga cabai rawit naik 40%'],
    menu: { nama: 'Ayam penyet', harga: 20000, bahan: [['Ayam 1 potong', 5200], ['Nasi 200 g', 1600], ['Sambal penyet (cabai 45 g)', 3800], ['Tahu, tempe, lalapan', 1400], ['Minyak & kemasan', 900]] },
    catatan: [
      'Menu bersambal berat paling cepat terkikis margin saat cabai naik. Menu yang sambalnya terpisah — disajikan di mangkuk kecil — lebih mudah dikendalikan.',
      'Sebelum menaikkan harga, coba timbang sambal per porsi selama seminggu. Banyak dapur ternyata memberi 60 g, bukan 45 g yang dihitung.',
    ],
    pelajaran: 'Timbang bahan yang harganya paling liar, bukan semua bahan.',
  },
];

export const hppMenu = (m) => m.bahan.reduce((s, [, b]) => s + b, 0);
export const edisiBySlug = (s) => EDISI.find((e) => e.slug === s);

export const ISI = [
  ['Satu angka', 'Satu angka dari usaha makanan minggu ini, dan kenapa angka itu penting.'],
  ['Satu menu dibedah', 'HPP per baris, food cost, dan margin rupiah — dicetak seperti struk.'],
  ['Satu promo dihitung', 'Diskon, bundling, atau komisi aplikasi, dihitung sampai margin terakhir.'],
  ['Satu pelajaran', 'Satu kalimat yang bisa langsung dipakai Senin itu juga.'],
];

export const FAQ = [
  { t: 'Untuk usaha sebesar apa?', j: 'Untuk warung, kedai, dan kafe dengan satu sampai lima outlet. Contoh angkanya diambil dari skala itu, bukan restoran besar.' },
  { t: 'Apakah benar-benar gratis?', j: 'Ya. Struk Mingguan gratis dan bisa berhenti kapan saja lewat tautan di bawah setiap edisi.' },
  { t: 'Dari mana angka-angkanya?', j: 'Dari harga pasar kota besar pada minggu terbit dan dari kiriman pembaca yang mengizinkan angkanya dipakai tanpa nama. Di situs purwarupa ini, semua angka adalah contoh.' },
  { t: 'Bisakah menu saya dibedah?', j: 'Bisa. Balas surel edisi mana pun dengan daftar bahan dan harga jual; menu terpilih dibedah di edisi berikutnya tanpa menyebut nama usaha.' },
];
