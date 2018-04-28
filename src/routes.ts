import { GEMS } from './data/gems.data';
import { LootController } from './controllers/loot.controller';
import { IndividualController } from './controllers/individual.controller';
import { RollController } from "./controllers/roll.controller";
import * as express from "express";
import { PIECE_OF_ARTS } from './data/piece-of-art.data';
import { MultipleTrasureController } from './controllers/multiple-treasure.controller';

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    roll_die:"/roll/:diceType",
    roll_dice:"/roll/:diceType/:diceNumber",
    roll_gem:"/gem/:rarity[A-G]",
    roll_gems:"/gem/:rarity[A-G]/:gemNumber",
    rolled_gem:"/rolled/gem/:rarity[A-G]/:dieRolled",
    roll_piece_of_art:"/pieceOfArt/:rarity[A-G]",
    roll_piece_of_arts:"/pieceOfArt/:rarity[A-G]/:pieceOfArtNumber",
    rolled_piece_of_art:"/rolled/pieceOfArt/:rarity[A-G]/:dieRolled",
    individual_loot:"/individual/:challenge",
    rolled_individual_loot:"/individual/:challenge/:dieRolled",
    multiple_loot:"/multipleLoot/:challenge",
    rolled_multiple_loot:"/multipleLoot/:challenge/:dieRolled"
  });
});

app.get(
  "/individual/:challenge",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    res.status(200).json({
      data: IndividualController.Roll(challenge)
    });
  }
);

app.get(
  "/individual/:challenge/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    const dieRolled = req.params["dieRolled"];
    res.status(200).json({
      data: IndividualController.Roll(challenge, dieRolled)
    });
  }
);

app.get(
  "/multipleLoot/:challenge",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    res.status(200).json({
      data: MultipleTrasureController.Roll(challenge)
    });
  }
);

app.get(
  "/multipleLoot/:challenge/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    const dieRolled = req.params["dieRolled"];
    res.status(200).json({
      data: MultipleTrasureController.Roll(challenge, dieRolled)
    });
  }
);

app.get(
  "/roll/:dieType/:dice",
  (req: express.Request, res: express.Response) => {
    const dice = req.params["dice"];
    const dieType = req.params["dieType"];

    const results = RollController.Roll(dieType, dice);

    res.status(200).json({
      data: results
    });
  }
);



app.get("/roll/:diceType", (req: express.Request, res: express.Response) => {
  const diceType = req.params["diceType"];

  const results = RollController.Roll(diceType);

  res.status(200).json({
    data: results
  });
});

// Rarity [A-G]
app.get("/gem/:rarity", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];

  const result = LootController.Roll(GEMS,rarity);

  res.status(200).json({
    data:result
  });
});

app.get("/gem/:rarity/:gemNumber", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];
  const gemNumber: number = req.params["gemNumber"];

  const results = LootController.Roll(GEMS,rarity, gemNumber);

  res.status(200).json({
    data:results
  });
});

app.get("/rolled/gem/:rarity/:dieRolled", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];
  const dieRolled: number = req.params["dieRolled"];

  const result = LootController.Rolled(GEMS,rarity, dieRolled);

  res.status(200).json({
    data:result
  });
});

// Rarity [A-G]
app.get("/pieceOfArt/:rarity", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];

  const result = LootController.Roll(PIECE_OF_ARTS,rarity);

  res.status(200).json({
    data:result
  });
});

app.get("/pieceOfArt/:rarity/:pieceOfArtNumber", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];
  const pieceOfArtNumber: number = req.params["pieceOfArtNumber"];

  const results = LootController.Roll(PIECE_OF_ARTS,rarity, pieceOfArtNumber);

  res.status(200).json({
    data:results
  });
});

app.get("/rolled/pieceOfArt/:rarity/:dieRolled", (req: express.Request, res:express.Response)=>{
  const rarity: string = req.params["rarity"];
  const dieRolled: number = req.params["dieRolled"];

  const result = LootController.Rolled(PIECE_OF_ARTS,rarity, dieRolled);

  res.status(200).json({
    data:result
  });
});


export var Routes: express.Express = app;
