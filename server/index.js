const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users= [
    {
        id: "1",
        username: "john",
        password:"12333",
        isAdmin: true
    },
    {
        id: "2",
        username: "ram",
        password:"12334",
        isAdmin: true
    }

]

app.listen(5000,()=> console.log("Backend server is running"));
