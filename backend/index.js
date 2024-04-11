const express = require("express");
const cors = require("cors");


const mainRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);





app.listen(3000, (req, res) => {
    console.log("app is listening to port 3000 meri jaan")
})
