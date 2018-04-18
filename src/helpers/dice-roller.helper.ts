class DiceRoller {
  private getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  public Roll(dieType: number, dice?: number): Array<number> {
    let results = new Array<number>();

    if (!dice) {
      results.push(this.getRandomIntInclusive(1, dieType));
      return results;
    }

    for (let index = 0; index < dice; index++) {
      results.push(this.getRandomIntInclusive(1, dieType));
    }

    return results;
  }

  public RollDie4(dice?: number): Array<number> {
    return this.Roll(4, dice);
  }

  public RollDie6(dice?: number): Array<number> {
    return this.Roll(6, dice);
  }

  public RollDie8(dice?: number): Array<number> {
    return this.Roll(8, dice);
  }

  public RollDie10(dice?: number): Array<number> {
    return this.Roll(10, dice);
  }

  public RollDie12(dice?: number): Array<number> {
    return this.Roll(12, dice);
  }

  public RollDie20(dice?: number): Array<number> {
    return this.Roll(20, dice);
  }

  public RollDie100(dice?: number): Array<number> {
    return this.Roll(100, dice);
  }
}

const diceRoller = new DiceRoller();

export default diceRoller;
