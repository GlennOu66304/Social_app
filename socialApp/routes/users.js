const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');

// define the home page route
router.get('/', function (req, res) {
    res.send('this is the user api page')
})

//Account Management

router.post('/register', async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpassword
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

})

// login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found!");

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        !validPassword && res.status(404).json("password not found!");

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }

})

//Update  user
router.put('/:id', async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                });
            res.status(200).json("Acccount has been updated");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only change your account")

    }
});

//delete user
router.delete('/:id', async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findOneAndDelete(req.params.id);
            res.status(200).json("Acccount has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account")

    }
});



module.exports = router