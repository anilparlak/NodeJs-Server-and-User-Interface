// It creates a collection named end-node-1 in the Mongo database.
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
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("endnode1", schema);