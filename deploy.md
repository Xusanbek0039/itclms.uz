# GitHub Pages uchun Deployment Qo'llanma

## 🚀 Qanday GitHub Pages ga yuklash:

### 1. Build qiling
```bash
npm run build
```

### 2. `dist` papkasini GitHub ga yuklang
```bash
# Agar repository mavjud bo'lmasa
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/xusanbek0039/itclms.uz.git
git push -u origin main

# Agar repository allaqachon mavjud bo'lsa
git add dist/
git commit -m "Add built files"
git push origin main
```

### 3. GitHub Pages sozlamlari
1. GitHub repository oching: https://github.com/xusanbek0039/itclms.uz
2. `Settings` → `Pages`
3. `Source`: "Deploy from a branch"
4. `Branch`: `main`
5. `Folder`: `/ (root)`
6. `Save`

### 4. Kuting (5-10 daqiqa)
Keyin: https://xusanbek0039.github.io/itclms.uz/

## 🔧 Muhmu Jihatlar:
- ✅ Build fayllari `dist/` papkasida
- ✅ `.nojekyll` fayli qo'shiladi (Jekyll ni o'chirish uchun)
- ✅ Static fayllar: HTML, CSS, JS, rasmlar
- ✅ TypeScript kompilyatsiya qilingan

## 🎯 Natija:
- React + TypeScript loyihasi GitHub Pages da ishlaydi
- Barcha animatsiyalar va interaktiv elementlar saqlanadi
- SEO optimizatsiyasi to'liq ishlaydi
