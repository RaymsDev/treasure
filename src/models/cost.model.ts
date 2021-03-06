import { IRoll } from './roll.model';
/*
Coin	        CP	    SP	  EP	  GP	  PP
Copper (cp)	  1	      10	  50	  100	  1,000
Silver (sp)	  1/10	  1	    5	    10	  100
Electrum (ep)	1/50	  1/5	  1	    2	    20
Gold (gp)	    1/100	  1/10	1/2	  1	    10
Platinum (pp)	1/1,000	1/100	1/20	1/10	1
*/

export const MONEY_VALUE = {
  copper:1,
  silver:10,
  electrum:50,
  gold:100,
  platinum:1000
};

export interface IMoney {
  copper?: number;
  silver?: number;
  electrum?: number;
  gold?:number;
  platinum?:number;
}

export interface IMoneyRoll{
  copper?: IRoll;
  silver?: IRoll;
  electrum?: IRoll;
  gold?:IRoll;
  platinum?:IRoll;
}
