import diceRoller from "../helpers/dice-roller.helper";


export class RollController{
  public static Roll(diceType: number, dice?:number){
    return diceRoller.Roll(diceType, dice);
  }
}