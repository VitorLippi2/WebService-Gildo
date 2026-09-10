import games from "../models/game.models.js";

export const findAll = (_, res) => {
    return res.status(200).json(games);
}

export const findOne = (req, res) => {
    const {id} = req.params;

    const game = games.find(g => g.id == id);

    if (game){
        return res.status(200).json(game);
    }else{
        return res.sendStatus(404);
    }
}

export const create = (req, res) => {
    console.log(req.body);
    const {id, title, price, year} = req.body;

    games.push({
        id, title, price, year
    });

    return res.sendStatus(200);
} 
