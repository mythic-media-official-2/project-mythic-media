const express = require('express');
const path = require('path');
const app = express();

// تحديد المنفذ (Port) اللي السيرفر هيشتغل عليه
const PORT = process.env.PORT || 3000;

// جعل السيرفر يقرأ الملفات الثابتة (CSS, JS, Images) تلقائياً من مجلداتها
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// توجيه الرابط الرئيسي للموقع ليفتح ملف index.html الخاص بـ Mythic Media
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// مثال لـ API بسيط لتجهيز بيانات الفيديوهات مستقبلاً
app.get('/api/videos', (req, res) => {
    res.json([
        { id: 1, title: "Welcome to Mythic Media", duration: "10:30" },
        { id: 2, title: "Secure Streaming Tech", duration: "15:45" }
    ]);
});

// تشغيل السيرفر والاستماع للمنفذ المحدد
app.listen(PORT, () => {
    console.log(`🔱 Mythic Media Server is running on: http://localhost:${PORT}`);
});