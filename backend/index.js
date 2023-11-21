
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

app.post("/api/save-image", async(req, res) => {
    const image = new Image({ data: req.body.image});
    await image.save();
    res.sendStatus(200);

})

app.listen(port, () => { console.log("server started")});