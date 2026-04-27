# GitHub Pages Sahifa Ko'rinmasligi Muammosi - Yechim

## 🚨 Muammo Sababi:
`.gitignore` fayli `dist` papkasini qo'yib yuborgan, shuning uchun build fayllari GitHub ga yuklanmagan.

## ✅ Yechim Qadamlari:

### 1. **Git o'rnatish** (agar o'rnatilmagan bo'lsa)
- Windows uchun: https://git-scm.com/download/win
- O'rnatgandan so'ng GitHub Desktop ham o'rnatish mumkin

### 2. **.gitignore tuzatildi**
- `dist` papkasi endi gitignore dan olib tashlandi
- Build fayllari endi GitHub ga yuklanishi mumkin

### 3. **Build fayllarini GitHub ga yuklash:**
```bash
# Terminal/Command Prompt oching
cd c:\Users\itpar\OneDrive\Desktop\itclms.uz

# Build fayllarini qo'shing
git add dist/ .nojekyll deploy.md .gitignore

# Commit qiling
git commit -m "Add built files for GitHub Pages deployment"

# GitHub ga push qiling
git push origin main
```

### 4. **GitHub Pages sozlamalarini tekshiring:**
1. https://github.com/xusanbek0039/itclms.uz oching
2. `Settings` → `Pages`
3. `Source`: "Deploy from a branch"
4. `Branch`: `main`
5. `Folder`: `/ (root)`
6. `Save`

### 5. **Kuting (5-10 daqiqa)**
Keyin: https://xusanbek0039.github.io/itclms.uz/

## 🔧 Agar hali ham ishlamasa:

### Variant 1: GitHub Desktop ishlating
1. GitHub Desktop o'rnatang
2. Repository oching
3. `dist` papkasini tanlang va "Add to repository"
4. Commit qiling va push qiling

### Variant 2: Vercel (alternativ)
Agar GitHub Pages ishlamasa:
1. https://vercel.com ga kiring
2. GitHub bilan login qiling
3. `itclms.uz` repository ni tanlang
4. Deploy qiling (avtomatik ishlaydi)

## 📁 Tekshirish:
- `dist/` papkasi borligini tekshiring
- `dist/index.html` fayli mavjudligini tekshiring
- GitHub repository da `dist/` papkasi ko'rinadimi

## 🎯 Natija:
- Build fayllari GitHub ga yuklangandan so'ng
- GitHub Pages avtomatik deployment qiladi
- Sahifa https://xusanbek0039.github.io/itclms.uz/ da ochiladi

---

**Muhim:** Git o'rnatilmagan bo'lsa, avval Git o'rnatib keyin yuqoridagi qadamlarni bajaring!
