const mongoose =  require('mongoose')
const Schema = mongoose.Schema;
const {appConfig} = require('../config')

const Image = new Schema({
    fileName: {type: String},
    urlFile: {type: String},
    dateUpload: {type: Date,default:Date.now()}
})

Image.methods.setImgUrl = function setImgUrl (fileName) {
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/img/${fileName}.jpg`
}

































module.exports = mongoose.model('Image', Image)