import games from "../models/game.models.js";

export const findAll = (_, res) => {
    return res.status(200).json(games);
}

export const findOne = (req, res) => {
    if(!isNaN(req.params.id)){
        const id = parseInt(req.params.id);
        const game= games.find(g => g.id == id);

        if(game){
            return res.status(200).json(game);
        }else{
            return res.sendStatus(404);
        }
    }else{
        res.sendStatus(400);
    }
}