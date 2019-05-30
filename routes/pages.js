const router = require('express').Router();
//Create our router
//Our controllers
const PagesControllers = require('../controllers/pagesControllers')

//Create routes
router.get('/', PagesControllers.show)
router.get('/about', PagesControllers.show)
router.get('/contact', PagesControllers.show)

module.exports = router;

