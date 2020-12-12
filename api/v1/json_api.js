const User = require('../../model/user');
module.exports.users = function (req, res) {

    User.find({}, function (err, users) {
        if (err) {
            return res.json(500, {
                message: "Unable to render Users"
            });
        }
        return res.json(200, {
            message: "All Users",
            users:users
        });
    });
}