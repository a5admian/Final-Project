let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/login',indexController.displayLoginPage);
router.post('/login',indexController.processLoginPage);
router.get('/register',indexController.displayRegisterPage);
router.post('/register',indexController.processRegisterPage);
router.get('/logout',indexController.performLogout);

module.exports = router;
