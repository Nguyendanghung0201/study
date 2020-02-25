var mysql=require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studydata'
})
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studydata',
    multipleStatements: true
})
module.exports={
    connection : connection,
    pool : pool
};