# 🎨 Hướng dẫn Setup DecapCMS cho Cloudflare Pages

## 📋 Tổng quan

DecapCMS (trước đây là Netlify CMS) là hệ thống quản lý nội dung mã nguồn mở, cho phép bạn quản lý nội dung website thông qua giao diện web thân thiện mà không cần chỉnh sửa code trực tiếp.

---

## 🚀 Bước 1: Setup GitHub OAuth App

### 1.1. Tạo GitHub OAuth Application

1. Truy cập: https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Điền thông tin:
   - **Application name:** `Bornario CMS`
   - **Homepage URL:** `https://your-site.pages.dev` (thay bằng URL Cloudflare của bạn)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Click **"Register application"**
5. **Lưu lại:**
   - **Client ID**
   - **Client Secret** (click "Generate a new client secret")

---

## 🔧 Bước 2: Setup Netlify OAuth Provider

### 2.1. Tạo Netlify Account (miễn phí)

1. Truy cập: https://app.netlify.com/signup
2. Đăng ký tài khoản (có thể dùng GitHub để đăng ký)

### 2.2. Cài đặt OAuth Provider

1. Truy cập: https://app.netlify.com/
2. Không cần deploy site lên Netlify, chỉ cần sử dụng OAuth service
3. Truy cập Settings > Site information
4. **Hoặc đơn giản hơn:** Sử dụng Netlify Identity Widget (đã được cấu hình trong project)

---

## 📦 Bước 3: Deploy lên Cloudflare Pages

### 3.1. Push code lên GitHub

```bash
git add .
git commit -m "Setup DecapCMS for Cloudflare Pages"
git push origin main
```

### 3.2. Deploy trên Cloudflare Pages

1. Truy cập: https://dash.cloudflare.com/
2. Chọn **Pages** > **Create a project**
3. Kết nối với GitHub repository: **Dung-Vu/dining_chair**
4. Cấu hình build:
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** (để trống)
5. Click **"Save and Deploy"**

### 3.3. Lấy URL của site

Sau khi deploy thành công, bạn sẽ có URL dạng:
```
https://dining-chair.pages.dev
```

---

## 🔐 Bước 4: Cập nhật GitHub OAuth App

1. Quay lại GitHub OAuth App settings
2. Cập nhật **Homepage URL:**
   ```
   https://dining-chair.pages.dev
   ```
3. Đảm bảo **Authorization callback URL** vẫn là:
   ```
   https://api.netlify.com/auth/done
   ```

---

## 🎯 Bước 5: Truy cập CMS Admin

### 5.1. Truy cập trang admin

Mở trình duyệt và truy cập:
```
https://dining-chair.pages.dev/admin/
```

### 5.2. Đăng nhập

1. Click **"Login with GitHub"**
2. Authorize OAuth application
3. Bạn sẽ được chuyển đến trang quản lý CMS

---

## 📝 Bước 6: Sử dụng CMS

### 6.1. Quản lý Sản phẩm

1. Vào menu **"Sản phẩm"**
2. Click **"New Sản phẩm"**
3. Điền thông tin:
   - Tên sản phẩm
   - Danh mục (modern/classic/minimalist)
   - Giá
   - Mô tả
   - Upload hình ảnh
4. Click **"Publish"**

### 6.2. Quản lý Thư viện ảnh

1. Vào menu **"Thư viện ảnh"**
2. Click **"New Thư viện ảnh"**
3. Upload hình và chọn kích thước (small/medium/large)
4. Click **"Publish"**

### 6.3. Quản lý Đánh giá khách hàng

1. Vào menu **"Đánh giá"**
2. Click **"New Đánh giá"**
3. Điền thông tin khách hàng và nội dung đánh giá
4. Upload avatar
5. Click **"Publish"**

### 6.4. Cài đặt chung

1. Vào menu **"Cài đặt"**
2. Chỉnh sửa thông tin chung của website
3. Click **"Publish"**

---

## 🔄 Workflow hoạt động

1. **Bạn chỉnh sửa nội dung trên CMS** → Click "Publish"
2. **CMS tạo commit và push lên GitHub** → Tự động
3. **Cloudflare Pages phát hiện thay đổi** → Tự động build và deploy
4. **Website cập nhật nội dung mới** → Trong vài phút

---

## 🎨 Tích hợp CMS vào React Components

Để hiển thị dữ liệu từ CMS trong React, bạn cần:

### 6.1. Cài đặt thư viện

```bash
npm install gray-matter
```

### 6.2. Tạo hook để đọc content

```javascript
// src/hooks/useContent.js
import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from content/products
    // Parse markdown files with gray-matter
    // Set products state
  }, []);

  return products;
};
```

### 6.3. Sử dụng trong component

```javascript
import { useProducts } from '../hooks/useContent';

const Collection = () => {
  const products = useProducts();
  
  return (
    // Render products
  );
};
```

---

## 🛠️ Troubleshooting

### Lỗi: "Login with GitHub" không hoạt động

**Giải pháp:**
1. Kiểm tra lại GitHub OAuth App settings
2. Đảm bảo Authorization callback URL đúng
3. Xóa cache trình duyệt và thử lại

### Lỗi: "Failed to load entries"

**Giải pháp:**
1. Kiểm tra GitHub Personal Access Token có quyền đầy đủ
2. Đảm bảo repository là public hoặc OAuth app có quyền truy cập

### Lỗi: Images không upload được

**Giải pháp:**
1. Kiểm tra `media_folder` trong config.yml
2. Đảm bảo thư mục `public/assets/img` tồn tại
3. Commit và push thư mục lên GitHub

---

## 🔒 Bảo mật

### Giới hạn quyền truy cập

Chỉ những người có quyền truy cập GitHub repository mới có thể đăng nhập vào CMS:

1. Vào GitHub repository settings
2. Chọn **Collaborators**
3. Thêm/xóa người dùng theo nhu cầu

### Branch Protection

Để tránh thay đổi trực tiếp lên `main`:

1. Vào GitHub repository settings
2. Chọn **Branches**
3. Thêm rule protection cho branch `main`
4. Cấu hình CMS để tạo Pull Request thay vì commit trực tiếp

---

## 📚 Tài liệu tham khảo

- **DecapCMS Documentation:** https://decapcms.org/docs/
- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **GitHub OAuth Apps:** https://docs.github.com/en/developers/apps/building-oauth-apps

---

## 🎉 Hoàn tất!

Bây giờ bạn đã có hệ thống CMS hoàn chỉnh cho website Bornario:

✅ Quản lý sản phẩm dễ dàng  
✅ Upload hình ảnh trực quan  
✅ Tự động deploy khi có thay đổi  
✅ Không cần chạm vào code  
✅ Miễn phí 100%  

**URL Admin Panel:** `https://your-site.pages.dev/admin/`

---

## 💡 Tips & Best Practices

1. **Backup thường xuyên:** Mặc dù Git đã lưu lịch sử, nhưng nên có backup riêng
2. **Test trên staging:** Tạo branch riêng để test trước khi merge vào main
3. **Optimize images:** Nén ảnh trước khi upload để tăng tốc độ website
4. **Use SEO-friendly slugs:** Đặt tên file/slug thân thiện với SEO
5. **Document cho team:** Hướng dẫn đồng đội cách sử dụng CMS

---

**Chúc bạn thành công! 🚀**
