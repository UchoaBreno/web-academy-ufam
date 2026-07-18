const prisma = require("../prisma");
const productSchema = require("../validations/product.validation");

exports.index = async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
};

exports.read = async (req, res) => {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
        where: { id: Number(id) }
    });

    if (!product)
        return res.status(404).json({ message: "Produto não encontrado" });

    res.json(product);
};

exports.create = async (req, res) => {

    const { error } = productSchema.validate(req.body);

    if (error) {
        return res.status(422).json({
            error: error.details.map(err => err.message)
        });
    }

    const { name, price, description } = req.body;

    const product = await prisma.product.create({
        data: {
            name,
            price,
            description
        }
    });

    res.status(201).json(product);
};

exports.update = async (req, res) => {

    const { error } = productSchema.validate(req.body);

    if (error) {
        return res.status(422).json({
            error: error.details.map(err => err.message)
        });
    }

    const { id } = req.params;
    const { name, price, description } = req.body;

    const product = await prisma.product.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            price,
            description
        }
    });

    res.json(product);
};

exports.delete = async (req, res) => {

    const { id } = req.params;

    await prisma.product.delete({
        where: {
            id: Number(id)
        }
    });

    res.json({
        message: "Produto removido."
    });
};