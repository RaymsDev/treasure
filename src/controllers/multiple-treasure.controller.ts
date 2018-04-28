import { MAGIC_OBJECTS } from './../data/magic-objects.data';
import { PIECE_OF_ARTS } from './../data/piece-of-art.data';
import { GEMS } from './../data/gems.data';
import { IMultipleTreasure, ILoot, IMultipleTreasureResult } from "./../models/multiple-treasure.model";
import { MULTIPLE_TREASURES } from "./../data/multiple-treasure.data";

import beetweenHelper from "../helpers/between.helper";
import diceRoller from "../helpers/dice-roller.helper";
import { IItem } from "../models/item.model";
import { IRoll } from "../models/roll.model";
import { IndividualController } from './individual.controller';
export class MultipleTrasureController {
  public static Roll(challenge: number, dieRolled?: number): IMultipleTreasureResult {

    const multipleTreasures = MultipleTrasureController.filterByChallenge(
      MULTIPLE_TREASURES,
      challenge
    );
    
    if(!dieRolled){
      dieRolled = diceRoller.RollDie100()[0];
    }

    const multipleTreasure = MultipleTrasureController.getTreasure(
      multipleTreasures,
      dieRolled
    );

    const result: IMultipleTreasureResult = {
      money:{}
    };

    if(multipleTreasure){

      result.money= IndividualController.GetMoney(multipleTreasure.money);

      if(multipleTreasure.gems){
        result.gems = MultipleTrasureController.rollGems(GEMS[multipleTreasure.gems.rarity],multipleTreasure.gems.rarity, multipleTreasure.gems.roll);
      }
      
      if(multipleTreasure.pieceOfArts){
        result.pieceOfArts = MultipleTrasureController.rollPieceOfArts(PIECE_OF_ARTS[multipleTreasure.pieceOfArts.rarity], multipleTreasure.pieceOfArts.rarity, multipleTreasure.pieceOfArts.roll);
      }

      if(multipleTreasure.magicObjects){
        result.magicObjects = MultipleTrasureController.rollMagicObjects(MAGIC_OBJECTS[multipleTreasure.magicObjects.rarity], multipleTreasure.magicObjects.rarity, multipleTreasure.magicObjects.roll);
      }
    }

    return result;
  }

  private static rollGems(gems: Array<IItem>, rarity: string, roll?:IRoll):Array<IItem> {
    let results = new Array<IItem>();

    if(roll){
      const gemRolls = diceRoller.Roll(roll.dieType,roll.roll);
      const rollNumber = MultipleTrasureController.sum(gemRolls);
      const rolls = diceRoller.Roll(gems[0].diceResult.dieType, rollNumber);

      gems.forEach(gem=>{
        rolls.forEach(r=>{
          if(beetweenHelper.IsBetween(r, gem.diceResult.less, gem.diceResult.high)){
            results.push(gem);
          }
        });
      })
    }
    return results;
  }

  private static rollPieceOfArts(pieceOfArts: Array<IItem>, rarity: string, roll?:IRoll):Array<IItem> {
    let results = new Array<IItem>();

    if(roll){
      const pieceOfArtRolls = diceRoller.Roll(roll.dieType,roll.roll);
      const rollNumber = MultipleTrasureController.sum(pieceOfArtRolls);
      const rolls = diceRoller.Roll(pieceOfArts[0].diceResult.dieType, rollNumber);

      pieceOfArts.forEach(poa=>{
        rolls.forEach(r=>{
          if(beetweenHelper.IsBetween(r, poa.diceResult.less, poa.diceResult.high)){
            results.push(poa);
          }
        });
      })
    }
    return results;
  }

  private static rollMagicObjects(magicOfObjects: Array<IItem>, rarity: string, roll?:IRoll):Array<IItem> {
    let results = new Array<IItem>();

    if(roll){
      const magicOfObjectRolls = diceRoller.Roll(roll.dieType,roll.roll);
      const rollNumber = MultipleTrasureController.sum(magicOfObjectRolls);
      const rolls = diceRoller.Roll(magicOfObjects[0].diceResult.dieType, rollNumber);

      magicOfObjects.forEach(mo=>{
        rolls.forEach(r=>{
          if(beetweenHelper.IsBetween(r, mo.diceResult.less, mo.diceResult.high)){
            results.push(mo);
          }
        });
      })
    }
    return results;
  }

  private static filterByChallenge(
    multipleTreasures: Array<IMultipleTreasure>,
    challenge: number
  ): Array<IMultipleTreasure> {
    const results = new Array<IMultipleTreasure>();

    multipleTreasures.forEach(mt => {
      if (
        beetweenHelper.IsBetween(
          challenge,
          mt.challenge.less,
          mt.challenge.high
        )
      ) {
        results.push(mt);
      }
    });

    return results;
  }

  private static getTreasure(
    multipleTreasures: Array<IMultipleTreasure>,
    roll: number
  ): IMultipleTreasure | null {
    let result = null;

    for (let index = 0; index < multipleTreasures.length; index++) {
      const mt = multipleTreasures[index];
      if (
        beetweenHelper.IsBetween(roll, mt.diceResult.less, mt.diceResult.high)
      ) {
        result = mt;
        break;
      }
    }

    return result;
  }

  private static sum(tableOfNumber :Array<number>):number{
    let result = 0;

    tableOfNumber.forEach(n=>{
      result+=n;
    });

    return result;
  }
}
