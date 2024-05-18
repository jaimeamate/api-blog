const authorsModel =  require('../models/authors.model')

const getAllAuthors = async (req,res,next) => {
    try {
        const [result] = await authorsModel.getAllAuthors()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const createAuthor = async (req,res,next) => {
    try {
        const [newAuthor] = await authorsModel.createAuthor(req.body)
        res.json(newAuthor)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAuthors, createAuthor
}