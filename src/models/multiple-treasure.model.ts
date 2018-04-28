import { IRoll } from "./roll.model";
import { IDiceResult } from "./dice-result.model";
import { IChallenge } from "./challenge.model";
import { IMoneyRoll, IMoney } from "./cost.model";
import { IItem } from "./item.model";

export interface IMultipleTreasure {
  challenge: IChallenge;
  money: IMoneyRoll;
  diceResult: IDiceResult;
  gems?: ILoot;
  pieceOfArts?: ILoot;
  magicObjects?: ILoot;
}

export interface ILoot {
  rarity: string;
  roll?: IRoll;
}

export interface IMultipleTreasureResult{
  money:IMoney;
  gems?:Array<IItem>;
  pieceOfArts?:Array<IItem>;
  magicObjects?: Array<IItem>;
}
