const express = require('express')
const app = express();
const fs = require("fs")
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Hello welcome to my server");
})

app.get('/users',(req,res)=>{
    fs.readFile("users.json","utf-8",(error,data)=>{
        if(error){
            console.log("An error occured when reading from the users.json")
            return res.status(404).send("An error occured when reading from the users.json")
        }

        const users = JSON.parse(data)
        res.status(200).send(users)
    })
})

app.get('/users/:id',(req,res)=>{
    fs.readFile("users.json","utf-8",(error,data)=>{
        if(error){
            console.log("An error occured when reading from the users.json")
            return res.status(404).send("An error occured when reading from the users.json")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const user_found = users_array.find(user => user.id === parseInt(req.params.id))
        if(!user_found){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(user_found)
    })
})

app.get('/users/profession/:profession',(req,res)=>{
    fs.readFile("users.json","utf-8",(error,data)=>{
        if(error){
            console.log("An error occured when reading from the users.json")
            return res.status(404).send("An error occured when reading from the users.json")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const user_found = users_array.find(user => user.profession === req.params.profession)
        if(!user_found){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(user_found)
    })
})

app.get('/users/name/:name',(req,res)=>{
    fs.readFile("users.json","utf-8",(error,data)=>{
        if(error){
            console.log("An error occured when reading from the users.json")
            return res.status(404).send("An error occured when reading from the users.json")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const user_found = users_array.find(user => user.name === req.params.name)
        if(!user_found){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(user_found)
    })
})

app.listen(PORT, ()=> {
    console.log(`The server is running on http://localhost:${PORT}`);
});