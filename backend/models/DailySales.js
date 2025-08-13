const mongoose = require('mongoose');

const saleEntrySchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  name: { 
    type: String,
    required: true
  },
  totalQuantitySold: {
    type: Number,
    default: 0,
    min: 0
  },
  totalRevenue: {
    type: Number,
    default: 0,
    min: 0
  }
}, { _id: false });

const dailySalesSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true // one document per calendar date
  },
  sales: {
    type: [saleEntrySchema],
    default: []
  }
}, {
  timestamps: true
});

// Normalize date queries to the day (0:00) when searching/updating
dailySalesSchema.statics.normalizeDate = function(d) {
  const date = new Date(d);
  date.setHours(0,0,0,0);
  return date;
};

const DailySales = mongoose.model('DailySales', dailySalesSchema);
module.exports = DailySales;