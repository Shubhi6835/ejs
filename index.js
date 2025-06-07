import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

//specify the directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, ()=>{
    console.log("Server is up and running");
})

app.get("/", (req,res)=>{
    const d = new Date();
    const day = d.getDay();

    let today = "a Weekday";
    let adv = "it's time to work hard";

    if(day===0 || day ==6){
        today = "the Weekend";
        adv ="Take some Rest"
    }
    res.render("index.ejs", {
        dayType: today,
        advice: adv
    })
})
