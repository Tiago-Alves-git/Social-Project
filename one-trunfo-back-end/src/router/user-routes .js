const userRoutes = require('express').Router();
const controllerUser = require('../controller/user-controller');
const { tokenValidate } = require('../middleware/tokenValidate');
const { validName, validEmail,
  validPassword } = require('../middleware/userValidate');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads') },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`) }
})

const upload = multer({ storage });

userRoutes.post('/', upload.single('image'), validEmail, validName, validPassword, controllerUser.signUp);

userRoutes.get('/', tokenValidate, controllerUser.findAllUsers);

userRoutes.get('/:id', tokenValidate, controllerUser.findUserById);

userRoutes.delete('/me', tokenValidate, controllerUser.deleteMe);

module.exports = userRoutes;