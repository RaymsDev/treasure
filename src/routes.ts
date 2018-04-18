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
    res.status(200).json({
      message: req.params["challenge"]
    });
  }
);

app.get(
  "/roll/:diceType/:dice",
  (req: express.Request, res: express.Response) => {
    const dice = req.params["dice"];
    const diceType = req.params["diceType"];

    const results = RollController.Roll(diceType, dice);

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
