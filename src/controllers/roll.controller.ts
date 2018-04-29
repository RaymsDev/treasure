import diceRoller from "../helpers/dice-roller.helper";

export class RollController {
  public static Roll(diceType: number, dice?: number): Promise<Array<number>> {
    return new Promise<Array<number>>(() => diceRoller.Roll(diceType, dice));
  }
}
