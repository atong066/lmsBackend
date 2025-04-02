const { models: { PostTopics } } = require('../models')
const { models: { Post } } = require('../models')
const { models: { User } } = require('../models')
const addTopic = async (req, res) => {
    if (req.body.title) {
        try {
            await PostTopics.create(req.body);
            res.json(req.body)
        }
        catch (e) {
            res.json(e)
        }
    }
    else {
        res.send('not added')
    }
}
const getPosts = async (req, res) => {
    try {
        const post = await PostTopics.findAll(
            {
                where: {
                    id: req.body.id
                },
                include: {
                    model: Post,
                    attributes: ['id', 'title', 'desctiption', 'type'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            })
        res.json(post)
    }
    catch (e) {
        res.json(e)
    }
}
const getAllTopics = async (req, res) => {
    try {
        const post = await PostTopics.findAll(
            {
                include: {
                    model: Post,
                    attributes: ['id', 'title', 'desctiption', 'type'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            })
        res.json(post)
    }
    catch (e) {
        res.json(e)
    }
}

const getTopicById = async (req, res) => {
    try {
        const post = await PostTopics.findOne(
            {
                where: { id: req.body.id },
                include: {
                    model: Post,
                    attributes: ['id', 'title', 'desctiption', 'type', 'createdAt'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            })
        res.json(post)
    }
    catch (e) {
        res.json(e)
    }
}
module.exports = {
    addTopic,
    getPosts,
    getAllTopics,
    getTopicById
}