import { IDescription } from './description.model';
import { IMoney } from './cost.model';
import { IDiceResult } from './dice-result.model';

export interface IItem{
    diceResult : IDiceResult;
    cost?: IMoney;
    description:IDescription;
    subcategory?: Array<IItem>;
}