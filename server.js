const express = require ('express');
const PORT = process.env.PORT|| 3001;
const app =express ();

//Express Middleware
app.use(express.urlencoded({extended:false}));
app.use (express.json());

//test connection

app.get ('/', (req, res) => {
    res.json ({
        message:'Hello World'
    });
});

//default response for any other request (not found)

app.use((req, res)=> {
    res.status(404).end();
});




app.listen (PORT, () => {
    console.log (`Server runnon on port ${PORT}`);
});