# GitHub Repository Kurulumu

Adım adım GitHub repository oluşturma ve yapılandırma rehberi.

## 📋 Ön Hazırlıklar

1. GitHub hesabı oluşturun: https://github.com/join
2. Git yüklü olduğunu doğrulayın: `git --version`

## 🚀 Repository Oluşturma

### Seçenek 1: GitHub Web Arayüzü

1. GitHub'a giriş yapın
2. Sağ üst köşedeki "+" butonuna tıklayın
3. "New repository" seçin
4. Repository adını girin: `DevNuts`
5. Açıklamayı girin: "Developer Forum - Forum platformu"
6. "Public" veya "Private" seçin
7. "Initialize this repository with a README" **seçmeyin** (biz zaten oluşturduk)
8. "Create repository" tıklayın

### Seçenek 2: GitHub CLI

```bash
gh repo create DevNuts --public --source=. --remote=origin --push
```

## 🔗 Yerel Repository'yi GitHub'a Bağlayın

Proje klasöründeyken:

```bash
# Git'i başlat (eğer başlatılmadıysa)
git init

# Tüm dosyaları stage et
git add .

# İlk commit yap
git commit -m "Initial commit: Forum platformu kurulumu"

# Remote repository'yi ekle (REPO_URL'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/DevNuts.git

# Branch adını main olarak ayarla
git branch -M main

# Repository'ye push et
git push -u origin main
```

## 👥 Arkadaşını Ekle

### Repository Üzerinde Erişim Ver

1. GitHub'da repository sayfanıza gidip "Settings" tıklayın
2. Sol menüde "Collaborators" tıklayın
3. "Add people" butonuna tıklayın
4. Arkadaşınızın GitHub kullanıcı adını yazın
5. Seçin ve "Add [name] to this repository" tıklayın

### Arkadaşınız Repository'yi Klonlasın

```bash
git clone https://github.com/YOUR_USERNAME/DevNuts.git
cd DevNuts
```

## 📚 Temel Git Komutları

### Günlük İş Akışı

```bash
# En son değişiklikleri çek
git pull origin main

# Yeni branch oluştur ve geç
git checkout -b feature/yeni-ozellik

# Değişiklikleri stage et
git add .

# Commit et
git commit -m "feat: yeni özellik eklendi"

# Repository'ye push et
git push origin feature/yeni-ozellik
```

### Pull Request (PR) Oluşturma

1. GitHub'da "Compare & pull request" butonuna tıklayın
2. Başlık ve açıklamayı doldurun
3. Reviewers ekleyin (arkadaşınız)
4. "Create pull request" tıklayın

## ⚙️ Repository Ayarları

### Şubeler (Branches)

1. "Settings" → "Branches"
2. "Add rule" tıklayın
3. Branch pattern: `main`
4. "Require pull request reviews before merging" seçin
5. Minimum reviewers: 1

### GitHub Actions (CI/CD)

`.github/workflows/` klasöründe workflow dosyaları ekleyebilirsiniz.

## 🔐 Environment Secrets

Hassas bilgiler için:

1. "Settings" → "Secrets and variables" → "Actions"
2. "New repository secret" tıklayın
3. Name ve Value girin
4. GitHub Actions'da kullanın: `${{ secrets.SECRET_NAME }}`

## 📖 Faydalı Kaynaklar

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

## 🆘 Sorun Giderme

### "fatal: not a git repository"
```bash
git init
git remote add origin <URL>
```

### Branch senkronizasyon sorunu
```bash
git fetch origin
git merge origin/main
# veya
git rebase origin/main
```

### Yanlış dosya push ettim
```bash
git reset HEAD~1
git restore --staged <file>
```

---

**Kurulum tamamlandı! 🎉**
Şimdi geliştirmeye başlayabilirsiniz.
