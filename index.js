const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

// Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/intake", require("./routes/api/intake"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
