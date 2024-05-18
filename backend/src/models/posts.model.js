

const getAllPosts = () => {
    return db.query(`
        select
            p.*,
            a.nombre,
            a.email,
            a.imagen
        from posts p
        left join authors a
        on a.id = p.authors_id
    `)
}

const getAllPostsByAuthor = (author_id) => {
    return db.query(`
        select
            p.*,
            a.nombre,
            a.email,
            a.imagen
        from posts p
        left join authors a
        on a.id = p.authors_id
        where p.authors_id = ?
    `,[author_id])
}

const createPost = ({author_id,titulo,descripcion,categoria}) => {
    return db.query('insert into posts (authors_id, titulo, descripcion, categoria) values (?,?,?,?)',[author_id,titulo,descripcion,categoria])
}

module.exports = {
    getAllPosts, getAllPostsByAuthor , createPost
}