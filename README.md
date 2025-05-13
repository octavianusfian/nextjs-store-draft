
# 🛍️ PixelNest - E-Commerce for Digital Assets

**PixelNest** adalah platform e-commerce modern yang memungkinkan pengguna menjual dan membeli produk digital seperti e-book, desain, template, dan lainnya. Dibangun dengan teknologi terbaru untuk performa, keamanan, dan kemudahan penggunaan.

![PixelNest Screenshot](./bc7d0d35-44a2-492e-bcb3-db8152548ca3.png)

🌐 [Lihat Demo](https://nextjs-store-draft-black.vercel.app/)

---

## ✨ Fitur Utama

- 🔐 Login & Register (Auth by Clerk)
- 🛒 Katalog Produk Digital
- ❤️ Favorite Produk
- 📝 Review Produk
- 📦 Riwayat Pesanan
- 📄 Halaman Detail Produk
- 💳 Pembayaran Terintegrasi Stripe
- 🧑‍💼 Dashboard Admin
- 🔍 Filter & Pagination Produk
- ℹ️ Halaman Tentang

---

## 🧰 Teknologi yang Digunakan

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), TypeScript
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: PostgreSQL via [Prisma](https://www.prisma.io/)
- **Storage**: [Supabase](https://supabase.io/)
- **Payments**: [Stripe](https://stripe.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Instalasi Lokal (Development)

```bash
# 1. Clone repo
git clone <repository-url>
cd pixelnest

# 2. Install dependencies
npm install

# 3. Tambahkan file .env.local dan isi variabel berikut:
# (Lihat bagian Environment Variables di bawah)

# 4. Jalankan development server
npm run dev
```

---

## 🔐 Environment Variables

Tambahkan variabel berikut ke file `.env.local`:

```env
DB_PASSWORD=
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ADMIN_USER_ID=
SUPABASE_URL=
SUPABASE_KEY=
NEXT_PUBLIC_WEBSITE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

> ⚠️ Nilai variabel disesuaikan dengan konfigurasi kamu. Jangan commit file `.env.local`.

---

## 📁 Struktur Direktori (Singkat)

```
/
├─ app/                  # Routing dan halaman utama (Next.js App Router)
├─ components/           # Komponen UI reusable
├─ lib/                  # Utility dan konfigurasi helper (Clerk, Prisma, Stripe)
├─ public/               # Aset publik (logo, ikon, dsb)
├─ styles/               # File Tailwind dan globals
├─ prisma/               # Skema database
├─ middleware.ts         # Proteksi route
├─ .env.local            # Konfigurasi environment
```

---

## 👤 Author

**Octavianus Fian**  
🔗 [Website](https://nextjs-store-draft-black.vercel.app/)

---

## ⚖️ Lisensi

Lisensi penggunaan proyek ini mengikuti [MIT License](https://choosealicense.com/licenses/mit/).

---

> Jika kamu suka project ini, silakan bintangi repo-nya ⭐ dan fork untuk pengembangan pribadi!
