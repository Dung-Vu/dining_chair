# � Hướng dẫn Deploy và Sử dụng CMS trên Cloudflare Pages

## ✅ **Giải pháp hoàn chỉnh - Đăng nhập CMS bằng GitHub Token**

---

## 📦 **Bước 1: Push code lên GitHub**

```bash
cd "c:\Users\Admin\OneDrive\Máy tính\Bornario\dining_chair"
git add .
git commit -m "Fix CMS login with GitHub token"
git push origin main
```

---

## ⏳ **Bước 2: Đợi Cloudflare Pages rebuild**

1. Truy cập: https://dash.cloudflare.com/
2. Chọn project **dining_chair** (hoặc tên project của bạn)
3. Đợi build hoàn thành (2-3 phút)
4. Kiểm tra status: **Success** ✅

---

## 🔑 **Bước 3: Đăng nhập CMS**

### **Cách 1: Đăng nhập qua URL (KHUYẾN NGHỊ)**

Truy cập URL sau (thay `YOUR_TOKEN` bằng token của bạn):

```
https://chair.bonstu.site/admin/?token=ghp_S4d5OE4rdPbkaRLsuQR1cjJr4sA7xp21fAoi
```

**Lưu ý:** Token sẽ tự động được lưu và URL sẽ được làm sạch

### **Cách 2: Đăng nhập thủ công qua Console**

1. Truy cập: `https://chair.bonstu.site/admin/`
2. Nhấn **F12** → Chọn tab **Console**
3. Paste lệnh sau và nhấn **Enter**:

```javascript
localStorage.setItem('netlify-cms-user', JSON.stringify({
  backendName: 'github',
  token: 'ghp_S4d5OE4rdPbkaRLsuQR1cjJr4sA7xp21fAoi',
  login: 'Dung-Vu'
}));
location.reload();
```

---

## 🎯 **Bước 4: Sử dụng CMS**

Sau khi đăng nhập thành công, bạn sẽ thấy giao diện CMS với các menu:

### **1. Contents (Nội dung)**
- **Sản phẩm** - Quản lý sản phẩm ghế ăn
- **Thư viện ảnh** - Upload và quản lý hình ảnh
- **Đánh giá** - Quản lý review khách hàng
- **Cài đặt** - Cấu hình thông tin website

### **2. Media (Thư viện media)**
- Quản lý tất cả hình ảnh
- Upload, sửa, xóa file

### **3. Workflow (Quy trình làm việc)**
- **Drafts** - Nội dung nháp
- **In Review** - Đang chờ duyệt
- **Ready** - Sẵn sàng publish

---

## 📝 **Hướng dẫn thêm/sửa nội dung**

### **Thêm sản phẩm mới:**

1. Click **Contents** → **Sản phẩm**
2. Click **New Sản phẩm**
3. Điền thông tin:
   - **Tên sản phẩm**: Tên ghế
   - **Danh mục**: modern/classic/minimalist
   - **Giá**: Giá bán
   - **Mô tả**: Mô tả chi tiết
   - **Hình ảnh**: Upload ảnh sản phẩm
   - **Thứ tự**: Thứ tự hiển thị (0, 1, 2...)
   - **Trạng thái**: active/inactive
4. Click **Publish** → **Publish now**

### **Thêm ảnh vào Gallery:**

1. Click **Contents** → **Thư viện ảnh**
2. Click **New Thư viện ảnh**
3. Điền thông tin:
   - **Tiêu đề**: Tên ảnh
   - **Hình ảnh**: Upload ảnh
   - **Kích thước**: small/medium/large
   - **Thứ tự**: Thứ tự hiển thị
4. Click **Publish**

### **Thêm đánh giá khách hàng:**

1. Click **Contents** → **Đánh giá**
2. Click **New Đánh giá**
3. Điền thông tin:
   - **Tên khách hàng**
   - **Vai trò** (Kiến trúc sư, Chủ nhà hàng...)
   - **Đánh giá**: 1-5 sao
   - **Nội dung**: Review của khách hàng
   - **Avatar**: Upload ảnh đại diện
4. Click **Publish**

---

## ⚠️ **Troubleshooting**

### **Lỗi: "Could not establish connection"**
**Giải pháp:**
- Xóa cache trình duyệt (Ctrl + Shift + Delete)
- Thử lại với trình duyệt ẩn danh (Incognito)
- Đảm bảo token có quyền `repo` và `user`

### **Lỗi: "Failed to persist entry"**
**Giải pháp:**
- Kiểm tra kết nối internet
- Đảm bảo GitHub token chưa hết hạn
- Kiểm tra quyền của collaborator trong repository

### **Không thấy thay đổi trên website**
**Giải pháp:**
- Sau khi Publish, đợi Cloudflare Pages rebuild (2-3 phút)
- Xóa cache website (Ctrl + F5)
- Kiểm tra trong GitHub repository xem commit đã được tạo chưa

---

## 🔐 **Bảo mật Token**

1. **KHÔNG chia sẻ token với người khác**
2. **KHÔNG commit token vào code**
3. **Token chỉ lưu trong localStorage của trình duyệt**
4. **Nếu nghi ngờ token bị lộ:**
   - Vào https://github.com/settings/tokens
   - Xóa token cũ
   - Tạo token mới
   - Đăng nhập lại CMS với token mới

---

## 👥 **Cho phép người khác sử dụng CMS**

### **Cách 1: Thêm Collaborator (Khuyến nghị)**
1. Vào https://github.com/Dung-Vu/dining_chair/settings/access
2. Click **Add people**
3. Nhập username GitHub của họ
4. Chọn quyền **Write**
5. Họ tạo token riêng và đăng nhập CMS

### **Cách 2: Chia sẻ token (Không khuyến nghị)**
- Gửi cho họ URL login với token
- **Lưu ý:** Họ sẽ có toàn quyền như bạn

---

## 📚 **Tài liệu tham khảo**

- **DecapCMS Docs:** https://decapcms.org/docs/
- **GitHub Token:** https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- **Cloudflare Pages:** https://developers.cloudflare.com/pages/

---

## ✨ **Tính năng CMS**

✅ Quản lý sản phẩm trực quan  
✅ Upload hình ảnh dễ dàng  
✅ Preview trước khi publish  
✅ Editorial workflow (Draft → Review → Publish)  
✅ Media library tập trung  
✅ Markdown editor  
✅ Tự động commit lên GitHub  
✅ Tự động deploy lên Cloudflare Pages  

---

**Chúc bạn thành công! 🎉**

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
