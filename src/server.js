import express from "express";

const PORT = 4000;

const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, You may Continue");
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middleware");
};

const handleProtected = (req, res) => {
    console.log("handleProtected");
    return res.send("Welcome to the private lounge");
};

app.use(loggerMiddleware);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🎯`);

app.listen(PORT, handleListening)