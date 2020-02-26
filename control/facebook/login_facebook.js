const passport = require('passport');
const User = require("../../database/user.js");

class LOGIN_FB {
    constructor(){
        this.userRepository = new User
    }
    Get_infor = (accessToken, refreshToken, profile, done)=>{
        this.userRepository.GetUsername(profile.displayName, (err, result)=>{
            if(err) throw err
            if(result.length > 0){
                return done(null, profile);
            }else{
                let value = {
                    username : profile.displayName,
                    email : profile.emails[0].value,
                    avatar : profile.photos[0].value
                }
                this.userRepository.Insert_users(value,(err, result)=>{
                    if(err) throw err
                    return done(null, profile);
                })
               
            }
        })
       
    }
}
module.exports = LOGIN_FB