import { IRoll } from './../models/roll.model';
import { IChallenge } from './../models/challenge.model';
import { IMoney, IMoneyRoll } from './../models/cost.model';
import INDIVDUAL_TREASURE from '../data/individual.data';

import { IIndividual } from '../models/individual.model';
import betweenHelper from '../helpers/between.helper';
import diceRoller from '../helpers/dice-roller.helper';

const DICE_TYPE = 100;

export class IndividualController{
  public static Roll(challenge:number, diceRolled?:number): IMoney{

    const diceRoll = diceRolled || diceRoller.RollDie100()[0];
    let result :IMoney = {};

    INDIVDUAL_TREASURE.map((individual:IIndividual)=>{
      if(betweenHelper.IsBetween(challenge, individual.challenge.less, individual.challenge.high)){
        if(betweenHelper.IsBetween(diceRoll, individual.diceResult.less, individual.diceResult.high)){
          result = IndividualController.GetMoney(individual.money);
        }
      };
    });

    return result;

  }

  public static GetMoney(moneyRoll:IMoneyRoll):IMoney{
    let result :IMoney = {};
    if(moneyRoll.copper){
      const copper = moneyRoll.copper;
      result.copper = this.calculateMoney(copper);
    }

    if(moneyRoll.silver){
      const silver = moneyRoll.silver;
      result.silver = this.calculateMoney(silver);
    }

    if(moneyRoll.electrum){
      const electrum = moneyRoll.electrum;
      result.electrum = this.calculateMoney(electrum);
    }

    if(moneyRoll.gold){
      const gold = moneyRoll.gold;
      result.gold = this.calculateMoney(gold);
    }

    if(moneyRoll.platinum){
      const platinum = moneyRoll.platinum;
      result.platinum = this.calculateMoney(platinum);
    }

    return result;
  }

  private static calculateMoney(moneyRoll:IRoll){
    const rolls = diceRoller.Roll(moneyRoll.dieType, moneyRoll.roll);
    let result = 0;
    rolls.forEach((roll:number)=>{
      result+=roll;
    });

    if(moneyRoll.modificator){
      result = eval(result.toString() + moneyRoll.modificator);
    }

    return result;
  }


}