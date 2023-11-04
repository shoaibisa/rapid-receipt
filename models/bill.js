const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

mongoose.model("Bill", BillSchema);
