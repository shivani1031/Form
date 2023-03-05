const express = require('express');
const router = express.Router();
require('../config');
const User = require('../db/User');

router.get('/', (req, resp) => {
    resp.send("hello, this is homsdfsde");
});

// router.post('/register', (req, resp) => {
//     const { name, email, phone, work, password, cpassword } = req.body

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return resp.status(422).json({ error: "plz fill the details properly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return resp.status(422).json({ error: "email already exist" });

//             }

//             const user = new User({ name, email, phone, work, password, cpassword })
//             user.save().then(() => {
//                 resp.status(201).json({ message: "user registered successfully" });
//             }).catch((err) => resp.status(500).json({ err: "failed to register" }));
//         }).catch(err => { console.log(err); });
//     // console.log(req.body);    // to get the whole body
//     //   console.log(name);
//     //   console.log(email);
//     //resp.json({message:req.body});
//     //    resp.send("mera");
// });

router.post('/register', async (req, resp) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return resp.status(422).json({ error: "plz fill the details properly" });
    }

    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return resp.status(422).json({ error: "email already exist" });

        }
        const user = new User({ name, email, phone, work, password, cpassword });

        const userRegister = await user.save();

        if (userRegister) {
            resp.status(201).json({ message: "user registered successfully" });

        }
        else {
            resp.status(500).json({ err: "failed to register" });
        }
    } catch (err) {
        console.log(err);
    }



});

router.get('/login', (req, resp) => {
    resp.send("hello, this is login");
});


module.exports = router;