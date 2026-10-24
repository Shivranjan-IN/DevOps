import express from "express";
import {client} from "@repo/db/client" 
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hii there");
})

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    
    try {
        const user = await client.user.create({
            data:{
                username, 
                password,
                  email,
             
            } 
        })
        res.json({message:"User created successfully",
            id: user.id,

        })
    } catch (error) {
        console.log(error);
        res.json({message:"Error creating user"})
    }
    
     
})

app.listen(3001, () => {
    console.log("HTTP Server running on port 3001");
}); 
