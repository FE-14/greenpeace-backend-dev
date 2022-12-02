const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const artikelRoute = require("./routes/artikel.route");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(userRoute);
app.use(authRoute);
app.use(artikelRoute);

app.get("/", (req, res) => res.json({ data: "Secret data" }));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
