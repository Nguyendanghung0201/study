const express = require("express")
const router = express.Router();
//  service : User, chemstry 
var chemistryService = require('./service/chemistryservice/chemistry.test.service')
var ChemistryControll = new chemistryService
//  page home chemistry
router.get('/', (req, res) => {
    ChemistryControll.render_chemistry_page(req, res)
})

// page add question for admin
router.get('/create_question_chemistry', (req, res) => {
    res.render('admin_add_question')
})
router.get('/:username/:grade', (req, res) => {
    ChemistryControll.CreateTest_exam(req, res)
})
//  api post

// //  admin insert question 
// router.post("/api/create_question_chemistry", (req, res) => {
//     chemistryService.Create_question(req, res)
// })
// //  end insert question
// //  api create a test
// router.post("/api/create_test_chemistry", (req, res) => {
//     Create_exam_chemistry.CreateTest_exam(req, res)
// })
// //  end create a test
// //  get old test 
// router.post("/api/get_old_test_chemistry", (req, res) => {
//     Create_exam_chemistry.Get_old_test(req, res)
// })
// // submit the test
// router.post("/api/update_point_chemistry", (req, res) => {
//     Create_exam_chemistry.submit_test_chemistry(req, res)
// })


module.exports = router