var db = require("./connectdata.js")
var connection = db.connection;
var pool = db.pool;


//  class test to connect table test

class Test {
    constructor() {

    }

    //  create  50 question for a test 
    Insert_test = (data, cb) => {
        // data = 50 question : 50 rows in one exam_id
        return connection.query("INSERT INTO test (exam_id, ques) VALUES ?", [data], cb)
    }
    //  update result when user submit the test
    Get_result_test = (data, cb)=>{
        // update each question. 
        return connection.query("UPDATE test SET yourans = ?", [data], cb)
    }
}
module.exports = Test