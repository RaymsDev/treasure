import { GEMS } from "./data/gems.data";
import { LootController } from "./controllers/loot.controller";
import { IndividualController } from "./controllers/individual.controller";
import { RollController } from "./controllers/roll.controller";
import * as express from "express";
import { PIECE_OF_ARTS } from "./data/piece-of-art.data";
import { MultipleTrasureController } from "./controllers/multiple-treasure.controller";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    roll_die: "/roll/:diceType",
    roll_dice: "/roll/:diceType/:diceNumber",
    roll_gem: "/gem/:rarity[A-G]",
    roll_gems: "/gem/:rarity[A-G]/:gemNumber",
    rolled_gem: "/rolled/gem/:rarity[A-G]/:dieRolled",
    roll_piece_of_art: "/pieceOfArt/:rarity[A-G]",
    roll_piece_of_arts: "/pieceOfArt/:rarity[A-G]/:pieceOfArtNumber",
    rolled_piece_of_art: "/rolled/pieceOfArt/:rarity[A-G]/:dieRolled",
    individual_loot: "/individual/:challenge",
    rolled_individual_loot: "/individual/:challenge/:dieRolled",
    multiple_loot: "/multipleLoot/:challenge",
    rolled_multiple_loot: "/multipleLoot/:challenge/:dieRolled"
  });
});

app.get(
  "/individual/:challenge",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];

    IndividualController.Roll(challenge)
    .then(loots=>{
      res.status(200).json({
        data: loots
      });
    })
    .catch(error=>{
      console.error(error);
      res.sendStatus(500);
    });
  }
);

app.get(
  "/individual/:challenge/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    const dieRolled = req.params["dieRolled"];

    IndividualController.Roll(challenge, dieRolled)
    .then(loots=>{
      res.status(200).json({
        data: loots
      });
    })
    .catch(error=>{
      console.error(error);
      res.sendStatus(500);
    });


  }
);

app.get(
  "/multipleLoot/:challenge",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    MultipleTrasureController.Roll(challenge)
    .then(loots=>{
     res.status(200)
     .json({
       data:loots
     })
    })
    .catch(error=>{
      console.log(error);
      res.sendStatus(500);
    });
  }
);

app.get(
  "/multipleLoot/:challenge/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const challenge = req.params["challenge"];
    const dieRolled = req.params["dieRolled"];

    MultipleTrasureController.Roll(challenge, dieRolled)
    .then(loots=>{
     res.status(200)
     .json({
       data:loots
     })
    })
    .catch(error=>{
      console.log(error);
      res.sendStatus(500);
    });
  }
);

app.get(
  "/roll/:dieType/:dice",
  (req: express.Request, res: express.Response) => {
    const dice = req.params["dice"];
    const dieType = req.params["dieType"];

     RollController.Roll(dieType, dice).then(results=>{
      res.status(200).json({
        data: results
      });
    })
    .catch(error=>{
      console.log(error);
      res.sendStatus(500);
    });
  
  }
);

app.get("/roll/:diceType", (req: express.Request, res: express.Response) => {
  const diceType = req.params["diceType"];

  RollController.Roll(diceType)
  .then(results=>{
    res.status(200).json({
      data: results
    });
  })
  .catch(error=>{
    console.log(error);
    res.sendStatus(500);
  });

  
});

// Rarity [A-G]
app.get("/gem/:rarity", (req: express.Request, res: express.Response) => {
  const rarity: string = req.params["rarity"];

  LootController.Roll(GEMS, rarity)
    .then(loots => {
      res.status(200).json({
        data: loots
      });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get(
  "/gem/:rarity/:gemNumber",
  (req: express.Request, res: express.Response) => {
    const rarity: string = req.params["rarity"];
    const gemNumber: number = req.params["gemNumber"];

    LootController.Roll(GEMS, rarity, gemNumber)
      .then(loots => {
        res.status(200).json({
          data: loots
        });
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  }
);

app.get(
  "/rolled/gem/:rarity/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const rarity: string = req.params["rarity"];
    const dieRolled: number = req.params["dieRolled"];

    LootController.Rolled(GEMS, rarity, dieRolled)
      .then(loots => {
        res.status(200).json({
          data: loots
        });
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

// Rarity [A-G]
app.get(
  "/pieceOfArt/:rarity",
  (req: express.Request, res: express.Response) => {
    const rarity: string = req.params["rarity"];

    LootController.Roll(PIECE_OF_ARTS, rarity)
      .then(loots => {
        res.status(200).json({
          data: loots
        });
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  }
);

app.get(
  "/pieceOfArt/:rarity/:pieceOfArtNumber",
  (req: express.Request, res: express.Response) => {
    const rarity: string = req.params["rarity"];
    const pieceOfArtNumber: number = req.params["pieceOfArtNumber"];

    LootController.Roll(PIECE_OF_ARTS, rarity, pieceOfArtNumber)
      .then(loots => {
        res.status(200).json({
          data: loots
        });
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  }
);

app.get(
  "/rolled/pieceOfArt/:rarity/:dieRolled",
  (req: express.Request, res: express.Response) => {
    const rarity: string = req.params["rarity"];
    const dieRolled: number = req.params["dieRolled"];

    LootController.Rolled(PIECE_OF_ARTS, rarity, dieRolled)
      .then(loots => {
        res.status(200).json({
          data: loots
        });
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

export var Routes: express.Express = app;
