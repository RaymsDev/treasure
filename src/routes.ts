import { IndividualController } from './controllers/individual.controller';
import { RollController } from "./controllers/roll.controller";
import * as express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: "It's work!"
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

export var Routes: express.Express = app;
