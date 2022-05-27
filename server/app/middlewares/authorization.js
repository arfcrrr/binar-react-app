const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

module.exports = {
    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split('Bearer ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET || "Secret");

            req.user = await userRepository.findByPk(payload.id);
            next();
        } catch (err) {
            res.status(401).json({
                status: "Unauthorized",
                message: err.message,
            });
        }
    },

    async authorizeAdmin(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split('Bearer ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET || "Secret");

            req.user = await userRepository.findByPk(payload.id);

            // authorize user's role
            if (req.user.role === 'admin' || req.user.role === 'superadmin') {
                next();
            }
        } catch (err) {
            res.status(401).json({
                status: "Unauthorized",
                message: err.message,
            });
        }
    },

    async authorizeSuperAdmin(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split('Bearer ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET || "Secret");

            req.user = await userRepository.findByPk(payload.id);

            // authorize user's role
            if (req.user.role === 'superadmin') {
                next();
            }
        } catch (err) {
            res.status(401).json({
                status: "Unauthorized",
                message: err.message,
            });
        }
    },
}