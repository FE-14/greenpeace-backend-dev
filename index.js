const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(authRoute);

app.get("/", (req, res) => res.json({ data: "Secret data" }));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
