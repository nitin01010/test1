const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get("/", async (req, res) => {
    try {
        res.send('Hello Azure Hello World !');
    } catch (error) {
        res.status(401).send('Error Please Back');
    }
});

app.post("/Azure/api/data", async (req, res) => {
    try {
        console.log(req.body);
        res.status(201).send(req.body);
    } catch (error) {
        res.status(401).send('Error Please Back Api is not Working');
    }
});


app.listen(3000, () => {
    console.log('server is runing');
});