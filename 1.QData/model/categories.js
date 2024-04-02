const mongoose = require('mongoose');

const WebCategorySchema = new mongoose.Schema({
    id: Number,
    title_th: String,
    title_en: String,
    parent_id: mongoose.Schema.Types.ObjectId,
    link: String,
    image: String,
    status: String,
    write_uid: Number,
    create_uid: Number,
    updated_at: Date,
    created_at: Date,
});

// สร้าง model ของ web_categories
const WebCategory = mongoose.model('web_categories', WebCategorySchema);

module.exports = WebCategory;
