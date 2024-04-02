const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const WebCategory = require('../model/categories')


router.get('/', async (req, res) => {
    try {
        // ดึงข้อมูลทั้งหมดจาก web_categories
        const webCategories = await WebCategory.find();

        // ส่ง response กลับไปยัง client

        res.json({data: webCategories,
        });
    } catch (error) {
        // ส่ง error message กลับไปยัง client
        res.json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
