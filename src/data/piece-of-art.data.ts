import { IRarityTable } from './../models/rarity-table.model';
import { IItem } from './../models/item.model';


const VERY_SMALL_PIECE_OF_ARTS : Array<IItem> = [
  {
    diceResult: {
      dieType: 10,
      less: 1
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Aiguière en argent"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 2
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Statuette en os"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 3
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Petit bracelet en or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 4
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Habits de cérémonie en drap d'or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 5
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Masque de velours noir brodé de fil d'argent"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 6
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Calice en cuivre orné de filigranes d'argent"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 7
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Paire de dés en os gravés"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 8
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Petit miroir entouré d'un cadre en bois peint"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 9
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Mouchoir de soie brodée"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 10
    },
    cost: {
      gold: 25
    },
    description: {
      FR: "Médaillon en or contenant un portrait peint"
    }
  }
];

const SMALL_PIECE_OF_ARTS : Array<IItem> = [
  {
    diceResult: {
      dieType: 10,
      less: 1
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Anneau en or incrusté d'héliotropes"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 2
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Statuette en ivoire"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 3
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Gros bracelet en or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 4
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Collier en argent orné d'une pierre précieuse"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 5
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Couronne en bronze"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 6
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Robe de soie brodée au fil d'or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 7
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Grande tapisserie de qualité"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 8
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Grande tasse en laiton incrustée de jade"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 9
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Boîte contenant des figurines d'animaux en turquoise"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 10
    },
    cost: {
      gold: 250
    },
    description: {
      FR: "Cage à oiseaux en or avec des filigranes d'électrum"
    }
  }
];

const MEDIUM_PIECE_OF_ARTS : Array<IItem> = [
  {
    diceResult: {
      dieType: 10,
      less: 1
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Calice d'argent serti de pierres-de-lune"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 2
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Épée longue en acier plaqué d'argent et à la garde sertie de jais"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 3
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Harpe en bois exotique incrustée d'ivoire et de zircons"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 4
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Petite idole en or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 5
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Peigne d'or en forme de dragon dont les yeux sont des grenats rouges"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 6
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Bouchon de carafe ornée de feuilles d'or et serti d'améthystes"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 7
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Dague cérémonielle en électrum avec une perle noire incrustée dans le pommeau"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 8
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Broche en argent et en or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 9
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Statuette en obsidienne incrustée d'or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 10
    },
    cost: {
      gold: 750
    },
    description: {
      FR: "Masque de guerre en or peint"
    }
  }
];

const BIG_PIECE_OF_ARTS : Array<IItem> = [
  {
    diceResult: {
      dieType: 10,
      less: 1
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Chaînette en or serti d'une opale de feu"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 2
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Tableau de maître ancien"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 3
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Manteau de soie et de velours brodé et serti de nombreuses pierres-de-lune"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 4
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Bracelet en platine serti d'un saphir"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 5
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Gant brodé et serti d'éclats de pierre précieuse"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 6
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Bracelet de cheville orné de pierreries"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 7
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Boîte à musique en or"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 8
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Tiare en or sertie de quatre aigues-marines"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 9
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Cache-oeil orné d'un faux-oeil composé d'un saphir bleu et d'une pierre-de-lune"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 10
    },
    cost: {
      gold: 2500
    },
    description: {
      FR: "Fin collier de petites perles roses"
    }
  }
];

const VERY_BIG_PIECE_OF_ARTS : Array<IItem> = [
  {
    diceResult: {
      dieType: 8,
      less: 1
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Couronne en or orné de pierreries"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 2
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Anneau de platine orné de pierreries"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 3
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Petite statuette en or sertie de rubis"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 4
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Coupe en or incrustée d'émeraudes"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 5
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Boite à bijoux en or ornée de filigranes de platine"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 6
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Sarcophage d'enfant en or peint"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 7
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Plateau de jeu en jade avec des pièces en or massif"
    }
  },
  {
    diceResult: {
      dieType: 8,
      less: 8
    },
    cost: {
      gold: 7500
    },
    description: {
      FR: "Corne à boire en ivoire ornée de pierreries et de filigranes d'or"
    }
  }
];

export const PIECE_OF_ARTS: IRarityTable = {
  "A":VERY_SMALL_PIECE_OF_ARTS,
  "B":SMALL_PIECE_OF_ARTS,
  "C":MEDIUM_PIECE_OF_ARTS,
  "D":BIG_PIECE_OF_ARTS,
  "E":VERY_BIG_PIECE_OF_ARTS
};