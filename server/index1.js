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
        password:"1234",
        isAdmin: false
    }

];

app.post("/api/login",(req,res)=> {
    const {username, password} = req.body;

    const user = users.find((u) =>{
        return u.username === username && u.password === password;
    });
    console.log(user);
    if(user) {
        // Generate an access token
        const accesstoken = jwt.sign({id:user.id,isAdmin: user.isAdmin}, "mySecretKey");
        res.json({
            username: user.username,
            isAdmin:user.isAdmin,
            accesstoken
        })
    }else{
        res.status(400).json("Username or password incorreeect")
    }
});
const verify =(req,res,next) => {
    const authHeader = req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, "mySecretKey", (err, user) => {
            if(err) {
                return res.status("Token is not valid");
            }
            req.user= user;
            console.log(user);
            next();
        });
    }
    else{
        res.status(401).json("You are not authorized")
    }

};

app.delete("/api/users/:userId", verify, (req,res) => {
    console.log(req.user);
    if(req.user.id === req.params.userId || req.user.isAdmin){

        res.status(200).json("user has been deleted");
    } else{
        res.status(403).json("You are not allowed to delete this user");
    }
})

app.listen(5000,()=> console.log("Backend server is running"));
