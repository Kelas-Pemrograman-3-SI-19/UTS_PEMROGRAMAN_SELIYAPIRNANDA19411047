const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const pendaftaranSchema = new Schema({

    nama: {
        type : String
    },

    npm: {
        type : String
    },

    prodi:{
        type : String
    },

    fakultas: {
        type : String
    },
    
    asalsekolah: {
        type : String
    },

    emailstudents: {
        type : String
    },

    hobi: {
        type : String
    },

    tanggallahir: {
        type : String
    },

    organiasasipengalaman: {
        type : String
    },
})

module.exports = mongoose.model('pendaftaran', pendaftaranSchema)