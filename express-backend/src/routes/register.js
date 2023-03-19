const express = require("express");
const router = express.Router();
const { addUser } = require("../db/queries/register");

// ('Randy', 'games@testing.com', 'password', '333-333-3333', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8b43d3f6ca573fd85afe0c6df608062c.jpg', 'https://www.hindustantimes.com/ht-img/img/2023/02/15/1600x900/Death_Note_is_usually_the_first_anime__1676437361142_1676437361490_1676437361490.jpg', 'F', 'M', 'hello, there anime is my anme');

router.get("/", (req, res) => {
  res.json("Hello");
});

router.post("/", (req, res) => {
  const details = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    profile_picture: req.body.profile_picture,
    cover_picture: req.body.cover_picture,
    gender_identity: req.body.gender_identity,
    gender_preference: req.body.gender_preference,
    summary: req.body.summary,
   }; 
  //  res.redirect("/testingRoute")
  addUser(details)
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  
});
// router.post("/testingRoute", (req, res) => {
//   console.log("hello")
// })

module.exports = router;
// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
