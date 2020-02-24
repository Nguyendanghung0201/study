var db = require("./connectdata.js")
var connection = db.connection;
var pool = db.pool;


//  class exam to connect table exam

class Exam {
    constructor() {

    }

    //  create 50 question for a exam 
    Insert_exam_user = (user, cb) => {
        // not need point row because user just creat a test. there is not point .
        return connection.query("INSERT INTO exam (user_id,point) VALUES (?,'null')", [user], cb)
    }
    //  update after use submit.
    Update_exam_user = (point, cb) => {
        return connection.query("UPDATE exam SET point = ?", [point], cb)
    }
    

}
module.exports = Exam
