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
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(userRoute);
app.use(authRoute);
app.use(artikelRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
