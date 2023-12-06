
const path = require("path");
const multer = require('multer');
const router = require("express").Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./static/uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        const timestamp = Date.now();
        const ext = '.jpg';
        const filename = `${timestamp}${ext}`;
        req.filename = `${timestamp}${ext}`;
        cb(null, filename);
    },
});

const myStorage = multer({storage: storage});

router.post("/uploadfile", myStorage.single("myfile"),(req, res) => {
    console.log(req.filename);
    res.status(200).json({status: "success", filename: req.filename});

});

module.exports = router;