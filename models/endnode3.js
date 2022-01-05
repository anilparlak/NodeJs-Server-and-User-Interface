const mongoose = require("../database");
const schema = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      required: true,
    },
    pressure: {
      type: Number,
      required: true,
    },
    humidity: {
      type: String,
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);
// It creates a collection named end-node-3 in the Mongo database..
module.exports = mongoose.model("endnode3", schema);