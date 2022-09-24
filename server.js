const express = require ('express');
const PORT = process.env.PORT|| 3001;
const app =express ();
const mysql =require ('mysql2');

//Express Middleware
app.use(express.urlencoded({extended:false}));
app.use (express.json());

//connect to the database
const db =mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password: '@BamBam2020',
        database: 'election' 

    },
    console.log('connected to the election database')
);

//test connection

app.get ('/', (req, res) => {
    res.json ({
        message:'Hello World'
    });
});

db.query(`SELECT*FROM candidates`,(err,rows)=> {
    console.log (rows);
});

//default response for any other request (not found)

app.use((req, res)=> {
    res.status(404).end();
});




app.listen (PORT, () => {
    console.log (`Server runnon on port ${PORT}`);
});