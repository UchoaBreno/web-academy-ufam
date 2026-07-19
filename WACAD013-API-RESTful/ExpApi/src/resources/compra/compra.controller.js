const prisma = require("../../prisma");

exports.adicionar = async (req, res) => {

    const { productId, quantity } = req.body;

    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if (!product) {
        return res.status(404).json({
            message: "Produto não encontrado."
        });
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    req.session.cart.push({
        productId,
        quantity
    });

    res.json({
        message: "Produto adicionado ao carrinho.",
        cart: req.session.cart
    });

};

exports.visualizar = (req, res) => {

    res.json(req.session.cart || []);

};

exports.finalizar = async (req, res) => {

    if (!req.session.cart || req.session.cart.length === 0) {
        return res.status(400).json({
            message: "Carrinho vazio."
        });
    }

    const userId = 3;

    const compra = await prisma.compra.create({
        data: {
            userId
        }
    });

    for (const item of req.session.cart) {

        const product = await prisma.product.findUnique({
            where: {
                id: item.productId
            }
        });

        if (!product) continue;

        await prisma.compraItem.create({
            data: {
                compraId: compra.id,
                productId: product.id,
                quantity: item.quantity,
                price: product.price
            }
        });

    }

    req.session.cart = [];

    res.json({
        message: "Compra finalizada.",
        compraId: compra.id
    });

};