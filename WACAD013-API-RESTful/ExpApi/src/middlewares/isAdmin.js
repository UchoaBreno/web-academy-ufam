module.exports = (req, res, next) => {

    if (req.user.userType.name !== "Administrador") {
        return res.status(403).json({
            message: "Acesso negado."
        });
    }

    next();
};