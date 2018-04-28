import { IItem } from "./item.model";

export interface IRarityTable{
  [index:string]: Array<IItem>;
}