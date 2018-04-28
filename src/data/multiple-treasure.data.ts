import { IMoneyRoll } from "./../models/cost.model";
import { IChallenge } from "./../models/challenge.model";
import { IMultipleTreasure } from "../models/multiple-treasure.model";

const VERY_EASY_CHALLENGE: IChallenge = {
  less: 0,
  high: 4
};

const VERY_EASY_MONEY: IMoneyRoll = {
  copper: {
    roll: 6,
    dieType: 6,
    modificator: "*100"
  },
  silver: {
    roll: 3,
    dieType: 6,
    modificator: "*100"
  },
  gold: {
    roll: 2,
    dieType: 6,
    modificator: "*10"
  }
};

const VERY_EASY_TREASURES: Array<IMultipleTreasure> = [
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 1,
      high: 6
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 7,
      high: 16
    },
    gems: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 6
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: {
      copper: {
        roll: 6,
        dieType: 6,
        modificator: "*100"
      },
      silver: {
        roll: 3,
        dieType: 6,
        modificator: "*100"
      },
      gold: {
        roll: 2,
        dieType: 6,
        modificator: "*10"
      }
    },
    diceResult: {
      dieType: 100,
      less: 17,
      high: 26
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 27,
      high: 36
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 6
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 37,
      high: 44
    },
    gems: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "A",
      roll: {
        roll: 1,
        dieType: 6
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 45,
      high: 52
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    },
    magicObjects: {
      rarity: "A",
      roll: {
        roll: 1,
        dieType: 6
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 53,
      high: 60
    },
    gems: {
      rarity: "B",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "A",
      roll: {
        roll: 1,
        dieType: 6
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 61,
      high: 65
    },
    gems: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "B",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 66,
      high: 70
    },
    gems: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    },
    magicObjects: {
      rarity: "B",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 71,
      high: 75
    },
    gems: {
      rarity: "B",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "B",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 76,
      high: 78
    },
    gems: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "C",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 79,
      high: 80
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    },
    magicObjects: {
      rarity: "C",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 81,
      high: 85
    },
    gems: {
      rarity: "B",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "C",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 86,
      high: 92
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    },
    magicObjects: {
      rarity: "F",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 93,
      high: 97
    },
    gems: {
      rarity: "B",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "F",
      roll: {
        roll: 1,
        dieType: 4
      }
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 98,
      high: 99
    },
    pieceOfArts: {
      rarity: "A",
      roll: {
        roll: 2,
        dieType: 4
      }
    },
    magicObjects: {
      rarity: "G"
    }
  },
  {
    challenge: VERY_EASY_CHALLENGE,
    money: VERY_EASY_MONEY,
    diceResult: {
      dieType: 100,
      less: 100
    },
    gems: {
      rarity: "b",
      roll: {
        roll: 2,
        dieType: 6
      }
    },
    magicObjects: {
      rarity: "G"
    }
  }
];

export const MULTIPLE_TREASURES: Array<IMultipleTreasure> = [
  ...VERY_EASY_TREASURES
];