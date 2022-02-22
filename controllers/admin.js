const KelasB = require("../models/kelasb");
const KelasGender = require("../models/kelasgender");

exports.getAdminPage = (req,res,next)=>{
    res.render("admin/admin.ejs")
}
exports.postAdmin = (req, res, next)=>{
    const nama = req.body.inputNama;
    const nim = req.body.inputNim;
    const kelasb = new KelasB({
        nama: nama,
        NIM: nim
    });
    kelasb.save().then(()=>{
        res.redirect("/admin");
    }).then((err) => {
        console.log(err);
    })
}

exports.getInputGender = (req, res, next) => {
    res.render("admin/kelasgender.ejs");
}
exports.postInputGender = (req, res, next)=>{
    const nama = req.body.inputNama;
    const nim = req.body.inputNim;
    const kelasGender = new KelasGender({
        nama: nama,
        NIM: nim
    });
    kelasGender.save().then(()=>{
        res.redirect("/admin/kelas-gender")
    }).catch(err => {
        console.log(err);
    })
}