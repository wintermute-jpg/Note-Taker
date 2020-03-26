
app.post(`/api/notes`, (req, res) => {
    console.log("It worked");
    fs.readFile(`${__dirname}/Develop/db/db.sjon`, (err, data) =>{
        if(err) throw err;
    });
    console.log("post fs");
});