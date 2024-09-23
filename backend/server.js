import express from "express"
import cors from "cors"



// app config
const app = express();
const port = 4000;



// middleware
app.use(express.json());
app.use(cors());


app.get("/", (req,res)=>{
    res.send("API Working");
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
    
})

// mongodb+srv://aritraray120:<db_password>@cluster0.3dknr.mongodb.net/?