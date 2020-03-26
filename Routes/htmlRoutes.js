app.get("*", (req, res) =>{
    if(req.url === "/"){
        res.sendFile(path.join(__dirname + `/Develop/public/index.html`));
    } else if (req.url === "/notes"){
        res.sendFile(path.join(__dirname, `/Develop/public/notes.html`));
        console.log("After Res");
    } else if (req.url === `/api/notes`){
        const file = (__dirname + `/Develop/db/db.json`);
        const data = fs.readFileSync(file, `utf8`) 
        return res.json(data);
    }
});