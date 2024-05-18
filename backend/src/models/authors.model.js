

const getAllAuthors = () => {
    return db.query('select * from authors')
}

const createAuthor = ({nombre,email,imagen}) => {
    return db.query('insert into authors (nombre,email,imagen) values (?,?,?)',[nombre,email,imagen])
}

module.exports = {
    getAllAuthors, createAuthor
}