const mysql =require ('mysql2');

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

module.exports =db;