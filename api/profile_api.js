const User = require('../model/user');
module.exports.create = async function (req, res) {
    if (req.file) {
        var Avatar = User.avatarPath + '/' + req.file.filename;
    }
    try {
        await User.create({
            name: req.body.name,
            age: req.body.age,
            rollno: req.body.rollno,
            score: req.body.score,
            email: req.body.email,
            avatar: Avatar
        });
        return res.redirect('/users');
        // return res.json(200, {
        //     message: "Profile created succesfully",
        //     data: {
        //         name: req.body.name,
        //         age: req.body.age,
        //         rollno: req.body.rollno,
        //         score: req.body.score,
        //         email: req.body.email,
        //         avatar: Avatar
        //     }
        // }
        // );

    } catch (err) {
        return res.json(200, {
            message: "Unable to create Profile"
        });
    }

}
module.exports.users = function (req, res) {

    User.find({}, function (err, users) {
        if (err) {
            return res.json(200, {
                message: "Unable to render Users"
            });
        }
        console.log(users);
        return res.render('Allusers', {
            title: "Users",
            users:users
        });
    });
}