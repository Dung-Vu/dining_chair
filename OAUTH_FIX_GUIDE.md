# 🔧 Fix Lỗi "Not Found" - Setup OAuth cho DecapCMS trên Cloudflare

## ❌ **Nguyên nhân lỗi:**

Bạn đang sử dụng:
- **Domain:** `https://chair.bonstu.site`
- **OAuth callback:** `https://api.netlify.com/auth/done`

→ Netlify API không thể redirect về domain của bạn, gây lỗi "Not Found"

---

## ✅ **Giải pháp: Setup Cloudflare Worker để xử lý OAuth**

### **Bước 1: Cập nhật GitHub OAuth App**

1. Truy cập: https://github.com/settings/applications/3219760
2. **Cập nhật các thông tin sau:**

   **Authorization callback URL:**
   ```
   https://chair.bonstu.site/callback
   ```
   
3. Click **"Update application"**

---

### **Bước 2: Tạo Cloudflare Worker**

1. **Truy cập Cloudflare Dashboard:**
   - https://dash.cloudflare.com/
   - Chọn domain `bonstu.site`
   - Vào **Workers & Pages**

2. **Tạo Worker mới:**
   - Click **"Create Worker"**
   - Đặt tên: `dining-chair-oauth`
   - Copy code từ file `cloudflare-worker.js`

3. **Cập nhật thông tin OAuth:**
   ```javascript
   const CLIENT_ID = 'Oa3VF3X4MZGEVSfPIxSn'; // Client ID của bạn
   const CLIENT_SECRET = 'YOUR_CLIENT_SECRET'; // Client Secret từ GitHub
   ```

4. **Deploy Worker**

---

### **Bước 3: Cấu hình Routes**

1. **Trong Worker settings, thêm Routes:**
   ```
   chair.bonstu.site/auth*
   chair.bonstu.site/callback*
   ```

2. Hoặc tốt hơn, tạo **Custom Domain** cho Worker:
   - Worker URL: `https://auth-dining-chair.bonstu.workers.dev`
   - Cập nhật config.yml:
     ```yaml
     backend:
       base_url: https://auth-dining-chair.bonstu.workers.dev
       auth_endpoint: /auth
     ```

---

### **Bước 4: Test OAuth Flow**

1. Truy cập: `https://chair.bonstu.site/admin/`
2. Click **"Login with GitHub"**
3. Authorize app
4. Sẽ redirect về CMS admin

---

## 🚀 **Giải pháp đơn giản hơn (Khuyến nghị):**

### **Sử dụng GitHub Personal Access Token**

Thay vì setup OAuth phức tạp, dùng Personal Access Token:

1. **Tạo GitHub Token:**
   - Truy cập: https://github.com/settings/tokens
   - Click **"Generate new token (classic)"**
   - Chọn scopes: `repo`, `user`
   - Copy token

2. **Cập nhật config.yml:**
   ```yaml
   backend:
     name: github
     repo: Dung-Vu/dining_chair
     branch: main
   ```

3. **Lưu token trong CMS:**
   - Vào `/admin/`
   - Paste token khi được yêu cầu
   - Token sẽ được lưu trong localStorage

**Ưu điểm:**
- ✅ Không cần setup OAuth Worker
- ✅ Không cần Netlify
- ✅ Đơn giản, nhanh chóng

**Nhược điểm:**
- ⚠️ Token có thể hết hạn
- ⚠️ Mỗi user cần token riêng

---

## 🎯 **Khuyến nghị cuối cùng:**

### **Option 1: Nếu chỉ có 1-2 người dùng:**
→ Dùng **Personal Access Token** (đơn giản nhất)

### **Option 2: Nếu có nhiều người dùng:**
→ Setup **Cloudflare Worker** (như hướng dẫn trên)

### **Option 3: Nếu muốn dễ dàng nhất:**
→ Deploy thêm trên **Netlify** (miễn phí) để dùng OAuth của họ
- Deploy site lên Netlify
- Dùng Netlify Identity
- Redirect CMS sang Netlify URL

---

## 📝 **Commit và Deploy:**

```bash
git add .
git commit -m "Fix OAuth configuration for Cloudflare Pages"
git push origin main
```

Sau khi push, Cloudflare Pages sẽ tự động rebuild.

---

**Bạn muốn dùng giải pháp nào? Tôi sẽ hướng dẫn chi tiết hơn!** 🚀
