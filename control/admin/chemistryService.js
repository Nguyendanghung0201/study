const chemistry = require("../../database/chemistry.js");

let chemistryRepository = new chemistry;
//  service
class servicechemistry {
    constructor() {
        this.chemistryRepository = new chemistry;
    }


    //  api post input question to database
    Create_question = (req, res) => {
        let { content, answer, grade, lever, classy, categories, method, choose1, choose2, choose3 } = req.body;
        let value = { content, answer, grade, lever, classy, categories, method }
        //   check content , answer, choose1 ,choose2 ,choose3 : data = req.body 
        if (content != undefined && answer != undefined && choose1 != undefined && choose2 != undefined && choose3 != undefined) {
            //  ckeck content 
            this.chemistryRepository.get_content_question(content.trim(), (err, result) => {
                if (err) throw err
                if (result.length > 0) {
                    //    maybe this question was already had : check res to continue
                    res.json({ result: JSON.parse(JSON.stringify(result))[0] })
                } else {
                    this.chemistryRepository.Insert_question(value, answer, choose1, choose2, choose3, (err, result) => {
                        if (err) throw err
                        res.json({ result: "ok" })
                    })
                }

            })

        } else {
            res.json({ result: "empty input" })
        }
    }
    //     end input question to database
     
}
module.exports = servicechemistry