
const validation = require('../middleware/validation')
const db = require('../models');
const { Op, INTEGER } = require('sequelize');
const createProject = async (req, res) => {
    const { name, price, style, description } = req.body;
    const { userId } = req.user;
    try {
        if (name == '' || price == '' || description == '' || style == '') {
            return res.status(401).json({ error: 'Please enter all fields' });
        }
        const Project = await db.Galery_project.create({
            staff_id: userId,
            name,
            price,
            style,
            description,
        });
        res.status(201).json(Project);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllProject = async (req, res) => {
    try {
        const project = await db.Galery_project.findAll({
            order: [['createdAt', 'DESC']] // Sắp xếp theo thời gian tạo giảm dần
        });

        if (project.length === 0) {
            return res.status(401).json({ error: 'Dont have any project, please create new!' });
        }
        return res.status(200).json({ project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const detailProject = async (req, res) => {
    const project_id = req.params.id;
    console.log("check id:", project_id);
    try {
        const project = await db.Galery_project.findOne({
            where: { id: project_id },
        });

        if (!project) {
            return res.status(401).json({ error: 'Project not found' });
        }

        return res.status(200).json({ project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


let updateProject = async (req, res) => {
    const { description, price, name } = req.body;
    const {userId} = req.user;
    try {
        const projectID = req.params.id;
        if (name == '' || price == '' || description == '') {
            return res.status(401).json({ error: 'Please enter all fields' });
        }
        // Find the blog by id
        const project = await db.Galery_project.findOne({
            where: { id: projectID },
        });

        if (!project) {
            return res.status(404).json({ error: 'Feed Back not found' });
        }
        await project.update({ staff_id: userId, name, price, description });
        await project.save;

        // Return the updated blog detail
        res.status(200).json({ project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// let hiddenProject = async (req, res) => {
//     try {
//         const projectID = req.params.id;

//         const project = await db.Galery_project.findOne({
//             where: { project_id: projectID, status: 1 },
//         });

//         if (!project) {
//             return res.status(404).json({ error: 'Project not found' });
//         }

//         await project.update({ status: 0 });
//         await project.save;

//         // Return the updated blog detail
//         res.status(200).json({ project });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// let restoreProject = async (req, res) => {
//     try {
//         const projectID = req.params.id;

//         const project = await db.Galery_project.findOne({
//             where: { project_id: projectID, status: 0 },
//         });

//         if (!project) {
//             return res.status(404).json({ error: 'Project not found' });
//         }

//         await project.update({ status: 1 });
//         await project.save;

//         // Return the updated blog detail
//         res.status(200).json({ project });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

const searchByName = async (req, res) => {
    const { keyword } = req.body;
    try {
        const project = await db.Galery_project.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%`
                }
            }
        });
        if (project == '') {
            return res.status(401).json({ error: 'Could not find project name containing keywords' + keyword });
        }
        return res.status(200).json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {
    createProject, getAllProject, detailProject, updateProject, searchByName
}