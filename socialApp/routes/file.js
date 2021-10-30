const router = require('express').Router()
const multer = require('multer')
const path = require('path');

// // const upload = multer({ dest: 'uploads/' })



var storage = multer.diskStorage({
    destination: 'upload',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage, limits: { fileSize: 1000000 },

})

// // single file upload
router.post('/profile', upload.single('avatar'), function (req, res, next) {
    //     res.send(req.file)
    // }, (error, req, res, next) => {
    //     res.status(400).send({ error: error.message })

    const files = req.files
    res.send(files)
}, (error, req, res, next) => {
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
})



// multiple file upload
router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    const files = req.files
    res.send(files)
}, (error, req, res, next) => {
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
})


module.exports = router

// sample code
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const router = express.Router()

// // Image Upload
// const imageStorage = multer.diskStorage({
//     destination: 'images', // Destination to store image 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
//         // file.fieldname is name of the field (image), path.extname get the uploaded file extension
//     }
// });

// const imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//         fileSize: 1000000   // 1000000 Bytes = 1 MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(png|jpg)$/)) {     // upload only png and jpg format
//             return cb(new Error('Please upload a Image'))
//         }
//         cb(undefined, true)
//     }
// })

// // For Single image upload
// router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//     res.send(req.file)
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// // For Multiple image uplaod
// router.post('/uploadBulkImage', imageUpload.array('images', 4), (req, res) => {
//     res.send(req.files)
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// // ---------------------------------------------------------------------------- //

// // Video Upload
// const videoStorage = multer.diskStorage({
//     destination: 'videos', // Destination to store video 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
//     }
// });

// const videoUpload = multer({
//     storage: videoStorage,
//     limits: {
//         fileSize: 10000000   // 10000000 Bytes = 10 MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
//             return cb(new Error('Please upload a Video'))
//         }
//         cb(undefined, true)
//     }
// })

// router.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
//     res.send(req.file)
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// module.exports = router
