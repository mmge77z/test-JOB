const mongoose = require('mongoose');

// สร้าง Schema
const navigationSchema = new mongoose.Schema({
  id: Number,
  key: String,
  name: String,
  type: String,
  auth_roles: [String],
  hide_includes_roles: [String],
  icon: String,
  url: String,
  navigation_id: mongoose.Schema.Types.ObjectId,
  comment: String,
  sequence: Number,
  active: Boolean,
  write_uid: Number,
  create_uid: Number,
  updated_at: Date,
  created_at: Date
});

// สร้าง Model จาก Schema
const Navigation = mongoose.model('navigations', navigationSchema);

module.exports = Navigation;
