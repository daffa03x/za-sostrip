# SSR → CSR (situs statis murni) — Design

Tanggal: 2026-06-29

## Tujuan
Mengubah aplikasi Astro dari SSR (`output: 'server'` + adapter Node) menjadi
**situs statis murni (CSR)** agar bisa di-deploy ke Vercel sebagai static tanpa
serverless dan tanpa error 404. Semua data di-fetch di browser.

## Keputusan
- Render: **Vanilla JS** (tanpa framework). Komponen `.astro` tetap dipakai
  sebagai kerangka + placeholder; `<script>` per halaman fetch & isi DOM.
- Routing dinamis: **query param** (`?slug=`), bukan URL bersih.

## Perubahan

### Build config
- `astro.config.mjs`: `output: 'static'`, hapus adapter `@astrojs/node`.
- `package.json`: hapus dependency `@astrojs/node`.

### Routing dinamis
- `events/[slug].astro` → `events/detail.astro` (baca `?slug=`).
- `checkout/[slug].astro` → `checkout/detail.astro` (baca `?slug=`).
- Semua link internal:
  - `/events/<slug>` → `/events/detail?slug=<slug>`
  - `/checkout/<slug>` → `/checkout/detail?slug=<slug>`
  - Lokasi link: `EventCard`, `EventListCard`, `EventStickyCTA`, tombol back,
    `EventRecommendations`, dll.

### Fetch pindah ke browser (per halaman)
- Home: `EventRecommendations`, `EventListPreview` → render kartu via JS,
  ada state loading & kosong.
- `/events`: baca `search`/`page` dari `location.search`, render daftar via JS,
  next/prev update query string.
- `/events/detail`: fetch detail by slug, isi Hero/Summary/Tickets/dll; gagal →
  redirect `/events`.
- `/checkout/detail`: fetch detail + payment methods, isi komponen; skrip submit
  yang sudah ada tetap dipakai.
- `/payment/*`: tidak diubah (sudah CSR).

## Konsekuensi
1. **CORS**: backend `PUBLIC_BACKEND_URL` wajib mengizinkan origin domain Vercel.
2. **SEO**: konten tidak ada di HTML awal (di-render setelah JS).
3. **Loading state**: halaman kosong/skeleton sebentar sebelum data muncul.
4. `PUBLIC_BACKEND_URL` tetap harus di-set di Vercel sebelum build.

## Non-tujuan
- Tidak menambah framework (Preact/React).
- Tidak mengubah halaman payment.
- Tidak mengubah backend (CORS dikonfigurasi terpisah oleh user).
