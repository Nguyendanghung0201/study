const User = require("../../database/user.js");
// JWT
var jwt = require('jsonwebtoken');
var secret = "danghungnguyenhuong";

//  User
class User {
    constructor() {
        //  using User connect to database
        this.userRepository = new User
       
    }
//     get profile user
   get_profile = (req, res)=>{
       let { username } = req.params
       this.userRepository.GetUsername(username, (err, result)=>{
           if(err) throw err
           res.send({result : JSON.parse(JSON.stringify(result))[0]})
       })
   }
//    Register with Facebook account 

}
module.exports = User