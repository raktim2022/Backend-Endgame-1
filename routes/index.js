var express = require('express');
var router = express.Router();
const usermodule = require("./users")
/* GET home page. */
router.get('/', function (req, res) {
  res.cookie("age", 25);
  res.render('index', { title: 'Express' });
});

router.get("/read", function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
});
router.get("/clear", function (req, res) {
  res.clearCookie("age");
  res.send("clear");
});
// router.get('/', function (req, res, next) {
//   req.session.ban = true;
//   res.render('index', { title: 'Express' });
// });
// router.get("/checkban", function (req, res, next) {
//   if (req.session.ban == true) {
//     res.send("You are banned");
//   }
//   else {
//     res.send("not banned");
//   }
// });
// router.get("/removeban", function (req, res) {
//   req.session.destroy(function (err) {
//     if (err) throw err;
//     res.send("Bann removed");
//   })
// });
// router.get('/create',async function (req, res, next) {
//   const createduser = await usermodule.create({
//     username: "raktim",
//     age: 25,
//     name: "harsh"
//   });
//   res.send(createduser);
// });

// router.get("/alluser", async function (req, res) {
//   let alluser = await usermodule.find();
//   res.send(alluser);
// })
// router.get("/oneuser", async function (req, res) {
//   let alluser = await usermodule.findOne({ username:"harsh"});
//   res.send(alluser);
// })
// router.get("/delete", async function (req, res) {
//   let deleteuser = await usermodule.findOneAndDelete({
//     username:"harsh",
//   });
//   res.send(deleteuser);
// })
module.exports = router;
