const validation = require('../middleware/validation')
const db = require('../models');
const { Op, INTEGER } = require('sequelize');
const createFeedBack = async (req, res) => {
    const { comment, rating } = req.body;
    const { userId } = req.user;
    const project_id = req.params.id;
    try {
        if (rating == '') {
            return res.status(401).json({ error: 'You have not rated it yet' });
        }
        const newFeedBack = await db.FeedBack.create({
            project_id,
            customer_id: userId,
            comment,
            rating,
        });
        res.status(201).json(newFeedBack);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllFeedBack = async (req, res) => {
    try {
        const feedbacks = await db.FeedBack.findAll({
            order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
        });

        if (feedbacks.length === 0) {
            return res.status(401).json({ error: 'Dont have any feed back, please create new!' });
        }

        let totalRating = 0;
        let countFeedBack = 0;
        for (let feedback of feedbacks) {
            totalRating += parseInt(feedback.rating);
            countFeedBack++;
        }
        const averageRating = totalRating / countFeedBack;

        return res.status(200).json({ averageRating, feedbacks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let hiddenFeedBack = async (req, res) => {
    try {
        const feedBackID = req.params.id;
        const feedBack = await db.FeedBack.findOne({
            where: { id: feedBackID, status: 1 },
        });

        if (!feedBack) {
            return res.status(404).json({ error: 'Feed Back not found' });
        }

        await feedBack.update({ status: 0 });
        await feedBack.save;

        // Return the updated blog detail
        res.status(200).json({ feedBack });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let restoreFeedBack = async (req, res) => {
    try {
        const feedBackID = req.params.id;

        const feedBack = await db.FeedBack.findOne({
            where: { id: feedBackID, status: 0 },
        });

        if (!feedBack) {
            return res.status(404).json({ error: 'Feed Back not found' });
        }

        await feedBack.update({ status: 1 });
        await feedBack.save;

        // Return the updated blog detail
        res.status(200).json({ feedBack });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let updateFeedBack = async (req, res) => {
    const { project_id, comment, rating } = req.body;
    const { userId } = req.user;
    try {
        const feedBackID = req.params.id;
        if (rating == '') {
            return res.status(401).json({ error: 'Rating are not blank' });
        }
        // Find the blog by id
        const feedBack = await db.FeedBack.findOne({
            where: { id: feedBackID },
        });

        if (!feedBack) {
            return res.status(404).json({ error: 'Feed Back not found' });
        }
        await feedBack.update({ customer_id: userId, project_id, comment, rating });
        await feedBack.save;

        // Return the updated blog detail
        res.status(200).json({ feedBack });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let positiveFeedBack = async (req, res) => {
    try {
        const feedbacks = await db.FeedBack.findAll({
            where: {
                rating: {
                    [Op.gte]: 4 // [Op.gte] là toán tử "greater than or equal" (lớn hơn hoặc bằng)
                }
            },
            attributes: ['rating', 'comment'], // Chỉ lấy hai trường rating và comment
            order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
        });

        if (feedbacks.length === 0) {
            return res.status(401).json({ error: 'Dont have any feed back, please create new!' });
        }

        let countFeedBack = 0; // Đếm số lượng feedback có rating lớn hơn hoặc bằng 4
        for (let feedback of feedbacks) {
            if (feedback.rating) { // Chỉ tính tổng rating cho các feedback có rating lớn hơn hoặc bằng 4
                countFeedBack++;
            }
        }
        return res.status(200).json({ countFeedBack, feedbacks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let negativeFeedBack = async (req, res) => {
    try {
        const feedbacks = await db.FeedBack.findAll({
            where: {
                rating: {
                    [Op.lte]: 2 
                }
            },
            attributes: ['rating', 'comment'], // Chỉ lấy hai trường rating và comment
            order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
        });

        if (feedbacks.length === 0) {
            return res.status(401).json({ error: 'Dont have any feed back, please create new!' });
        }

        let countFeedBack = 0; // Đếm số lượng feedback có rating lớn hơn hoặc bằng 4
        for (let feedback of feedbacks) {
            if (feedback.rating) { // Chỉ tính tổng rating cho các feedback có rating lớn hơn hoặc bằng 4
                countFeedBack++;
            }
        }
        return res.status(200).json({ countFeedBack, feedbacks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let getAllFeedBackByRating = async (req, res) => {
    try {
        const role = req.user
        if (role == "ADMIN" || role == "STAFF") {
            const { ratingNumber } = req.body;
            const feedbacks = await db.FeedBack.findAll({
                where: {
                    rating: ratingNumber
                },
                order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
            });
            if (feedbacks.length === 0) {
                return res.status(401).json({ error: 'Dont have any feedback with rating 2, please create new!' });
            }
            return res.status(200).json({ feedbacks });
        } else {
            const { ratingNumber } = req.body;
            const feedbacks = await db.FeedBack.findAll({
                where: {
                    rating: ratingNumber
                },
                attributes: ['rating', 'comment'], // Chỉ lấy hai trường rating và comment
                order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
            });

            if (feedbacks.length === 0) {
                return res.status(401).json({ error: 'Dont have any feedback with rating 2, please create new!' });
            }
            return res.status(200).json({ feedbacks });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    createFeedBack, getAllFeedBack, hiddenFeedBack, restoreFeedBack, updateFeedBack, positiveFeedBack, negativeFeedBack, getAllFeedBackByRating
}