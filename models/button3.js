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

module.exports = mongoose.model("button_node3", schema);