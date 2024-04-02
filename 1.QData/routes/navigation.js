const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Navigation = require('../model/navigation'); // เรียกใช้ Model ที่เราสร้างไว้

router.get('/', async (req, res) => {
    try {
        // ดึงข้อมูลทั้งหมดจาก collections "navigations"
        const navigations = await Navigation.find().sort({ id: 1 });

        // ส่ง response กลับไปยัง client
        res.json({ data: navigations });
    } catch (error) {
        // ส่ง error message กลับไปยัง client กรณีเกิด error
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
