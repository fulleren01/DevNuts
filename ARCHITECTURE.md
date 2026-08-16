# 🏗️ DevNuts Forum - Proje Mimarisi

## System Architecture (Sistem Mimarisi)

```
┌─────────────────────────────────────────────────────────────────┐
│                        Web Browser                               │
│                    (http://localhost:3000)                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
        ┌────────────────────────────────────────┐
        │         React Frontend                  │
        │  ┌──────────────────────────────────┐  │
        │  │ Pages:                           │  │
        │  │ - ThreadList                     │  │
        │  │ - ThreadDetail                   │  │
        │  │ - UserProfile                    │  │
        │  │ - Login/Register                 │  │
        │  └──────────────────────────────────┘  │
        │  ┌──────────────────────────────────┐  │
        │  │ Services:                        │  │
        │  │ - api.js (Axios HTTP client)     │  │
        │  └──────────────────────────────────┘  │
        └────────────────────┬───────────────────┘
                             │
                    HTTP Requests
                      (JSON)
                             │
                             ▼
        ┌────────────────────────────────────────┐
        │       Django REST API Backend           │
        │  ┌──────────────────────────────────┐  │
        │  │ Endpoints:                       │  │
        │  │ /api/users/                      │  │
        │  │ /api/threads/                    │  │
        │  │ /api/comments/                   │  │
        │  │ /api/categories/                 │  │
        │  └──────────────────────────────────┘  │
        │  ┌──────────────────────────────────┐  │
        │  │ Models:                          │  │
        │  │ - User, UserProfile              │  │
        │  │ - Category                       │  │
        │  │ - Thread, ThreadLike             │  │
        │  │ - Comment, CommentLike           │  │
        │  └──────────────────────────────────┘  │
        │  ┌──────────────────────────────────┐  │
        │  │ Views & Serializers              │  │
        │  │ - Authentication                 │  │
        │  │ - CRUD Operations                │  │
        │  └──────────────────────────────────┘  │
        └────────────────────┬───────────────────┘
                             │
                      Database Queries
                             │
                             ▼
        ┌────────────────────────────────────────┐
        │         SQLite/PostgreSQL               │
        │         Database                        │
        │  ┌──────────────────────────────────┐  │
        │  │ Tables:                          │  │
        │  │ - auth_user                      │  │
        │  │ - users_userprofile              │  │
        │  │ - threads_category               │  │
        │  │ - threads_thread                 │  │
        │  │ - threads_threadlike             │  │
        │  │ - comments_comment               │  │
        │  │ - comments_commentlike           │  │
        │  └──────────────────────────────────┘  │
        └────────────────────────────────────────┘
```

---

## Data Flow (Veri Akışı)

### Örnek: Thread Oluşturma Süreci

```
User Frontend'de          
   │
   ▼ "New Thread" butonuna tıkla
Form Göster
   │
   ▼ Kullanıcı form doldur
   │ (Başlık, Açıklama, Kategori)
   │
   ▼ POST /api/threads/ (Axios)
   │
   ├─ Headers:
   │  └─ Authorization: Bearer TOKEN
   │  └─ Content-Type: application/json
   │
   ├─ Body:
   │  └─ {
   │     "title": "Python Öğreniyorum",
   │     "description": "...",
   │     "category": 1
   │    }
   │
   ▼ Django Backend
   │
   ├─ Authentication Check
   │ └─ Token geçerli mi?
   │
   ├─ Validation
   │ └─ Veri formatı doğru mu?
   │
   ├─ Create Thread (Database)
   │ └─ INSERT INTO threads_thread ...
   │
   ▼ Response JSON
   │
   ├─ Status: 201 Created
   │ └─ {
   │    "id": 42,
   │    "title": "Python Öğreniyorum",
   │    "author": "username",
   │    "created_at": "2024-08-16T15:30:00Z",
   │    ...
   │   }
   │
   ▼ Frontend Güncelle
   │
   ├─ State güncelle
   ├─ ThreadList'i yenile
   ├─ Success mesajı göster
   └─ Başarı 🎉
```

---

## Folder Structure (Dosya Yapısı)

```
DevNuts/
│
├── .gitignore                 # Git ignored dosyalar
├── README.md                  # Ana dokümantasyon
├── SETUP.md                   # Kurulum rehberi
├── QUICKSTART.md              # Hızlı başlangıç (BU DOSYA)
├── CONTRIBUTING.md            # Katkıda bulunma
├── GITHUB_SETUP.md            # GitHub kurulum
├── CHECKLIST.md               # Kontrol listesi
│
├── backend/                   # Django Backend
│   ├── requirements.txt       # Python paketleri
│   ├── settings.py            # Django config
│   ├── .env.example           # Environment template
│   ├── README.md              # Backend rehberi
│   │
│   ├── users_models.py        # User modelleri
│   ├── users_views.py         # User viewları (oluşturulacak)
│   ├── users_serializers.py   # User serializers (oluşturulacak)
│   ├── users_urls.py          # User urls (oluşturulacak)
│   │
│   ├── threads_models.py      # Thread modelleri
│   ├── threads_views.py       # Thread viewları (oluşturulacak)
│   ├── threads_serializers.py # Thread serializers (oluşturulacak)
│   ├── threads_urls.py        # Thread urls (oluşturulacak)
│   │
│   ├── comments_models.py     # Comment modelleri
│   ├── comments_views.py      # Comment viewları (oluşturulacak)
│   ├── comments_serializers.py# Comment serializers (oluşturulacak)
│   ├── comments_urls.py       # Comment urls (oluşturulacak)
│   │
│   └── manage.py              # Django CLI tool (oluşturulacak)
│
├── frontend/                  # React Frontend
│   ├── package.json           # Node paketleri
│   ├── .env.example           # Environment template
│   ├── README.md              # Frontend rehberi
│   │
│   ├── src/                   # Source code
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── ThreadCard.js
│   │   │   └── CommentList.js
│   │   │
│   │   ├── pages/             # Page components
│   │   │   ├── HomePage.js
│   │   │   ├── ThreadDetail.js
│   │   │   ├── UserProfile.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   │
│   │   ├── services/          # API & utilities
│   │   │   ├── api.js         # Axios config
│   │   │   └── auth.js        # Auth utils
│   │   │
│   │   ├── context/           # Global state (opsiyonel)
│   │   │   └── AuthContext.js
│   │   │
│   │   ├── styles/            # CSS dosyaları
│   │   │   ├── App.css
│   │   │   ├── components.css
│   │   │   └── pages.css
│   │   │
│   │   ├── App.js             # Main component
│   │   └── index.js           # Entry point
│   │
│   ├── public/                # Static files
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   └── build/                 # Production build (generated)
│
└── .github/                   # GitHub spesifik (opsiyonel)
    └── workflows/             # CI/CD (opsiyonel)
```

---

## Technology Stack Details (Teknoloji Detayları)

### Backend Stack
```
Django 4.2
├── django-rest-framework    # API framework
├── django-cors-headers      # CORS support
├── python-decouple          # Environment variables
├── psycopg2                 # PostgreSQL driver
└── Pillow                   # Image processing
```

### Frontend Stack
```
React 18.2
├── react-router-dom         # Routing
├── axios                    # HTTP client
├── react-query              # Data fetching
└── (CSS - vanilla)
```

### Database
```
Development: SQLite3 (built-in)
Production:  PostgreSQL (recommended)
```

---

## API Structure (API Yapısı)

### Authentication Flow

```
Register                     Login
   │                           │
   ▼                           ▼
POST /api/users/register/  POST /api/users/login/
   │                           │
   ├─ username                 ├─ username
   ├─ email                    ├─ password
   ├─ password                 │
   └─ password_confirm         ▼
                           ✓ Credentials check
   ▼                           │
✓ Validate                      ▼
   │                           Return Token
   ▼                           │
Create User                     │
   │                           │
   ▼                           │
Return Auth Token <────────────┘
   │
   ▼
Store Token (localStorage)
   │
   ▼
API requests with Authorization header
   │
   └─ Authorization: Bearer eyJhbGc...
```

### Thread Endpoints

```
GET /api/threads/                    # List all threads
POST /api/threads/                   # Create new thread

GET /api/threads/{id}/               # Get thread detail
PUT /api/threads/{id}/               # Update thread
DELETE /api/threads/{id}/            # Delete thread

POST /api/threads/{id}/like/         # Like thread
GET /api/threads/{id}/comments/      # Get thread comments
```

### Comment Endpoints

```
GET /api/comments/                   # List comments
POST /api/comments/                  # Create comment

GET /api/comments/{id}/              # Get comment detail
PUT /api/comments/{id}/              # Update comment
DELETE /api/comments/{id}/           # Delete comment

POST /api/comments/{id}/like/        # Like comment
POST /api/comments/{id}/mark-solution/ # Mark as solution
```

---

## Development Workflow

```
┌─ Day 1 ─────────────────────────────┐
│                                      │
│  Backend Dev          Frontend Dev   │
│  ┌──────────────┐    ┌──────────────┐
│  │ Django setup │    │ React setup  │
│  │ Migrations   │    │ Components   │
│  └──────────────┘    └──────────────┘
│
└──────────────────────────────────────┘

         ▼ Daily Standup

┌─ Days 2-7 ──────────────────────────┐
│                                      │
│  Backend                Frontend      │
│  ├─ API Endpoints     ├─ Components  │
│  ├─ Database Schema   ├─ Pages       │
│  ├─ Authentication    ├─ Forms       │
│  └─ Tests             └─ API calls   │
│                                      │
│  ⬌ Pull Requests ⬌                   │
│  (Code Review & Feedback)            │
│                                      │
└──────────────────────────────────────┘

         ▼ Weekly Review

┌─ Weekend ───────────────────────────┐
│                                      │
│  ✓ Merge to Main                    │
│  ✓ Test Full Integration            │
│  ✓ Document Changes                 │
│  ✓ Plan Next Week                   │
│                                      │
└──────────────────────────────────────┘
```

---

## Git Workflow Model

```
main branch (stable)
    ▲
    │
    │ (Pull Request)
    │
feature/user-auth ◄─── feature/forum-threads
    │                       │
    ├─ commit 1             ├─ commit 1
    ├─ commit 2             ├─ commit 2
    └─ commit 3             └─ commit 3
    
    Backend Dev         Frontend Dev
    (Solo branch)       (Solo branch)
```

---

## Security Considerations

```
Frontend (React)
├─ Store JWT tokens securely (localStorage/cookie)
├─ Validate user input
├─ HTTPS only in production
└─ No secrets in code

Backend (Django)
├─ Validate all input
├─ Hash passwords (Django built-in)
├─ Use CORS properly
├─ Rate limiting
├─ SQL injection prevention (ORM)
└─ CSRF protection
```

---

## Performance Optimization Tips

```
Frontend:
├─ Lazy load components
├─ Code splitting
├─ Minify CSS/JS
└─ Image optimization

Backend:
├─ Database indexing
├─ Pagination
├─ Caching (Redis)
├─ Query optimization
└─ Rate limiting
```

---

## Monitoring & Debugging

```
Backend Debugging:
├─ Django Debug Toolbar
├─ Print statements & logging
├─ Test via API (Postman/Insomnia)
└─ Database shell: python manage.py shell

Frontend Debugging:
├─ Browser DevTools (F12)
├─ React DevTools extension
├─ Network tab (Requests/Responses)
├─ Console errors
└─ Redux DevTools (if using Redux)
```

---

## Common Issues Matrix

| Problem | Cause | Solution |
|---------|-------|----------|
| CORS Error | Backend not allowing frontend origin | Check CORS_ALLOWED_ORIGINS in settings.py |
| 404 Not Found | Wrong API endpoint | Check backend URL structure |
| 401 Unauthorized | No token or invalid token | Login again, check token storage |
| Database locked | SQLite busy | Restart server, use PostgreSQL |
| Port already in use | Port 8000/3000 occupied | Use different port: runserver 8001 |
| Module not found | Missing dependency | pip install / npm install |

---

## Next Steps Checklist

- [ ] GitHub repository oluştur
- [ ] Projeyi git'e commit et
- [ ] Backend: Django projesini initialize et
- [ ] Frontend: React projesini initialize et  
- [ ] İlk API endpoint'i implement et
- [ ] İlk React component'i oluştur
- [ ] Frontend-Backend entegrasyonu test et
- [ ] Arkadaşınla kodu review et

---

## 🎯 Başarı Kriterleri (v0.1)

- ✅ GitHub repository canlı
- ✅ Django başlatılmış ve çalışıyor
- ✅ React başlatılmış ve çalışıyor
- ✅ Database modelleri oluşturulmuş
- ✅ İlk API endpoint'leri çalışıyor
- ✅ Frontend API'yi çağırabiliyor
- ✅ Tüm dokumentasyon yazılmış

---

**DevNuts Forum Mimarisi v1.0**  
*Forum Platform for Developers*  
🚀 Happy Coding!
