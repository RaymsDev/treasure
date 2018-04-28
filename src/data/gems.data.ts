import { IGem } from "../models/gem.model";

const VERY_SMALL_GEMS: Array<IGem> = [
  {
    diceResult: {
      dieType: 12,
      less: 1
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Azurite (bleu foncé, marbré et opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 2
    },
    cost: {
      gold: 10
    },
    description: {
      FR:
        "Agate enrubannée (rayures translucides marrons, bleues, blanches ou rouges)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 3
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Quartz bleu (bleu pâle et transparent)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 4
    },
    cost: {
      gold: 10
    },
    description: {
      FR:
        "Agate ceillée (cercles translucides gris, blancs, marrons, bleus ou verts)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 5
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Hématite (gris-noir opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 6
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Lapis-lazuli (bleu clair et foncé opaque, moucheté de jaune)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 7
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Malachite (nervures opaques vert clair et foncé)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 8
    },
    cost: {
      gold: 10
    },
    description: {
      FR:
        "Agate mousse (rose ou blanc-jaune translucide avec des tâches vertes ou gris-vert)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 9
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Obsidienne (noir opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 10
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Rhodochrosite (rose clair opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 11
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "OEil-de-tigre (marron translucide avec un coeur doré)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 12
    },
    cost: {
      gold: 10
    },
    description: {
      FR: "Turquoise (bleu-vert clair opaque)"
    }
  }
];

const SMALL_GEMS: Array<IGem> = [
  {
    diceResult: {
      dieType: 12,
      less: 1
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Héliotrope (gris foncé opaque moucheté de rouge)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 2
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Cornaline (orange à rouge brique opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 3
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Calcédoine (blanc opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 4
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Chrysoprase (vert translucide)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 5
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Citrine (brun-jaune clair et translucide)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 6
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Jaspe (marron, noir ou bleu opaque)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 7
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Pierre de lune (blanc translucide et bleu clair iridescent)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 8
    },
    cost: {
      gold: 50
    },
    description: {
      FR:
        "Onyx (rayures noires et blanches opaques ou entièrement noir ou blanc)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 9
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Quartz (blanc transparent, gris ardoise ou jaune)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 10
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Sardonyx (rayures rouges et blanches opaques)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 11
    },
    cost: {
      gold: 50
    },
    description: {
      FR:
        "Quartz rose étoilé (pierre rose translucide avec un  coeur blanc en forme d'étoile)"
    }
  },
  {
    diceResult: {
      dieType: 12,
      less: 12
    },
    cost: {
      gold: 50
    },
    description: {
      FR: "Zircon (bleu-vert clair transparent)"
    }
  }
];

const MEDIUM_GEMS: Array<IGem> = [
  {
    diceResult: {
      dieType: 10,
      less: 1
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Ambre (or transparent, délavé à profond)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 2
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Améthyste (violet foncé transparent)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 3
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Chrysobéryl (vert jaune à vert pâle transparent)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 4
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Corail (pourpre opaque)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 5
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Grenat (rouge, brun-vert ou violet transparent)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 6
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Jade (vert clair ou foncé ou blancs translucide)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 7
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "jais (noir intense opaque)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 8
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Perle (blanc, jaune ou rose chatoyant et opaque)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 9
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Spinelle (rouge, rouge brique ou vert foncé transparent)"
    }
  },
  {
    diceResult: {
      dieType: 10,
      less: 10
    },
    cost: {
      gold: 100
    },
    description: {
      FR: "Tourmaline (vert clair, bleu, marron ou rouge transparent)"
    }
  }
];

const BIG_GEMS: Array<IGem> = [
  {
    diceResult: {
      dieType: 6,
      less: 1
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Alexandrite (vert foncé transparent)"
    }
  },
  {
    diceResult: {
      dieType: 6,
      less: 2
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Aigue-marine (bleu-vert pâle et transparent)"
    }
  },
  {
    diceResult: {
      dieType: 6,
      less: 3
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Perle noire (entièrement noir et opaque)"
    }
  },
  {
    diceResult: {
      dieType: 6,
      less: 4
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Spinelle bleu (bleu foncé transparent)"
    }
  },
  {
    diceResult: {
      dieType: 6,
      less: 5
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Péridot (vert olive intense et transparent)"
    }
  },
  {
    diceResult: {
      dieType: 6,
      less: 6
    },
    cost: {
      gold: 500
    },
    description: {
      FR: "Topaze (jaune doré transparent)"
    }
  }
];

const VERY_BIG_GEMS: Array<IGem> = [
    {
      diceResult: {
        dieType: 8,
        less: 1
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Opale noire (vert foncé translucide moucheté de noir et d'or)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 2
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Saphir bleu (blanc-bleu à bleu, transparent)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 3
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Émeraude (vert foncé vif et transparent)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 4
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Opale de feu (rouge ardent translucide)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 5
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Opale (bleu pâle translucide moucheté de vert et d'or)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 6
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Rubis étoilé (vermeil translucide avec un coeur en forme d'étoile blanche)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 7
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Saphir étoilé (bleu saphir translucide avec un coeur en forme d'étoile blanche)"
      }
    },
    {
      diceResult: {
        dieType: 8,
        less: 8
      },
      cost: {
        gold: 1000
      },
      description: {
        FR: "Saphir jaune (jaune flamboyant ou vert-jaune, transparent)"
      }
    }
  ];

  const LEGENDARY_GEMS: Array<IGem> = [
    {
      diceResult: {
        dieType: 4,
        less: 1
      },
      cost: {
        gold: 5000
      },
      description: {
        FR: "Saphir noir (noir brillant translucide avec des reflets chatoyants)"
      }
    },
    {
      diceResult: {
        dieType: 4,
        less: 2
      },
      cost: {
        gold: 5000
      },
      description: {
        FR: "Diamant (blanc bleuté, jaune canari, rose, marron ou bleu, transparent)"
      }
    },
    {
      diceResult: {
        dieType: 4,
        less: 3
      },
      cost: {
        gold: 5000
      },
      description: {
        FR: "jacinthe (orange flamboyant transparent)"
      }
    },
    {
      diceResult: {
        dieType: 4,
        less: 4
      },
      cost: {
        gold: 5000
      },
      description: {
        FR: "Rubis (rouge clair ou pourpre foncé, transparent)"
      }
    }
  ];

const GEMS:Array<IGem> = [
    ...VERY_SMALL_GEMS,
    ...SMALL_GEMS,
    ...MEDIUM_GEMS,
    ...BIG_GEMS,
    ...VERY_BIG_GEMS,
    ...LEGENDARY_GEMS
];