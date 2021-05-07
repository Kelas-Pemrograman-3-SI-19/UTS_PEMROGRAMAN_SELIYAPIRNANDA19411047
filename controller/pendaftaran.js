const pendaftaranModel = require ('../model/pendaftaran')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        pendaftaranModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input pendaftaran'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input pendaftaran'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        pendaftaranModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        pendaftaranModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })