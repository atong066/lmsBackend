const { models: { Replies } } = require('../models')
const { models: { User } } = require('../models')

const addReply = async (req, res) => {
    try {
        await Replies.create(req.body)
        res.json({ success: true, msg: "added" })
    }
    catch (e) {
        res.json(e)
    }
}

const getPostReply = async (req, res) => {
    try {
        const replies = await Replies.findAll(
            {
                where:
                {
                    postId: req.body.id
                },
                include:
                {
                    model: User,
                    attributes: ["username"]
                },
                order: [['createdAt', 'ASC']]
            })
        res.json(replies)
    }
    catch (e) {
        res.json(e)
    }
}
module.exports = { addReply, getPostReply }