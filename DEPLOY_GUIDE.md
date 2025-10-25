# Hướng dẫn Setup DecapCMS & Deploy

## 🎯 DecapCMS đã được cài đặt!

### Cấu trúc thư mục:
```
public/
  admin/
    config.yml          # Cấu hình DecapCMS
    index.html          # Trang quản trị CMS
content/
  products/             # Dữ liệu sản phẩm
  gallery/              # Dữ liệu thư viện ảnh
  reviews/              # Dữ liệu đánh giá
  settings/             # Cài đặt website
    general.json
```

## 📝 Bước 1: Deploy lên GitHub

### 1.1. Tạo repository mới trên GitHub (nếu chưa có)
- Vào https://github.com/new
- Đặt tên: `dining-chair`
- Chọn Public
- Bấm "Create repository"

### 1.2. Push code lên GitHub
```bash
git add .
git commit -m "Add DecapCMS configuration"
git push origin main
```

## 🚀 Bước 2: Deploy lên Cloudflare Pages

### 2.1. Kết nối GitHub với Cloudflare Pages
1. Đăng nhập Cloudflare Dashboard: https://dash.cloudflare.com
2. Chọn **Pages** từ menu bên trái
3. Bấm **Create a project**
4. Chọn **Connect to Git**
5. Chọn **GitHub** và authorize
6. Chọn repository: `dining-chair`

### 2.2. Cấu hình Build Settings
```
Framework preset: Create React App
Build command: npm run build
Build output directory: build
Root directory: (để trống)
```

### 2.3. Environment Variables (nếu cần)
- Không cần thiết lập biến môi trường cho bước đầu

### 2.4. Bấm **Save and Deploy**

## 🔐 Bước 3: Kích hoạt Git Gateway cho DecapCMS

### 3.1. Cài đặt Netlify Identity (cần thiết cho Git Gateway)

**Lưu ý quan trọng:** Cloudflare Pages không hỗ trợ Netlify Identity trực tiếp. Bạn có 2 lựa chọn:

#### **Lựa chọn A: Deploy trên Netlify thay vì Cloudflare (Khuyến nghị cho DecapCMS)**

1. Vào https://app.netlify.com
2. Bấm **Add new site** > **Import an existing project**
3. Chọn GitHub và chọn repository `dining-chair`
4. Build settings:
   ```
   Build command: npm run build
   Publish directory: build
   ```
5. Bấm **Deploy site**

6. Sau khi deploy xong:
   - Vào **Site settings** > **Identity**
   - Bấm **Enable Identity**
   - Vào **Settings and usage** > **Registration preferences** > Chọn **Invite only**
   - Vào **Services** > **Git Gateway** > Bấm **Enable Git Gateway**

7. Mời người dùng:
   - Vào **Identity** tab
   - Bấm **Invite users**
   - Nhập email của bạn
   - Check email và confirm

8. Truy cập CMS:
   - Vào: `https://your-site.netlify.app/admin/`
   - Đăng nhập bằng email đã mời

#### **Lựa chọn B: Dùng GitHub OAuth cho Cloudflare Pages (Phức tạp hơn)**

Cần setup OAuth App trên GitHub và backend riêng. Không khuyến nghị cho người mới bắt đầu.

## 📦 Bước 4: Sử dụng DecapCMS

### Truy cập trang quản trị:
```
https://your-domain.com/admin/
```

### Các tính năng:
- ✅ Quản lý sản phẩm (thêm/sửa/xóa)
- ✅ Quản lý thư viện ảnh
- ✅ Quản lý đánh giá khách hàng
- ✅ Cài đặt thông tin website
- ✅ Upload hình ảnh trực tiếp

### Workflow:
1. Đăng nhập vào `/admin/`
2. Chọn collection (Sản phẩm, Gallery, Reviews...)
3. Thêm/Sửa nội dung
4. Bấm **Publish**
5. DecapCMS sẽ tự động commit lên GitHub
6. Cloudflare/Netlify sẽ tự động rebuild và deploy

## 🔄 Tích hợp dữ liệu DecapCMS vào React

### Cài đặt thêm package:
```bash
npm install gray-matter
```

### Đọc dữ liệu từ markdown:
```javascript
// Trong Collection.js
import { useEffect, useState } from 'react';

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products từ content/products/
    fetch('/content/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // ...rest of code
};
```

## ✅ Checklist Deploy

- [ ] Code đã push lên GitHub
- [ ] Đã tạo project trên Cloudflare Pages hoặc Netlify
- [ ] Build thành công
- [ ] Website đã live
- [ ] DecapCMS admin page accessible (`/admin/`)
- [ ] Git Gateway đã enable (nếu dùng Netlify)
- [ ] Đã mời user và test đăng nhập CMS
- [ ] Test thêm/sửa content và auto-deploy

## 🆘 Troubleshooting

### Lỗi: "Failed to compile"
- Kiểm tra lại build command và output directory
- Xem log chi tiết trên Cloudflare/Netlify

### Lỗi: "Cannot access /admin/"
- Đảm bảo folder `public/admin/` đã được commit
- Clear cache và rebuild

### Lỗi: "Git Gateway not configured"
- Chỉ xảy ra trên Netlify, cần enable Git Gateway
- Hoặc chuyển sang dùng GitHub OAuth

## 📚 Tài liệu tham khảo

- DecapCMS: https://decapcms.org/docs/
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Netlify: https://docs.netlify.com/
- Git Gateway: https://docs.netlify.com/visitor-access/git-gateway/
