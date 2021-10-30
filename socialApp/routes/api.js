
const router = require('express').Router()
const QRCode = require('qrcode')
// define the home page route
router.get('/', function (req, res) {
    res.send('this is the api page')
})

router.post('/qr', function (req, res) {
    // const input_text = 'I am a pony!'
    const input_text = req.body.text;
    QRCode.toDataURL(input_text, function (err, url) {
        console.log(url)
    })
    // QRCode.toDataURL('I am a pony!', function (err, url) {
    //     console.log(url)
    // })
})

module.exports = router