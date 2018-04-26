import { IDescription } from './description.model';
import { IMoney } from './cost.model';
import { IDiceResult } from './dice-result.model';

export interface IGem{
    diceResult : IDiceResult;
    cost: IMoney;
    description:IDescription;
}