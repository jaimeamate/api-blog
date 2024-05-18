const router = require('express').Router()
const authorsController = require('../../controllers/authors.controller')

router.get('',authorsController.getAllAuthors)
router.post('',authorsController.createAuthor)
// router.put('') no se pide
// router.delete('') no se pide


module.exports = router