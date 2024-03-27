const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/db_munardi_betest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`User service is running on port ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

app.use(express.json());
app.use("/api", routes);
