const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const userRoute = require("./routes/auth");

///middlewares.
app.use(express.json());

app.use("/user", userRoute);

//

app.listen(port, () => console.log("server is running"));
