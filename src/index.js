import express from "express";
import 'dotenv/config';


const app = express();

const port = process.env.PORT;

app.get('/login' , (req,res) => {
    res.get('Hello');
});

app.listen(port, () => {
    console.log(`PORT running at ${port}`);
});

