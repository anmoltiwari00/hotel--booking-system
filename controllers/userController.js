var User = require('../models/user');

var userController = {};

userController.create = (req, res) => {
  var newUser = new User(req.body);

  newUser.save()
    .then(item => res.send(`${item} created.`))
    .catch(err => console.log(`${err}`));
}

userController.update = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name, email: req.body.email, phone: req.body.phone } }
  ).then(item => res.send(`${item} updated.`))
   .catch(err => console.log(`${err}`));
}

userController.delete = (req, res) => {
  User.remove({_id: req.params.id})
    .then(item => res.send(`${item} deleted.`))
    .catch(err => console.log(`${err}`));
}

module.exports = userController;
