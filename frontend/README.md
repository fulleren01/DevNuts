# Frontend - React UI

Forum platformunun React ile yazılmış frontend uygulaması.

## 🚀 Başlangıç

### Gereksinimler
- Node.js 14+ ve npm (veya yarn)

### Kurulum Adımları

1. **Bağımlılıkları Yükle:**
```bash
npm install
```

2. **.env Dosyası Oluştur:**
```bash
cp .env.example .env
```

3. **Geliştirme Sunucusu Başlat:**
```bash
npm start
```

Uygulama şu adresde açılacak: `http://localhost:3000`

## 📁 Proje Yapısı

```
frontend/
├── public/           # Statik dosyalar
├── src/
│   ├── components/   # Reusable bileşenler
│   ├── pages/        # Sayfalar
│   ├── services/     # API çağrıları
│   ├── context/      # Global state
│   ├── styles/       # CSS dosyaları
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📦 Başlıca Bileşenler

### Sayfalar
- **HomePage** - Anasayfa (Thread listesi)
- **ThreadDetail** - Thread detay sayfası
- **UserProfile** - Kullanıcı profili
- **Login** - Giriş sayfası
- **Register** - Kayıt sayfası

### Bileşenler
- **Header** - Üst navigasyon
- **ThreadCard** - Thread kartı
- **CommentList** - Yorum listesi
- **Footer** - Alt bilgi

## 🔌 API Entegrasyonu

Tüm API çağrıları `src/services/api.js` içinde tanımlanır:

```javascript
// Örnek API çağrısı
import { fetchThreads } from './services/api';

const threads = await fetchThreads();
```

## 🎨 Stil

CSS dosyaları `src/styles/` klasöründe saklanır. BEM metodolojisini kullanıyoruz.

## 📚 Kaynaklar

- [React Dokümentasyonu](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## 🚀 Build

Production build oluşturmak için:

```bash
npm run build
```

Bu, optimized dosyaları `build/` klasörüne yerleştirir.

## 📝 Konvansiyon

- Component isimleri PascalCase (MyComponent.js)
- Dosya adları kebab-case (my-component.js)
- Stil dosyaları component ile aynı klasörde
