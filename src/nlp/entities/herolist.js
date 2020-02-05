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
        },
        synopsis: [
            'Fast mana sniper with excellent tile damage for a 3* with a very hard special hit that also provides immunity to status ailments for a trio.',
            'Best on the wings of a defense team.',
            'Combine with a defense dropper like Valen for faster kills.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Decent special attack with small amount of healing from damage dealt that can be life-saving.',
            'Best on the wings or flanks of a defense team. Could be a tank in a pinch.',
            'Combine with a defense dropper like Valen for faster kills.',
            'Good hero for your first 30, rare events, special raid tournaments.',
        ]
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
        },
        synopsis: [
            'Spirit-link defense provides the increased shielding and shared damage that enables your team to survive tough enemies',
            'Flank, tank or winger. Preferrably left side for a winger.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Not a very useful hero. Multiple Valens/Gatos/Graymanes are more valuable as attackers.'
        ]
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
        },
        synopsis: [
            '3* Defense dropper on all. Excellent attack.',
            'Detriments are squishiness and slow mana.',
            'Good hero for your first 30, rare events, special raid tournaments with 3*s and very fast mana. Consider retiring when you get Grimm, Isarnia, Athena or Frida'
        ]
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
        },
        synopsis: [
            'Excellent 3* Defense dropper with good attack.',
            'Combine with other hitters to form devastating attack teams.',
            'Good hero for your first 30, rare events, special raid tournaments with 3* and until you get Grimm.'
        ]
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
        },
        synopsis: [
            'Decent hitter with damage proportionate to target mana. Looks sturdy.',
            'Combine with a defense dropper like Valen.',
            'Good hero for your first 30, rare events, special raid tournaments with 3* and until you get Sonya or Triton.'
        ]
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
        },
        synopsis: [
            'Decent hit-all hitter with damage over time and heal blocking, Good for using in healing mode wars.',
            'Deteriment is slow mana',
            'Useful hero for your first 30, rare events, special raid tournaments with 3* where slow mana becomes very fast.'
        ]
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
        },
        synopsis: [
            'One of the best 3* snipers. Everyone has one. Keep it!',
            'Blindness is very useful to give you extra chances against hard hitting enemies.',
            'Useful hero for your first 30, rare events, special raid tournaments with 3*'
        ]
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
        },
        synopsis: [
            'Not a very useful hero. Stay away.'
        ]
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
        },
        synopsis: [
            'Some damage with mana control. Good to pair with Bane perhaps.',
            'Keep until you have better yellow stacking options.'
        ]
    },
    melia: {
        name: 'Melia',
        attack: 505,
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
        },
        synopsis: [
            'Good tile damage but low special attack. The key is the increased critical hit buff and fast mana.',
            'Useful hero for your first 30, rare events, special raid tournaments with 3*'
        ]
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
        },
        synopsis: [
            'Not an attacker. Spirit-link defense provides the increased shielding and shared damage that enables your team to survive tough enemies',
            'Good hero for your first 30, rare events, special raid tournaments until you get a more durable replacement like Wilbur or Aegir'
        ]
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
        },
        synopsis: [
            'Good 3* healer with the special able to remove buffs from enemies.',
            'Good hero for your first 30, rare events, special raid tournaments. She can be replaced with a 4* like Melendor.'
        ]
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
        },
        synopsis: [
            'Good 3* sniper who reduces the attack of a successfully hit target',
            'Good hero for your first 30, rare events, special raid tournaments. He can be replaced with a 4* like Caedmon.'
        ]
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
        },
        synopsis: [
            'Attack buff that keeps ramping up is excellent and a rare ability for a 3*. She is good for everything.',
            'Limited survivability at around 7-8* titans'
        ]
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
        },
        synopsis: [
            'Ok on defense for a 3*. Very limited beyond this world.'
        ]
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
        },
        synopsis: [
            'Decent partial healer with mana generation buff.',
            'Kashhrek is a good replacement.'
        ]
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
        },
        synopsis: [
            'Excellent tile damage for a 3* with hard special hit, damage over time and heal blocking.',
            'Special attack also cures status ailments on himself.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Nice attack 3 but having multiple hard hitting greens like Hisan and Berden might be a better option.',
            'Keep on first 30 if you have him and use on rare events, special raid tournaments as needed.'
        ]
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
        },
        synopsis: [
            'Good hard special hit and dispel.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Highest tile damage for a 3* hero. Special resurrection can give your attack/defense team extra lives.',
            'Use in a trio with titan shields against really big titans for amazing damage.',
            'Good hero for your first 30, rare events, special raid tournaments and big titans if you want to try the titan shields trick.'
        ]
    },
    shrubbear: {
        name: 'Shrubbear',
        attack: 351,
        defense: 512,
        health: 888,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Shrubbear.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Camouflage Foliage',
            description: [
                "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
                'The caster gets +63% defense for 4 turns.',
                'The caster gets +74% defense againse Special Skills for 4 turns.'
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
        },
        synopsis: [
            'Decent damage for a 3* with mana reduction similar to Gan Ju.',
            'Keep on first 30 if you have her and use on rare events, special raid tournaments as needed.'
        ]
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
        },
        synopsis: [
            '3* Guinevere with the mana reduction. Combine with fast mana hitters to increase offence.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Good 3* healer. Second only to Belith.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'Heavy damage and damage over time hitter limited only by slow mana.',
            'Good hero for your first 30, rare events and special raid tournaments - especially where mana is very fast and you can only use 3* heroes.'
        ]
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
        },
        synopsis: [
            'High tile damage for a 3* with a hard special hit and ramping attack buff like Brienne.',
            'A bit squishy.',
            'Good hero for your first 30, rare events, special raid tournaments.'
        ]
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
        },
        synopsis: [
            'High tile damage for a 3* with a hard special hit and good damage over time on one target.',
            ''
        ]
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
    'guardian bat': {
        name: 'Guardian Bat',
        attack: 437,
        defense: 418,
        health: 862,
        pseudonyms: ['bat', 'guardian bat'],
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/c/cb/Guardian_Bat_-_Hero_Card.gif/revision/latest?cb=20200109125830',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Merciless Bite',
            description: [
                'Deals 270% damage to the target and minor damage to nearby enemies.',
                'The damage is increased by 60% per each dead ally.'
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
        name: 'Guardian Jackal',
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
        pseudonyms: ['skittles', 'skittleskull'],
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
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Ice-Alice_(1).png',
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
        attack: 723,
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
    'snow white': {
        name: 'Snow White',
        attack: 756,
        defense: 747,
        health: 1299,
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/e/e6/Snow_White.png/revision/latest?cb=20191204181154',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Enchanted Edge',
            description: [
                'Dispels all buffs and status ailments from all allies and enemies.',
                'Deals 180% damage to all enemies and additional 15% damage per removed status effect, up to 420% damage in total.'
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
    },
    vela: {
        name: 'Vela',
        attack: 743,
        defense: 729,
        health: 1303,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Vela_January-HOTM.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Aquatic Outbreak',
            description: [
                'Deals 150% damage to all enemies.',
                'All enemies receive 208 Water damage over 4 turns.',
                'All Fire enemies get -54% attack for 4 turns.',
                'Deals extra damage against Fire.',
                "Element Link gives all ice allies +10% critial chance for 6 turns. This effect can't be dispelled."
            ]
        }
    }
}

const yellow5StarHeroes = {
    delilah: {
        name: 'Delilah',
        attack: 737,
        defense: 704,
        health: 1345,
        pseudonyms: ['del', 'delilah'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Delilah.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Summon Temple Guardians',
            description: [
                'Recovers 33% health for all allies.',
                'Summons a Guardian Minion for each ally with 13% HP and 16% attack inherited from the caster.'
            ]
        }
    },
    'drake fong': {
        name: 'Drake Fong',
        attack: 727,
        defense: 712,
        health: 1353,
        pseudonyms: ['drake', 'drake fong'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Drake-Fong.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Flails of Fury',
            description: [
                'Deals 270% damage to the target and nearby enemies.',
                'The target and nearby enemies get -35% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.',
                "Element Link gives all Holy allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    'guardian gazelle': {
        name: 'Guardian Gazelle',
        attack: 751,
        defense: 741,
        health: 1324,
        pseudonyms: ['gazelle', 'guardian gazelle'],
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/5/5d/Guardian_Gazelle_-_Hero_Card.gif/revision/latest?cb=20200109132056',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Dance of Spirits',
            description: [
                'Removes all dispellable and undispellable status effects from all allies except the caster.',
                'The caster regenerates 612 HP over 4 turns.',
                'For 4 turns all allies except the caster start dancing the Dance of Spirits:',
                '',
                '+100% attack.',
                'Reduces all received damage by -50%.',
                'Gives immunity to new status effects.',
                'If the caster dies, the dancer receives 100% damage and their mana is reduced by 100%.',
                'This effect cannot be dispelled.'
            ]
        }
    },
    'guardian owl': {
        name: 'Guardian Owl',
        attack: 601,
        defense: 795,
        health: 1483,
        pseudonyms: ['owl', 'guardian owl'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Guardian-Owl%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_SLOW,
        special: {
            name: 'Stately Retribution',
            description: [
                'Deals 235% damage to all enemies.',
                'Damage is increased by 60% per each dead ally.',
                'The caster gets +46% defense for 5 turns.',
                'The caster regenerates 765 HP over 5 turns.'
            ]
        }
    },
    guinevere: {
        name: 'Guinevere',
        attack: 669,
        defense: 778,
        health: 1347,
        pseudonyms: ['guin', 'guinevere'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Guinevere_(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Word of the Queen',
            description: [
                'Reduces the mana of all enemies by 20%.',
                'The caster and nearby allies regenerate 612 HP over 4 turns.',
                'The caster and nearby allies get +54% defense against Dark for 4 turns.'
            ]
        }
    },
    inari: {
        name: 'Inari',
        attack: 813,
        defense: 642,
        health: 1312,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Inari.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Lucky Nine',
            description: [
                'All allies get +56% chance to dodge Special Skills for 3 turns. Each dodge summons a Sakura Fox minion.',
                'Sakura Fox Minion has 8% HP and 30% attack inherited from the caster. It adds 7% mana to its owner at the end of each turn.'
            ]
        }
    },
    joon: {
        name: 'Joon',
        attack: 749,
        defense: 636,
        health: 1339,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-213228%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Solar Beam',
            description: [
                'Deal 467% damage to a single enemy and they are less accurate for 6 turns'
            ]
        }
    },
    justice: {
        name: 'Justice',
        attack: 609,
        defense: 776,
        health: 1425,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Justice%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Rite of Judgement',
            description: [
                'Deals 240% damage to all enemies.',
                'All enemies get -40% accuract for 4 turns.',
                'Chance to miss also applies to offensive Special Skills.'
            ]
        }
    },
    leonidas: {
        name: 'Leonidas',
        attack: 731,
        defense: 718,
        health: 1221,
        pseudonyms: ['leo', 'leonidas'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Leonidas%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Spartan Cleave',
            description: [
                'Deals 365% damage to the target.',
                'Reduces the mana of the target by 40%',
                'Heals the caster for 75% of damage dealt.'
            ]
        }
    },
    musashi: {
        name: 'Musashi',
        attack: 786,
        defense: 679,
        health: 1248,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Musashi%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Dragon Fang',
            description: [
                'Deal 332% damage to a single enemy and minor damage to nearby enemies.',
                'The caster heals 50% of dealt normal damage for 5 turns.'
            ]
        }
    },
    neith: {
        name: 'Neith',
        attack: 735,
        defense: 737,
        health: 1299,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Neith.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Sickle of Eradication',
            description: [
                'Deals 150% damage to all enemies.',
                'Reduces the mana of all enemies by 10%.',
                'All enemies get -35% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.',
                "Element Link gives +4% mana generation for all Holy allies for 4 gturns. This effect can't be dispelled."
            ]
        }
    },
    onatel: {
        name: 'Onatel',
        attack: 618,
        defense: 815,
        health: 1437,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Onatel%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Eye of the Prophet',
            description: [
                'Deals 250% damage to the target and nearby enemies.',
                "The caster steals generated mana of the target and the nearby enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be dispelled, but gets removed if the caster dies.",
                "Element Link recovers 4% health for all Holy allies for 6 turns. This effect can't be dispelled."
            ]
        }

    },
    poseidon: {
        name: 'Poseidon',
        attack: 745,
        defense: 718,
        health: 1349,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Poseidon.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Ruler of Seas',
            description: [
                'Deals 450% damage to the target.',
                'All allies resist new negative mana effects for 3 turns.',
                'ALl allies resist new effects that block usage of Special Skills for 3 turns.'
            ]
        }
    },
    rana: {
        name: 'Rana',
        attack: 735,
        defense: 710,
        health: 1367,
        pseudonyms: ['rana', 'sandqueen', 'sand-queen'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Rana.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Sand Storm',
            description: [
                'Deals 185% damage to the target and nearby enemies.',
                'The target and nearby enemies receive 402 damage over 3 turns.',
                "The target and nearby enemies get -75% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        }
    },
    ranvir: {
        name: 'Ranvir',
        attack: 768,
        defense: 782,
        health: 1126,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Ranvir_June-HOTM.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: "Mystic's Virtue",
            description: [
                'Deals 265% damage to the target.',
                'All allies get +195% attack and -35% accuracy that only applies when the enemy has more health than the attacker. The effect lasts for 5 turns.',
                "Element Link gives all Holy allies +46% defense against Dark for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    vivica: {
        name: 'Vivica',
        attack: 714,
        defense: 694,
        health: 1328,
        pseudonyms: ['viv', 'vivica'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-Vivica.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Omniheal',
            description: [
                'Recover 44% health for all allies and cure status ailments from them and they get +63% defense for 4 turns'
            ]
        }
    },
    'white rabbit': {
        name: 'White Rabbit',
        attack: 731,
        defense: 749,
        health: 1353,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Holy-White-Rabbit.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: "Rabbit's Watch",
            description: [
                'Deals 280% damage to the target and nearby enemies.',
                "Target gets -34% defense for 4 turns. This effect duratiion is reset if the target is healed. This effect cant be dispelled."
            ]
        }
    }
};

const green5StarHeroes = {
    alberich: {
        name: 'Alberich',
        attack: 725,
        defense: 741,
        health: 1277,
        pseudonyms: ['alby', 'alberich'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Alberich%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: "Midsummer's Dream",
            description: [
                'Each fallen ally has a 33% chance to get revived with 23% HP.',
                'All allies regenerate 612 HP over 4 turns.',
                'All allies regenerate a moderate amount of mana over 4 turns.'
            ]
        }
    },
    atomos: {
        name: 'Atomos',
        attack: 733,
        defense: 727,
        health: 1336,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Atomos%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Immortal Annihilator',
            description: [
                'Deals 150% damage to all enemies.',
                'The more mana the enemies have, the more damage they will receive, up to 270%.',
                'If the caster dies during the next 5 turns they are resurrected in the beginning of their next turn with 32% health. All status effects are removed when the caster dies.'
            ]
        }
    },
    elkanen: {
        name: 'Elkanen',
        attack: 675,
        defense: 802,
        health: 1266,
        pseudonyms: ['elk', 'elkanen'],
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/2/26/Elkanen_-_Hero_Card.gif/revision/latest?cb=20190321142237',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Crescent Spear',
            description: [
                'Deals 330% damage to the target and minor damage to nearby enemies.',
                'Heals the caster for 38% of damage dealt.'
            ]
        }
    },
    evelyn: {
        name: 'Evelyn',
        attack: 727,
        defense: 712,
        health: 1355,
        pseudonyms: ['eve', 'evelyn'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Evelyn.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Shattering Warcry',
            description: [
                'Deals 210% damage to the target and nearby enemies.',
                'The target and nearby enemies get -54% defense against Nature for 4 turns.',
                "Element Link recovers 4% health for all Nature allies for 6 turns. This effect can't be dispelled.",
                'Dispels buffs from the target and nearby enemies.'
            ]
        }
    },
    gregorion: {
        name: 'Gregorion',
        attack: 729,
        defense: 710,
        health: 1351,
        pseudonyms: ['greg', 'gregorion'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Gregorion.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Unwavering Focus',
            description: [
                'Deals 455% damage to the target.',
                'All allies get +30% critical chance for 3 turns.',
                "Element Link gives all Nature allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    'guardian chameleon': {
        name: 'Guardian Chameleon',
        attack: 714,
        defense: 780,
        health: 1339,
        pseudonyms: ['chameleon', 'guardian chameleon'],
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/9/9d/Guardian_Chameleon_-_Hero_Card.gif/revision/latest?cb=20200109131113',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Elemental Magic',
            description: [
                'Removes all dispellable and undispellable status effects from all enemies.',
                'Changes the element of all enemies to the element they are strong against for 3 turns',
                'All allies get +54% attack for 4 turns.',
                'All allies get +36% critical chance for 4 turns.'
            ]
        }

    },
    horghall: {
        name: 'Horghall',
        attack: 657,
        defense: 650,
        health: 1545,
        pseudonyms: ['groot', 'tree', 'horg', 'horghall'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Horghall%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Anger of the Forest',
            description: [
                'Deals 235% damage to all enemies.',
                'All enemies get -34% attack for 6 turns.'
            ]
        }
    },
    kadilen: {
        name: 'Kadilen',
        attack: 711,
        defense: 766,
        health: 1246,
        pseudonyms: ['kadilen', 'kad'],
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/b/bd/Kadilen_-_Hero_Card.gif/revision/latest?cb=20190321142652',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Eclipse Shield',
            description: [
                'Deals 190% damage to all enemies.',
                'All allies get +74% defense against Special Skills for 3 turns.'
            ]
        }
    },
    kingston: {
        name: 'Kingston',
        attack: 749,
        defense: 735,
        health: 1266,
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/8/80/Kingston_-_Hero_Card.gif/revision/latest?cb=20191001130313',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Stiletto Cyclone',
            description: [
                'Deals 445% damage to the target.',
                'The target and nearby enemies get -31% attack, and a further -4% decrease every time they are hit during 4 turns.',
                "Element Link gives +4% mana generation for all Nature allies for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    'lady locke': {
        name: 'Lady Locke',
        attack: 805,
        defense: 665,
        health: 1231,
        pseudonyms: ['lady locke', 'locke'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Lady-Locke.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Moolight Serenade',
            description: [
                'The target and nearby enemies receive 869 damage over 4 turns, starting low and increasing with every turn.',
                'Dispels status ailments from all allies'
            ]
        }
    },
    'lady of the lake': {
        name: 'Lady of the Lake',
        attack: 756,
        defense: 741,
        health: 1312,
        pseudonyms: ['lady of the lake', 'lady lake', 'lady-of-the-lake', 'lady-lake', 'lake lady', 'lake-lady', 'lake'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Lady-of-the-Lake.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Magical Sword',
            description: [
                'Recovers 42% health for all allies.',
                'Summons a Magical Sword Minion for the caster and nearby allies with 14% HP and 15% attack inherited from the caster.',
                'The Minion removes -10% mana from the target when it hits them.'
            ]
        }
    },
    lianna: {
        name: 'Lianna',
        attack: 729,
        defense: 718,
        health: 1248,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212132%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Perfect Shot',
            description: [
                'Deal 512% damage to a single enemy'
            ]
        }
    },
    margaret: {
        name: 'Margaret',
        attack: 821,
        defense: 648,
        health: 1260,
        pseudonyms: ['marg', 'margaret'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Margaret_(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Hide in Shadows',
            description: [
                'The caster and nearby allies have from +20% to +90% chance of dodging special attacks that do damage. The higher the damage from the special is, the higher the chance to dodge it. Each dodge gives a moderate amount of mana to the target. The effect lasts for 3 turns.',
                "Element Link gives all Nature allies +46% defense against Fire for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    'morgan le fay': {
        name: 'Morgan Le Fay',
        attack: 716,
        defense: 721,
        health: 1343,
        pseudonyms: ['morgan', 'morgan le fay', 'le fay', 'morgan-le-fay', 'le-fay'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Morgan-Le-Fay_(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Devourer of Vitality',
            description: [
                "The caster drains 627 HP from the target over 4 turns. This effect can't be dispelled but gets removed if the caster dies.",
                'The caster gets +94% defense against Fire for 4 turns.'
            ]
        }
    },
    'mother north': {
        name: 'Mother North',
        attack: 605,
        defense: 819,
        health: 1462,
        pseudonyms: ['mn', 'mother north'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Mother-North.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Super Porridge',
            description: [
                'Recovers 30% health for all allies.',
                'Each fallen ally has a 50% chance to get revived with 10% HP.',
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.'
            ]
        }
    },
    tarlak: {
        name: 'Tarlak',
        attack: 824,
        defense: 667,
        health: 1240,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Tarlak.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Martial Prowess',
            description: [
                'All allies get +100% normal attack for 4 turns. Stacks with similar status effects up to a maximum +160% normal attack.',
                'All allies regenerate 324 HP over 4 turns.'
            ]
        }
    },
    'the hatter': {
        name: 'The Hatter',
        attack: 735,
        defense: 710,
        health: 1341,
        pseudonyms: [
            'hatter',
            'mad hatter',
            'mad'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Hatter.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Mad as a Hatter',
            description: [
                'Deals 370% damage to the target and minor damage to nearby expressions.',
                'Steals all the dispellable buffs from all enemies and randoml exicute hatter'
            ]
        }
    },
    yunan: {
        name: 'Yunan',
        attack: 618,
        defense: 815,
        health: 1437,
        pseudonyms: ['yunan', 'sandking', 'sand-king', 'sand king'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Yunan.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Sand Storm',
            description: [
                'Deals 161% damage to all enemies.',
                'All enemies receive 339 damage over 3 turns.',
                "All enemies get -50% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        }
    },
    zeline: {
        name: 'Zeline',
        attack: 764,
        defense: 688,
        health: 1308,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Nature-Zeline%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Emerald Flash',
            description: [
                'Deals 143% damage to all enemies.',
                'All enemies get -34% attack for 4 turns.',
                'Deals extra damage against Ice.',
                'Removes buffs from all enemies.'
            ]
        }
    }
};

const red5StarHeroes = {
    anzogh: {
        name: 'Anzogh',
        attack: 698,
        defense: 793,
        health: 1279,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Anzogh.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Flaming Grudge',
            description: [
                'Deals 215% damage to all enemies.',
                'Heals each ally with 20% of total damage dealt.',
                "Element Link gives all Fire allies +46% defense against Ice for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    ares: {
        name: 'Ares',
        attack: 659,
        defense: 741,
        health: 1442,
        pseudonyms: ['ares', 'aries'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Ares.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Might of Ares',
            description: [
                'The caster and nearby allies get +54% attack for 4 turns.',
                'The caster and nearby allies get +36% critical chance for 4 turns.',
                'The caster and nearby allies regenerate 720 HP over 4 turns.'
            ]
        }
    },
    azlar: {
        name: 'Azlar',
        attack: 793,
        defense: 607,
        health: 1322,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Azlar.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Volcanic Eruption',
            description: [
                'Deal 205% damage to all enemies and they receive 360 damage over 6 turns'
            ]
        }
    },
    'black knight': {
        name: 'Black Knight',
        attack: 611,
        defense: 846,
        health: 1458,
        pseudonyms: ['black knight', 'knight', 'black-knight', 'dark knight', 'dark-knight'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Black-Knight.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Just a Flesh Wound',
            description: [
                'The caster has a 50% chance to drop any received damage to 1 for 3 turns.',
                "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
                'All allies get +45% attack, and a further 20% increase every time they are hit during 3 turns.'
            ]
        }
    },
    'captain kestrel': {
        name: 'Captain Kestrel',
        attack: 727,
        defense: 702,
        health: 1353,
        pseudonyms: ['kestrel', 'captain kestrel'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Captain-Kestrel.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Pirate Shot',
            description: [
                'Deals 215% damage to the target and nearby enemies.',
                'The more mana the enemies have, the more damage they will receive, up to 335%.'
            ]
        }
    },
    elena: {
        name: 'Elena',
        attack: 809,
        defense: 578,
        health: 1312,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Elena%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Wall of Swords',
            description: [
                'Deals 202% damage to all enemies.',
                'The caster and nearby allies counterattack with 125% of the damage received for 5 turns.'
            ]
        }
    },
    gravemaker: {
        name: 'Gravemaker',
        attack: 727,
        defense: 708,
        health: 1363,
        pseudonyms: ['grave', 'gm', 'gravemaker'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Gravemaker%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Ashes to Ashes',
            description: [
                'Deals 135% damage to the target and nearby enemies.',
                'The target and nearby enemies receive 298 damage over 2 turns.',
                'Deals extra damage against Nature.',
                "Element Link gives all Fire allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    grazul: {
        name: 'Grazul',
        attack: 628,
        defense: 817,
        health: 1406,
        pseudonyms: ['grazul', 'graz'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Grazul_September-HOTM_(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Mending Mantra',
            description: [
                'Recovers 15% health for all allies.',
                'All allies are immune to new status ailments for 2 turns.',
                "Element Link gives +4% mana generation for all Fire allies for 4 turns. This effect can't be dispelled."
            ]
        }

    },
    'guardian kong': {
        name: 'Guardian Kong',
        attack: 886,
        defense: 587,
        health: 1433,
        pseudonyms: ['kong', 'guardian kong', 'guardiankong'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Guardian-Kong%20(2).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Lord of the Jungle',
            description: [
                'Deals 220% damage to all enemies.',
                'All allies get +94% defense against Ice for 4 turns.'
            ]
        }
    },
    'jean-françois': {
        name: 'Jean-François',
        attack: 737,
        defense: 723,
        health: 1332,
        pseudonyms: ['jean-françois', 'jean francois', 'jean françois', 'jf'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Jean-Francois.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Seal of Fire',
            description: [
                'All enemies receive 302 Burn damage over 2 turns.',
                'All allies get +94% defense against ice for 4 turns.',
                'All allies get Defense Status Ailment Protection for 4 turns. New status ailments affecting defense will be replaced by +42% defense for 4 turns.',
                "Element Link gives all Fire allies +10% critical chance for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    khagan: {
        name: 'Khagan',
        attack: 710,
        defense: 642,
        health: 1458,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Khagan%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: "Khan's Order",
            description: [
                'Deals 320% damage to the target and nearby enemies.',
                'The caster and nearby allies get +24% mana generation for 5 turns.',
                'The caster and nearby allies get +63% defense for 5 turns.'
            ]
        }
    },
    marjana: {
        name: 'Marjana',
        attack: 669,
        defense: 712,
        health: 1404,
        pseudonyms: ['marj', 'marjana'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Marjana.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Magma Smash',
            description: [
                'Deal 458% damage to a single enemy and they receive 300 damage over 6 turns'
            ]
        }
    },
    mitsuko: {
        name: 'Mitsuko',
        attack: 696,
        defense: 727,
        health: 1450,
        pseudonyms: ['mits', 'mitsuko'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Mitsuko.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Mirror of Flames',
            description: [
                'Deals 245% damage to the target and nearby enemies.',
                'Reduces the mana of the target and nearby enemies by 20%.',
                'All allies reflect all status effects and 115% damage from Ice Special Skills back to the attacker for 4 turns.'
            ]
        }
    },
    natalya: {
        name: 'Natalya',
        attack: 718,
        defense: 697,
        health: 1455,
        pseudonyms: ['nat', 'natalya'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Natalya%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Burning Chains',
            description: [
                "The target receives 752 damage over 4 turns. This effect can't be dispelled.",
                "The target gets -54% mana generation for 4 turns. This effect can't be dispelled.",
                'Deals extra damage against Nature.'
            ]
        }
    },
    'queen of hearts': {
        name: 'Queen of Hearts',
        attack: 638,
        defense: 729,
        health: 1545,
        pseudonyms: ['qoh', 'queen of hearts'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Queen-of-Hearts_(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Queen of Cards',
            description: [
                'Deals 230% damage to the target and nearby enemies.',
                'Summons a Playing Card Minion with 13% HP and 30% attack inherited from the caster.',
                "The Playing Card Minion gives its owner Taunt. Taunt prevents the enemies from using their Special Sklls on Minion owner's allies",
                'The caster gets 74% defense against Special Skills for 4 turns.'
            ]
        }
    },
    'red hood': {
        name: 'Red Hood',
        attack: 729,
        defense: 708,
        health: 1353,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Red-Hood.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Forest Friends',
            description: [
                'Deals 131% damage to all enemies.',
                'Summons a Fox Minion for each ally with 14% HP. The minion recovers 7% health for its owner at the start of each turn.'
            ]
        }
    },
    'santa claus': {
        name: 'Santa Claus',
        attack: 618,
        defense: 830,
        health: 1437,
        pseudonyms: ['santa', 'claus', 'santa claus'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Santa-Claus.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Ultimate Gift Sack',
            description: [
                'Deals 150% damage to all enemies.',
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.',
                'All enemies get -34% attack for 3 turns.',
                'All enemies get -44% defense for 3 turns.'
            ]
        }
    },
    zimkitha: {
        name: 'Zimkitha',
        attack: 714,
        defense: 681,
        health: 1454,
        pseudonyms: ['zimkitty', 'zim', 'zimkitha'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Zimkitha.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Dawn Strike',
            description: [
                'Deals 155% damage to all enemies.',
                'All allies get +25% attack for 4 turns.',
                "Element Link recovers 4% health for all Fire allies for 6 turns. This effect can't be dispelled.",
                'Dispels status ailments from all allies.'
            ]
        }
    }
};

const purple5StarHeroes = {
    aeron: {
        name: 'Aeron',
        attack: 733,
        defense: 712,
        health: 1341,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Aeron.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Nethershield',
            description: [
                'All allies regenerate 459 HP over 3 turns.',
                "The caster and nearby allies are immune to new status ailments for 3 turns. This effect can't be dispelled.",
                'Cures status ailments from the target and nearby allies.',
                "Element Link gives all Dark allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    'boss wolf': {
        name: 'Boss Wolf',
        attack: 566,
        defense: 826,
        health: 1524,
        pseudonyms: ['boss wolf', 'boss', 'wolf'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Boss-Wolf.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_SLOW,
        special: {
            name: 'Unstoppable Growl',
            description: [
                "The caster and nearby allies get +24% mana generation for 4 turns. This effect can't be dispelled",
                'All enemies get -34% mana generation for 4 turns.',
                'The caster and nearby allies counterattack with 115% of the damage received for 4 turns.'
            ]
        }
    },
    domitia: {
        name: 'Domitia',
        attack: 725,
        defense: 677,
        health: 1349,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Domitia%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Shock Bolt',
            description: [
                'Deals 410% damage to the target.',
                'The caster and nearby allies get +94% defense against Holy for 4 turns.',
                'Dispels buffs from the target and nearby enemies.'
            ]
        }
    },
    grimble: {
        name: 'Grimble',
        attack: 615,
        defense: 824,
        health: 1425,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Grimble.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Gnomish Carnage',
            description: [
                'Destroys all Minions from all enemies.',
                'Deals 235% damage to all enemies.',
                'All allies get a small amount of mana for each destroyed Minon.',
                "Element Link gives all Dark allies +10% critical chance for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    hel: {
        name: 'Hel',
        attack: 745,
        defense: 692,
        health: 1328,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Hel.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Crush of Hel',
            description: [
                'Deal 315% damage to a single enemy and minor damage on nearby enemies and they get no mana for 3 turns.',
                'Deals extra damage against Holy'
            ]
        }
    },
    jabberwock: {
        name: 'Jabberwock',
        attack: 743,
        defense: 747,
        health: 1328,
        pseudonyms: ['jabber', 'jabberwock', 'jabberwocky'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Jabberwock.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Sideswipe',
            description: [
                'Deals 300% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.',
                "The enemies on the edges of the enemy formation receive 234 Poison damage over 3 turns. This effect can't be dispelled."
            ]
        }
    },
    kageburado: {
        name: 'Kageburado',
        attack: 780,
        defense: 714,
        health: 1248,
        pseudonyms: ['kage', 'kageburado'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Kageburado.png',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Break Strike',
            description: [
                'Dispels buffs from the target.',
                'Deals 225% damage to the target.',
                'Deals 450% damage if the target has more than 50% health remaining.'
            ]
        }
    },
    khiona: {
        name: 'Khiona',
        attack: 739,
        defense: 708,
        health: 1336,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Khiona.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Bleeding Edge',
            description: [
                'Deals 372% damage to the target.',
                'The caster and nearby allies get +45% attack, and a further 20% increase every time they are hit during 3 turns.',
                "Element Link recovers 4% health for all Dark allies for 6 turns. This effect can't be dispelled."
            ]
        }
    },
    kunchen: {
        name: 'Kunchen',
        attack: 618,
        defense: 815,
        health: 1437,
        pseudonyms: ['kunch', 'kunchen'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Kunchen.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Power of Ajna',
            description: [
                'Recovers 42% health for all allies.',
                'All enemies get -34% defense for 4 turns.',
                'Dispels status ailments from all allies.',
                "Element Link gives all Dark allies +46% defense against Holy for 4 turns. This effect can't be dispelled."
            ]
        }
    },
    'marie-thérèse': {
        name: 'Marie-Thérèse',
        attack: 774,
        defense: 723,
        health: 1301,
        pseudonyms: ['marie', 'marie-therese', 'therese'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Marie-Therese.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Zombie Blessing',
            description: [
                'Deals 168% damage to all enemies.',
                'All allies regenerate 612 HP over 4 turns.',
                'All allies get +30% defense for 4 turns.',
                '',
                'All allies receive Zombie Blessing. If the blessed Hero dies in the next 4 turns, they will be reborn as a Zombie with:',
                '100% health',
                '500 attack',
                '500 defense',
                'Special Skill: Poison Bite.'
            ]
        }
    },
    'mok-arr': {
        name: 'Mok-Arr',
        attack: 741,
        defense: 688,
        health: 1400,
        pseudonyms: ['mok', 'mok-arr'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Mok-Arr.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Black Tide',
            description: [
                'Deals 250% damage to all enemies.',
                'Deals 80% damage to all allies.',
                'Deals extra damage against Holy.',
                'All Dark allies and enemies are immune to this attack.'
            ]
        }
    },
    obakan: {
        name: 'Obakan',
        attack: 762,
        defense: 638,
        health: 1328,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20171023-110132.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Cleave and Counter',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies.',
                'The caster counterattacks with 115% of the damage received for 4 turns.'
            ]
        }
    },
    'guardian panther': {
        name: 'Guardian Panther',
        attack: 782,
        defense: 622,
        health: 1339,
        pseudonyms: ['panther', 'guardian panther'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Guardian-Panther.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Eye of the Panther',
            description: [
                'Deal 210% damage to target and nearby enemies adn remove buffs from them and they get -54% defense against Dark for 4 turns'
            ]
        }
    },
    quintus: {
        name: 'Quintus',
        attack: 747,
        defense: 636,
        health: 1380,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Quintus.png',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW,
        special: {
            name: 'Thunder Ultimatum',
            description: [
                'Deal 260% damage to all enemies'
            ]
        }
    },
    sargasso: {
        name: 'Sargasso',
        attack: 729,
        defense: 708,
        health: 1334,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Sargasso.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Curse of Sargasso',
            description: [
                'Deals 355% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -80% decrease for any healing received for 4 turns.'
            ]
        }
    },
    sartana: {
        name: 'Sartana',
        attack: 694,
        defense: 700,
        health: 1382,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221444%20(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Deathstrike',
            description: [
                'Deal 452% damage to a single enemy and they receive 294 damage over 6 turns'
            ]
        }
    },
    seshat: {
        name: 'Seshat',
        attack: 760,
        defense: 683,
        health: 1345,
        imgUrl: 'https://vignette.wikia.nocookie.net/empiresandpuzzles/images/3/3f/Seshat_-_Hero_Card.gif/revision/latest?cb=20190701162034',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Conjuration Arrow',
            description: [
                'Deals 400% damage to the tarbet.',
                'Summons a Replicator Minion with 18% HP and 15% attack inherited from the caster. It generates a clone of itself every 3 gturns.',
                "Element link gives 4% mana generation for all Dark allies for 4 turns. This effect can't be dispelled.",
                'Dispels buffs from the target and nearby enemies'
            ]
        }
    },
    'thoth-amun': {
        name: 'Thoth-Amun',
        attack: 731,
        defense: 694,
        health: 1361,
        pseudonyms: ['thoth', 'thoth-amun'],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Thoth-Amun.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST,
        special: {
            name: 'Skeletal Summon',
            description: [
                'Deal 215% damage to target and nearby enemies and summons an undead Minion with 20% HP and 15% attack inherited from the caster'
            ]
        }
    },
    ursena: {
        name: 'Ursena',
        attack: 760,
        defense: 731,
        health: 1283,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Ursena_(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE,
        special: {
            name: 'Depth Blast',
            description: [
                'Deals 130% damage to all enemies.',
                'Deals 260% damage if the target has more than 50% health remaining.',
                "All allies reflect all status effects and 115% damage from enemies' Holy Special Skills back to the attacker for 4 turns.",
                'Deals extra damage against Holy.'
            ]
        }
    },
    victor: {
        name: 'Victor',
        attack: 778,
        defense: 671,
        health: 1347,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Dark-Victor_(1).png',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST,
        special: {
            name: 'Night of Sorrow',
            description: [
                'Deals 196% damage to the target.',
                'The target receives 225 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 300, up to 825 damage in total.',
                'The caster steals 61% of any healing applied to the target for 3 turns.',
                'All allies get +30% defense for 3 turns.'
            ]
        }
    }
};

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
    ...blue5StarHeroes,
    ...yellow5StarHeroes,
    ...green5StarHeroes,
    ...red5StarHeroes,
    ...purple5StarHeroes
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
    yellow5StarHeroes,
    green5StarHeroes,
    red5StarHeroes,
    purple5StarHeroes,

    heroes
}