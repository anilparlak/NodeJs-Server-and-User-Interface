// It creates a collection named buttons in the Mongo database.
const mongoose = require("../database");
const schema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true,
    },
    name: {
        type:String,
        default:"button",
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("buttons", schema);