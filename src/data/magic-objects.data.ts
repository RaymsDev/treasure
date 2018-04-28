import { IItem } from "./../models/item.model";

const WONDERFUL_FIGURINES: Array<IItem> = [
  {
    diceResult: {
      dieType: 8,
      less: 1
    },
    description: {
      FR: "griffon de bronze"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 2
    },
    description: {
      FR: "mouche d'ébène"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 3
    },
    description: {
      FR: "lions d'or"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 4
    },
    description: {
      FR: "chèvres d'ivoire"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 5
    },
    description: {
      FR: "éléphant de marbre"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 6,
      high:7
    },
    description: {
      FR: "chien d'onyx"
    }
  },{
    diceResult: {
      dieType: 8,
      less: 8
    },
    description: {
      FR: "chouette de serpentine"
    }
  }
];

const MAGIC_OBJECTS_A: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 50
    },
    description: {
      FR: "Potion de soins"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 51,
      high: 60
    },
    description: {
      FR: "Parchemin magique (tour de magie)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 61,
      high: 70
    },
    description: {
      FR: "Potion d'escalade"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 71,
      high: 90
    },
    description: {
      FR: "Parchemin magique de niveau 1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 91,
      high: 94
    },
    description: {
      FR: "Parchemin magique de niveau 2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 95,
      high: 98
    },
    description: {
      FR: "Potion de soins supérieurs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Sac sans fond"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Globe à la dérive"
    }
  }
];

const MAGIC_OBJECTS_B: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 15
    },
    description: {
      FR: "Potion de soins supérieurs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 16,
      high: 22
    },
    description: {
      FR: "Potion de souffle enflammé"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 23,
      high: 29
    },
    description: {
      FR: "Potion de résistance"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 30,
      high: 34
    },
    description: {
      FR: "Munition +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 35,
      high: 39
    },
    description: {
      FR: "Potion d'amitié avec les animaux"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 40,
      high: 44
    },
    description: {
      FR: "Potion de force du géant des collines"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 45,
      high: 49
    },
    description: {
      FR: "Potion d'agrandissement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 50,
      high: 54
    },
    description: {
      FR: "Potion de respiration aquatique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 55,
      high: 59
    },
    description: {
      FR: "Parchemin magique de niveau 2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 60,
      high: 64
    },
    description: {
      FR: "Parchemin magique de niveau 3"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 65,
      high: 67
    },
    description: {
      FR: "Sac sans fond"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 68,
      high: 70
    },
    description: {
      FR: "Baume de Keoghtom"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 71,
      high: 73
    },
    description: {
      FR: "Huile d'insaisissabilité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 74,
      high: 75
    },
    description: {
      FR: "Poussière de disparition"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 76,
      high: 77
    },
    description: {
      FR: "Poussière d'assèchement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 78,
      high: 79
    },
    description: {
      FR: "Poussière à éternuer"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 80,
      high: 81
    },
    description: {
      FR: "Gemme élémentaire"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 82,
      high: 83
    },
    description: {
      FR: "Philtre d'amour"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 84
    },
    description: {
      FR: "Cruche alchimique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 85
    },
    description: {
      FR: "Capuchon de respiration aquatique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 86
    },
    description: {
      FR: "Cape de la raie manta"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 87
    },
    description: {
      FR: "Globe à la dérive"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 88
    },
    description: {
      FR: "Lunettes du nyctalope"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 89
    },
    description: {
      FR: "Heaume de compréhension des langages"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 90
    },
    description: {
      FR: "Sceptre inamovible"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 91
    },
    description: {
      FR: "Lanterne de révélation"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 92
    },
    description: {
      FR: "Armure de matelot"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 93
    },
    description: {
      FR: "Armure de mithral"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 94
    },
    description: {
      FR: "Potion de poison"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 95
    },
    description: {
      FR: "Anneau de nage"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 96
    },
    description: {
      FR: "Robe d'objets pratiques"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 97
    },
    description: {
      FR: "Corde d'escalade"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 98
    },
    description: {
      FR: "Selle du cavalier"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Baguette de détection de la magie"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Baguette des secrets"
    }
  }
];

const MAGIC_OBJECTS_C: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 15
    },
    description: {
      FR: "Potion de soins supérieurs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 16,
      high: 22
    },
    description: {
      FR: "Parchemin magique de niveau 4"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 23,
      high: 27
    },
    description: {
      FR: "Munition +2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 28,
      high: 32
    },
    description: {
      FR: "Potion de clairvoyance"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 33,
      high: 37
    },
    description: {
      FR: "Potion de rétrécissement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 38,
      high: 42
    },
    description: {
      FR: "Potion de forme gazeuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 43,
      high: 47
    },
    description: {
      FR: "Potion de force du géant du givre"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 48,
      high: 52
    },
    description: {
      FR: "Potion de force du géant des pierres"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 53,
      high: 57
    },
    description: {
      FR: "Potion d'héroïsme"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 58,
      high: 62
    },
    description: {
      FR: "Potion d'invulnérabilité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 63,
      high: 67
    },
    description: {
      FR: "Potion de lecture des pensées"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 68,
      high: 72
    },
    description: {
      FR: "Parchemin magique de niveau 5"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 73,
      high: 75
    },
    description: {
      FR: "Élixir de santé"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 76,
      high: 78
    },
    description: {
      FR: "Huile éthérée"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 79,
      high: 81
    },
    description: {
      FR: "Potion de force du géant du feu"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 82,
      high: 84
    },
    description: {
      FR: "Plume de Quaal"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 85,
      high: 87
    },
    description: {
      FR: "Parchemin de protection"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 88,
      high: 89
    },
    description: {
      FR: "Sac de haricots"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 90,
      high: 91
    },
    description: {
      FR: "Perle de force"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 92
    },
    description: {
      FR: "Carillon d'ouverture"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 93
    },
    description: {
      FR: "Carafe intarissable"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 94
    },
    description: {
      FR: "Lentilles de netteté"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 95
    },
    description: {
      FR: "Bateau pliable"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 96
    },
    description: {
      FR: "Havresac magique d'Hévard"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 97
    },
    description: {
      FR: "Fers de rapidité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 98
    },
    description: {
      FR: "Collier de boules de feu"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Amulette de santé"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Pierres messagères"
    }
  }
];

const MAGIC_OBJECTS_D: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 20
    },
    description: {
      FR: "Potion de soins supérieurs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 21,
      high: 30
    },
    description: {
      FR: "Potion d'invisibilité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 31,
      high: 40
    },
    description: {
      FR: "Potion de vitesse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 41,
      high: 50
    },
    description: {
      FR: "Parchemin magique de niveau 6"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 51,
      high: 57
    },
    description: {
      FR: "Parchemin magique de niveau 7"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 58,
      high: 62
    },
    description: {
      FR: "Munition +3"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 63,
      high: 67
    },
    description: {
      FR: "Huile d'affûtage"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 68,
      high: 72
    },
    description: {
      FR: "Potion de vol"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 73,
      high: 77
    },
    description: {
      FR: "Potion de force du géant des nuages"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 78,
      high: 82
    },
    description: {
      FR: "Potion de longévité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 83,
      high: 87
    },
    description: {
      FR: "Potion de vitalité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 88,
      high: 92
    },
    description: {
      FR: "Parchemin magique de niveau 8"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 93,
      high: 95
    },
    description: {
      FR: "Fers du zéphyr"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 96,
      high: 98
    },
    description: {
      FR: "Pigments merveilleux de Nolzur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Sac affamé"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Puits portatif"
    }
  }
];

const MAGIC_OBJECTS_E: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 30
    },
    description: {
      FR: "Parchemin magique de niveau 8"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 31,
      high: 55
    },
    description: {
      FR: "Potion de force du géant des tempêtes"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 56,
      high: 70
    },
    description: {
      FR: "Potion de soins supérieurs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 71,
      high: 85
    },
    description: {
      FR: "Parchemin magique de niveau 9"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 86,
      high: 93
    },
    description: {
      FR: "Solvant universel"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 94,
      high: 98
    },
    description: {
      FR: "Flèche tueuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99,
      high: 100
    },
    description: {
      FR: "Colle universelle"
    }
  }
];

const MAGIC_OBJECTS_F: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 15
    },
    description: {
      FR: "Arme +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 16,
      high: 18
    },
    description: {
      FR: "Bouclier +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 19,
      high: 21
    },
    description: {
      FR: "Bouclier sentinelle"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 22,
      high: 23
    },
    description: {
      FR: "Amulette d'antidétection"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 24,
      high: 25
    },
    description: {
      FR: "Bottes elfiques"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 26,
      high: 27
    },
    description: {
      FR: "Bottes de marche et de saut"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 28,
      high: 29
    },
    description: {
      FR: "Bracelets d'archer"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 30,
      high: 31
    },
    description: {
      FR: "Broche de protection"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 32,
      high: 33
    },
    description: {
      FR: "Balai volant"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 34,
      high: 35
    },
    description: {
      FR: "Cape elfique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 36,
      high: 37
    },
    description: {
      FR: "Cape de protection"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 38,
      high: 39
    },
    description: {
      FR: "Gantelets de puissance d'ogre"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 40,
      high: 41
    },
    description: {
      FR: "Chapeau de déguisement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 42,
      high: 43
    },
    description: {
      FR: "javeline de foudre"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 44,
      high: 45
    },
    description: {
      FR: "Perle de puissance"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 46,
      high: 47
    },
    description: {
      FR: "Sceptre du gardien des pactes +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 48,
      high: 49
    },
    description: {
      FR: "Chaussons de l'araignée"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 50,
      high: 51
    },
    description: {
      FR: "Bâton de la vipère"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 52,
      high: 53
    },
    description: {
      FR: "Bâton du python"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 54,
      high: 55
    },
    description: {
      FR: "Épée vengeresse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 56,
      high: 57
    },
    description: {
      FR: "Trident de domination aquatique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 58,
      high: 59
    },
    description: {
      FR: "Baguette de projectiles magiques"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 60,
      high: 61
    },
    description: {
      FR: "Baguette du mage de guerre +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 62,
      high: 63
    },
    description: {
      FR: "Baguette entoilée"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 64,
      high: 65
    },
    description: {
      FR: "Arme vigilante"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 66
    },
    description: {
      FR: "Armure en adamantium (cotte de mailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 67
    },
    description: {
      FR: "Armure en adamantium (chemise de mailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 68
    },
    description: {
      FR: "Armure en adamantium (armure d'écailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 69
    },
    description: {
      FR: "Sac à malices (gris)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 70
    },
    description: {
      FR: "Sac à malices (rouille)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 71
    },
    description: {
      FR: "Sac à malices (brun)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 72
    },
    description: {
      FR: "Bottes des contrées hivernales"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 73
    },
    description: {
      FR: "Diadème de destruction"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 74
    },
    description: {
      FR: "Cartes d'illusion"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 75
    },
    description: {
      FR: "Bouteille fumigène"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 76
    },
    description: {
      FR: "Regard charmeur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 77
    },
    description: {
      FR: "CEil de lynx"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 78
    },
    description: {
      FR: "Figurine merveilleuse (corbeau d'argent)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 79
    },
    description: {
      FR: "Gemme lumineuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 80
    },
    description: {
      FR: "Gants piégeurs de projectiles"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 81
    },
    description: {
      FR: "Gants de nage et d'escalade"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 82
    },
    description: {
      FR: "Gants de cambrioleur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 83
    },
    description: {
      FR: "Bandeau d'intelligence"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 84
    },
    description: {
      FR: "Heaume de télépathie"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 85
    },
    description: {
      FR: "Instrument de barde (luth de Doss)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 86
    },
    description: {
      FR: "Instrument de barde (bandore de Fochlucan)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 87
    },
    description: {
      FR: "Instrument de barde (cistre de Mac-Fuirmidh)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 88
    },
    description: {
      FR: "Médaillon des pensées"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 89
    },
    description: {
      FR: "Collier d'adaptation"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 90
    },
    description: {
      FR: "Amulette de cicatrisation"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 91
    },
    description: {
      FR: "Flûte terrifiante"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 92
    },
    description: {
      FR: "Flûte des égouts"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 93
    },
    description: {
      FR: "Anneau de saut"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 94
    },
    description: {
      FR: "Anneau de protection mentale"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 95
    },
    description: {
      FR: "Anneau de chaleur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 96
    },
    description: {
      FR: "Anneau de marche sur l'eau"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 97
    },
    description: {
      FR: "Carquois d'Ehlonna"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 98
    },
    description: {
      FR: "Pierre porte-bonheur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Éventail enchanté"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Bottes ailées"
    }
  }
];

const MAGIC_OBJECTS_G: Array<IItem> = [
  {
    diceResult: {
      dieType: 100,
      less: 1,
      high: 11
    },
    description: {
      FR: "Arme +2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 12,
      high: 14
    },
    description: {
      FR: "Figurine merveilleuse (lancez un d8)"
    },
    subcategory: WONDERFUL_FIGURINES
  },
  {
    diceResult: {
      dieType: 100,
      less: 15
    },
    description: {
      FR: "Armure d'adamantium (cuirasse)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 16
    },
    description: {
      FR: "Armure d'adamantium (clibanion)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 17
    },
    description: {
      FR: "Amulette de bonne santé"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 18
    },
    description: {
      FR: "Armure de vulnérabilité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 19
    },
    description: {
      FR: "Bouclier antiprojectiles"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 20
    },
    description: {
      FR: "Ceinturon des nains"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 21
    },
    description: {
      FR: "Ceinturon de force du géant des collines"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 22
    },
    description: {
      FR: "Hache du berserker"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 23
    },
    description: {
      FR: "Bottes de lévitation"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 24
    },
    description: {
      FR: "Bottes de rapidité"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 25
    },
    description: {
      FR: "Bol de contrôle des élémentaires de l'eau"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 26
    },
    description: {
      FR: "Bracelets de défense"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 27
    },
    description: {
      FR: "Brasero de contrôle des élémentaires de feu"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 28
    },
    description: {
      FR: "Cape de prestidigitateur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 29
    },
    description: {
      FR: "Encensoir de contrôle des élémentaires de l'air"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 30
    },
    description: {
      FR: "Armure, cotte de mailles +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 31
    },
    description: {
      FR: "Armure de résistance (cotte de mailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 32
    },
    description: {
      FR: "Armure, chemise de mailles +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 33
    },
    description: {
      FR: "Armure de résistance (chemise de mailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 34
    },
    description: {
      FR: "Cape de déplacement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 35
    },
    description: {
      FR: "Cape de la chauve-souris"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 36
    },
    description: {
      FR: "Cube de force"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 37
    },
    description: {
      FR: "Forteresse instantanée de Daern"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 38
    },
    description: {
      FR: "Dague venimeuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 39
    },
    description: {
      FR: "Menottes dimensionnelles"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 40
    },
    description: {
      FR: "Tueuse de dragon"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 41
    },
    description: {
      FR: "Chemise de mailles elfique"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 42
    },
    description: {
      FR: "Épée ardente"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 43
    },
    description: {
      FR: "Gemme de vision"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 44
    },
    description: {
      FR: "Tueuse de géant"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 45
    },
    description: {
      FR: "Cuir cloutée glamour"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 46
    },
    description: {
      FR: "Heaume de téléportation"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 47
    },
    description: {
      FR: "Cor de destruction"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 48
    },
    description: {
      FR: "Cor du Valhalla (argent ou cuivre)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 49
    },
    description: {
      FR: "Instrument de barde (mandoline de Canaith)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 50
    },
    description: {
      FR: "Instrument de barde (lyre de Cli)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 51
    },
    description: {
      FR: "Pierre de loun (vigilance)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 52
    },
    description: {
      FR: "Pierre de loun (protection)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 53
    },
    description: {
      FR: "Pierre de loun (réserve)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 54
    },
    description: {
      FR: "Pierre de loun (nourriture)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 55
    },
    description: {
      FR: "Liens de fer de Bilarro"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 56
    },
    description: {
      FR: " Armure, armure de cuir +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 57
    },
    description: {
      FR: "Armure de résistance (armure de cuir)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 58
    },
    description: {
      FR: "Masse d'anéantissement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 59
    },
    description: {
      FR: "Masse destructrice"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 60
    },
    description: {
      FR: "Masse terrifiante"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 61
    },
    description: {
      FR: "Manteau de résistance aux sorts"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 62
    },
    description: {
      FR: "Chapelet"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 63
    },
    description: {
      FR: "Amulette antidote"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 64
    },
    description: {
      FR: "Anneau d'influence animale"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 65
    },
    description: {
      FR: "Anneau de dérobade"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 66
    },
    description: {
      FR: "Anneau de légèreté"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 67
    },
    description: {
      FR: "Anneau d'action libre"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 68
    },
    description: {
      FR: "Anneau de protection"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 69
    },
    description: {
      FR: "Anneau de résistance"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 70
    },
    description: {
      FR: "Anneau de stockage de sort"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 71
    },
    description: {
      FR: "Anneau du bélier"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 72
    },
    description: {
      FR: "Anneau de vision aux rayons X"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 73
    },
    description: {
      FR: "Robe aux yeux multiples"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 74
    },
    description: {
      FR: "Sceptre de suzeraineté"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 75
    },
    description: {
      FR: "Sceptre de gardien des pactes +2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 76
    },
    description: {
      FR: "Corde d'enchevêtrement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 77
    },
    description: {
      FR: "Armure, amure d'écailles +1"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 78
    },
    description: {
      FR: "Armure de résistance (armure d'écailles)"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 79
    },
    description: {
      FR: "Bouclier +2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 80
    },
    description: {
      FR: "Bouclier d'attraction des projectiles"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 81
    },
    description: {
      FR: "Bâton d'envoûtement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 82
    },
    description: {
      FR: "Bâton de guérison"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 83
    },
    description: {
      FR: "Bâton du grand essaim"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 84
    },
    description: {
      FR: "Bâton des forêts"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 85
    },
    description: {
      FR: "Bâton de flétrissement"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 86
    },
    description: {
      FR: "Pierre de contrôle des élémentaires de la terre"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 87
    },
    description: {
      FR: "Épée radieuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 88
    },
    description: {
      FR: "Épée voleuse de vie"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 89
    },
    description: {
      FR: "Épée incisive"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 90
    },
    description: {
      FR: "Sceptre-tentacule"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 91
    },
    description: {
      FR: "Arme vicieuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 92
    },
    description: {
      FR: "Baguettes des entraves"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 93
    },
    description: {
      FR: "Baguette de détection de l'ennemi"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 94
    },
    description: {
      FR: "Baguette de terreur"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 95
    },
    description: {
      FR: "Baguette de boules de feu"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 96
    },
    description: {
      FR: "Baguette d'éclairs"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 97
    },
    description: {
      FR: "Baguette de paralysie"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 98
    },
    description: {
      FR: "Baguette de mage de guerre +2"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 99
    },
    description: {
      FR: "Baguette merveilleuse"
    }
  },
  {
    diceResult: {
      dieType: 100,
      less: 100
    },
    description: {
      FR: "Ailes de vol"
    }
  }
];

