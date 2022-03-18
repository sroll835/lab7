'use strict'

const multer = require('multer')
const path = require('path')
const { createBrotliCompress } = require('zlib')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,'../upload'))
    },
    filename: function(req, file, cb){
        cb(null,`${file.filename}-${Date.now()}.${file.mimetyoe.split('/')[1]}`)
    }
})

module.exports = Storage