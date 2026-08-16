# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istiyorsanız, lütfen aşağıdaki adımları izleyin.

## 🔀 GitHub Üzerinde Çalışma

### 1. Repository'yi Fork Et

GitHub'da projenin sayfasına gidip "Fork" butonuna tıklayın.

### 2. Forklanan Repository'yi Klonla

```bash
git clone https://github.com/YOUR_USERNAME/DevNuts.git
cd DevNuts
```

### 3. Upstream Repository'i Ekle

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/DevNuts.git
```

### 4. Yeni Branch Oluştur

```bash
git checkout -b feature/ozellik-adi
# veya
git checkout -b bugfix/bug-adi
```

Branch adlandırma kuralları:
- `feature/` - Yeni özellik
- `bugfix/` - Hata düzeltme
- `docs/` - Dokümantasyon
- `refactor/` - Kod yeniden yapılandırması

### 5. Değişiklik Yap ve Commit Et

```bash
git add .
git commit -m "Açıklayıcı commit mesajı"
```

Commit mesajı kuralları:
- İlk kelime türü: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`
- Türkçe veya İngilizce (tutarlı olun)
- Örnek: `feat: kullanıcı profil sayfası eklendi`

### 6. Değişiklikleri Push Et

```bash
git push origin feature/ozellik-adi
```

### 7. Pull Request Oluştur

GitHub'da "Compare & pull request" butonuna tıklayın.

## ✅ Pull Request Kontrol Listesi

- [ ] Kodunuz çalışıyor mu?
- [ ] Tests yazıldı mı?
- [ ] README güncellenmiş mi?
- [ ] Linting hataları kontrol edildi mi?
- [ ] Commit mesajları açıklayıcı mı?

## 🎯 Kodlama Standartları

### Python (Backend)
- PEP 8 kurallarını izleyin
- Type hints kullanın
- Docstring yazın

```python
def get_user_posts(user_id: int) -> List[Post]:
    """Kullanıcının tüm postlarını getirir."""
    return Post.objects.filter(user_id=user_id)
```

### JavaScript (Frontend)
- Camel case değişken adları
- Arrow functions tercih edin
- JSDoc yorumları kullanın

```javascript
/**
 * Thread detayını getirir
 * @param {number} threadId - Thread ID
 * @returns {Promise<Thread>}
 */
const getThreadDetail = async (threadId) => {
  return await api.get(`/threads/${threadId}/`);
};
```

## 📝 Issue Bildir

Hata bulduysanız, Issue açın:

1. GitHub'da "Issues" sekmesine gidip "New issue" tıklayın
2. Açıklayıcı başlık yazın
3. Detaylı açıklama yapın:
   - Hatanın adımları
   - Beklenen sonuç
   - Actual sonuç
   - Ekran görüntüsü (varsa)

## 🚀 Başlamak İçin İyi İlk Issues

`good-first-issue` etiketli issues başlamak için uygundur.

## 💬 Sorular?

Herhangi bir sorunuz varsa, Issues sekmesinde tartışabilir veya Discussions başlatabilirsiniz.

---

**Katkılarınız için teşekkürler!** 🙌
