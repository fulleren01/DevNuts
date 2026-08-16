# Developer Forum Platform

Yazılımcıların bir araya gelerek tartışabildiği, bilgi paylaşabildiği ve birbirlerinden öğrenebildiği bir forum platformu.

## 📋 Proje Yapısı

```
├── backend/          # Django REST API
│   ├── forum/
│   ├── users/
│   └── requirements.txt
└── frontend/         # React UI
    ├── src/
    ├── public/
    └── package.json
```

## 🛠️ Teknolojiler

### Backend
- **Django** - Web Framework
- **Django REST Framework** - API
- **PostgreSQL** - Database
- **Celery** - Task Queue (opsiyonel)

### Frontend
- **React** - UI Library
- **Axios** - HTTP Client
- **React Router** - Routing

## 🚀 Kurulum

### Backend Kurulumu

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Kurulumu

```bash
cd frontend
npm install
npm start
```

## 📝 Özellikler

- [ ] Kullanıcı Kaydı ve Girişi
- [ ] Thread/Başlık Oluşturma
- [ ] Yorum Yapma
- [ ] Beğeni Sistemi
- [ ] Kategori Yönetimi
- [ ] Arama Fonksiyonu
- [ ] Kullanıcı Profili
- [ ] Moderasyon Araçları

## 👥 Katkıda Bulunanlar

- Backend Developer: (Ad)
- Frontend Developer: (Ad)

## 📄 Lisans

MIT License

## 💬 İletişim

Sorular için Issues açabilirsiniz.
