const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
    {
        id: "1",
        username: "john",
        password: "12333",
        isAdmin: true
    },
    {
        id: "2",
        username: "ram",
        password: "1234",
        isAdmin: false
    }

];
const refreshTokens=[];
app.post("/api/refresh", (req, res) => {
    // Take refresh token from the user
    const refreshToken = req.body.token;

    // send error if there is no token or it's invalid;
    if(!refreshToken) return res.status(401).json("You are authenticated!");
    if(!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid")
    }
    

    // If everything is ok, create new access token and send the user

})

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, isAdmin: user.isAdmin, isName: user.username },
        "mySecretKey",
        { expiresIn: "5m" })
};
const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id, isAdmin: user.isAdmin, isName: user.username },
        "myRefreshSecretKey",
        { expiresIn: "5m" })
}

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => {
        return u.username === username && u.password === password;
    });
    console.log(user);
    if (user) {
        // Generate an access/refresh token
        const accesstoken = generateAccessToken(user);
        const refreshtoken =  generateRefreshToken(user);
        refreshTokens.push(refreshtoken);
        
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accesstoken
        })
    } else {
        res.status(400).json("Username or password incorreeect");
    }
});
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status("Token is not valid");
            }
            req.user = user;
            console.log(user);
            next();
        });
    }
    else {
        res.status(401).json("You are not authorized")
    }

};

app.delete("/api/users/:userId", verify, (req, res) => {
    console.log(req.user);
    if (req.user.id === req.params.userId || req.user.isAdmin) {

        res.status(200).json("user has been deleted");
    } else {
        res.status(403).json("You are not allowed to delete this user");
    }
})

app.listen(5000, () => console.log("Backend server is running"));
