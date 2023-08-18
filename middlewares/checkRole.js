function checkRole(account){
    return (req, res, next) => {
        if(req.user && req.user.account === account){
            return next()
        }
        return res.status(403).json({error: "Unauthorized access"})
    }
}

module.exports = checkRole