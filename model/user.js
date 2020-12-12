const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        
        type: String,
        required: true
    },
    score: {
        type: Number,
        required:true
    },  
    age: {
        type: Number,
        required:true
    },
    rollno: {
        type: Number,
        required:true
    },
    avatar: {
        type: String,

    }
}, {
    timestamps: true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})

//static functions

userSchema.statics.uploadedAvatar = multer(
    {
        fileFilter: function (req, file, cb) {
            var filetypes = /jpeg|jpg|png/;
            var mimetype = filetypes.test(file.mimetype);
            var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

            if (mimetype && extname) {
                return cb(null, true);
            }
            cb("File upload only supports the following filetypes - " + filetypes);
            req.flash('error', "supports png and jpg formats only !");
        },
        storage: storage
    }).single('avatar');

userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model('User', userSchema);

module.exports = User;