export const validateId = (req, res, next) => {
    if (isNaN(req.params.id)){
        return res.status(400).json({message: "Id precisa ser um número."});
    }

    req.params.id = parseInt(req.params.id);

    next();

}