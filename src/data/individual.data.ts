import { IIndividual } from "./../models/individual.model";

const EASY_INDIVIDUAL: Array<IIndividual> = [
  {
    challenge: {
      less: 0,
      high: 4
    },
    diceResult: {
      dieType: 100,
      less: 1,
      high: 30
    },
    money: {
      copper: {
        dieType: 6,
        roll: 5
      }
    }
  },
  {
    challenge: {
      less: 0,
      high: 4
    },
    diceResult: {
      dieType: 100,
      less: 31,
      high: 60
    },
    money: {
      silver: {
        dieType: 6,
        roll: 4
      }
    }
  },
  {
    challenge: {
      less: 0,
      high: 4
    },
    diceResult: {
      dieType: 100,
      less: 61,
      high: 70
    },
    money: {
      electrum: {
        dieType: 6,
        roll: 3
      }
    }
  },
  {
    challenge: {
      less: 0,
      high: 4
    },
    diceResult: {
      dieType: 100,
      less: 71,
      high: 95
    },
    money: {
      gold: {
        dieType: 6,
        roll: 3
      }
    }
  },
  {
    challenge: {
      less: 0,
      high: 4
    },
    diceResult: {
      dieType: 100,
      less: 96,
      high: 100
    },
    money: {
      electrum: {
        dieType: 6,
        roll: 1
      }
    }
  }
];

const MEDIUM_INDIVIDUAL: Array<IIndividual> = [
  {
    challenge: {
      less: 5,
      high: 10
    },
    diceResult: {
      dieType: 100,
      less: 1,
      high: 30
    },
    money: {
      copper: {
        dieType: 6,
        roll: 4,
        modificator: "*100"
      },
      electrum: {
        dieType: 6,
        roll: 1,
        modificator: "*10"
      }
    }
  },
  {
    challenge: {
      less: 5,
      high: 10
    },
    diceResult: {
      dieType: 100,
      less: 31,
      high: 60
    },
    money: {
      silver: {
        dieType: 6,
        roll: 6,
        modificator: "*10"
      },
      gold: {
        dieType: 6,
        roll: 2,
        modificator: "*10"
      }
    }
  },
  {
    challenge: {
      less: 5,
      high: 10
    },
    diceResult: {
      dieType: 100,
      less: 61,
      high: 70
    },
    money: {
      electrum: {
        dieType: 6,
        roll: 3,
        modificator: "*10"
      },
      gold: {
        dieType: 6,
        roll: 2,
        modificator: "*10"
      }
    }
  },
  {
    challenge: {
      less: 5,
      high: 10
    },
    diceResult: {
      dieType: 100,
      less: 71,
      high: 95
    },
    money: {
      gold: {
        dieType: 6,
        roll: 4,
        modificator: "*10"
      }
    }
  },
  {
    challenge: {
      less: 5,
      high: 10
    },
    diceResult: {
      dieType: 100,
      less: 96,
      high: 100
    },
    money: {
      gold: {
        dieType: 6,
        roll: 2,
        modificator: "*10"
      },
      platinum: {
        dieType: 6,
        roll: 3
      }
    }
  }
];

const HARD_INDIVIDUAL: Array<IIndividual> = [
  {
    challenge: {
      less: 11,
      high: 16
    },
    diceResult: {
      dieType: 100,
      less: 1,
      high: 20
    },
    money: {
      silver: {
        dieType: 6,
        roll: 4,
        modificator: "*100"
      },
      gold: {
        dieType: 6,
        roll: 1,
        modificator: "*100"
      }
    }
  },
  {
    challenge: {
      less: 11,
      high: 16
    },
    diceResult: {
      dieType: 100,
      less: 21,
      high: 35
    },
    money: {
      electrum: {
        dieType: 6,
        roll: 1,
        modificator: "*100"
      },
      gold: {
        dieType: 6,
        roll: 1,
        modificator: "*100"
      }
    }
  },
  {
    challenge: {
      less: 11,
      high: 16
    },
    diceResult: {
      dieType: 100,
      less: 36,
      high: 75
    },
    money: {
      gold: {
        dieType: 6,
        roll: 2,
        modificator: "*100"
      },
      platinum: {
        dieType: 6,
        roll: 1,
        modificator: "*10"
      }
    }
  },
  {
    challenge: {
      less: 11,
      high: 16
    },
    diceResult: {
      dieType: 100,
      less: 76,
      high: 100
    },
    money: {
      gold: {
        dieType: 6,
        roll: 2,
        modificator: "*100"
      },
      platinum: {
        dieType: 6,
        roll: 2,
        modificator: "*10"
      }
    }
  }
];

const VERY_HARD_INDIVIDUAL: Array<IIndividual> = [
  {
    challenge: {
      less: 17
    },
    diceResult: {
      dieType: 100,
      less: 1,
      high: 15
    },
    money: {
      electrum: {
        dieType: 6,
        roll: 2,
        modificator: "*1000"
      },
      gold: {
        dieType: 6,
        roll: 8,
        modificator: "*100"
      }
    }
  },
  {
    challenge: {
      less: 17
    },
    diceResult: {
      dieType: 100,
      less: 16,
      high: 55
    },
    money: {
      gold: {
        dieType: 6,
        roll: 1,
        modificator: "*1000"
      }
    }
  },
  {
    challenge: {
      less: 17
    },
    diceResult: {
      dieType: 100,
      less: 56,
      high: 100
    },
    money: {
      gold: {
        dieType: 6,
        roll: 1,
        modificator: "*1000"
      },
      platinum: {
        dieType: 6,
        roll: 2,
        modificator: "*100"
      }
    }
  }
];

const INDIVDUAL_TREASURE = [
  ...EASY_INDIVIDUAL,
  ...MEDIUM_INDIVIDUAL,
  ...HARD_INDIVIDUAL,
  ...VERY_HARD_INDIVIDUAL
];

export default INDIVDUAL_TREASURE;
