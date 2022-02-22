const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin")


router.get("/admin/mahasiswa-kelasb", adminControllers.getAdminPage)
router.post("/admin/post/kelasb", adminControllers.postAdmin)

router.get("/admin/kelas-gender", adminControllers.getInputGender);
router.post("/admin/post/kelas-gender", adminControllers.postInputGender)

module.exports = router;