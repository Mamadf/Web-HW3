<details>
<summary><h2>📦 Front-end</h2></summary>

این پروژه با استفاده از کتابخانه‌ی React پیاده‌سازی شده است.

## ✍️ توضیح کلی پروژه

در این پروژه، کاربر می‌تواند از طریق ابزارهای مختلف روی بوم (Canvas) تغییراتی اعمال کرده و اطلاعات مربوط به آن را در پنل‌های کناری مشاهده کند. این سیستم به‌صورت ماژولار طراحی شده و از کامپوننت‌های مستقل استفاده می‌کند تا قابلیت توسعه و نگهداری آسان‌تری داشته باشد. پیاده‌سازی به گونه‌ای انجام شده که از معماری component-based استفاده شود. برای هر بخش از رابط کاربری یک کامپوننت جداگانه تعریف شده است. ارتباط بین این کامپوننت‌ها از طریق props و state مدیریت می‌شود.



## 🧩 کامپوننت‌ها

- `Header`: .این بخش شامل عنوان نقاشی و دکمه های ایمپورت و اکسپورت برای دریافت و بارگزاری نقاشی داخل بوم است
 <img width="1482" height="579" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/db5a60cd-00af-479d-afa3-596890d2c7f4" />
 
- `Canvas`: .بوم یا فضای کاری اصلی که کاربر روی آن عملیات انجام می‌دهد
 <img width="640" height="894" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/fef55278-dcbd-4308-9341-f99f4760d80c" />
 
- `InfoPanel`: .نمایش اطلاعات مربوط به وضعیت فعلی بوم و تعداد آیتم های انتخاب‌شده
<img width="1088" height="427" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/b3dff9b3-a759-4198-a3ee-0dbc218fd513" />

- `ToolsPanel`: .شکل های قابل استفاده برای تعامل با بوم
<img width="1248" height="396" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/c49f4c22-7a6e-44a4-8379-72895514eb40" />

## ⚙️ برنامه
- `هدر`:
<img width="1920" height="231" alt="Screenshot (123)" src="https://github.com/user-attachments/assets/1083783b-7e91-4dc5-afd9-a58f50fc0292" />

می توان نام نقاشی داخل کادر نوشت. برای ایمپورت و اکسپورت نیز دکمه قرار داده شده است.

- `پنل ابزار`:
<img width="501" height="668" alt="Screenshot (125)" src="https://github.com/user-attachments/assets/e3ef70f1-b741-4884-9181-65d85f64b3b9" />

برای درج شکل از این بخش به صورت drag and drop شکل به بوم اضافه می شود. برای حذف شکل نیز کافی است 2 بار روی شکل مورد نظر کلیک شود.

- `پنل اطلاعات`:
<img width="1920" height="324" alt="Screenshot (124)" src="https://github.com/user-attachments/assets/03e948f4-5c86-4fbb-b224-c05d9b4cf465" />
در این بخش تعداد هر شکل نوشته شده است.

- `نمونه خروجی`:

<img width="1445" height="768" alt="Screenshot (126)" src="https://github.com/user-attachments/assets/261fb9ee-9149-4c66-b7f6-bd3194963b70" />

## 🚀 اجرا

برای اجرای پروژه، مراحل زیر را انجام دهید:



```bash
git clone https://github.com/Mamadf/Web-HW2.git
cd Web-HW2
npm install #if it's not installed
npm start
```
</details>
<details>
 <summary><h2>📦 Back-end</h2></summary>
 
این پروژه با java و فریمورک Spring boot پیاده سازی شده است.
## ✍️ توضیح کلی پروژه
در این بخش با استفاده از جاوا ذخیره سازی نقاشی ها برای هر کاربر را پیاده سازی کردیم. هر کاربر می تواند یک نقاشی در سرور ذخیره کند.
## 🧩 موجودیت ها
شامل دو کلاس کاربر و نقاشی است که به صورت یک به یک جوین شده اند.

<img width="643" height="925" alt="Screenshot (177)" src="https://github.com/user-attachments/assets/5adeb0a7-a9e1-4c0d-a82f-e1a0f0aadb04" />


<img width="549" height="702" alt="Screenshot (178)" src="https://github.com/user-attachments/assets/b8fcb729-0c40-4ebb-bd1e-15cf75aa7225" />

## ⚙️ برنامه

بخش کنترلر برای اتصال به فرانت است. از پایانه های GET و POST برای دریافت و ذخیره نقاشی ها در REST API استفاده شده است:
<img width="976" height="704" alt="Screenshot (179)" src="https://github.com/user-attachments/assets/dfcf5fd5-3038-49e8-a39e-40b8d5215ac5" />

در بخش سرویس منطق برنامه برای ذخیره در موجودیت ها استفاده شده است:

<img width="836" height="854" alt="Screenshot (180)" src="https://github.com/user-attachments/assets/2001c76a-1525-491b-a6d1-d4a0197216f0" />

در این بخش در صورت وجود نقاشی برای کاربر حال سرور آن را به صورت json ارسال می کند.

## 🚀 اجرا

در صورت استفاده از intellij برای اجرای پروژه، کافی است فایل PaintAppApplication را اجرا کنید.

در صورت استفاده از ترمینال از دستورات زیر استفاده کنید:


```bash
cd back
mvn spring-boot:run
```
</details>
