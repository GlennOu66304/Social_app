
const router = require('express').Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('this is the api page')
})


module.exports = router