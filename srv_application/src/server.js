const express = require("express");
const app = express();

const PORT = process.env.PORT || 4200;

app.get("/index", (req, res)=>{
    res.send({msg: "Hello, i'm server app"});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
});
