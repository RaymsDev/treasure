import { IChallenge } from './challenge.model';
import { IMoneyRoll } from './cost.model';
import { IDiceResult } from './dice-result.model';

export interface IIndividual{
  challenge: IChallenge;
  diceResult: IDiceResult;
  money: IMoneyRoll;
}