var db = require("../index.js")
var connection = db.connection ;
var  pool = db.pool ;

//  class exam to connect table exam

class ExamRepository {
    constructor() {

    }

    //  create 50 question for a exam 
    Insert_exam_user = (user, cb) => {
        // not need point row because user just creat a test. there is not point .
        return connection.query("INSERT INTO exam (user_id,point,status) VALUES (?,'null','create')", [user], cb)
    }
    //  update after use submit.
    update_exam_user = (point, id_exam,user,cb) => {
        return connection.query("UPDATE exam SET point = ?, status = 'done' WHERE id = ? AND user_id = ?", [point, id_exam, user], cb)
    }
    //  check the old test has been finished or completed ? or yet :  
    get_old_test = (username, cb) =>{
        return connection.query("SELECT * FROM exam WHERE user_id = ? AND status = 'create'", [username],cb)
    }
      //  get all tests has been completed   
      get_completed_test = (username, cb) =>{
        return connection.query("SELECT * FROM exam WHERE user_id = ? AND status = 'done'", [username],cb)
    }
    

}
module.exports = ExamRepository
