const express = require("express");
const PORT = process.env.PORT || 8080;
const path = require(`path`);
const fs = require(`fs`);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("../routes/htmlRoutes")(app);

app.listen(PORT, () =>{
    console.log(`Server listening on: http://localhost:${PORT}`);
});

//Server Route
//Reminder: Ask Alper about the weird slow down when loading the /notes page. It stalls while loading. However if you cancel the loading process halfway through the page will load like normal. WHYYYYY??????





