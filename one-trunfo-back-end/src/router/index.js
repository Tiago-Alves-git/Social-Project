const router = require('express').Router();
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes ');
const categoriesRoutes = require('./categories-routes');
const postRoutes = require('./post-routes');
// const postUploads = require('./uploads-routes');


router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/post', postRoutes);
// router.use('/uploads' , postUploads);

module.exports = router;