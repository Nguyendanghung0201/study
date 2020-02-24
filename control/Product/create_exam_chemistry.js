const Test = require("../../database/create_test.js")
const Exam = require("../../database/examUser.js")
const Chemistry = require("../../database/chemistry.js")
const User = require("../../database/user.js")

class CreateTest_service {
    constructor() {
        this.TestRepository = new Test;
        this.ExamRepository = new Exam;
        this.chemistryRepository = new Chemistry;
        this.userRepository = new User;
    }
    //  api service create 1 exam has 50 question in test table 
    create_value_insert = (data, value, exam_id) => {
    
        let max_radom = data.length
        let theory = practice = voco= huuco = 0
        for (let i = 0; i <= data.length; i++) {
            let ques_rd = Math.floor(Math.random() * max_radom)
            let ques_ele = [exam_id, data[ques_rd].id]
            if (!value.includes(ques_ele)) {
                if (value.length == 50) {
                    break
                }
                if (data[ques_rd].categories == 0 && voco <=30) {
                    value.push(ques_ele)
                    voco++
                } else {
                    if (huuco <= 30) {
                        value.push(ques_ele)
                        huuco++
                    }

                }

            }

        }

    }
    CreateTest_exam = (req, res) => {
        let { username, grade } = req.body
        console.log(req.body)
        //  radom 50 question from chemistry table with 25 theory : 25 practice 
        this.userRepository.GetUsername(username, (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                this.ExamRepository.Insert_exam_user(username, (err, result) => {
                    if (err) throw err
                    let exam_id = result.insertId
                    this.chemistryRepository.get_grade_question(grade,async (err, result) => {
                        if (err) throw err
                        var data = JSON.parse(JSON.stringify(result))
                        
                        var value = []
                        // function create value 50 question to insert test table
                        await this.create_value_insert(data, value, exam_id)
                     
                        this.TestRepository.Insert_test(value, (err, result)=>{
                            if (err) throw err
                            //  Get data question to sent client
                            this.TestRepository.Get_question_test(exam_id, (err, result)=>{
                                if (err) throw err
                                let data_test =  JSON.parse(JSON.stringify(result))
                                res.send({data_test})
                            })
                        })


                    })
                })
            }
        })
    }

}

module.exports = CreateTest_service

