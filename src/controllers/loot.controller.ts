import { IRarityTable } from "./../models/rarity-table.model";
import { IItem } from "./../models/item.model";
import diceRoller from "../helpers/dice-roller.helper";
import beetweenHelper from "../helpers/between.helper";

export class LootController {
  public static Roll(
    lootTable: IRarityTable,
    rarity: string,
    lootNumber: number = 1
  ): Promise<Array<IItem>> {
    const promise = new Promise<Array<IItem>>((resolve,reject) => {
      let results = new Array<IItem>();
      const loots = lootTable[rarity];
      const dieType = loots[0].diceResult.dieType;

      const rolls = diceRoller.Roll(dieType, lootNumber);

      rolls.forEach(roll => {
        loots.forEach(loot => {
          if (
            beetweenHelper.IsBetween(
              roll,
              loot.diceResult.less,
              loot.diceResult.high
            )
          ) {
            results.push(loot);
          }
        });
      });

      resolve(results);
    });


    return promise;
  }

  public static Rolled(
    lootTable: IRarityTable,
    rariry: string,
    dieRolled: number
  ): Promise<IItem> {
    const promise = new Promise<IItem>((resolve,reject) => {

      const loots = lootTable[rariry];

      for (let index = 0; index < loots.length; index++) {
        const loot = loots[index];
        if (
          beetweenHelper.IsBetween(
            dieRolled,
            loot.diceResult.less,
            loot.diceResult.high
          )
        ) {
          resolve(loot);
          break;
        }
      }

     
    });

    return promise;
  }
}
