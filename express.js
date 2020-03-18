const express = require("express");
const PORT = 8080;
const path = require(`path`);
const fs = require(`fs`);

const app = express();


//Server Route
//Reminder: Ask Alper about the weird slow down when loading the /notes page. It stalls while loading. However if you cancel the loading process halfway through the page will load like normal. WHYYYYY??????

app.post(`/api/notes`, (req, res) => {
    fs.readFile(`${__dirname}/Develop/db/db.sjon`, (err, data) =>{
        if(err) throw err;
        console.log(data);
    });
});

app.get("*", (req, res) =>{
    if(req.url === "/"){
        res.sendFile(path.join(__dirname + `/Develop/public/index.html`));
    } else if (req.url === `/notes`){
        res.sendFile(path.join(__dirname + `/Develop/public/notes.html`));
    } else if (req.url === `/api/notes`){
        const file = (__dirname + `/Develop/db/db.json`);
        const data = fs.readFileSync(file, `utf8`) 
        return res.json(data);
    }
});

app.listen(PORT, () =>{
    console.log(`Server listening on: http://localhost:${PORT}`);
});


