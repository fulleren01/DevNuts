# 📚 Proje Kurulum ve Kullanım Rehberi

## 🎯 Proje Hakkında

**DevNuts Forum** - Yazılımcıların bir araya gelip tartışabildikleri, bilgi paylaşabildikleri ve birbirlerinden öğrenebildiği bir forum platformu.

### Teknoloji Stack
- **Backend**: Django + Django REST Framework
- **Frontend**: React
- **Database**: SQLite (geliştirme), PostgreSQL (üretim)
- **Version Control**: Git + GitHub

---

## 📁 Proje Yapısı

```
DevNuts/
├── backend/              # Django REST API
│   ├── settings.py       # Django ayarları
│   ├── users_models.py   # Kullanıcı modelleri
│   ├── threads_models.py # Forum başlıkları modelleri
│   ├── comments_models.py# Yorum modelleri
│   ├── requirements.txt   # Python paketleri
│   ├── .env.example      # Environment değişkenleri şablonu
│   └── README.md         # Backend dokumentasyonu
│
├── frontend/             # React uygulaması
│   ├── src/
│   │   ├── components/   # Reusable React bileşenleri
│   │   ├── pages/        # Sayfa bileşenleri
│   │   ├── services/     # API çağrıları
│   │   ├── App.js        # Ana bileşen
│   │   └── index.js      # Entry point
│   ├── package.json      # Node.js paketleri
│   ├── .env.example      # Environment değişkenleri
│   └── README.md         # Frontend dokumentasyonu
│
├── README.md             # Ana proje dokumentasyonu
├── CONTRIBUTING.md       # Katkıda bulunma rehberi
├── GITHUB_SETUP.md       # GitHub kurulum rehberi
├── .gitignore            # Git ignored dosyalar
└── LICENSE               # Lisans

```

---

## 🚀 Hızlı Başlangıç

### Seçenek 1: Backend Geliştirme (Django)

```bash
# 1. Backend klasöründe git
cd backend

# 2. Virtual environment oluştur
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Paketleri yükle
pip install -r requirements.txt

# 4. .env dosyası oluştur
cp .env.example .env

# 5. Veritabanını hazırla
python manage.py migrate
python manage.py createsuperuser

# 6. Sunucuyu başlat
python manage.py runserver
```

**API**: http://localhost:8000
**Admin Panel**: http://localhost:8000/admin

### Seçenek 2: Frontend Geliştirme (React)

```bash
# 1. Frontend klasöründe git
cd frontend

# 2. Paketleri yükle
npm install

# 3. .env dosyası oluştur
cp .env.example .env

# 4. Geliştirme sunucusunu başlat
npm start
```

**Uygulama**: http://localhost:3000

### Seçenek 3: Her İkisini Beraber Çalıştır

**Terminal 1** - Backend:
```bash
cd backend
source venv/bin/activate
python manage.py runserver
```

**Terminal 2** - Frontend:
```bash
cd frontend
npm start
```

---

## 🗄️ Veritabanı Modelleri

### Kullanıcı (User)
```
- id (Primary Key)
- username (Unique)
- email (Unique)
- password (Hashed)
- first_name
- last_name
- created_at
- updated_at
```

### UserProfile (OneToOne)
```
- user (FK)
- bio
- avatar
- github_url
- created_at
- updated_at
```

### Category
```
- id
- name (Unique)
- description
- slug (Unique)
- created_at
```

### Thread
```
- id
- title
- description
- category (FK)
- author (FK)
- views_count
- is_pinned
- is_locked
- created_at
- updated_at
```

### Comment
```
- id
- thread (FK)
- author (FK)
- content
- is_solution
- created_at
- updated_at
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/users/register/` - Kayıt
- `POST /api/users/login/` - Giriş
- `POST /api/token/` - Token al
- `POST /api/token/refresh/` - Token yenile

### Users
- `GET /api/users/profile/` - Profil bilgisi
- `PUT /api/users/profile/` - Profili güncelle
- `GET /api/users/{id}/` - Kullanıcı detayı

### Categories
- `GET /api/categories/` - Tüm kategoriler
- `POST /api/categories/` - Kategori oluştur
- `GET /api/categories/{id}/` - Kategori detayı

### Threads
- `GET /api/threads/` - Tüm başlıkları listele
- `POST /api/threads/` - Yeni thread oluştur
- `GET /api/threads/{id}/` - Thread detayı
- `PUT /api/threads/{id}/` - Thread güncelle
- `DELETE /api/threads/{id}/` - Thread sil
- `POST /api/threads/{id}/like/` - Thread beğen

### Comments
- `GET /api/comments/` - Thread'in yorumları
- `POST /api/comments/` - Yorum yaz
- `PUT /api/comments/{id}/` - Yorum güncelle
- `DELETE /api/comments/{id}/` - Yorum sil
- `POST /api/comments/{id}/like/` - Yorum beğen

---

## 🔧 Environment Değişkenleri

### Backend (.env)
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
CORS_ALLOWED_ORIGINS=http://localhost:3000

# Database (SQLite)
# Veya PostgreSQL için:
# DB_NAME=forum_db
# DB_USER=postgres
# DB_PASSWORD=your_password
# DB_HOST=localhost
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_API_TIMEOUT=10000
```

---

## 📋 Yapılacaklar Listesi

### Phase 1: Temel Yapı (v0.1)
- [x] Proje yapısı oluştur
- [ ] Django projesini initialize et
- [ ] React projesini initialize et
- [ ] Veritabanı modellerini oluştur
- [ ] API endpoints oluştur

### Phase 2: Kimlik Doğrulama (v0.2)
- [ ] User kaydı implement et
- [ ] User girişi implement et
- [ ] Token authentication
- [ ] Password reset

### Phase 3: Forum Özellikleri (v0.3)
- [ ] Thread oluşturma
- [ ] Thread detayı
- [ ] Yorum sistemi
- [ ] Beğeni sistemi

### Phase 4: Gelişmiş Özellikler (v0.4)
- [ ] Arama fonksiyonu
- [ ] Filtreleme
- [ ] Sorting
- [ ] Pagination

### Phase 5: Frontend UI (v0.5)
- [ ] Responsive tasarım
- [ ] Dark mode
- [ ] Kullanıcı profili
- [ ] Admin panel

---

## 🔑 Önemli Komutlar

### Django Komutları
```bash
# Migrations oluştur
python manage.py makemigrations

# Migrations uygula
python manage.py migrate

# Admin kullanıcı oluştur
python manage.py createsuperuser

# Shell aç
python manage.py shell

# Sunucuyu başlat
python manage.py runserver

# Tests çalıştır
python manage.py test
```

### React Komutları
```bash
# Geliştirme sunucusu
npm start

# Production build
npm run build

# Tests çalıştır
npm test

# Paket yükle
npm install paket-adı
```

### Git Komutları
```bash
# Klonla
git clone https://github.com/username/DevNuts.git

# Branch oluştur
git checkout -b feature/ozellik-adi

# Commit et
git commit -m "feat: ozellik eklendi"

# Push et
git push origin feature/ozellik-adi
```

---

## 🐛 Sorun Giderme

### "ModuleNotFoundError: No module named 'django'"
```bash
# Virtual environment'i aktif et
source venv/bin/activate  # Windows: venv\Scripts\activate
# Paketleri yükle
pip install -r requirements.txt
```

### "CORS Error"
- Backend settings.py'de CORS_ALLOWED_ORIGINS kontrol et
- Frontend .env dosyasında API URL kontrol et

### "Cannot find module 'react'"
```bash
cd frontend
npm install
```

### "Port already in use"
```bash
# Django (8000 portunu değiştir)
python manage.py runserver 8001

# React (3000 portunu değiştir)
PORT=3001 npm start
```

---

## 📚 Faydalı Kaynaklar

- [Django Resmi Dokumentasyonu](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Resmi Dokumentasyonu](https://react.dev/)
- [Git Rehberi](https://git-scm.com/book/tr/v2)
- [GitHub Guides](https://guides.github.com/)

---

## 👥 Ekip

- **Backend Developer**: [Adınız]
- **Frontend Developer**: [Arkadaşınızın Adı]

---

## 📝 Lisans

Bu proje MIT License altında lisanslanmıştır.

---

## 💬 Sorular?

- Issues sekmesinde bir soru açın
- Discussions başlatın
- Pull Request gönderin

**Happy Coding! 🚀**
