const KelasB = require("../models/kelasb");
const KelasGender = require("../models/kelasgender");

let data = undefined;

exports.getInput = (req, res, next)=> {
    res.render("checker/checker.ejs", {
        tidakhadir: data,
    });
    data = undefined;
};

exports.postInput = (req, res, next)=>{
    const listNim =  req.body.listNim;
    const selectOpt = req.body.selection;
    let arrNim = listNim.split(/\r?\n/).map(a => {
        return parseInt(a);
    });
    if (selectOpt == 1) {
        KelasB.find({NIM : {$nin: arrNim}}).then((mahasiswa)=>{
            data = mahasiswa;
            res.redirect("/");
        });
    }
    if (selectOpt == 2) {
        KelasGender.find({NIM : {$nin: arrNim}}).then((mahasiswa)=>{
            data = mahasiswa;
            res.redirect("/");
        });
    }
    
}