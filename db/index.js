var mysql=require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'study'
})
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'study',
    multipleStatements: true
})
module.exports={
    connection : connection,
    pool : pool
};