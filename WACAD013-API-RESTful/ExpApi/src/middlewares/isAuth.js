const prisma = require("../prisma");

module.exports = async (req, res, next) => {

    const userId = req.cookies.userId;

    if (!userId) {
        return res.status(401).json({
            message: "Usuário não autenticado."
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        },
        include: {
            userType: true
        }
    });

    if (!user) {
        return res.status(401).json({
            message: "Usuário não encontrado."
        });
    }

    req.user = user;

    next();
};