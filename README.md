# Tasty Corner — Struk Mingguan untuk Usaha Makanan

Struk Mingguan dari Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe — satu menu dibedah sampai rupiah terakhir. Plus kalkulator food cost.

**Demo live:** https://landing-tastycorner.vercel.app

![Tangkapan layar Tasty Corner](public/og.jpg)

> Template landing page untuk bisnis fiktif. Formulir di dalamnya hanya demo dan tidak mengirim data.

## Konsep

Bahasa rupa **Struk** belanja: kertas putih, huruf rata lebar, garis sobek putus-putus, dan angka yang berbaris rapi. Lugas dan cepat dibaca.

## Halaman

- `/` — Struk Mingguan: buletin angka F&B tiap Senin, dengan cuplikan edisi terbaru
- `/edisi` — arsip edisi
- `/edisi/[slug]` — satu menu dibedah sampai rupiah terakhir
- `/kalkulator` — kalkulator food cost interaktif

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Font: Bricolage Grotesque, IBM Plex Mono, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 17 template landing page di [PortalLanding](https://portal-landing-seven.vercel.app). Dibuat oleh [PintuWeb](https://pintuweb.com), jasa pembuatan website.
