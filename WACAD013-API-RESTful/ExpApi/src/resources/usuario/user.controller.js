const prisma = require("../../prisma");
const bcrypt = require("bcrypt");
const userSchema = require("./user.validation");

exports.index = async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            userType: true
        }
    });

    res.json(users);
};

exports.read = async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            userType: true
        }
    });

    if (!user)
        return res.status(404).json({
            message: "Usuário não encontrado."
        });

    res.json(user);
};

exports.create = async (req, res) => {

    const { error } = userSchema.validate(req.body);

    if (error)
        return res.status(422).json({
            error: error.details.map(e => e.message)
        });

    const { name, email, password, userTypeId } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hash,
            userTypeId
        }
    });

    res.status(201).json(user);
};

exports.update = async (req, res) => {

    const { id } = req.params;

    const { error } = userSchema.validate(req.body);

    if (error)
        return res.status(422).json({
            error: error.details.map(e => e.message)
        });

    const { name, email, password, userTypeId } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            email,
            password: hash,
            userTypeId
        }
    });

    res.json(user);
};

exports.delete = async (req, res) => {

    const { id } = req.params;

    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });

    res.json({
        message: "Usuário removido."
    });
};