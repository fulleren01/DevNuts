# Backend - Django REST API

Forum platformunun backend API'si.

## 🚀 Başlangıç

### Gereksinimler
- Python 3.9+
- pip

### Kurulum Adımları

1. **Virtual Environment Oluştur:**
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. **Bağımlılıkları Yükle:**
```bash
pip install -r requirements.txt
```

3. **.env Dosyası Oluştur:**
```bash
cp .env.example .env
```

4. **Veritabanı Oluştur:**
```bash
python manage.py migrate
```

5. **Admin Kullanıcı Oluştur:**
```bash
python manage.py createsuperuser
```

6. **Geliştirme Sunucusu Başlat:**
```bash
python manage.py runserver
```

API şu adresde çalışacak: `http://localhost:8000`
Admin paneli: `http://localhost:8000/admin`

## 📁 Proje Yapısı

```
backend/
├── config/           # Django ayarları
├── users/            # Kullanıcı uygulaması
├── threads/          # Thread/Başlık uygulaması
├── comments/         # Yorum uygulaması
├── manage.py
├── requirements.txt
└── README.md
```

## 🔌 API Endpoints

### Kullanıcılar
- `POST /api/users/register/` - Yeni kullanıcı kaydı
- `POST /api/users/login/` - Giriş
- `GET /api/users/profile/` - Profil bilgisi
- `PUT /api/users/profile/` - Profili güncelle

### Thread'ler (Başlıklar)
- `GET /api/threads/` - Tüm thread'leri listele
- `POST /api/threads/` - Yeni thread oluştur
- `GET /api/threads/{id}/` - Thread detayı
- `PUT /api/threads/{id}/` - Thread'i güncelle
- `DELETE /api/threads/{id}/` - Thread'i sil

### Yorumlar
- `GET /api/comments/` - Tüm yorumları listele
- `POST /api/comments/` - Yeni yorum yaz
- `GET /api/comments/{id}/` - Yorum detayı
- `PUT /api/comments/{id}/` - Yorumu güncelle
- `DELETE /api/comments/{id}/` - Yorumu sil

## 📚 Kaynaklar

- [Django Dokümentasyonu](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL Kurulum](https://www.postgresql.org/download/)

## 🐛 Sorun Giderme

### CORS Hatası
`.env` dosyasında `CORS_ALLOWED_ORIGINS` ayarını kontrol edin.

### Veritabanı Hatası
```bash
python manage.py migrate
python manage.py makemigrations
```

## 📝 Not
Geliştirme aşamasında SQLite kullanıyoruz. Üretim için PostgreSQL'e geçin.
