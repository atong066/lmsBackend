const { models: { Post } } = require('../models')

const addPost = async (req, res) => {
    if (req.body.title) {
        try {
            await Post.create(req.body);
            res.json("success")
        } catch (e) {
            res.json(e)
        }
    }
    else {
        res.json({ statuts: 'Failed' })
    }

}

const getAllPosts = async (req, res) => {
    try {
        const Posts = await Post.findAll()
        res.json(Posts)
    }
    catch (e) {
        res.json(e)
    }
}

const getPostById = async (req, res) => {
    try {
        const PostById = await Post.findOne({ where: { id: req.body.id } })
        if (PostById) {
            res.json(PostById)
        }
        else {
            res.json({ status: "No Record" })
        }

    }
    catch (e) {
        res.json(e)
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await findByPk(req.body.id)
        if (post) {
            const postID = await post.destroy()
            if (postID) {
                res.json({ status: "deleted" })
            }
            else {
                res.json({ status: "Faile" })
            }
        }
        else {
            res.json({ status: "No Record Found" })
        }

    }
    catch (e) {

    }
}

const updatePost = async (req, res) => {
    try {
        const post = await findByPk(req.body.id)
        if (post) {
            post.set(req.body)
            try {
                post.save()
                res.json({ status: "updated" })
            }
            catch (e) {
                res.json(e)
            }


        }
        else {
            res.json({ status: "No Record Found" })
        }

    }
    catch (e) {
        res.json(e)
    }
}
module.exports = {
    addPost,
    getAllPosts,
    getPostById,
    deletePost,
    updatePost
}