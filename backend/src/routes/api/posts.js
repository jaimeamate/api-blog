const router = require('express').Router()
const postsController = require('../../controllers/posts.controller')

router.get('',postsController.getAllPosts)
router.get('/author/:author_id',postsController.getAllAuthorPosts)
router.post('',postsController.createPost)
// router.put('') no se pide
// router.delete('') no se pide

module.exports = router