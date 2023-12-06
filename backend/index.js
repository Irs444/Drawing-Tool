
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require("./routers/userRouter");
const utilRouter = require("./routers/util");
const imageRouter = require("./routers/imageRouter")

const cors = require('cors');
app.use(cors({origin: "http://localhost:3000"}));

app.use(express.json());
app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/image", imageRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => { console.log("server started")});