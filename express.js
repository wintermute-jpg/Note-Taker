const express = require("express");
const PORT = 8080;
const path = require(`path`);

const app = express();


app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname + `/Develop/public/notes.html`));
});

app.get("*", (req, res) =>{
    if(req.url === "/"){
    res.sendFile(path.join(__dirname + `/Develop/public/index.html`));
    }
});

app.listen(PORT, () =>{
    console.log(`Server listening on: http://localhost:${PORT}`);
})