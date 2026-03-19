# yaziciyusuf.com

Kişisel site — Blog, Bookmarks, Hakkımda.

## Stack

- **Astro** — Statik site oluşturucu
- **Decap CMS** — `/admin` adresinden tarayıcıyla içerik yönetimi
- **Coolify** — Otomatik deploy (GitHub push → build → deploy)

## İçerik Düzenleme

Tarayıcıdan `yaziciyusuf.com/admin` adresine git, GitHub ile login ol, blog yazısı/bookmark ekle veya düzenle. Otomatik commit + deploy.

Alternatif olarak markdown dosyalarını doğrudan düzenleyebilirsin:

- `src/content/blog/` — Blog yazıları
- `src/content/bookmarks/` — Bookmark'lar
- `src/content/about.md` — Hakkımda bilgileri

## Geliştirme

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
