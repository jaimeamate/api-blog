const postsModel =  require('../models/posts.model')

const getAllPosts = async (req,res,next) => {
    try {
        const [result] = await postsModel.getAllPosts()
        res.json(result)
    } catch (error) {
        next(error)
    }
}
const getAllAuthorPosts = async (req,res,next) => {
    try {
        const {author_id} = req.params
        const [result] = await postsModel.getAllPostsByAuthor(author_id)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const createPost = async (req,res,next) => {
    try {
        const [newPost] = await postsModel.createPost(req.body)
        res.json(newPost) 
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPosts, getAllAuthorPosts, createPost
}