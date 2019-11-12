const ManaSpeeds = require('nlp/heroModel/ManaSpeeds');

const blue3StarHeroes = {
    gato: {
        name: 'Gato',
        attack: 516,
        defense: 401,
        health: 639,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Ice-Gato.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Swamp Slash',
            description: [
                'Deals 300% damage to the target.',
                'The caster and nearby allies are immune to new status ailments for 3 turns.'
            ]
        }
    },
    graymane: {
        name: 'Graymane',
        attack: 467,
        defense: 368,
        health: 789,
        pseudonyms: ['greymane', 'graymane'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204440.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Wolf Bite',
            description: [
                'Deal 225% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        }
    },
    gunnar: {
        name: 'Gunnar',
        attack: 387,
        defense: 533,
        health: 656,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Ice-Gunnar.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Spirit Link',
            description: [
                'All allies get +63% defense and share received damage with all their allies for 5 turns'
            ]
        }
    },
    karil: {
        name: 'Karil',
        attack: 484,
        defense: 378,
        health: 733,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204426.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Ramming Rush',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies'
            ]
        }
    },    
    ulmer: {
        name: 'Ulmer',
        attack: 528,
        defense: 359,
        health: 677,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204553.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Blizzard',
            description: [
                'Deal 116% damage to all enemies and they get -34% defense for 6 turns'
            ]
        }
    },            
    valen: {
        name: 'Valen',
        attack: 479,
        defense: 411,
        health: 679,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204415.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Chilling Slash',
            description: [
                'Deal 300% damage to a single enemy and they get -34% defense for 6 turns'
            ]
        }
    },
    vodnik: {
        name: 'Vodnik',
        attack: 439,
        defense: 429,
        health: 834,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Ice-Vodnik.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Trident Lunge',
            description: [
                'Deals 280% damage to the target',
                'The more mana the enemies have, the more damage they will receive, up to 400%'
            ]
        }
    }
};

const yellow3StarHeroes = {
    arman: {
        name: 'Arman',
        attack: 477,
        defense: 418,
        health: 712,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Arman.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Sand Breeze',
            description: [
                'Deals 130% damage to all enemies.',
                'All enemies receive 92 damage over 4 turns',
                "All enemies get -50% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        }
    },    
    bane: {
        name: 'Bane',
        attack: 469,
        defense: 410,
        health: 693,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Bane.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Harmonic Slam',
            description: [
                'Deal 300% damage to a single enemy and they are less accurate for 4 turns.'
            ]
        }
    },
    dawa: {
        name: 'Dawa',
        attack: 488,
        defense: 391,
        health: 679,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Dawa.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Leaping Attack',
            description: [
                'Deal 210% damage to a single enemy and minor damage on nearby enemies'
            ]
        }
    },
    'gan ju': {
        name: 'Gan Ju',
        attack: 467,
        defense: 363,
        health: 811,
        pseudonyms: ['gan', 'ju', 'gan ju', 'gan-ju'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Gan-Ju.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Mystic Chop',
            description: [
                'Deal 270% damage to a single enemy and reduce their mana by 25%'
            ]
        }
    },
    melia: {
        name: 'Melia',
        attact: 505,
        defense: 404,
        health: 684,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Melia.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Atlantean Sword',
            description: [
                'Deals 120% damage to all enemies',
                'All allies get +36% critical chance for 4 turns.'
            ]
        }
    },
    kailani: {
        name: 'Kailani',
        attack: 429,
        defense: 453,
        health: 729,
        pseudonyms: ['kailani', 'kalani'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Kailani%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Spirit Link',
            description: [
                'All allies get +63% defense and share received damage with all their allies for 5 turns'
            ]
        }
    },
};

const green3StarHeroes = {
    belith: {
        name: 'Belith',
        attack: 425,
        defense: 450,
        health: 729,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212224%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Calming Mist',
            description: [
                'Recover 32% health for all allies and remove buffs from all enemies'
            ]
        }
    },    
    berden: {
        name: 'Berden',
        attack: 470,
        defense: 425,
        health: 688,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212155%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Entangling Shot',
            description: [
                'Deal 325% damage to a single enemy and they get -34% attack for 6 turns'
            ]
        }
    },
    brienne: {
        name: 'Brienne',
        attack: 446,
        defense: 448,
        health: 674,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Brienne.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Berserker Fury',
            description: [
                'All allies get +45% attack and a further 20% increase every time they are hit for 5 turns'
            ]
        }
    },
    carver: {
        name: 'Carver',
        attack: 464,
        defense: 448,
        health: 653,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Hel-8.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Slash of four Blades',
            description: [
                'Deal 125% damage to all enemies and reduce their mana by 16%'
            ]
        }
    },            
    'friar tuck': {
        name: 'Friar Tuck',
        attack: 458,
        defense: 450,
        health: 681,
        pseudonyms: ['friar', 'friar tuck'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170629-134417.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Have Faith',
            description: [
                'Recover 37% health for nearby allies and they get +24% mana generation for 3 turns'
            ]
        }
    },
    hisan: {
        name: 'Hisan',
        attack: 540,
        defense: 391,
        health: 608,
        pseudonyms: ['hissan', 'hisan'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Hisan.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Sand Breeze',
            description: [
                'Deals 280% damage to the target.',
                'The target receives 104 damage over 4 turns.',
                "The target gets -100% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.' 
            ]
        }
    },   
    isshtak: {
        name: 'Isshtak',
        attack: 453,
        defense: 417,
        health: 764,
        pseudonyms: ['ishtak', 'ishhtak', 'isshtak'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212203%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Ramming Rush',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies'
            ]
        }
    },
    mnesseus: {
        name: 'Mnesseus',
        attack: 474,
        defense: 431,
        health: 691,
        pseudonyms: ['mneusseus', 'menusseus', 'mneussus', 'menussus'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Mnesseus.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Atlantean Spear',
            description: [
                'Deals 320% damage to the target.',
                'Dispels buffs from all enemies.'
            ]
        }
    },    
    muggy: {
        name: 'Muggy',
        attack: 634,
        defense: 373,
        health: 420,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Muggy.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Bruiser Bros',
            description: [
                'All allies become Bruiser Bros for 4 turns. If an ally dies while being a Bruiser Bro they will be reborn as a Chameleon with:',
                '66% health',
                'Increased attack',
                'Decreased defense.',
                'Devastating Special Skill: Fierce Slash.',
                'This effect cannot be dispelled.'
            ]
        }
    }
};

const red3StarHeroes = {
    azar: {
        name: 'Azar',
        attack: 493,
        defense: 413,
        health: 651,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193931%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Sharp Cut',
            description: [
                'Deal 280% damage to a single enemy and reduce their mana by 25%'
            ]
        }
    },    
    bauchan: {
        name: 'Bauchan',
        attack: 420,
        defense: 453,
        health: 830,
        pseudonyms: ['bauchen', 'bauchan'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Bauchan.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Goblin Fury',
            description: [
                'Deals 105% damage to all enemies.',
                'Reduces the mana of all enemies by 20%.',
                'All allies get +24% mana generation for 4 turns.'
            ]
        }
    },
    hawkmoon: {
        name: 'Hawkmoon',
        attack: 474,
        defense: 446,
        health: 637,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193953%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Wind Prayer',
            description: [
                'Recover 32% health for all allies'
            ]
        }
    },
    jahangir: {
        name: 'Jahangir',
        attack: 498,
        defense: 436,
        health: 599,
        pseudonyms: ['jahangar', 'jahangir'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170524-192906%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Fireball',
            description: [
                'Deal 145% damage to all enemies and they receive 114 damage over 6 turns'
            ]
        }
    },
    namahage: {
        name: 'Namahage',
        attack: 526,
        defense: 418,
        health: 597,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Namahage.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Bloodthirst',
            description: [
                'Deals 290% damage to the target.',
                'The caster gets +45% attack and a further 20% increase every time they are hit during 5 turns.'
            ]
        }
    },    
    nashgar: {
        name: 'Nashgar',
        attack: 514,
        defense: 366,
        health: 684,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193903%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Burning Strike',
            description: [
                'Deal 290% damage to a single enemy and they receive 120 damage over 6 turns'
            ]
        }
    },
    rudolph: {
        name: 'Rudolph',
        attack: 540,
        defense: 391,
        health: 608,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Rudolph.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Antler Attack',
            description: [
                'Deals 285% damage to the target',
                'Reduces the mana of the target by 20%',
                'Summons an Elf Minion with 10% HP and 10% attack inherited from the caster.'
            ]
        }
    },
    'squire wabbit': {
        name: 'Squire Wabbit',
        attack: 538,
        defense: 382,
        health: 608,
        pseudonyms: ['squire-rabbit', 'squire-wabbit', 'squire', 'wabbit'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Squire-Rabbit.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Recklass Stab',
            description: [
                'Deals 355% damage to the target.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        }
    }
};

const purple3StarHeroes = {
    balthazar: {
        name: 'Balthazar',
        attack: 483,
        defense: 422,
        health: 648,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221520%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Electric Jolt',
            description: [
                'Deal 335% damage to a single enemy'
            ]
        }
    },
    chochin: {
        name: 'Chochin',
        attack: 413,
        defense: 512,
        health: 684,
        pseudonyms: ['cochin', 'chochin', 'lantern head', 'lantern-head'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Chochin.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Unholy Light',
            description: [
                'Deals 215% damage to the target and nearby enemies.',
                'The target and nearby enemies get -24% mana generation for 3 turns.'
            ]
        }
    },
    'gill-ra': {
        name: 'Gill-Ra',
        attack: 436,
        defense: 453,
        health: 747,
        pseudonyms: ['gil-ra', 'gilra', 'gill-ra', 'gillra'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Gil-Ra.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Lament of Regression',
            description: [
                'All enemies get -34% defense for 4 turns',
                'All enemies get -34% attack for 4 turns.',
                'Dispels status ailments from all allies.'
            ]
        }
    },
    oberon: {
        name: 'Oberon',
        attack: 422,
        defense: 411,
        health: 839,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221508%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Toxic Traps',
            description: [
                'Deal 121% damage to all enemies and they receive 96 damage over 6 turns'
            ]
        }
    },
    prisca: {
        name: 'Prisca',
        attack: 413,
        defense: 464,
        health: 761,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221418%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Bleeding Stab',
            description: [
                'Deal 235% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        }
    },
    renfeld: {
        name: 'Renfeld',
        attack: 488,
        defense: 398,
        health: 700,
        pseudonyms: ['renfeld', 'renfield'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221500%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Leeching Stars',
            description: [
                'Deal 215% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        }
    },
    tyrum: {
        name: 'Tyrum',
        attack: 387,
        defense: 422,
        health: 879,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221559%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Piercing Hit',
            description: [
                'Deal 310% damage to a single enemy and remove buffs from all enemies'
            ]
        }
    },
    vlad: {
        name: 'Vlad',
        attack: 368,
        defense: 486,
        health: 855,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Vlad_(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Dawn of Sorrow',
            description: [
                'The target receives 65 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 115, up to 295 damage in total.',
                'The caster steals 61% of any healing applied to the target for 3 turns.'
            ]
        }
    }
};

const blue4StarHeroes = {
    agwe: {
        name: 'Agwe',
        attack: 686,
        defense: 616,
        health: 1079,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Agwe.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Rogue Wave',
            description: [
                'Deals 190% damage to all enemies',
                'All allies get +54% defense against Nature for 4 turns.'
            ]
        }
    },
    boril: {
        name: 'Boril',
        attack: 501,
        defense: 792,
        health: 1151,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Boril%20(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Perfect Riposte',
            description: [
                'The caster and nearby allies counter attack with 125% of the damage received for 5 turns.'
            ]
        }
    },
    'captain of diamonds': {
        name: 'Captain of Diamonds',
        attack: 620,
        defense: 682,
        health: 1126,
        pseudonyms: ['captain of diamonds', 'diamonds'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Captain-of-Diamonds.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Pest Control',
            description: [
                'Destroys all minions from the target',
                'Deals 260% damage to the target.',
                'Attacks randomly a new target if any minions were destroyed.'
            ]
        }
    },
    grimm: {
        name: 'Grimm',
        attack: 716,
        defense: 531,
        health: 1132,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204515.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        }
    },        
    kiril: {
        name: 'Kiril',
        attack: 656,
        defense: 673,
        health: 1034,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Kiril.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Blessed Brew',
            description: [
                'Recover 28% health for all allies and they get +30% attack and +30% defense for 3 turns'
            ]
        }
    },
    sonya: {
        name: 'Sonya',
        attack: 607,
        defense: 731,
        health: 1011,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204507.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Piercing Strike',
            description: [
                'Deal 345% damage to a single enemy and remove buffs from all enemies'
            ]
        }
    },
    triton: {
        name: 'Triton',
        attack: 720,
        defense: 601,
        health: 1049,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Triton.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Trident Throw',
            description: [
                'Deals 335% damage to the target.',
                'All allies get +39% healing received for 4 turns.'
            ]
        }
    },
    valeria: {
        name: 'Valeria',
        attack: 609,
        defense: 656,
        health: 1196,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Valeria_(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Dusk of Sorrow',
            description: [
                'Deals 235% damage to the target.',
                'The target receives 150 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 220, up to 580 damage in total',
                'The caster steals 61% of any healing applied to the target for 3 turns'
            ]
        }
    }
};

const yellow4StarHeroes = {
    chao: {
        name: 'Chao',
        attack: 607,
        defense: 675,
        health: 1115,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Chao.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Tactical Cut',
            description: [
                'Deals 315% damage to the target.',
                'Reduces the mana of the target by 25%.'
            ]
        }
    },
    danzaburo: {
        name: 'Danzaburo',
        attack: 622,
        defense: 637,
        health: 1224,
        pseudonyms: ['danzaburo', 'danza', 'ewok'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Danzaburo.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: "Trickster's Gambit",
            description: [
                'Perform a trick for a specific effect:',
                '',
                'Swords:',
                'Deals 240% damage to all enemies',
                'All enemies get -54% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills',
                '',
                'Bottle:',
                'All allies get +24% mana generation for 4 turns.',
                'All allies get +63% defense for 4 turns.',
                '',
                'Freeze:',
                "The caster can't game mana for 2 turns. This effect can't be dispelled"
            ]
        }

    },
    gretel: {
        name: 'Gretel',
        attack: 703,
        defense: 599,
        health: 1056,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Gretel.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Witch Slayer',
            description: [
                'Deals 175% damage to the target and minor damage to nearby enemies.',
                'Automatically does 21% damage to the target when their mana is full and reduces their mana to 50% for 3 turns.',
                'The caster gets +74% defense against Special Skills for 3 turns.'
            ]
        }
    },
    'hu tao': {
        name: 'Hu Tao',
        attack: 603,
        defense: 631,
        health: 1183,
        pseudonyms: ['hu', 'hu tao', 'hu-tao'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Hu-Tao%20(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Sonic Wall',
            description: [
                'Deals 200% damage to all enemies.',
                'All enemies get -35% accuracy for 4 turns. Chance to miss also applies to offensive special skills.'
            ]
        }
    },
    jackal: {
        name: 'Jackal',
        attack: 765,
        defense: 531,
        health: 1032,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Guardian-Jackal.png',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Ray Strike',
            description: [
                'Deal 270% damage to a single enemy and they get -54% defense against Holy for 4 turns'
            ]
        }
    },         
    'li xiu': {
        name: 'Li Xiu',
        attack: 616,
        defense: 665,
        health: 1098,
        pseudonyms: ['li', 'li xiu', 'li-xiu'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Hel-4.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Slash of Seven Blades',
            description: [
                'Deal 150% damage to all enemies and reduce their mana by 20%'
            ]
        }
    },
    'wu kong': {
        name: 'Wu Kong',
        attack: 707,
        defense: 620,
        health: 992,
        pseudonyms: ['wu', 'wu kong', 'wu-kong'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Wu-Kong.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: "Gambler's Stance",
            description: [
                'All allies get +185% attack with -32% accuracy for 5 turns. Chance to miss applies also to Special Skills.'
            ]
        }
    }
};

const green4StarHeroes = {
    buddy: {
        name: 'Buddy',
        attack: 531,
        defense: 690,
        health: 1323,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Buddy.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Gift Sack',
            description: [
                'Deals 205% damage to the target and nearby enemies.',
                'Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster.',
                'The target and nearby enemies get -34% defense for 3 turns.'
            ]
        }
    },
    caedmon: {
        name: 'Caedmon',
        attack: 635,
        defense: 637,
        health: 1128,
        pseudonyms: ['caed', 'caedmon'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212143%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Piercing Strike',
            description: [
                'Deal 345% damage to a single enemy and remove buffs from all enemies'
            ]
        }
    }, 
    gaedirus: {
        name: 'Gadeirus',
        attack: 618,
        defense: 690,
        health: 1096,
        pseudonyms: ['gaed', 'gad', 'gaedirus', 'gadeirus'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Gadeirus.png',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Empowering Bash',
            description: [
                'Deals 165% damage to the target and minor damage to nearby enemies.',
                'The caster and nearby allies get +48% attack for 4 turns.',
                'The caster and nearby allies regenerate 612 HP over 4 turns.'
            ]
        }
    },
    gobbler: {
        name: 'Gobbler',
        attack: 737,
        defense: 450,
        health: 1302,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Gobbler.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Minion Eater',
            description: [
                'Deals 155% damage to all enemies.',
                'Destroys all minions from all enemies.',
                'All allies recovere 50 health for each eaten minion.'
            ]
        }
    },
    hansel: {
        name: 'Hansel',
        attack: 699,
        defense: 601,
        health: 1064,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Green-Hansel.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Witch Killer',
            description: [
                'Deals 255% damage to the target.',
                'Automatically does 21% damage to the target when their mana is full and reduces their mana to 50% for 3 turns.',
                'The caster gets +74% defense against Special Skills for 3 turns.'
            ]
        }
    },
    "jack o'hare": {
        name: "Jack O'Hare",
        attack: 743,
        defense: 603,
        health: 960,
        pseudonyms: ['jack', "jack o'hare", 'jack ohare', 'jack hare'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Jack-OHare.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Reckless Slash',
            description: [
                'Deals 180% damage to all enemies.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        }
    },    
    kashhrek: {
        name: 'Kashhrek',
        attack: 548,
        defense: 648,
        health: 1321,
        pseudonyms: ['kash', 'kashrek', 'kashhrek'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Kashhrek.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Swamp Skin',
            description: [
                'Recover 45% health for nearby allies and they get +94% defense against Fire for 3 turns'
            ]
        }
    },
    'little john': {
        name: 'Little John',
        attack: 741,
        defense: 569,
        health: 988,
        pseudonyms: ['lj', 'little john', 'little-john'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170629-134427.png',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Massive Chop',
            description: [
                'Deal 185% damage to all enemies and they get -64% mana generation for 3 turns'
            ]
        }
    },          
    melendor: {
        name: 'Melendor',
        attack: 714,
        defense: 586,
        health: 1000,
        pseudonyms: ['mel', 'melendor', 'gandalf'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212217%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Fog of the Fallen',
            description: [
                'Recover 42% health for all allies and remove buffs from all enemies'
            ]
        }
    },
    peters: {
        name: 'Peters',
        attack: 643,
        defense: 641,
        health: 1113,
        pseudonyms: ['cabin boy', 'peters', 'cabin boy peters', 'cabinboy', 'cabinboy peters'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Peters.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Buccaneers Blade',
            description: [
                'Deals 320% damage to the target.',
                'The target gets silenced for 3 turns.'
            ]
        }
    },
    skittleskull: {
        name: 'Skittleskull',
        attack: 728,
        defense: 605,
        health: 969,
        psuedonyms: ['skittles', 'skittleskull'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Nature-Skittleskull.png',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Skittleskull',
            description: [
                'Deals 185% damage to all enemies.',
                'All enemies get -34% attack for 6 turns.'
            ]
        }
    }
};

const red4StarHeroes = {
    boldtusk: {
        name: 'Boldtusk',
        attack: 588,
        defense: 711,
        health: 1107,
        pseudonyms: ['boldtusk', 'bold', 'bt'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Hel-2.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Warcry',
            description: [
                'Recover 27% health for all allies and they get +48% attack for 4 turns'
            ]
        }
    },
    colen: {
        name: 'Colen',
        attack: 728,
        defense: 537,
        health: 1094,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Colen.png',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Fire Storm',
            description: [
                'Deal 180% damage to all enemies and tehy receive 330 damage over 6 turns'
            ]
        }
    },
    falcon: {
        name: 'Falcon',
        attack: 552,
        defense: 754,
        health: 1126,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Guardian-Falcon.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Blazing Beak',
            description: [
                'Deal 225% damage to target and nearby enemies and they get -54% defense against Fire for 4 turns'
            ]
        }
    },
    gormek: {
        name: 'Gormek',
        attack: 569,
        defense: 565,
        health: 1430,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193939%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        }
    },
    kelile: {
        name: 'Kelile',
        attack: 675,
        defense: 686,
        health: 935,
        pseudonyms: ['kelile', 'kellile'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Kelile.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Dance of Fire',
            description: [
                'Deal 320% damage to a single enemy and they receive 306 damage over 6 turns'
            ]
        }
    },
    lancelot: {
        name: 'Sir Lancelot',
        attack: 756,
        defense: 533,
        health: 1047,
        pseudonyms: ['lance', 'sir lancelot', 'lancelot', 'sir lance'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Sir-Lancelot_(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Inspiring Fencing',
            description: [
                'Deals 250% damage to the target.',
                'The caster and nearby allies get +24% mana generation for 4 turns.',
                'The caster and nearby allies get +48% attack for 4 turns.'
            ]
        }
    },
    scarlett: {
        name: 'Scarlett',
        attack: 767,
        defense: 507,
        health: 1039,
        pseudonyms: ['scarlet', 'scarlett'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-194023%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Blade Barrage',
            description: [
                'Deal 215% damage to a single enemy and minor damage to nearby enemies and they get -34% attack for 6 turns.'
            ]
        }
    },
    sumitomo: {
        name: 'Sumitomo',
        attack: 665,
        defense: 633,
        health: 1113,
        pseudonyms: ['sumi', 'sumitomo'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Sumitomo.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Oji-Waza',
            description: [
                'Deals 280% damage to the target',
                'The caster counterattacks with 135% of the damage received for 5 turns.',
                'The caster regenerates a moderate amount of mana for each counterattack. The effect gets diminished for consecutive activations during the same turn.'
            ]
        }
    },    
    wilbur: {
        name: 'Wilbur',
        attack: 605,
        defense: 690,
        health: 1143,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Fire-Wilbur.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Wonderful Feast',
            description: [
                'All allies share received damage with each other for 4 turns.',
                'All enemies share received damage with each other for 4 turns.',
                'All allies get +63% defense for 4 turns.',
                'All enemies get -44% defense for 4 turns.'
            ]
        }
    }
};

const purple4StarHeroes = {
    ameonna: {
        name: 'Ameonna',
        attack: 771,
        defense: 527,
        health: 1054,
        pseudonyms: ['ameona, ammeona, ameonna, ammeonna, ghost girl, ghost-girl'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Ameonna.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Ghost',
            description: [
                'The caster shifts into Ghost form.',
                'Ghost form removes all dispellable and undispellable buffs and status ailments from the caster.',
                'While in Ghost form the caster gains +82% normal attack.',
                "While in Ghost form the caster can't gain mana but is immune to normal attacks, special attacks, and all status effects.",
                'Ghost form lasts for 4 turns.'
            ]
        }
    },
    boomer: {
        name: 'Boomer',
        attack: 541,
        defense: 663,
        health: 1323,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Boomer_(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Watery Grave',
            description: [
                'Deals 204% damage to all enemies.',
                'The caster and nearby allies get +94% defense against Holy for 3 turns.'
            ]
        }
    },
    'chesire cat': {
        name: 'Cheshire Cat',
        attack: 658,
        defense: 641,
        health: 1105,
        pseudonyms: ['chesire', 'cat', 'chesire-cat', 'chesire cat'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Cheshire-Cat.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Dazzling Grin',
            description: [
                'Rearranges the enemy positions randomly',
                'All Holy enemies get -44% defense for 4 turns.',
                "All enmies receive 276 damage over 4 turns. This effect can't be dispelled."
            ]
        }
    },
    cyprian: {
        name: 'Cyprian',
        attack: 563,
        defense: 605,
        health: 1362,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Cyprian%20(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Perfect Riposte',
            description: [
                'The caster and nearby allies counterattack with 125% of the damage received for 5 turns.'
            ]
        }
    },
    gafar: {
        name: 'Gafar',
        attack: 711,
        defense: 633,
        health: 988,
        pseudonyms: ['gafar', 'gaffar'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Gafar.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Sand Gale',
            description: [
                'Deals 260% damage to the target.',
                'The target receives 228 damage over 4 turns.',
                "The target gets -100% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        }
    },
    jabbar: {
        name: 'Jabbar',
        attack: 531,
        defense: 690,
        health: 1323,
        pseudonyms: ['jabar', 'jabbar', 'sandcastle', 'sand castle', 'walking sand castle'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Jabbar.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Sand Gale',
            description: [
                'Deals 235% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies reeive 172 damage over 4 turns.',
                "The target and nearby enemies get -75% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        }
    },
    merlin: {
        name: 'Merlin',
        attack: 682,
        defense: 660,
        health: 975,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Merlin_(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Arcane Blast',
            description: [
                'Deals 220% damage to the target.',
                'The more mana the enemies have, the more damage they will receive, up to 250%.',
                'The target automatically casts Mindless Attack on a random ally when mana is full during 3 turns.'
            ]
        }
    },
    proteus: {
        name: 'Proteus',
        attack: 707,
        defense: 595,
        health: 1079,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Proteus.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Scar of the Depths',
            description: [
                'The target and nearby enemies receive 327 damage over 3 turns.',
                "The target and nearby enemies can't gain mana for 3 turns."
            ]
        }
    },    
    rigard: {
        name: 'Rigard',
        attack: 595,
        defense: 673,
        health: 1166,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221453%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Purification',
            description: [
                'Recover 42% health for all allies and cure status ailments from them'
            ]
        }
    },
    sabina: {
        name: 'Sabina',
        attack: 699,
        defense: 578,
        health: 1060,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221551%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Fog of the Fallen',
            description: [
                'Recover 42% health for all allies and remove buffs from all enemies'
            ]
        }
    },    
    tibertus: {
        name: 'Tibertus',
        attack: 660,
        defense: 633,
        health: 1045,
        pseudonyms: ['burt', 'tibs', 'tibertus'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221432%20(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        }
    }
}

const blue5StarHeroes = {
    aegir: {
        name: 'Aegir',
        attack: 615,
        defense: 823,
        health: 1446,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Aegir%20(2).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Icy Resilience',
            description: [
                'All allies share received damage with each other for 3 turns.',
                'All allies get +30% defense for 3 turns.',
                'All allies heal 100% of dealt normal damage for 3 turns.',
                "Element Link recovers 4% health for all Ice allies for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    alasie: {
        name: 'Alasie',
        attack: 739,
        defense: 706,
        health: 1336,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Alasie%20(2).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Spirit Arrow',
            description: [
                'Deals 462% damage to the target.',
                "The target and nearby enemies get -24% mana generation for 3 turns. This effect can't be dispelled.",
                "Element Link gives all Ice allies +5% attack and +5% defense for 6 turns. This effect cant be dispelled."
            ]
        }
    },
    alice: {
        name: 'Alice',
        attack: 741,
        defense: 714,
        health: 1326,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Alice%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Timeless Timepiece',
            description: [
                'Deals 430% damage to the target.',
                'Target gets -44% attack for 3 turns. The effect duration is reset if the target is healed. This effect cannot be dispelled.'
            ]
        }
    },
    ariel: {
        name: 'Ariel',
        attack: 731,
        defense: 768,
        health: 1260,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Ariel%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Divine Protection',
            description: [
                'Recovers 40% health for all allies.',
                'All allies get +24% mana generation for 4 turns.',
                'Dispels status ailments from all allies.'
            ]
        }
    },
    athena: {
        name: 'Athena',
        attack: 737,
        defense: 692,
        health: 1349,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Athena.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: "Athena's Bow",
            description: [
                'Deal 305% damage to a single enemy and minor damage on nearby enemies and they get -41% defense and a further -4% decrease every time they are hit for 4 turns. Deals extra damage against Fire.'
            ]
        }
    },
    finley: {
        name: 'Finley',
        attack: 753,
        defense: 745,
        health: 1314,
        pseudonyms: ['fin', 'finley'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Finley.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: "Commodore's Revenge",
            description: [
                'Deals 385% damage to the target.',
                'If the target has buffs, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.',
                'All hit targets get -34% defense for 3 turns.'
            ]
        }
    },
    frida: {
        name: 'Frida',
        attack: 733,
        defense: 723,
        health: 1330,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Frida%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Polar Bash',
            description: [
                'Deals 290% damage to the target and nearby enemies',
                'The target and nearby enemies get -54% defense against Ice for 4 turns.',
                'Dispels buffs from the target and nearby enemies',
                "Element Link gives all Ice allies +46% defense against Nature for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    isarnia: {
        name: 'Isarnia',
        attack: 797,
        defense: 655,
        health: 1200,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Isarnia.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Glacial Shatter',
            description: [
                'Deal 235% damage to all enemies and they get -44% defense for 6 turns'
            ]
        }
    },
    'king arthur': {
        name: 'King Arthur',
        attack: 708,
        defense: 733,
        health: 1336,
        pseudonyms: ['arthur', 'ka', 'king arthur', 'king-arthur'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-King-Arthur_(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Excalibur',
            description: [
                'Deals 468% damage to the target.',
                'The target gets -39% attack for 4 turns.',
                'The target gets -54% defense against Ice for 4 turns.',
                'The caster gets +74% defense against Special Skills for 4 turns.'
            ]
        }
    },
    magni: {
        name: 'Magni',
        attack: 793,
        defense: 591,
        health: 1334,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Magni.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Strike of the Ancients',
            description: [
                'Deal 420% damage to a single enemy and nearby allies get +63% defense for 4 turns'
            ]
        }
    },
    'master lepus': {
        name: 'Master Lepus',
        attack: 795,
        defense: 690,
        health: 1194,
        pseudonyms: ['master lepus', 'lepus'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Master-Lepus.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Reckless Finisher',
            description: [
                'Deals 410% damage to the target and minor damage to nearby enemies.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        }
    },
    'miki': {
        name: 'Miki',
        attack: 712,
        defense: 778,
        health: 1275,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Miki_August-HOTM.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Wrath of Tundra',
            description: [
                'All allies get +130% normal attack that only applies when the enemy has more health than the attacker. Stacks with similar status effects up to a maximum of +170% normal attack. The effect lasts for 5 turns.',
                'The target and nearby enemies get silenced for 4 turns.',
                "Element Link gives +4% mana generation for all Ice allies for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    misandra: {
        name: 'Misandra',
        attact: 723,
        defense: 751,
        health: 1330,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Misandra.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Chain Strike',
            description: [
                'Deals 310% damage to the target.',
                'Has a 42% chance for additional hits on random enemies up to 3 times. Additional hits deal minor damage.',
                'All allies gain a small amount of mana for each additional hit.'
            ]
        }
    },
    perseus: {
        name: 'Perseus',
        attack: 725,
        defense: 698,
        health: 1367,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray//5-Ice-Perseus.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Everlasting Wound',
            description: [
                "Deal 355% damage to a single enemy and they get -100% healing received for 4 turns and it can't be dispelled. Nearby allies get +94% defense against Nature for 4 turns."
            ]
        }
    },
    richard: {
        name: 'Richard',
        attack: 644,
        defense: 817,
        health: 1260,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204347.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Cloud Hammer',
            description: [
                'Deal 415% damage to a single enemy and minor damage on nearby enemies and they get -34% attack for 6 turns'
            ]
        }
    },
    rumpelstiltskin: {
        name: 'RumpleStiltskin',
        attack: 733,
        defense: 698,
        health: 1359,
        pseudonyms: ['rumple', 'rumpel', 'rumplestiltskin', 'rumpelstiltskin', 'rumplestilskin', 'rumpelstilskin', 'rump'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Rumpelstiltskin%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Legerdemain',
            description: [
                'Draw a card for a specific effect:',
                '',
                'Skull:',
                'Deals 270% damage to all enemies.',
                'All enemies receive 156 damage over 3 turns.',
                '',
                'Cross:',
                'Recovers 27% health for all allies.',
                'Dispels status ailments from all allies.',
                '',
                'Stars:',
                'All enemies get -34% defense for 3 turns.',
                'All allies get +48% attack for 3 turns.'
            ]
        }
    },
    thorne: {
        name: 'Thorne',
        attack: 638,
        defense: 793,
        health: 1339,
        pseudonyms: ['thorne', 'thorn'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Thorne%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Icecold Finisher',
            description: [
                'Deals 480% damage to the target and minor damage to nearby enemies.'
            ]
        }
    }
}

const heroes = {
    // 3*
    ...blue3StarHeroes,
    ...yellow3StarHeroes,
    ...green3StarHeroes,
    ...red3StarHeroes,
    ...purple3StarHeroes,

    // 4*
    ...blue4StarHeroes,
    ...yellow4StarHeroes,
    ...green4StarHeroes,
    ...red4StarHeroes,
    ...purple4StarHeroes,

    // 5*
    ...blue5StarHeroes
};

module.exports = {
    blue3StarHeroes,
    yellow3StarHeroes,
    green3StarHeroes,
    red3StarHeroes,
    purple3StarHeroes,

    blue4StarHeroes,
    yellow4StarHeroes,
    green4StarHeroes,
    red4StarHeroes,
    purple4StarHeroes,

    blue5StarHeroes,

    heroes
}