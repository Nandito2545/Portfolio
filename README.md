# Website Portofolio — Nandito Maulana Yedidkar

Website portofolio satu halaman (*single-page*) modern, responsif, dan interaktif yang dibangun berdasarkan materi portofolio Nandito Maulana Yedidkar (Web & Game Developer).

---

## 🌟 Fitur Utama Website

1. **Aset & Tipografi Neo-Brutalist & Editorial Modern**:
   - Judul raksasa bergaya editorial `portfolio` dan `thank you` dengan lapisan tanda tangan kaligrafi merah khas (*handwritten signature*) persis seperti pada dokumen portofolio asli.
   - Menggunakan kombinasi font Google Fonts: **Space Grotesk** (Heading), **Plus Jakarta Sans** (Body text yang sangat terbaca), dan **Caveat** (Tanda tangan artistik).

2. **Tema Gelap & Terang (Dark / Light Mode)**:
   - Dilengkapi tombol toggle instan di navbar dengan penyimpanan preferensi otomatis di `localStorage`.

3. **Efek Suara Mikro-Interaksi (Web Audio API)**:
   - Sintesis audio bawaan browser saat hover tombol atau klik tombol aksi (dapat diaktifkan/dibisukan dengan tombol sound di navbar). Tidak memerlukan file audio eksternal.

4. **Background Partikel Interaktif (HTML5 Canvas)**:
   - Partikel ambient mengambang yang halus dan menyesuaikan otomatis dengan mode warna.

5. **Struktur Konten Lengkap**:
   - **Hero Section**: Tagline peran, status ketersediaan kerja, lokasi, tombol aksi, dan strip kontak cepat.
   - **01. Introduction (Tentang Saya)**: Profil Nandito, mahasiswa S1 Sistem Informasi Universitas Telkom Jakarta, statistik pencapaian, dan kartu foto profil.
   - **02. My Education (Pendidikan)**: Kartu linimasa interaktif (Universitas Telkom Jakarta, SMKN 2 Kraksaan - RPL, SMPN 1 Kraksaan).
   - **03. Personal Skills (Keahlian)**: Indikator meter animasi untuk Full-Stack Web Development (Laravel, PHP, MySQL, JS) dan Game Development (Android, Gameplay Logic, 3D Concept Ideation).
   - **04. Work Experience (Pengalaman Kerja)**:
     - Web Developer di **mugiyanto.id** (Web Profile Wakil Menteri HAM RI).
     - Web Developer di **galeribukujakarta.com** (Media Literasi & Katalog Buku Jakarta).
     - Game Developer Magang di **PT. Khailabs** (2 Game Android Offline & Presentasi Desain 3D).
   - **05. Project Portfolio (Karya Unggulan)**:
     - Filter kategori instan (*Semua*, *Web Development*, *Game Development*).
     - **Modal Detail Proyek**: Klik kartu atau tombol "Lihat Detail" untuk memunculkan popup spesifikasi lengkap fitur & teknologi.
   - **06. Contact & Thank You**:
     - Desain penutup "thank you" dengan signature overlay merah.
     - Kartu kontak langsung: Email, Telepon/WA, Lokasi, Kampus.
     - Tombol **Salin Email** 1-klik dengan notifikasi Toast interaktif.
     - Formulir pesan cepat dengan tombol **Kirim via WhatsApp Langsung** (otomatis memformat teks rapi dan membuka wa.me).

---

## 🖼️ Cara Menaruh / Mengganti Gambar Anda

Semua gambar disimpan di dalam folder `assets/`. Anda cukup menaruh file gambar Anda dengan nama file berikut:

| Nama File | Keterangan | Letak di Website |
| :--- | :--- | :--- |
| `assets/profile.jpg` | Foto wajah / profil Anda | Kartu perkenalan di section *Introduction* |
| `assets/mugiyanto.jpg` | Screenshot website Mugiyanto.id | Kartu proyek & modal *Web Profile WAMEN HAM* |
| `assets/galeri-buku.jpg` | Screenshot website Galeri Buku Jakarta | Kartu proyek & modal *Galeri Buku Jakarta* |
| `assets/earth-cleanup.jpg` | Screenshot game Earth Clean Up | Kartu proyek & modal *Earth Clean Up Android Game* |
| `assets/workspace.jpg` | Foto setup laptop / kerja | Bagian showcase di section *Personal Skills* |

> **Catatan:** Sistem telah dilengkapi *graceful CSS fallback*. Jika gambar belum ditaruh atau sedang dimuat, tampilan website tetap rapi dengan ilustrasi dan warna gradien profesional tanpa rusak.

---

## 🚀 Cara Menjalankan Website

### Opsi 1: Buka Langsung (Tanpa Server)
Cukup klik dua kali (*double click*) file `index.html` untuk langsung membukanya di browser apa saja (Google Chrome, Edge, Firefox, Safari).

### Opsi 2: Jalankan dengan Local Server
Jika ingin menjalankan dengan web server lokal:

```bash
# Menggunakan Node.js npx serve
npx serve .

# Atau menggunakan Python
python -m http.server 3000
```
Buka browser pada alamat `http://localhost:3000`.
