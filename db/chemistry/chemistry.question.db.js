var db = require("../index.js")
var connection = db.connection ;
var  pool = db.pool ;


//  class Chemistry to connect table user
class Chemistry_QuestionRepository {
    constructor() {
    }
    //  insert question to table chemistry and insert anwser to choice table
    Insert_question(data, cb) {
        //  admin input question ? anser
        return connection.query("INSERT INTO chemistry SET ?", data,cb)
    }
    //  get all users from table users
    getAll_question(cb) {
        return connection.query("SELECT * FROM chemistry", cb);
    }
    //  get lever question 
    get_lever_question(lever, cb) {
        //  lever = 1 2 3 4 : dễ , trug binh, khá , khó
        return connection.query("SELECT * FROM chemistry WHERE lever = ?", [lever], cb)
    }
     //  get grade question 
     get_grade_question(grade, cb) {
        //  grade = 10 11 12
        return connection.query("SELECT * FROM chemistry WHERE grade = ?", [grade], cb)
    }
      //  get classy question 
      get_classy_question(classy, cb) {
        //  class = 0 or 1 :  theory or exercises
        return connection.query("SELECT * FROM chemistry WHERE classy = ?", [classy], cb)
    }
     //  get categories question 
     get_categories_question(classy, cb) {
        //  categories = 0 or 1 :  vô cơ or hữu cơ
        return connection.query("SELECT * FROM chemistry WHERE categories = ?", [classy], cb)
    }
      //  get content question 
      get_content_question(content, cb) {
        //  content must different 
        return connection.query("SELECT * FROM chemistry WHERE content = ?", [content], cb)
    }

    //  


    //  update user 
    //  delete user

}

module.exports = Chemistry_QuestionRepository