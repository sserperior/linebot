const ManaSpeeds = require('nlp/entities/ManaSpeeds');
const Classes = require('nlp/entities/Classes');
const elements = require('nlp/entities/elements');
const References = require('nlp/entities/references');

const blue3StarHeroes = {
    'chick jr.': {
        name: 'Chick Jr.',
        attack: 523,
        defense: 413,
        health: 703,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/chick-jr..jpg',
        pseudonyms: ['chick', 'chick jr'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Compact Lance',
            description: [
                'Deals 180% damage to all enemies.',
                "THe caster gets -20% attack for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    frosty: {
        name: 'Frosty',
        attack: 441,
        defense: 523,
        health: 783,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/f/c/fc548996f616a74dd7b09dec8cbf1c568b977ebc.jpeg',
        pseudonyms: ['frosty', 'snowman', 'frosty the snowman'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Joyful Backup',
            description: [
                'Recovers 32% health for all allies.',
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    gato: {
        name: 'Gato',
        attack: 516,
        defense: 401,
        health: 639,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gato.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Swamp Slash',
            description: [
                'Deals 300% damage to the target.',
                'The caster and nearby allies are immune to new status ailments for 3 turns.'
            ]
        },
        family: References.maps.SEASON_2
    },
    graymane: {
        name: 'Graymane',
        attack: 467,
        defense: 368,
        health: 789,
        element: elements.ice.id,
        pseudonyms: ['greymane', 'graymane'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/graymane.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Wolf Bite',
            description: [
                'Deal 225% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        },
        family: References.maps.SEASON_1
    },
    'graymane costume': {
        name: 'graymane costume',
        attack: 457,
        defense: 411,
        health: 897,
        element: elements.ice.id,
        pseudonyms: ['graymane costume', 'costume graymane', 'greymane costume', 'costume greymane'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Graymane%20Costume_card.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Raccoon Bite',
            description: [
                'Deals 235% damage to the target.',
                "The caster is immune to new status ailments for 3 turns. This effect can't be dispelled.",
                'The caster gets +50% attack for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    gunnar: {
        name: 'Gunnar',
        attack: 387,
        defense: 533,
        health: 656,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gunnar.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Spirit Link',
            description: [
                'All allies get +63% defense and share received damage with all their allies for 5 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'gunnar costume': {
        name: 'Gunnar Costume',
        attack: 415,
        defense: 544,
        health: 729,
        element: elements.ice.id,
        pseudonyms: ['costume gunnar', 'gunnar costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gunnar-costume-brave-blacksmith-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Steel Link',
            description: [
                'All enemies share received damage with each other for 5 turns.',
                'All enemies get -44% defense for 5 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    jarvur: {
        name: 'Jarvur',
        attack: 500,
        defense: 422,
        health: 775,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/jarvur.jpg',
        pseudonyms: ['jarvur', 'javer'],
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Jab and Hook',
            description: [
                'Deals 285% damage to the target.',
                'Stack: The caster gets +10% attack. The maximum size of stack is 10.'
            ]
        },
        family: References.realms.SVARTALFHEIM
    },
    karil: {
        name: 'Karil',
        attack: 484,
        defense: 378,
        health: 733,
        element: elements.ice.id,
        imgUrl: 'https://static.wikia.nocookie.net/empiresandpuzzles/images/4/40/Karil_-_Hero_Card.gif/revision/latest?cb=20190405025343',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Ramming Rush',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    nordri: {
        name: 'Nordri',
        attack: 488,
        defense: 406,
        health: 818,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/nordri.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Frosty Axes',
            description: [
                'Deals 245% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -54% defense against ice for 4 turns.'
            ]
        },
        family: References.realms.JOTUNHEIM
    }, 
    ulmer: {
        name: 'Ulmer',
        attack: 528,
        defense: 359,
        health: 677,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ulmer.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Blizzard',
            description: [
                'Deal 116% damage to all enemies and they get -34% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'ulmer costume': {
        name: 'Ulmer Costume',
        attack: 522,
        defense: 403,
        health: 772,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Ulmer%20Costume_card.png',
        pseudonyms: ['ulmer costume', 'costume ulmer'],
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Whiteout',
            description: [
                'Deals 145% damage to all enemies.',
                'All allies get +48% attack for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },         
    valen: {
        name: 'Valen',
        attack: 479,
        defense: 411,
        health: 679,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/valen.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Chilling Slash',
            description: [
                'Deal 300% damage to a single enemy and they get -34% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'valen costume': {
        name: 'Valen Costume',
        attack: 488,
        defense: 443,
        health: 757,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Valen%20Costume_card.png',
        pseudonyms: ['valen costume', 'costume valen'],
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Thrilling Clash',
            description: [
                'Deals 335% damage to the target.',
                'The caster gets +54% attack for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    vodnik: {
        name: 'Vodnik',
        attack: 439,
        defense: 429,
        health: 834,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/vodnik.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Trident Lunge',
            description: [
                'Deals 280% damage to the target',
                'The more mana the enemies have, the more damage they will receive, up to 400%'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
};

const yellow3StarHeroes = {
    agnes: {
        name: 'Agnes',
        attack: 556,
        defense: 486,
        health: 491,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/agnes.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Precise Chop',
            description: [
                'Deals 320% damage to the target.',
                'The attack has a 60% chance to bypass defensive buffs. This includes counterattacks.'
            ]
        },
        family: References.realms.ASGARD
    },
    arman: {
        name: 'Arman',
        attack: 477,
        defense: 418,
        health: 712,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/arman.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Sand Breeze',
            description: [
                'Deals 130% damage to all enemies.',
                'All enemies receive 92 damage over 4 turns',
                "All enemies get -50% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },    
    bane: {
        name: 'Bane',
        attack: 469,
        defense: 410,
        health: 693,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/bane.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Harmonic Slam',
            description: [
                'Deal 300% damage to a single enemy and they are less accurate for 4 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'bane costume': {
        name: 'Bane Costume',
        attack: 529,
        defense: 423,
        health: 682,
        element: elements.holy.id,
        pseudonyms: ['costume bane', 'bane costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/bane-costume-noble-brawler-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Harmonic Bash',
            description: [
                'Deals 280% damage to the target.',
                'The target gets -40% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    dawa: {
        name: 'Dawa',
        attack: 488,
        defense: 391,
        health: 679,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/dawa.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Leaping Attack',
            description: [
                'Deal 210% damage to a single enemy and minor damage on nearby enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'dawa costume': {
        name: 'Dawa Costume',
        attack: 527,
        defense: 423,
        health: 684,
        element: elements.holy.id,
        pseudonyms: ['dawa costume', 'costume dawa'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Dawa%20Costume_card.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Pounding Attack',
            description: [
                'Deals 200% damage to the target.',
                'Deals 230% damage to a random different enemy. Deals extra damage if the target is Dark.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'gan ju': {
        name: 'Gan Ju',
        attack: 467,
        defense: 363,
        health: 811,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gan-ju.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Mystic Chop',
            description: [
                'Deal 270% damage to a single enemy and reduce their mana by 25%'
            ]
        },
        family: References.maps.SEASON_1
    },
    'gan ju costume': {
        name: 'Gan Ju Costume',
        attack: 519,
        defense: 371,
        health: 844,
        element: elements.holy.id,
        pseudonyms: ['costume gan ju', 'gan ju costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Gan-Ju%20Costume_card.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Rural Chop',
            description: [
                'Deals 220% damage to the target.',
                'Reduces the mana of the target by 40%.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    kailani: {
        name: 'Kailani',
        attack: 429,
        defense: 453,
        health: 729,
        element: elements.holy.id,
        pseudonyms: ['kailani', 'kalani'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kailani.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Spirit Link',
            description: [
                'All allies get +63% defense and share received damage with all their allies for 5 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'kailani costume': {
        name: 'Kailani Costume',
        attack: 423,
        defense: 497,
        health: 825,
        element: elements.holy.id,
        pseudonyms: ['kailani costume', 'costume kailani', 'kalani costume', 'costume kalani'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Kailani%20Costume_card.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Sprirt Rally',
            description: [
                'All allies share received damage with each other for 5 turns.',
                'All allies get +50% attack for 5 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    kvasir: {
        name: 'Kvasir',
        attack: 429,
        defense: 424,
        health: 915,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kvasir.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Bee Bravado',
            description: [
                'Summons a Bee Minion for each ally. The Bee Minion inherits 15% HP and 17% attack from the caster.',
                'Each hit from a Bee Minion gives the target the following status ailments:',
                'The target receives 32 Poison damage over 2 turns.',
                "The target can't receive new Minions for 4 turns."
            ]
        },
        family: References.realms.ALFHEIM
    }, 
    melia: {
        name: 'Melia',
        attack: 505,
        defense: 404,
        health: 684,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/melia.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Atlantean Sword',
            description: [
                'Deals 120% damage to all enemies',
                'All allies get +36% critical chance for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    pixie: {
        name: 'Pixie',
        attack: 427,
        defense: 436,
        health: 848,
        element: elements.holy.id,
        pseudonyms: ['pixie', 'pix'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/pixie-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Pixie Dust',
            description: [
                'Deals 290% damage to the target',
                "Automatically does 21% damage to the target when the target's mana is full and reduces their mana by 50% for 3 turns."
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    }
};

const green3StarHeroes = {
    belith: {
        name: 'Belith',
        attack: 425,
        defense: 450,
        health: 729,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/belith.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Calming Mist',
            description: [
                'Recover 32% health for all allies and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'belith costume': {
        name: 'Belith Costume',
        attack: 437,
        defense: 460,
        health: 848,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/belith-costume-grove-spirit-1.jpg',
        pseudonyms: ['costume belith', 'redhead belith', 'belith costume'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Tranquil Mist',
            description: [
                'All allies regenerate 459 HP over 3 turns.',
                'All allies are immune to buff dispels for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    }, 
    berden: {
        name: 'Berden',
        attack: 470,
        defense: 425,
        health: 688,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/berden.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Entangling Shot',
            description: [
                'Deal 325% damage to a single enemy and they get -34% attack for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'berden costume': {
        name: 'Berden Costume',
        attack: 457,
        defense: 475,
        health: 787,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/berden-costume-adroit-archer-1.jpg',
        pseudonyms: ['berden costume', 'costume berden'],
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Crushing Shot',
            description: [
                'Deal 325% damage to the target.',
                'The target gets -34% defense for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    brienne: {
        name: 'Brienne',
        attack: 446,
        defense: 448,
        health: 674,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/brienne.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Berserker Fury',
            description: [
                'All allies get +45% attack and a further 20% increase every time they are hit for 5 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'brienne costume': {
        name: 'Brienne Costume',
        attack: 466,
        defense: 468,
        health: 751,
        element: elements.nature.id,
        pseudonyms: ['brienne costume', 'costume brienne'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/brienne-costume-shaman-of-concordia-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Jungle Fury',
            description: [
                'All enemies get -41% defense and a further -4% decrease every time they are hit for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'by-ulf': {
        name: 'By-Ulf',
        attack: 436,
        defense: 446,
        health: 865,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/by-ulf.jpg',
        pseudonyms: ['by-ulf', 'byulf'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Hollow Boast',
            description: [
                'The caster and nearby allies get +48% attack for 4 turns.',
                'The caster and nearby allies get +46% defense for 4 turns.',
                'The caster and nearby allies regenerate 612 HP for 4 turns.',
                'After 4 turns the caster gets negative status effects.',
                'The negative status effects that the caster gets after 4 turns are:',
                "The caster gets -34% attack for 4 turns. This effect can't be dispelled",
                "The caster gets -24% mana generation for 4 turns. This effect can't be dispelled"
            ]
        },
        family: References.realms.NIFLHEIM
    },
    carver: {
        name: 'Carver',
        attack: 464,
        defense: 448,
        health: 653,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/carver.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Slash of four Blades',
            description: [
                'Deal 125% damage to all enemies and reduce their mana by 16%'
            ]
        },
        family: References.maps.SEASON_1
    },
    'carver costume': {
        name: 'Carver Costume',
        attack: 505,
        defense: 452,
        health: 708,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/carver-costume-the-cutthroat-1.jpg',
        pseudonyms: ['costume carver', 'carver costume'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Stab of Four Blades',
            description: [
                'Deals 125% damage to all enemies.',
                "All enemies get -24% mana generation for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.THE_MASQUERADE
    },         
    'friar tuck': {
        name: 'Friar Tuck',
        attack: 458,
        defense: 450,
        health: 681,
        element: elements.nature.id,
        pseudonyms: ['friar', 'friar tuck', 'tuck'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/friar-tuck.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Have Faith',
            description: [
                'Recover 37% health for nearby allies and they get +24% mana generation for 3 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'friar tuck costume': {
        name: 'Friar Tuck Costume',
        attack: 473,
        defense: 468,
        health: 779,
        element: elements.nature.id,
        pseudonyms: ['costume friar', 'friar costume', 'friar tuck costume', 'costume friar tuck', 'costume tuck', 'tuck costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/friar-tuck-costume-jovial-explorer.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Gain Hope',
            description: [
                'Recovers 22% health for all allies.',
                'All allies get +24% mana generation for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    grevle: {
        name: 'Grevle',
        attack: 403,
        defense: 613,
        health: 623,
        element: elements.nature.id,
        pseudonyms: ['grevle', 'grev', 'raccoon', 'racoon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/grevle.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: "Traveler's Snack",
            description: [
                'Boosts health of all allies by 250. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'All allies get +30% attack for 4 turns.'
            ]
        },
        family: References.realms.ALFHEIM
    },
    hisan: {
        name: 'Hisan',
        attack: 540,
        defense: 391,
        health: 608,
        element: elements.nature.id,
        pseudonyms: ['hissan', 'hisan', 'horse'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/hisan.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Sand Breeze',
            description: [
                'Deals 280% damage to the target.',
                'The target receives 104 damage over 4 turns.',
                "The target gets -100% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.' 
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },   
    isshtak: {
        name: 'Isshtak',
        attack: 453,
        defense: 417,
        health: 764,
        element: elements.nature.id,
        pseudonyms: ['ishtak', 'ishhtak', 'isshtak'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/isshtak.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Ramming Rush',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'isshtak costume': {
        name: 'Isshtak Costume',
        attack: 477,
        defense: 391,
        health: 928,
        element: elements.nature.id,
        pseudonyms: ['ishtak costume', 'costume ishtak', 'costume ishhtak', 'ishhtak costume', 'isshtak costume', 'costume isshtak'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/isshtak-costume-lizardfolk-ancestor-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Bolstering Rush',
            description: [
                'Deals 185% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -44% defense for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    mnesseus: {
        name: 'Mnesseus',
        attack: 474,
        defense: 431,
        health: 691,
        element: elements.nature.id,
        pseudonyms: ['mneusseus', 'menusseus', 'mneussus', 'menussus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mnesseus.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Atlantean Spear',
            description: [
                'Deals 320% damage to the target.',
                'Dispels buffs from all enemies.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },    
    muggy: {
        name: 'Muggy',
        attack: 634,
        defense: 373,
        health: 420,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/muggy.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
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
        family: References.atlantisFamilies.LAGOON
    },
    shrubbear: {
        name: 'Shrubbear',
        attack: 351,
        defense: 512,
        health: 888,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/shrubbear.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Camouflage Foliage',
            description: [
                "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 4 turns.",
                'The caster gets +63% defense for 4 turns.',
                'The caster gets +74% defense againse Special Skills for 4 turns.'
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    }
};

const red3StarHeroes = {
    azar: {
        name: 'Azar',
        attack: 493,
        defense: 413,
        health: 651,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/azar.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Sharp Cut',
            description: [
                'Deal 280% damage to a single enemy and reduce their mana by 25%'
            ]
        },
        family: References.maps.SEASON_1
    },    
    bauchan: {
        name: 'Bauchan',
        attack: 420,
        defense: 453,
        health: 830,
        element: elements.fire.id,
        pseudonyms: ['bauchen', 'bauchan'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/bauchan.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Goblin Fury',
            description: [
                'Deals 105% damage to all enemies.',
                'Reduces the mana of all enemies by 20%.',
                'All allies get +24% mana generation for 4 turns.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    'ei-dunn': {
        name: 'Ei-Dunn',
        attack: 422,
        defense: 481,
        health: 851,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ei-dunn.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Tainted Axe',
            description: [
                'Deals 240% damage to the target and nearby enemies.',
                'The target and nearby enemies get -24% mana generation for 4 turns.'
            ]
        },
        family: References.realms.NIFLHEIM
    },
    hawkmoon: {
        name: 'Hawkmoon',
        attack: 474,
        defense: 446,
        health: 637,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/hawkmoon.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Wind Prayer',
            description: [
                'Recover 32% health for all allies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'hawkmoon costume': {
        name: 'Hawkmoon Costume',
        attack: 492,
        defense: 472,
        health: 707,
        element: elements.fire.id,
        pseudonyms: ['hawkmoon costume', 'costume hawkmoon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/hawkmoon-costume-ascendant-chief-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Wind Gospel',
            description: [
                'All allies regenerate 459 HP over 3 turns.',
                'All allies get +30% attack for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    jahangir: {
        name: 'Jahangir',
        attack: 498,
        defense: 436,
        health: 599,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/jahangir.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Fireball',
            description: [
                'Deal 145% damage to all enemies and they receive 114 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'jahangir costume': {
        name: 'Jahangir Costume',
        attack: 514,
        defense: 443,
        health: 705,
        element: elements.fire.id,
        pseudonyms: ['jahangir costume', 'costume jahangir'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Jahangir%20Costume_card.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Scorching Ray',
            description: [
                'Deals 115% damage to all enemies.',
                'All enemies receive 156 Burn damage over 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    namahage: {
        name: 'Namahage',
        attack: 526,
        defense: 418,
        health: 597,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/namahage.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Bloodthirst',
            description: [
                'Deals 290% damage to the target.',
                'The caster gets +45% attack and a further 20% increase every time they are hit during 5 turns.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },    
    nashgar: {
        name: 'Nashgar',
        attack: 514,
        defense: 366,
        health: 684,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/nashgar.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Burning Strike',
            description: [
                'Deal 290% damage to a single enemy and they receive 120 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'nashgar costume': {
        name: 'Nashgar Costume',
        attack: 567,
        defense: 369,
        health: 715,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Nashgar%20Costume_card.png',
        stars: 3,
        pseudonyms: ['nashgar costume', 'costume nashgar'],
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Searing Strike',
            description: [
                'Deals 260% damage to the target.',
                'The target receives 129 Burn damage over 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    rudolph: {
        name: 'Rudolph',
        attack: 540,
        defense: 391,
        health: 608,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/rudolph.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Antler Attack',
            description: [
                'Deals 285% damage to the target',
                'Reduces the mana of the target by 20%',
                'Summons an Elf Minion with 10% HP and 10% attack inherited from the caster.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    skrekok: {
        name: 'Skrekok',
        attack: 493,
        defense: 472,
        health: 762,
        element: elements.fire.id,
        pseudonyms: ['skrekok', 'rat'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/8/4/84eb0421f24e2fd8719fb5a761f194fdf30a2eea.jpeg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Mad Rat Mania',
            description: [
                'Deals 165% damage to the target and nearby enemies.',
                'The caster and nearby allies get +45% attack and a further 20% increase every time they are hit during 3 turns.'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    'squire wabbit': {
        name: 'Squire Wabbit',
        attack: 538,
        defense: 382,
        health: 608,
        element: elements.fire.id,
        pseudonyms: ['squire-rabbit', 'squire-wabbit', 'squire', 'wabbit'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/squire-wabbit.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Recklass Stab',
            description: [
                'Deals 355% damage to the target.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    'sudri': {
        name: 'Sudri',
        attack: 439,
        defense: 484,
        health: 775,
        element: elements.fire.id,
        pseudonyms: ['sudri', 'sundry', 'sudry'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/sudri.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Burning Shields',
            description: [
                'Deals 120% damage to all enemies.',
                'Deals additional 24% damage per each Fire shield on the board, up to 360% damage in total.'
            ]
        },
        family: References.realms.MUSPELHEIM
    }
};

const purple3StarHeroes = {
    'an-windr': {
        name: 'An-Windr',
        attack: 424,
        defense: 504,
        health: 792,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/an-windr.jpg',
        pseudonyms: ['anwindr', 'anwinder', 'an-windr', 'winder', 'windr'],
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Tribal Rage',
            description: [
                'The caster gets +45% attack, and a further 20% increase every time they or any of their allies are hit during 3 turns. When the effect ends, the caster deals 164% damage on all enemies. Each hit on the caster or their allies during the duration increases the damage by 10% to a maximum of 284% damage.'
            ]
        },
        family: References.realms.NIFLHEIM
    },
    balthazar: {
        name: 'Balthazar',
        attack: 483,
        defense: 422,
        health: 648,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/balthazar.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Electric Jolt',
            description: [
                'Deal 335% damage to a single enemy'
            ]
        },
        family: References.maps.SEASON_1
    },
    'balthazar costume': {
        name: 'Balthazar Costume',
        attack: 522,
        defense: 426,
        health: 712,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/balthazar-costume-undead-magician-1.jpg',
        pseudonyms: ['balthazar costume', 'costume balthazar'],
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Poison Jolt',
            description: [
                'Deals 315% damage to the target.',
                'The target receives 60 Poison damage over 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    bjorn: {
        name: 'Bjorn',
        attack: 458,
        defense: 436,
        health: 827,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/bjorn.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Dual Slash',
            description: [
                'Deals 200% damage to the target',
                'Deals 350% damage to a random different enemy. Deals extra damage if the target is Holy.'
            ]
        },
        family: References.realms.MIDGARD
    },
    chochin: {
        name: 'Chochin',
        attack: 413,
        defense: 512,
        health: 684,
        element: elements.dark.id,
        pseudonyms: ['cochin', 'chochin', 'lantern head', 'lantern-head'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/chochin.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Unholy Light',
            description: [
                'Deals 215% damage to the target and nearby enemies.',
                'The target and nearby enemies get -24% mana generation for 3 turns.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    edd: {
        name: 'Edd',
        attack: 526,
        defense: 450,
        health: 723,
        element: elements.dark.id,
        pseudonyms: ['edd', 'ed'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/1/2/12e0dc12e4599fd0dff7c2370c9ee40a1ad5aaf5.jpeg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Crazed Lunge',
            description: [
                'Deals 290% damage to the target.',
                'The target is immune to new buffs for 3 turns.'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    'gill-ra': {
        name: 'Gill-Ra',
        attack: 436,
        defense: 453,
        health: 747,
        element: elements.dark.id,
        pseudonyms: ['gil-ra', 'gilra', 'gill-ra', 'gillra'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gill-ra.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Lament of Regression',
            description: [
                'All enemies get -34% defense for 4 turns',
                'All enemies get -34% attack for 4 turns.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    'guardian bat': {
        name: 'Guardian Bat',
        attack: 437,
        defense: 418,
        health: 862,
        element: elements.dark.id,
        pseudonyms: ['bat', 'guardian bat'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-bat.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Merciless Bite',
            description: [
                'Deals 270% damage to the target and minor damage to nearby enemies.',
                'The damage is increased by 60% per each dead ally.'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    jack: {
        name: 'Jack',
        attack: 491,
        defense: 450,
        health: 752,
        element: elements.dark.id,
        pseudonyms: ['pumpkin', 'pumpkinhead', 'jack'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/jack.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: "Explosive O'Latern",
            description: [
                'Deals 200% damage to the target.',
                'The target receives a Pumpkin Bomb. After 3 turns the Pumpkin Bomb explodes and deals 206 damage to the target and nearby targets. The Pumpkin Bomb also explodes when the target is defeated.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    },
    oberon: {
        name: 'Oberon',
        attack: 422,
        defense: 411,
        health: 839,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/oberon.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Toxic Traps',
            description: [
                'Deal 121% damage to all enemies and they receive 96 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'oberon costume': {
        name: 'Oberon Costume',
        attack: 413,
        defense: 463,
        health: 933,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Oberon%20Costume_card.png',
        pseudonyms: ['oberon costume', 'costume oberon'],
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Toxic Tricks',
            description: [
                "All enemies receive 324 Poison damage over 3 turns. This effect can't be cleansed."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    prisca: {
        name: 'Prisca',
        attack: 413,
        defense: 464,
        health: 761,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/prisca.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Bleeding Stab',
            description: [
                'Deal 235% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        },
        family: References.maps.SEASON_1
    },
    'prisca costume': {
        name: 'Prisca Costume',
        attack: 415,
        defense: 466,
        health: 930,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/prisca-costume-resolute-overseer-1.jpg',
        pseudonyms: ['costume prisca', 'prisca costume'],
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Bleeding Thrust',
            description: [
                'Deals 205% damage to the target and minor damage to nearby enemies.',
                'Heals the caster for 30% of damage dealt.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    renfeld: {
        name: 'Renfeld',
        attack: 488,
        defense: 398,
        health: 700,
        element: elements.dark.id,
        pseudonyms: ['renfeld', 'renfield'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/renfeld.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Leeching Stars',
            description: [
                'Deal 215% damage to a single enemy and steal a moderate amount of dealt damage back'
            ]
        },
        family: References.maps.SEASON_1
    },
    'renfeld costume': {
        name: 'Renfeld Costume',
        attack: 428,
        defense: 455,
        health: 904,
        element: elements.dark.id,
        pseudonyms: ['renfeld costume', 'renfield costume', 'costume renfeld', 'costume renfield', 'harry potter'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/renfeld-costume-unhinged-surgeon-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Leeching Saw',
            description: [
                'Deals 195% damage to the target.',
                "The caster steals generated mana of the target and the nearby enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be dispelled, but gets removed if the caster dies."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    tyrum: {
        name: 'Tyrum',
        attack: 387,
        defense: 422,
        health: 879,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tyrum.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Piercing Hit',
            description: [
                'Deal 310% damage to a single enemy and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'tyrum costume': {
        name: 'Tyrum Costume',
        attack: 415,
        defense: 446,
        health: 933,
        element: elements.dark.id,
        pseudonyms: ['costume tyrum', 'tyrum costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tyrum-costume-roman-remnant-1.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Purifying Hit',
            description: [
                'Deals 310% damage to the target.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    vlad: {
        name: 'Vlad',
        attack: 368,
        defense: 486,
        health: 855,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/vlad.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Dawn of Sorrow',
            description: [
                'The target receives 65 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 115, up to 295 damage in total.',
                'The caster steals 61% of any healing applied to the target for 3 turns.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    }
};

const blue4StarHeroes = {
    agwe: {
        name: 'Agwe',
        attack: 686,
        defense: 616,
        health: 1079,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/agwe.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Rogue Wave',
            description: [
                'Deals 190% damage to all enemies',
                'All allies get +54% defense against Nature for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    boril: {
        name: 'Boril',
        attack: 501,
        defense: 792,
        health: 1151,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/boril.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Perfect Riposte',
            description: [
                'The caster and nearby allies counter attack with 125% of the damage received for 5 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'boril costume': {
        name: 'Boril Costume',
        attack: 504,
        defense: 851,
        health: 1287,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/boril-costume-heavyweight-defender-1.jpg',
        stars: 4,
        pseudonyms: ['costume boril', 'boril costume'],
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Sturdy Riposte',
            description: [
                'All allies counterattack with 60% of the damage received for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'captain of diamonds': {
        name: 'Captain of Diamonds',
        attack: 620,
        defense: 682,
        health: 1126,
        element: elements.ice.id,
        pseudonyms: ['captain of diamonds', 'diamonds'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/captain-of-diamonds.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Pest Control',
            description: [
                'Destroys all minions from the target',
                'Deals 260% damage to the target.',
                'Attacks randomly a new target if any minions were destroyed.'
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    frank: {
        name: 'Frank',
        attack: 635,
        defense: 639,
        health: 1292,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/frank.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Undead Razer',
            description: [
                'Deals 200% damage to all enemies.',
                'The damage is increased by 45% per each dead enemy.',
                'All enemies get -44% defense for 4 turns.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    },
    grimm: {
        name: 'Grimm',
        attack: 716,
        defense: 531,
        health: 1132,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/grimm.jpg',
        pseudonyms: ['grim', 'grimm'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'grimm costume': {
        name: 'Grimm Costume',
        attack: 716,
        defense: 585,
        health: 1278,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Grimm%20Costume_card.png',
        pseudonyms: ['grimm costume', 'costume grimm', 'grim costume', 'costume grim'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Merciless Pulverizer',
            description: [
                'Deals 295% damage to the target and mino damage to nearby enemies.',
                'The caster and nearby allies get +50% attack for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    jott: {
        name: 'Jott',
        attack: 720,
        defense: 607,
        health: 1126,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/jott.jpg',
        pseudonyms: ['jott', 'jot'],
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Ice Bloom',
            description: [
                'Deals 200% damage to all enemies.',
                'All Ice shields on the board become enhanced. Enhanced shields have +64% attack when cast from attacker side and -57% attack when cast from defender side.'
            ]
        },
        family: References.realms.JOTUNHEIM
    },     
    kiril: {
        name: 'Kiril',
        attack: 656,
        defense: 673,
        health: 1034,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kiril.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Blessed Brew',
            description: [
                'Recover 28% health for all allies and they get +30% attack and +30% defense for 3 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'kiril costume': {
        name: 'Kiril Costume',
        attack: 702,
        defense: 680,
        health: 1153,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/kiril-costume-master-shredder-1.jpg',
        stars: 4,
        pseudonyms: ['costume kiril', 'kiril costume'],
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Blessed Solo',
            description: [
                'Recovers 28% health for all allies.',
                'All enemies get -34% attack for 3 turns.',
                'All enemies get -34% defense for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    mireweave: {
        name: 'Mireweave',
        attack: 697,
        defense: 597,
        health: 1175,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mireweave.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Chain of Pain',
            description: [
                'Deals 150% damage to the target and nearby enemies.',
                'Stack: The caster gets +10% attack. The maximum size of stack is 10.'
            ]
        },
        family: References.realms.VANAHEIM
    },
    sanngrior: {
        name: 'Sanngrior',
        attack: 565,
        defense: 680,
        health: 1447,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/6/762e1fc33cc70936e33fe09c6741a43f095ace0e.jpeg',
        pseudonyms: ['sangrior', 'sanngrior'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: "Valkyrie's Fortitude",
            description: [
                'Recovers 45% health for the caster and nearby allies.',
                'The caster and nearby allies get +94% defense against Nature for 3 turns.'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    sapphire: {
        name: 'Sapphire',
        attack: 726,
        defense: 541,
        health: 1285,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/sapphire.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'From Shadows',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Deals 225% damage to the target.',
                'The attack has a 35% chance to bypass defensive buffs. This includes counterattacks.',
                '',
                'x2 Mana Charge:',
                'Deals 250% damage to the target and nearby enemies.',
                'The attack has a 60% chance to bypass defensive buffs. This includes counterattacks.',
                '',
                'x3 Mana Charge:',
                'Deals 200% damage to all enemies.',
                'The attack has a 85% chance to bypass defensive buffs. This includes counterattacks.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    sonya: {
        name: 'Sonya',
        attack: 607,
        defense: 731,
        health: 1011,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sonya.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Piercing Strike',
            description: [
                'Deal 345% damage to a single enemy and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'sonya costume': {
        name: 'Sonya Costume',
        attack: 646,
        defense: 762,
        health: 1103,
        element: elements.ice.id,
        pseudonyms: ['sonya costume', 'costume sonya'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sonya-costume-viking-champion-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Purifying Strike',
            description: [
                'Deals 345% damage to the target.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    triton: {
        name: 'Triton',
        attack: 720,
        defense: 601,
        health: 1049,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/triton.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Trident Throw',
            description: [
                'Deals 335% damage to the target.',
                'All allies get +39% healing received for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    valeria: {
        name: 'Valeria',
        attack: 609,
        defense: 656,
        health: 1196,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/valeria.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Dusk of Sorrow',
            description: [
                'Deals 235% damage to the target.',
                'The target receives 150 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 220, up to 580 damage in total',
                'The caster steals 61% of any healing applied to the target for 3 turns'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    }
};

const yellow4StarHeroes = {
    chao: {
        name: 'Chao',
        attack: 607,
        defense: 675,
        health: 1115,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/chao.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Tactical Cut',
            description: [
                'Deals 315% damage to the target.',
                'Reduces the mana of the target by 25%.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'chao costume': {
        name: 'Chao Costume',
        attack: 673,
        defense: 680,
        health: 1189,
        element: elements.holy.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Chao%20Costume_card.png',
        pseudonyms: ['costume chao', 'chao costume', 'dodo'],
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Ornithological Cut',
            description: [
                'Deals 275% damage to the target.',
                "The caster steals generated mana of the target over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be cleansed but it gets removed if the caster dies."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    danzaburo: {
        name: 'Danzaburo',
        attack: 622,
        defense: 637,
        health: 1224,
        element: elements.holy.id,
        pseudonyms: ['danzaburo', 'danza', 'ewok'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/danzaburo.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: "Trickster's Gambit",
            description: [
                'Perform a trick for a specific effect:',
                '',
                'Swords:',
                'Deals 255% damage to all enemies',
                'All enemies get -54% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills',
                '',
                'Bottle:',
                'All allies get +24% mana generation for 4 turns.',
                'All allies get +63% defense for 4 turns.',
                '',
                'Freeze:',
                "The caster can't game mana for 2 turns. This effect can't be dispelled"
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    gretel: {
        name: 'Gretel',
        attack: 703,
        defense: 599,
        health: 1056,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/gretel-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Witch Slayer',
            description: [
                'Deals 175% damage to the target and minor damage to nearby enemies.',
                'Automatically does 21% damage to the target when their mana is full and reduces their mana to 50% for 3 turns.',
                'The caster gets +74% defense against Special Skills for 3 turns.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    gullinbursti: {
        name: 'Gullinbursti',
        attack: 607,
        defense: 607,
        health: 1396,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/gullinbursti.jpg',
        pseudonyms: ['gullinbursti', 'gutbuster', 'gull'],
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Angry Boar',
            description: [
                'Boosts health of all allies by 400. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'The caster gets +45% attack, and a further 20% increase every time they or any of their allies are hit during 3 turns. When the effect ends, the caster deals 164% damage on all enemies. Each hit on the caster or their allies during the duration increases the damage by 10% to a maximum of 284% damage.'
            ]
        },
        family: References.realms.ASGARD
    },
    'hu tao': {
        name: 'Hu Tao',
        attack: 603,
        defense: 631,
        health: 1183,
        element: elements.holy.id,
        pseudonyms: ['hu', 'hu tao'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/hu-tao.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Sonic Wall',
            description: [
                'Deals 210% damage to all enemies.',
                'All enemies get -40% accuracy for 4 turns. Chance to miss also applies to offensive special skills.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'hu tao costume': {
        name: 'Hu Tao Costume',
        attack: 581,
        defense: 744,
        health: 1268,
        element: elements.holy.id,
        pseudonyms: ['costume hu', 'hu costume', 'costume hu tao', 'hu tao costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Hu%20Tao%20Costume_card.png',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Aura Wave',
            description: [
                'Deals 160% damage to all enemies.',
                'All enemies get -30% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.',
                "All enemies get -50% decrease for any healing received for 4 turns. This effect can't be cleansed."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'guardian jackal': {
        name: 'Guardian Jackal',
        attack: 765,
        defense: 531,
        health: 1032,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-jackal.jpg',
        pseudonyms: ['jackal', 'guardian jackal'],
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Ray Strike',
            description: [
                'Deal 270% damage to a single enemy and they get -54% defense against Holy for 4 turns'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },       
    'lady woolerton': {
        name: 'Lady Woolerton',
        attack: 626,
        defense: 667,
        health: 1217,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/lady-woolerton.jpg',
        stars: 4,
        pseudonyms: ['woolerton', 'lady woolerton'],
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Smooth Treatment',
            description: [
                'Recovers 40% health for all allies.',
                "The caster can't gain mana for 2 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    'li xiu': {
        name: 'Li Xiu',
        attack: 616,
        defense: 665,
        health: 1098,
        element: elements.holy.id,
        pseudonyms: ['li', 'li xiu', 'li-xiu'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/li-xiu.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Slash of Seven Blades',
            description: [
                'Deal 150% damage to all enemies and reduce their mana by 20%'
            ]
        },
        family: References.maps.SEASON_1
    },
    'li xiu costume': {
        name: 'Li Xiu Costume',
        attack: 660,
        defense: 690,
        health: 1189,
        element: elements.holy.id,
        pseudonyms: ['costume li', 'li costume', 'costume li xiu', 'li xiu costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/li-xiu-costume-ceremonial-assassin-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Slash of Seven Daggers',
            description: [
                'Deals 180% damage to all enemies.',
                'Reduces the mana of all enemies by 10%.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    mist: {
        name: 'Mist',
        attack: 686,
        defense: 603,
        health: 1196,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mist.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Valkyrie Charge',
            description: [
                'Deals 175% damage to the target and nearby enemies.',
                'The target and nearby enemies are immune to buffs for 3 turns.',
                'The target and nearby enemies get -34% defense against Special Skills for 3 turns.',
                'The target and nearby enemies get -64% mana generation for 3 turns.'
            ]
        },
        family: References.realms.MIDGARD
    },
    'wu kong': {
        name: 'Wu Kong',
        attack: 707,
        defense: 620,
        health: 992,
        element: elements.holy.id,
        pseudonyms: ['wu', 'wu kong', 'wu-kong'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/wu-kong.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: "Gambler's Stance",
            description: [
                'All allies get +185% attack with -32% accuracy for 5 turns. Chance to miss applies also to Special Skills.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'wu kong costume': {
        name: 'Wu Kong Costume',
        attack: 728,
        defense: 690,
        health: 1053,
        element: elements.holy.id,
        pseudonyms: ['wu kong costume', 'costume wu kong', 'wu costume', 'costume wu', 'wu-kong costume', 'costume wu-kong'],
        // TODO:
        imgUrl: 'https://allheroes.eu/heroes/Wu%20Kong%20Costume_card.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: "Gambler's Slash",
            description: [
                'Deals 210% damage to all enemies.',
                "The caster gets -20% defense for 3 turns. This effect can't be cleansed."
            ]
        },
        family: References.events.THE_MASQUERADE
    }
};

const green4StarHeroes = {
    almur: {
        name: 'Almur',
        attack: 626,
        defense: 648,
        health: 1262,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/almur.jpg',
        pseudonyms: ['almur', 'almer', 'elmo'],
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Shadow Sweep',
            description: [
                'Deals 150% damage to the target and nearby enemies.',
                "Reduces max health from the target and nearby enemies by 75. Max health can't get lower than 30% of the original max health.",
                'The target and nearby enemies get -54% defense against Nature for 4 turns.'
            ]
        },
        family: References.realms.SVARTALFHEIM
    },
    brynhild: {
        name: 'Brynhild',
        attack: 684,
        defense: 609,
        health: 1183,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/brynhild.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Valkyrie Defense',
            description: [
                'Recovers 37% health for the caster and nearby allies.',
                'The caster and nearby allies are immune to buff dispels for 3 turns.',
                'The caster and nearby allies get +74% defense against Special Skills for 3 turns.',
                'The caster and nearby allies get +24% mana generation for 3 turns.'
            ]
        },
        family: References.realms.MIDGARD
    },
    buddy: {
        name: 'Buddy',
        attack: 531,
        defense: 690,
        health: 1323,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/buddy.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Gift Sack',
            description: [
                'Deals 205% damage to the target and nearby enemies.',
                'Summons an Elf Minion for the caster and nearby allies with 10% HP and 10% attack inherited from the caster.',
                'The target and nearby enemies get -34% defense for 3 turns.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    caedmon: {
        name: 'Caedmon',
        attack: 635,
        defense: 637,
        health: 1128,
        element: elements.nature.id,
        pseudonyms: ['caed', 'caedmon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/caedmon.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Piercing Strike',
            description: [
                'Deal 345% damage to a single enemy and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'caedmon costume': {
        name: 'Caedmon Costume',
        attack: 670,
        defense: 664,
        health: 1236,
        element: elements.nature.id,
        pseudonyms: ['costume caed', 'caed costume', 'costume caedmon', 'caedmon costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/caedmon-costume-elven-avenger-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'CLeansing Strike',
            description: [
                'Deals 345% damage to the target.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    gadeirus: {
        name: 'Gadeirus',
        attack: 618,
        defense: 690,
        health: 1096,
        element: elements.nature.id,
        pseudonyms: ['gade', 'gad', 'gaedirus', 'gadeirus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gadeirus.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Empowering Bash',
            description: [
                'Deals 165% damage to the target and minor damage to nearby enemies.',
                'The caster and nearby allies get +48% attack for 4 turns.',
                'The caster and nearby allies regenerate 612 HP over 4 turns.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    gobbler: {
        name: 'Gobbler',
        attack: 641,
        defense: 614,
        health: 1215,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/gobbler.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Minion Eater',
            description: [
                'Deals 170% damage to all enemies.',
                'Destroys all minions from all enemies.',
                'All allies recover 80 health for each eaten minion.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    hansel: {
        name: 'Hansel',
        attack: 699,
        defense: 601,
        health: 1064,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/hansel-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Witch Killer',
            description: [
                'Deals 255% damage to the target.',
                'Automatically does 21% damage to the target when their mana is full and reduces their mana to 50% for 3 turns.',
                'The caster gets +74% defense against Special Skills for 3 turns.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    "jack o'hare": {
        name: "Jack O'Hare",
        attack: 743,
        defense: 603,
        health: 960,
        element: elements.nature.id,
        pseudonyms: ["jack o'hare", 'jack ohare', 'jack hare', 'jack o’hare'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/jack-ohare.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Reckless Slash',
            description: [
                'Deals 180% damage to all enemies.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },    
    kashhrek: {
        name: 'Kashhrek',
        attack: 548,
        defense: 648,
        health: 1321,
        element: elements.nature.id,
        pseudonyms: ['kash', 'kashrek', 'kashhrek'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kashhrek.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Swamp Skin',
            description: [
                'Recover 45% health for nearby allies and they get +94% defense against Fire for 3 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'kashhrek costume': {
        name: 'Kashhrek Costume',
        attack: 585,
        defense: 690,
        health: 1409,
        element: elements.nature.id,
        pseudonyms: ['costume kash', 'kash costume', 'costume kashrek', 'kashrek costume', 'costume kashhrek', 'kashhrek costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/kashhrek-costume-lizardfolk-elder-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Second Skin',
            description: [
                'Boosts health of the caster and nearby allies by 450. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'little john': {
        name: 'Little John',
        attack: 741,
        defense: 569,
        health: 988,
        element: elements.nature.id,
        pseudonyms: ['lj', 'little john', 'little-john'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/little-john.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Massive Chop',
            description: [
                'Deal 185% damage to all enemies and they get -64% mana generation for 3 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'little john costume': {
        name: 'Little John Costume',
        attack: 756,
        defense: 624,
        health: 1086,
        element: elements.nature.id,
        pseudonyms: ['costume lj', 'lj costume', 'costume little john', 'little john costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/little-john-costume-stealthy-brother-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Massive Cleave',
            description: [
                'Deals 185% damage to all enemies.',
                'The caster and nearby allies have from +30% to +70% chance of dodging special attacks that do damage. The higher the damage from the special is, the higher the chance to dodge it. Each dodge gives a moderate amount of mana to the target. The effect lasts for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },       
    melendor: {
        name: 'Melendor',
        attack: 714,
        defense: 586,
        health: 1000,
        element: elements.nature.id,
        pseudonyms: ['mel', 'melendor', 'gandalf'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/melendor.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Fog of the Fallen',
            description: [
                'Recover 42% health for all allies and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'melendor costume': {
        name: 'Melendor Costume',
        attack: 698,
        defense: 655,
        health: 1151,
        element: elements.nature.id,
        pseudonyms: ['melendor costume', 'costume melendor', 'costume mel', 'mel costume', 'saruman', 'sauruman', 'sarumon', 'saurumon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/melendor-costume-mighty-wizard-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Fog of the Perished',
            description: [
                'All allies regenerate 609 HP over 3 turns.',
                'All allies get +46% defense for 3 turns',
                'Dispels buffs from all enemies'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    peters: {
        name: 'Peters',
        attack: 643,
        defense: 641,
        health: 1113,
        element: elements.nature.id,
        pseudonyms: ['cabin boy', 'peters', 'cabin boy peters', 'cabinboy', 'cabinboy peters'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/peters.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Buccaneers Blade',
            description: [
                'Deals 320% damage to the target.',
                'The target gets silenced for 3 turns.'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    skittleskull: {
        name: 'Skittleskull',
        attack: 728,
        defense: 605,
        health: 969,
        element: elements.nature.id,
        pseudonyms: ['skittles', 'skittleskull'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/skittleskull.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Creeping Vines',
            description: [
                'Deals 185% damage to all enemies.',
                'All enemies get -34% attack for 6 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'skittleskull costume': {
        name: 'Skittleskull Costume',
        attack: 778,
        defense: 631,
        health: 1035,
        element: elements.nature.id,
        pseudonyms: ['skittles costume', 'costume skittles', 'costume skittleskull', 'skittleskull costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/skittleskull-costume-candy-witch-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Candy Vines',
            description: [
                'Deals 175% damage to all enemies.',
                'All Enemies get -39% attack for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    }
};

const red4StarHeroes = {
    boldtusk: {
        name: 'Boldtusk',
        attack: 588,
        defense: 711,
        health: 1107,
        element: elements.fire.id,
        pseudonyms: ['boldtusk', 'bold', 'bt'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/boldtusk.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Warcry',
            description: [
                'Recover 27% health for all allies and they get +48% attack for 4 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'boldtusk costume': {
        name: 'Boldtusk Costume',
        attack: 621,
        defense: 736,
        health: 1230,
        element: elements.fire.id,
        pseudonyms: ['boldtusk costume', 'costume boldtusk', 'costume bold', 'bold costume', 'costume bt', 'bt costume', 'chef'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/boldtusk-costume-cast-iron-chef-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'War Feast',
            description: [
                'Recovers 37% health for all allies.',
                'All allies get +30% attack for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    carol: {
        name: 'Carol',
        attack: 624,
        defense: 646,
        health: 1357,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/6/c/6c3dbe8b431a16b1d069790cb31b3e6cfabb7695.jpeg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Perilous Present',
            description: [
                'Reduces the mana of the target by 25%.',
                'The target receives a Gift Bomb. After 3 turns the Gift Bomb explodes and deals 312 damage to the target and nearby enemies. The Gift Bomb also explodes when the target is defeated.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    colen: {
        name: 'Colen',
        attack: 728,
        defense: 537,
        health: 1094,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/colen.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Fire Storm',
            description: [
                'Deal 180% damage to all enemies and they receive 330 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'colen costume': {
        name: 'Colen Costume',
        attack: 771,
        defense: 546,
        health: 1222,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Colen%20Costume_card.png',
        stars: 4,
        pseudonyms: ['colen costume', 'costume colen'],
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Flame Assault',
            description: [
                'Deals 240% damage to all enemies.',
                'All enemies receive 204 Burn damage over 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'guardian falcon': {
        name: 'Guardian Falcon',
        attack: 552,
        defense: 754,
        health: 1126,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-falcon.jpg',
        pseudonyms: ['falcon', 'guardian falcon'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Blazing Beak',
            description: [
                'Deal 225% damage to target and nearby enemies and they get -54% defense against Fire for 4 turns'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    gormek: {
        name: 'Gormek',
        attack: 569,
        defense: 565,
        health: 1430,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gormek.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'gormek costume': {
        name: 'Gormek Costume',
        attack: 611,
        defense: 606,
        health: 1511,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Gormek%20Costume_card.png',
        pseudonym: ['gormek costume', 'costume gormek'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Pulverizing Abacus',
            description: [
                'Destroys all Minions from all enemies.',
                'Deals 180% damage to all enemies.',
                'All allies recover 80 HP for each destroyed Minion.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    kelile: {
        name: 'Kelile',
        attack: 675,
        defense: 686,
        health: 935,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kelile.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Dance of Fire',
            description: [
                'Deal 320% damage to a single enemy and they receive 306 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'kelile costume': {
        name: 'Kelile Costume',
        attack: 746,
        defense: 690,
        health: 995,
        element: elements.fire.id,
        pseudonyms: ['kelile costume', 'costume kelile'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Kelile%20Costume_card.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Dance of Ignition',
            description: [
                'All enemies receive 304 Burn damage over 2 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    lancelot: {
        name: 'Sir Lancelot',
        attack: 756,
        defense: 533,
        health: 1047,
        element: elements.fire.id,
        pseudonyms: ['lance', 'sir lancelot', 'lancelot', 'sir lance'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/sir-lancelot.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Inspiring Fencing',
            description: [
                'Deals 265% damage to the target.',
                'The caster and nearby allies get +24% mana generation for 4 turns.',
                'The caster and nearby allies get +48% attack for 4 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    scarlett: {
        name: 'Scarlett',
        attack: 767,
        defense: 507,
        health: 1039,
        element: elements.fire.id,
        pseudonyms: ['scarlet', 'scarlett'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/scarlett.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Blade Barrage',
            description: [
                'Deal 215% damage to a single enemy and minor damage to nearby enemies and they get -34% attack for 6 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'scarlett costume': {
        name: 'Scarlett Costume',
        attack: 769,
        defense: 561,
        health: 1172,
        element: elements.fire.id,
        pseudonyms: ['costume scarlet', 'scarlet costume', 'costume scarlett', 'scarlett costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Scarlett%20Costume_card.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Blades of Venom',
            description: [
                'Deals 185% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies receive 138 Poison damage over 3 turns.',
                'The caster and nearby allies get +30% attack for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    shadereave: {
        name: 'Shadereave',
        attack: 595,
        defense: 635,
        health: 1357,
        element: elements.fire.id,
        pseudonyms: ['shadereave', 'shadereve', 'shadoweaver'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/shadereave.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Eternal Servitude',
            description: [
                'All allies get +30% attack for 4 turns.',
                'All allies get +30% critical chance for 4 turns.',
                'All allies receive Draugr Blessing. If the blessed Hero dies in the next 4 turns, they will be reborn as a Draugr with:',
                '100% inherited health.',
                '500 attack.',
                '500 defense.'
            ]
        },
        family: References.realms.HELHEIM
    },
    shale: {
        name: 'Shale',
        attack: 603,
        defense: 626,
        health: 1423,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/shale.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Channel Ki',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'The caster regenerates 411 HP over 3 turns.',
                'Cleanses status ailments from the caster.',
                '',
                'x2 Mana Charge:',
                'THe caster and nearby allies regenerate 549 HP over 3 turns.',
                'Cleanses status ailments from the caster and nearby allies.',
                '',
                'x3 Mana Charge:',
                'All allies regenerate 714 HP over 3 turns.',
                'Cleanses status ailments from all allies.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    sumitomo: {
        name: 'Sumitomo',
        attack: 665,
        defense: 633,
        health: 1113,
        element: elements.fire.id,
        pseudonyms: ['sumi', 'sumitomo'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/sumitomo.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Oji-Waza',
            description: [
                'Deals 300% damage to the target',
                'The caster counterattacks with 135% of the damage received for 5 turns.',
                'The caster regenerates a moderate amount of mana for each counterattack. The effect gets diminished for consecutive activations during the same turn.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    sumle: {
        name: 'Sumle',
        attack: 716,
        defense: 629,
        health: 1077,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sumle.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Magma Boulders',
            description: [
                'Deals 235% damage to all enemies. Each hit has 80% accuracy.',
                'The damage is increased by 70% per each dead enemy.'
            ]
        },
        family: References.realms.MUSPELHEIM
    }, 
    wilbur: {
        name: 'Wilbur',
        attack: 605,
        defense: 690,
        health: 1143,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/wilbur.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Wonderful Feast',
            description: [
                'All allies share received damage with each other for 4 turns.',
                'All enemies share received damage with each other for 4 turns.',
                'All allies get +63% defense for 4 turns.',
                'All enemies get -44% defense for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    }
};

const purple4StarHeroes = {
    ameonna: {
        name: 'Ameonna',
        attack: 771,
        defense: 527,
        health: 1054,
        element: elements.dark.id,
        pseudonyms: ['ameona', 'ammeona', 'ameonna', 'ammeonna', 'ghost girl', 'ghost-girl'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ameonna.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Ghost',
            description: [
                'The caster shifts into Ghost form.',
                'Ghost form removes all dispellable and undispellable buffs and status ailments from the caster.',
                'While in Ghost form the caster gains +82% normal attack.',
                "While in Ghost form the caster can't gain mana but is immune to normal attacks, special attacks, and all status effects.",
                'Ghost form lasts for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    ametrine: {
        name: 'Ametrine',
        attack: 716,
        defense: 561,
        health: 1268,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/ametrine.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Blur of Steel',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Dispels buffs from the target.',
                'Deals 220% damage to the target.',
                '',
                'x2 Mana Charge:',
                'Dispels buffs from the target and nearby enemies.',
                'Deals 255% damage to the target and nearby enemies.',
                '',
                'x3 Mana Charge:',
                'Dispels buffs from all enemies.',
                'Deals 300% damage to all enemies.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    boomer: {
        name: 'Boomer',
        attack: 541,
        defense: 663,
        health: 1323,
        element: elements.dark.id,
        pseudonyms: ['boomer', 'first mate', 'first mate boomer'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/boomer.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Watery Grave',
            description: [
                'Deals 204% damage to all enemies.',
                'The caster and nearby allies get +94% defense against Holy for 3 turns.'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    'chesire cat': {
        name: 'Cheshire Cat',
        attack: 658,
        defense: 641,
        health: 1105,
        element: elements.dark.id,
        pseudonyms: ['chesire', 'cat', 'chesire-cat', 'chesire cat'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/cheshire-cat.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Dazzling Grin',
            description: [
                'Rearranges the enemy positions randomly',
                'All Holy enemies get -44% defense for 4 turns.',
                "All enmies receive 276 damage over 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    cyprian: {
        name: 'Cyprian',
        attack: 563,
        defense: 605,
        health: 1362,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/cyprian.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Perfect Riposte',
            description: [
                'The caster and nearby allies counterattack with 125% of the damage received for 5 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'cyprian costume': {
        name: 'Cyprian Costume',
        attack: 555,
        defense: 698,
        health: 1460,
        element: elements.dark.id,
        // TODO:
        imgUrl: 'https://allheroes.eu/heroes/Cyprian%20Costume_card.png',
        pseudonyms: ['cyprian costume', 'costume cyprian'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Deadly Riposte',
            description: [
                'All allies counterattack with 60% of the damage received for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    fura: {
        name: 'Fura',
        attack: 707,
        defense: 629,
        health: 1083,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/fura.jpg',
        pseudonyms: ['fura', 'fury'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Nightglade Pollen',
            description: [
                'Deals 150% damage to all enemies.',
                "Reduces max health from all enemies by 100. Max health can't get lower than 30% of the original max health.",
                'All enemies get -50% decrease for any healing received for 4 turns.'
            ]
        },
        family: References.realms.SVARTALFHEIM
    },
    gafar: {
        name: 'Gafar',
        attack: 711,
        defense: 633,
        health: 988,
        element: elements.dark.id,
        pseudonyms: ['gafar', 'gaffar'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/gafar.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Sand Gale',
            description: [
                'Deals 260% damage to the target.',
                'The target receives 228 damage over 4 turns.',
                "The target gets -100% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },
    ingolf: {
        name: 'Ingolf',
        attack: 633,
        defense: 684,
        health: 1268,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/2/721e64ea39ecd4e46052dde2908df80a138c45ef.jpeg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Impairing Blade',
            description: [
                'Deals 185% damage to the target and nearby enemies.',
                "Reduces the duration of target and nearby enemies' buffs by 1 turn.",
                "The target and nearby enemies receive Corrosive Poison for 3 turns. Corrosive Poison does 50 damage and lowers the target's mana generation by -9% each turn."
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    jabbar: {
        name: 'Jabbar',
        attack: 531,
        defense: 690,
        health: 1323,
        element: elements.dark.id,
        pseudonyms: ['jabar', 'jabbar', 'sandcastle', 'sand castle', 'walking sand castle'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/jabbar.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Sand Gale',
            description: [
                'Deals 235% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies reeive 172 damage over 4 turns.',
                "The target and nearby enemies get -75% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },
    merlin: {
        name: 'Merlin',
        attack: 682,
        defense: 660,
        health: 975,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/merlin.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Arcane Blast',
            description: [
                'Deals 220% damage to the target.',
                'The more mana the enemies have, the more damage they will receive, up to 250%.',
                'The target automatically casts Mindless Attack on a random ally when mana is full during 3 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    proteus: {
        name: 'Proteus',
        attack: 707,
        defense: 595,
        health: 1079,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/proteus.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Scar of the Depths',
            description: [
                'The target and nearby enemies receive 327 damage over 3 turns.',
                "The target and nearby enemies can't gain mana for 3 turns."
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },    
    rigard: {
        name: 'Rigard',
        attack: 595,
        defense: 673,
        health: 1166,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/rigard.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Purification',
            description: [
                'Recover 42% health for all allies and cure status ailments from them'
            ]
        },
        family: References.maps.SEASON_1
    },
    'rigard costume': {
        name: 'Rigard Costume',
        attack: 633,
        defense: 702,
        health: 1271,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/rigard-costume-dapper-noble-1.jpg',
        pseudonyms: ['costume rigard', 'rigard costume', 'dapper'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Regeneration',
            description: [
                'All allies regenerate 609 HP over 3 turns.',
                'All allies get +48% attack for 3 turns.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    sabina: {
        name: 'Sabina',
        attack: 699,
        defense: 578,
        health: 1060,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sabina.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Fog of the Fallen',
            description: [
                'Recover 42% health for all allies and remove buffs from all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'sabina costume': {
        name: 'Sabina Costume',
        attack: 742,
        defense: 642,
        health: 1074,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Sabina%20Costume_card.png',
        pseudonyms: ['sabina costume', 'costume sabina'],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Haze of the Fallen',
            description: [
                'All allies regenerate 609 HP over 3 turns.',
                'All enemies are immune to new buffs for 3 turns.',
                'Dispels buffs from all enemies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    stonecleave: {
        name: 'Stonecleave',
        attack: 726,
        defense: 622,
        health: 1056,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/stonecleave.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Dire Ghost',
            description: [
                'Removes all dispellable and undispellable status effects and stacks from the caster.',
                'The caster shifts into Dire Ghost form.',
                'While in Dire Ghost form the caster automatically deals 175% damage against a random enemy each turn.',
                "While in Dire Ghost form the caster can't gain mana but is immune to normal attacks, Special Skill attacks, status effects and stacks except the damage from enemies whose element is strong against the caster.",
                'Dire Ghost form lasts for 4 turns.'
            ]
        },
        family: References.realms.HELHEIM
    }, 
    tiburtus: {
        name: 'Tiburtus',
        attack: 660,
        defense: 633,
        health: 1045,
        element: elements.dark.id,
        pseudonyms: ['burt', 'tibs', 'tibertus', 'tiburtus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tiburtus.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Ramming Pulverizer',
            description: [
                'Deal 295% damage to a single enemy and minor damage on nearby enemies and they get -34% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'tiburtus costume': {
        name: 'Tiburtus Costume',
        attack: 688,
        defense: 675,
        health: 1140,
        element: elements.dark.id,
        pseudonyms: ['duke of rock', 'costume burt', 'burt costume', 'costume tibs', 'tibs costume', 'costume tibertus', 'tibertus costume', 'costume tiburtus', 'tiburtus costume'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tiburtus-costume-duke-of-rock-1.jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Symphonic Pulverizer',
            description: [
                'Deals 175% damage to all enemies.',
                'All enemies get -34% defense for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    }
}

const blue5StarHeroes = {
    aegir: {
        name: 'Aegir',
        attack: 615,
        defense: 823,
        health: 1446,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/aegir.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Icy Resilience',
            description: [
                'All allies share received damage with each other for 3 turns.',
                'All allies get +30% defense for 3 turns.',
                'All allies heal 100% of dealt normal damage for 3 turns.',
                "Element Link recovers 4% health for all Ice allies for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    alasie: {
        name: 'Alasie',
        attack: 739,
        defense: 706,
        health: 1336,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/alasie.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Spirit Arrow',
            description: [
                'Deals 462% damage to the target.',
                "The target and nearby enemies get -24% mana generation for 3 turns. This effect can't be dispelled.",
                "Element Link gives all Ice allies +5% attack and +5% defense for 6 turns. This effect cant be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    alice: {
        name: 'Alice',
        attack: 741,
        defense: 714,
        health: 1326,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/alice.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Timeless Timepiece',
            description: [
                'Deals 430% damage to the target.',
                'Target gets -44% attack for 3 turns. The effect duration is reset if the target is healed. This effect cannot be dispelled.'
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    ariel: {
        name: 'Ariel',
        attack: 731,
        defense: 768,
        health: 1260,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ariel.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Divine Protection',
            description: [
                'Recovers 40% health for all allies.',
                'All allies get +24% mana generation for 4 turns.',
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    athena: {
        name: 'Athena',
        attack: 737,
        defense: 692,
        health: 1349,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/athena.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: "Athena's Bow",
            description: [
                'Deal 305% damage to a single enemy and minor damage on nearby enemies and they get -41% defense and a further -4% decrease every time they are hit for 4 turns. Deals extra damage against Fire.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    cobalt: {
        name: 'Cobalt',
        attack: 801,
        defense: 685,
        health: 1435,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/cobalt.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Katana Rain',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Deals 290% damage to the target.',
                'The attack has a 60% chance to bypass defensive buffs. This includes counterattacks.',
                '',
                'x2 Mana Charge:',
                'Deals 325% damage to the target and nearby enemies.',
                'The attack has a 85% chance to bypass defensive buffs. This includes counterattacks.',
                '',
                'x3 Mana Charge:',
                'Deals 300% damage to all enemies.',
                'The attack has a 100% chance to bypass defensive buffs. This includes counterattacks.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    crystalis: {
        name: 'Crystalis',
        attack: 778,
        defense: 756,
        health: 1374,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/1/1/119f5d4307183be9aec1d467c31e4599daf33838.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Freezing Crystal',
            description: [
                'Deals 150% damage to all enemies.',
                "Reduces the duration of enemies' active buffs by 1 turn.",
                "All enemies receive Corrosive Frost for 3 turns. The Corrosive Frost deals 42 Frost damage and lowers the target's attack by -7% each turn."
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    fenrir: {
        name: 'Fenrir',
        attack: 780,
        defense: 737,
        health: 1297,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/fenrir.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Gargantuan Bite',
            description: [
                'Deals 320% damage to the target.',
                'Deals 640% damage if the target has less than 50% health remaining.',
                'The caster gains a moderate amount of mana for each enemy killed and a small amount of mana for each enemy minion killed.',
                'Heals the caster of 50% of the damage dealt.'
            ]
        },
        family: References.realms.NIFLHEIM
    },
    finley: {
        name: 'Finley',
        attack: 753,
        defense: 745,
        health: 1314,
        element: elements.ice.id,
        pseudonyms: ['fin', 'finley'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/finley.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: "Commodore's Revenge",
            description: [
                'Deals 385% damage to the target.',
                'If the target has buffs, targets another enemy with buffs. If none of the other enemies have buffs, targets a random enemy. The damage is reduced on each consecutive hit. Each enemy can only be hit once.',
                'All hit targets get -34% defense for 3 turns.'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    frida: {
        name: 'Frida',
        attack: 733,
        defense: 723,
        health: 1330,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/frida.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Polar Bash',
            description: [
                'Deals 290% damage to the target and nearby enemies',
                'The target and nearby enemies get -54% defense against Ice for 4 turns.',
                'Dispels buffs from the target and nearby enemies',
                "Element Link gives all Ice allies +46% defense against Nature for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    glenda: {
        name: 'Glenda',
        attack: 749,
        defense: 723,
        health: 1361,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://1.bp.blogspot.com/-uvf0TiZTfIE/X58E9_gIvYI/AAAAAAAAE70/K5LFBlN4TX8XXDMU7xDM1ndQS81KUKnuwCLcBGAsYHQ/s1678/Glenda.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Midnight Magic',
            description: [
                'Deals 270% damage to the target and nearby enemies.',
                "The caster and nearby allies' Special Skills deal an additional +40% damage for 4 turns.",
                'Cleanses status ailments from all allies.',
                "Element Link summons an Ice Minion for all Ice allies with 5% HP and 10% attack inherited from the caster."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    isarnia: {
        name: 'Isarnia',
        attack: 797,
        defense: 655,
        health: 1200,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/isarnia.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Glacial Shatter',
            description: [
                'Deal 235% damage to all enemies and they get -44% defense for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'isarnia costume': {
        name: 'Isarnia Costume',
        attack: 869,
        defense: 659,
        health: 1293,
        element: elements.ice.id,
        pseudonyms: ['isarnia costume', 'costume isarnia'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/isarnia-costume-ice-witch-of-glaceholm-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Glacial Explosion',
            description: [
                'Deals 255% damage to all enemies.',
                'All enemies get -34% defense for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'king arthur': {
        name: 'King Arthur',
        attack: 708,
        defense: 733,
        health: 1336,
        element: elements.ice.id,
        pseudonyms: ['arthur', 'ka', 'king arthur', 'king-arthur'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/king-arthur.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Excalibur',
            description: [
                'Deals 468% damage to the target.',
                'The target gets -39% attack for 4 turns.',
                'The target gets -54% defense against Ice for 4 turns.',
                'The caster gets +74% defense against Special Skills for 4 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    krampus: {
        name: 'Krampus',
        attack: 667,
        defense: 852,
        health: 1468,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/1/a/1a99ed9377243637dc93b312d97fa37a213f0e47.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Scourge of Joy',
            description: [
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.',
                "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
                "The caster gets +44% defense, and a further 10% increase every time they are hit during 3 turns. This effect can't be dispelled.",
                'All allies get +50% attack for 3 turns.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    'lord loki': {
        name: 'Lord Loki',
        attack: 774,
        defense: 743,
        health: 1312,
        element: elements.ice.id,
        // TODO
        imgUrl: 'https://1.bp.blogspot.com/-6MALnaB-vhs/X-TxdPQInpI/AAAAAAAAFLE/w0uam8eJ2dAJSm-_aPGvJ4o0R9qJbVG_ACLcBGAsYHQ/s1072/Lord%2BLoki.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: "Trickster's Mischief",
            description: [
                "Copies target's Special Skill and uses it as if it was the caster's own Special Skill.",
                "If the target does not have a Special Skill, or it can't be copied, the following Special skill will be cast:",
                '',
                'Villan Swing:',
                'Deals 275% damage to the target.'
            ]
        },
        family: References.realms.JOTUNHEIM
    },
    magni: {
        name: 'Magni',
        attack: 793,
        defense: 591,
        health: 1334,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/magni.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Strike of the Ancients',
            description: [
                'Deal 420% damage to a single enemy and nearby allies get +63% defense for 4 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'magni costume': {
        name: 'Magni Costume',
        attack: 743,
        defense: 732,
        health: 1467,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/magni-costume-monolith-of-ice-1.jpg',
        pseudonyms: ['magni costume', 'costume magni'],
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Strike of the Monolith',
            description: [
                'Deals 420% damage to the target.',
                'The target and nearby enemies get -34% defense for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'master lepus': {
        name: 'Master Lepus',
        attack: 795,
        defense: 690,
        health: 1194,
        element: elements.ice.id,
        pseudonyms: ['master lepus', 'lepus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/master-lepus.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Reckless Finisher',
            description: [
                'Deals 410% damage to the target and minor damage to nearby enemies.',
                "The caster gets -20% defense for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    miki: {
        name: 'Miki',
        attack: 712,
        defense: 778,
        health: 1275,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/miki.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Wrath of Tundra',
            description: [
                'All allies get +130% normal attack that only applies when the enemy has more health than the attacker. Stacks with similar status effects up to a maximum of +170% normal attack. The effect lasts for 5 turns.',
                'The target and nearby enemies get silenced for 4 turns.',
                "Element Link gives +4% mana generation for all Ice allies for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    misandra: {
        name: 'Misandra',
        attack: 723,
        defense: 751,
        health: 1330,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/misandra.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Chain Strike',
            description: [
                'Deals 310% damage to the target.',
                'Has a 42% chance for additional hits on random enemies up to 3 times. Additional hits deal minor damage.',
                'All allies gain a small amount of mana for each additional hit.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    perseus: {
        name: 'Perseus',
        attack: 725,
        defense: 698,
        health: 1367,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/perseus.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Everlasting Wound',
            description: [
                "Deal 355% damage to a single enemy and they get -100% healing received for 4 turns and it can't be dispelled. Nearby allies get +94% defense against Nature for 4 turns."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    raffaele: {
        name: 'Raffaele',
        attack: 650,
        defense: 803,
        health: 1402,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/raffaele.jpg',
        pseudonyms: ['raffaele', 'raffy', 'raff', 'rafaele'],
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Ice Treatment',
            description: [
                'Heals all allies who have less than 50% HP left to 50% health',
                'All allies regenerate 812 HP over 4 turns.',
                'Dispels status ailments from all allies.',
                "Element Link gives all ice allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    richard: {
        name: 'Richard',
        attack: 644,
        defense: 817,
        health: 1260,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/richard.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Cloud Hammer',
            description: [
                'Deal 415% damage to a single enemy and minor damage on nearby enemies and they get -34% attack for 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'richard costume': {
        name: 'Richard Costume',
        attack: 682,
        defense: 862,
        health: 1361,
        element: elements.ice.id,
        pseudonyms: ['richard costume', 'costume richard'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/richard-costume-axe-of-justice-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Cloud Axe',
            description: [
                'Deals 435% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -34% attack for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    rumpelstiltskin: {
        name: 'Rumpelstiltskin',
        attack: 733,
        defense: 698,
        health: 1359,
        element: elements.ice.id,
        pseudonyms: ['rumple', 'rumpel', 'rumplestiltskin', 'rumpelstiltskin', 'rumplestilskin', 'rumpelstilskin', 'rump'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/rumpelstiltskin.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
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
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    'skadi': {
        name: 'Skadi',
        attack: 696,
        defense: 793,
        health: 1411,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/07/skadi.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Iceberg Crush',
            description: [
                'Deals 170% damage to all enemies.',
                'The damage is increased by 70% per each dead enemy.',
                'Stack: all enemies receive 30 Frost damage per each killed enemy or enemy minion at the end of each turn. The maximum size of stack is 10.',
                'Stack: all enemies get -6% mana generation per each killed enemy or enemy minion. The maximum size of stack is 10.'
            ]
        },
        family: References.realms.JOTUNHEIM
    },
    'snow white': {
        name: 'Snow White',
        attack: 756,
        defense: 747,
        health: 1299,
        element: elements.ice.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/snow-white.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Enchanted Edge',
            description: [
                'Dispels all buffs and status ailments from all allies and enemies.',
                'Deals 180% damage to all enemies and additional 15% damage per removed status effect, up to 420% damage in total.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    thorne: {
        name: 'Thorne',
        attack: 638,
        defense: 793,
        health: 1339,
        element: elements.ice.id,
        pseudonyms: ['thorne', 'thorn'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/thorne.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Icecold Finisher',
            description: [
                'Deals 480% damage to the target and minor damage to nearby enemies.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'thorne costume': {
        name: 'Thorne Costume',
        attack: 726,
        defense: 786,
        health: 1424,
        element: elements.ice.id,
        pseudonyms: ['costume thorne', 'costume thorn', 'thorne costume', 'thorn costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Thorne%20Costume_card.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Freezing Final',
            description: [
                'Deals 540% damage to the target.',
                "The caster gets +24% mana generation for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    vela: {
        name: 'Vela',
        attack: 743,
        defense: 729,
        health: 1303,
        element: elements.ice.id,
        pseudonyms: ['vela', 'velly'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/vela.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Aquatic Outbreak',
            description: [
                'Deals 150% damage to all enemies.',
                'All enemies receive 208 Water damage over 4 turns.',
                'All Fire enemies get -24% attack for 4 turns.',
                'Deals extra damage against Fire.',
                "Element Link gives all ice allies +10% critial chance for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    }
}

const yellow5StarHeroes = {
    'bai yeong': {
        name: 'Bai Yeong',
        attack: 749,
        defense: 735,
        health: 1314,
        element: elements.holy.id,
        pseudonyms: ['bai yeong', 'bai', 'yeong', 'bai yong', 'yong', 'bai yeung', 'yeung'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/bai-yeong.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Stunning Steel',
            description: [
                'Deals 320% damage to the target.',
                'The target gets -75% accuracy for 2 turns. Chance to miss also applies to offensive Special Skills.',
                'The target gets -75% decrease for any healing received for 2 turns.',
                "Element Link gives all Holy allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    delilah: {
        name: 'Delilah',
        attack: 737,
        defense: 704,
        health: 1345,
        element: elements.holy.id,
        pseudonyms: ['del', 'delilah'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/delilah.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Summon Temple Guardians',
            description: [
                'Recovers 33% health for all allies.',
                'Summons a Guardian Minion for each ally with 13% HP and 16% attack inherited from the caster.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'drake fong': {
        name: 'Drake Fong',
        attack: 727,
        defense: 712,
        health: 1353,
        element: elements.holy.id,
        pseudonyms: ['drake', 'drake fong'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/drake-fong.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Flails of Fury',
            description: [
                'Deals 270% damage to the target and nearby enemies.',
                'The target and nearby enemies get -35% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.',
                "Element Link gives all Holy allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'guardian gazelle': {
        name: 'Guardian Gazelle',
        attack: 751,
        defense: 741,
        health: 1324,
        element: elements.holy.id,
        pseudonyms: ['gazelle', 'guardian gazelle'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-gazelle.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
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
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    'guardian owl': {
        name: 'Guardian Owl',
        attack: 601,
        defense: 795,
        health: 1483,
        element: elements.holy.id,
        pseudonyms: ['owl', 'guardian owl'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-owl.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Stately Retribution',
            description: [
                'Deals 280% damage to all enemies.',
                'Damage is increased by 50% per each dead ally.',
                'The caster gets +46% defense for 5 turns.',
                'The caster regenerates 765 HP over 5 turns.'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    guinevere: {
        name: 'Guinevere',
        attack: 669,
        defense: 778,
        health: 1347,
        element: elements.holy.id,
        pseudonyms: ['guin', 'guinevere'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guinevere.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Word of the Queen',
            description: [
                'Reduces the mana of all enemies by 20%.',
                'The caster and nearby allies regenerate 612 HP over 4 turns.',
                'The caster and nearby allies get +54% defense against Dark for 4 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    inari: {
        name: 'Inari',
        attack: 813,
        defense: 642,
        health: 1312,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/inari.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Lucky Nine',
            description: [
                'All allies get +56% chance to dodge Special Skills for 3 turns. Each dodge summons a Sakura Fox minion.',
                'Sakura Fox Minion has 8% HP and 30% attack inherited from the caster. It adds 7% mana to its owner at the end of each turn.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    joon: {
        name: 'Joon',
        attack: 749,
        defense: 636,
        health: 1339,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/joon.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Solar Beam',
            description: [
                'Deal 467% damage to a single enemy and they are less accurate for 6 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'joon costume': {
        name: 'Joon Costume',
        attack: 782,
        defense: 678,
        health: 1465,
        element: elements.holy.id,
        pseudonyms: ['joon costume', 'costume joon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/joon-costume-fury-of-the-sun-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Solar Strike',
            description: [
                'Deals 488% damage to the target.',
                'The target gets -35% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    justice: {
        name: 'Justice',
        attack: 609,
        defense: 776,
        health: 1425,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/justice.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Rite of Judgement',
            description: [
                'Deals 240% damage to all enemies.',
                'All enemies get -40% accuract for 4 turns.',
                'Chance to miss also applies to offensive Special Skills.'
            ]
        },
        family: References.maps.SEASON_1
    },
    leonidas: {
        name: 'Leonidas',
        attack: 731,
        defense: 718,
        health: 1221,
        element: elements.holy.id,
        pseudonyms: ['leo', 'leonidas'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/leonidas.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Spartan Cleave',
            description: [
                'Deals 365% damage to the target.',
                'Reduces the mana of the target by 40%',
                'Heals the caster for 75% of damage dealt.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'leonidas costume': {
        name: 'Leonidas Costume',
        attack: 749,
        defense: 773,
        health: 1347,
        element: elements.holy.id,
        pseudonyms: ['costume leonidas', 'costume leo', 'leonidas costume', 'leo costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Leonidas%20Costume_card.png',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Spartan Charge',
            description: [
                'Deals 390% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -54% defense against Holy for 4 turns.',
                'All Dark enemies get -34% attack for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    malosi: {
        name: 'Malosi',
        attack: 743,
        defense: 729,
        health: 1303,
        element: elements.holy.id,
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/9/b/9b75eafbd8b56a522e214c90c6ebf36a6718d7b2.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Power Punch',
            description: [
                'Deals 300% damage to the target.',
                'The target cannot cast any new status effects or stacks on enemies or allies for 3 turns.',
                "Element Link gives all Holy allies +10% critical chance for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    mica: {
        name: 'Mica',
        attack: 716,
        defense: 821,
        health: 1380,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/mica.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Connect Ki',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'All allies share received damage with each other for 2 turns.',
                'All allies get +20% defense for 2 turns.',
                'All allues get +15% mana generation for 2 turns.',
                '',
                'x2 Mana Charge:',
                'All allies share received damage with each other for 4 turns.',
                'All allies get +40% defense for 4 turns.',
                'All allies get +26% mana generation for 4 turns.',
                '',
                'x3 Mana Charge:',
                'All allies share received damage with each other for 5 turns.',
                'All allies get +73% defense for 5 turns.',
                'All allies get +33% mana generation for 5 turns.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    musashi: {
        name: 'Musashi',
        attack: 786,
        defense: 679,
        health: 1248,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/musashi.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Dragon Fang',
            description: [
                'Deal 332% damage to a single enemy and minor damage to nearby enemies.',
                'The caster heals 50% of dealt normal damage for 5 turns.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    neith: {
        name: 'Neith',
        attack: 735,
        defense: 737,
        health: 1299,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/neith.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Sickle of Eradication',
            description: [
                'Deals 150% damage to all enemies.',
                'Reduces the mana of all enemies by 10%.',
                'All enemies get -35% accuracy for 4 turns. Chance to miss also applies to offensive Special Skills.',
                "Element Link gives +4% mana generation for all Holy allies for 4 gturns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    norns: {
        name: 'Norns',
        attack: 770,
        defense: 718,
        health: 1369,
        element: elements.holy.id,
        pseudonyms: ['norns', 'norn'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/norns.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Twist of Fate',
            description: [
                'Deals 265% damage to the target and nearby enemies.',
                'The target and nearby enemies become weak against the element they are strong against for 5 turns. They stay weak against the element they are normally weak against.'
            ]
        },
        family: References.realms.VANAHEIM
    },
    odin: {
        name: 'Odin',
        attack: 762,
        defense: 751,
        health: 1330,
        element: elements.holy.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/e/a/ea6afbb7e536314aa7675109d498ee3557971ef0.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Fury of Grimnir',
            description: [
                'Deals 100% damage to all enemies',
                'Deals additional 18% damage per each Holy shield, up to 244% damage in total.',
                'All allies get +8% mana generation and a further 2% increase per Holy shield on the board, up to +28% mana generation.'
            ]
        },
        family: References.realms.MIDGARD
    },
    onatel: {
        name: 'Onatel',
        attack: 618,
        defense: 815,
        health: 1437,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/onatel.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Eye of the Prophet',
            description: [
                'Deals 250% damage to the target and nearby enemies.',
                "The caster steals generated mana of the target and the nearby enemies over 4 turns starting low and increasing every turn until on the last turn all the generated mana is stolen. This effect can't be dispelled, but gets removed if the caster dies.",
                "Element Link recovers 4% health for all Holy allies for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    poseidon: {
        name: 'Poseidon',
        attack: 745,
        defense: 718,
        health: 1349,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/poseidon.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Ruler of Seas',
            description: [
                'Deals 450% damage to the target.',
                'All allies resist new negative mana effects for 3 turns.',
                'ALl allies resist new effects that block usage of Special Skills for 3 turns.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    rana: {
        name: 'Rana',
        attack: 735,
        defense: 710,
        health: 1367,
        element: elements.holy.id,
        pseudonyms: ['rana', 'sandqueen', 'sand-queen'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/rana.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Sand Storm',
            description: [
                'Deals 185% damage to the target and nearby enemies.',
                'The target and nearby enemies receive 402 damage over 3 turns.',
                "The target and nearby enemies get -75% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },
    ranvir: {
        name: 'Ranvir',
        attack: 768,
        defense: 782,
        health: 1126,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ranvir.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: "Mystic's Virtue",
            description: [
                'Deals 265% damage to the target.',
                'All allies get +195% attack and -35% accuracy that only applies when the enemy has more health than the attacker. The effect lasts for 5 turns.',
                "Element Link gives all Holy allies +46% defense against Dark for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    roc: {
        name: 'Roc',
        attack: 762,
        defense: 739,
        health: 1361,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/07/roc.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Sand Cyclone',
            description: [
                'All enemies receive 366 damage over 3 turns.',
                "All enemies get -50% decrease for any healing received for 2 turns. This effect can't be dispelled.",
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },
    sif: {
        name: 'Sif',
        attack: 788,
        defense: 716,
        health: 1339,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sif.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Gold Weaver',
            description: [
                'The caster and nearby allies counterattack with 100% of the damage received for 4 turns.',
                'The caster and nearby allies reduce all received damage by -50% for 4 turns.',
                'The caster and nearby allies get +24% mana generation for 4 turns.'
            ]
        },
        family: References.realms.MIDGARD
    },
    'sir roostley': {
        name: 'Sir Roostley',
        attack: 778,
        defense: 727,
        health: 1347,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/sir-roostley.jpg',
        pseudonyms: ['sir roostley', 'roostley'],
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Luminous Lance',
            description: [
                'Deals 280% damage to the target.',
                'The attack chains through all enemies that are adjacent to any hit enemy',
                "The caster gets -20% attack for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    thor: {
        name: 'Thor',
        attack: 745,
        defense: 735,
        health: 1394,
        element: elements.holy.id,
        // TODO
        imgUrl: 'https://cnet1.cbsistatic.com/img/YUcMzfe235Tdz7IBV6-rshbR3A0=/940x0/2020/04/21/1506eb8e-f75e-4d3c-a007-269a32862a8d/twitter-in-stream-wide-fatthorbig2.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Power of Mjölnir',
            description: [
                'Special Skill has a diffrent effect on consecutive uses, in the following order:',
                '',
                '1st:',
                'Deals 280% damage to the target.',
                'The target gets -40% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.',
                '',
                '2nd:',
                'Deals 280% damage to the target and nearby enemies.',
                'The target and nearby enemies get -40% accuracy for 3 turns. Chance to miss also applies to offensive Special Skills.',
                '',
                '3rd:',
                'Deals 280% damage to all enemies.',
                'All enemies get -40% accuracy for 3 turns. Chance to miss also applies to offiensive Special Skills.'
            ]
        },
        family: References.realms.MIDGARD
    },
    uraeus: {
        name: 'Uraeus',
        attack: 778,
        defense: 727,
        health: 1324,
        element: elements.holy.id,
        pseudonyms: ['uraus', 'uraeus'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/b/0/b02267f7951ef2ea00604984294fdd974b067bac.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Strike of the Cobra',
            description: [
                'Deals 485% damage to the target.',
                "Damage bypasses target's Minions.",
                'All enemies who own a Minion receive 315 Sand damage over 3 turns.',
                "Element Link summons a Holy Minion for all Holy allies with 5% HP and 10% attack inherited from the caster."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    vivica: {
        name: 'Vivica',
        attack: 714,
        defense: 694,
        health: 1328,
        element: elements.holy.id,
        pseudonyms: ['viv', 'vivica'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/vivica.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Omniheal',
            description: [
                'Recover 44% health for all allies and cure status ailments from them and they get +63% defense for 4 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'vivica costume': {
        name: 'Vivica Costume',
        attack: 741,
        defense: 735,
        health: 1475,
        element: elements.holy.id,
        pseudonyms: ['costume viv', 'viv costume', 'costume vivica', 'vivica costume', 'dirty viv'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/vivica-costume-magician-supreme-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Omnicure',
            description: [
                'Recovers 44% health for all allies.',
                'All enemies get -44% defense for 4 turns.',
                'Dispels buffs for all enemies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'white rabbit': {
        name: 'White Rabbit',
        attack: 731,
        defense: 749,
        health: 1353,
        element: elements.holy.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/white-rabbit.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: "Rabbit's Watch",
            description: [
                'Deals 280% damage to the target and nearby enemies.',
                "Target gets -34% defense for 4 turns. This effect duratiion is reset if the target is healed. This effect cant be dispelled."
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    }
};

const green5StarHeroes = {
    alberich: {
        name: 'Alberich',
        attack: 725,
        defense: 741,
        health: 1277,
        element: elements.nature.id,
        pseudonyms: ['alby', 'alberich'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/alberich.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: "Midsummer's Dream",
            description: [
                'Each fallen ally has a 33% chance to get revived with 23% HP.',
                'All allies regenerate 612 HP over 4 turns.',
                'All allies regenerate a moderate amount of mana over 4 turns.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    atomos: {
        name: 'Atomos',
        attack: 733,
        defense: 727,
        health: 1336,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/atomos.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Immortal Annihilator',
            description: [
                'Deals 170% damage to all enemies.',
                'The more mana the enemies have, the more damage they will receive, up to 290%.',
                'If the caster dies during the next 5 turns they are resurrected in the beginning of their next turn with 32% health. All status effects are removed when the caster dies.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    bertila: {
        name: 'Bertila',
        attack: 718,
        defense: 774,
        health: 1367,
        element: elements.nature.id,
        // TODO:
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/6/a/6ae4b22315137f25449ff703f9afb33c9833e173.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'En Garde',
            description: [
                'Deals 290% damage to all enemies.',
                'Lifts all cleansable status ailments that affect attack or defense from all allies and randomly distributes them on enemies.',
                "Element Link Summons a Nature Minion for all Nature allies with 5% HP and 10% attack inherited from the caster."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    elkanen: {
        name: 'Elkanen',
        attack: 675,
        defense: 802,
        health: 1266,
        element: elements.nature.id,
        pseudonyms: ['elk', 'elkanen'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/elkanen.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Crescent Spear',
            description: [
                'Deals 330% damage to the target and minor damage to nearby enemies.',
                'Heals the caster for 38% of damage dealt.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'elkanen costume': {
        name: 'Elkanen Costume',
        attack: 687,
        defense: 862,
        health: 1370,
        element: elements.nature.id,
        pseudonyms: ['elk costume', 'elkanen costume', 'costume elk', 'costume elkanen'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/elkanen-costume-moonlit-conqueror-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Eclipse Spear',
            description: [
                'Deals 280% damage to the target and nearby enemies.',
                'The caster steals 61% of any healing applied to the target and nearby enemies for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    evelyn: {
        name: 'Evelyn',
        attack: 727,
        defense: 712,
        health: 1355,
        element: elements.nature.id,
        pseudonyms: ['eve', 'evelyn'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/evelyn.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Shattering Warcry',
            description: [
                'Deals 210% damage to the target and nearby enemies.',
                'The target and nearby enemies get -54% defense against Nature for 4 turns.',
                "Element Link recovers 4% health for all Nature allies for 6 turns. This effect can't be dispelled.",
                'Dispels buffs from the target and nearby enemies.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    francine: {
        name: 'Francine',
        attack: 780,
        defense: 743,
        health: 1353,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/francine.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Electric Cut',
            description: [
                'Deals 225% damage to the target and nearby enemies.',
                'Cleanses status ailments from all allies at the end of each turn for 3 turns.',
                'Deals extra damage against Ice.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    },
    frigg: {
        name: 'Frigg',
        attack: 753,
        defense: 760,
        health: 1320,
        element: elements.nature.id,
        pseudonyms: ['frigg'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/frigg.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Brittling Force',
            description: [
                'Deals 100% damage to all enemies.',
                'Deals additional 18% damage per Nature shield on the board, up to 244% damage in total.',
                'All enemies get -8% defense, and a further -3% decrease per each Nature shield on the board for 3 turns up to -44% defense.',
            ]
        },
        family: References.realms.ALFHEIM
    },
    gregorion: {
        name: 'Gregorion',
        attack: 729,
        defense: 710,
        health: 1351,
        element: elements.nature.id,
        pseudonyms: ['greg', 'gregorion'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gregorion.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Unwavering Focus',
            description: [
                'Deals 455% damage to the target.',
                'All allies get +30% critical chance for 3 turns.',
                "Element Link gives all Nature allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'guardian chameleon': {
        name: 'Guardian Chameleon',
        attack: 714,
        defense: 780,
        health: 1339,
        element: elements.nature.id,
        pseudonyms: ['chameleon', 'guardian chameleon'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-chameleon.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Elemental Magic',
            description: [
                'Removes all dispellable and undispellable status effects from all enemies.',
                'Changes the element of all enemies to the element they are strong against for 4 turns',
                'All allies get +54% attack for 4 turns.',
                'All allies get +36% critical chance for 4 turns.'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    heimdall: {
        name: 'Heimdall',
        attack: 655,
        defense: 844,
        health: 1417,
        element: elements.nature.id,
        pseudonyms: ['heimdall', 'heimdal'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/heimdall.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Boon of Gjallahorn',
            description: [
                'Boosts health of all allies by 500. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'Each fallen ally has a 20% chance to get revived with 30% HP.',
                'All allies get +30% attack for 4 turns.'
            ]
        },
        family: References.realms.ASGARD
    },
    horghall: {
        name: 'Horghall',
        attack: 657,
        defense: 650,
        health: 1545,
        element: elements.nature.id,
        pseudonyms: ['groot', 'tree', 'horg', 'horghall'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/horghall.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Anger of the Forest',
            description: [
                'Deals 235% damage to all enemies.',
                'All enemies get -34% attack for 6 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'horghall costume': {
        name: 'Horghall Costume',
        attack: 691,
        defense: 694,
        health: 1669,
        element: elements.nature.id,
        pseudonyms: ['costume groot', 'groot costume', 'costume tree', 'tree costume', 'costume horg', 'horg costume', 'costume horghall', 'horghall costume', 'jester'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/horghall-costume-wooden-jester-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Anger of the Jester',
            description: [
                'Deals 215% damage to all enemies.',
                'All enemies get -54% attack for 6 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    jade: {
        name: 'Jade',
        attack: 692,
        defense: 819,
        health: 1446,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/jade.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Shared Visage',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Reduces the mana of all enemies by 10%.',
                'The caster gets +25% chance of dodging special attacks that do damange for 3 turns.',
                '',
                'x2 Mana Charge:',
                'Reduces the mana of all enemies by 15%.',
                'The caster and nearby allies get +50% chance of dodging special attacks that do damage for 4 turns.',
                '',
                'x3 Mana Charge:',
                'Reduces the mana of all enemies by 25%.',
                'All allies get +75% chance of dodging special attacks that do damage for 5 turns.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    kadilen: {
        name: 'Kadilen',
        attack: 711,
        defense: 766,
        health: 1246,
        element: elements.nature.id,
        pseudonyms: ['kadilen', 'kad'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kadilen.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Eclipse Shield',
            description: [
                'Deals 190% damage to all enemies.',
                'All allies get +74% defense against Special Skills for 3 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'kadilen costume': {
        name: 'Kadilen Costume',
        attack: 698,
        defense: 830,
        health: 1398,
        element: elements.nature.id,
        pseudonyms: ['kadilen costume', 'kad costume', 'costume kadilen', 'costume kad'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/kadilen-costume-priestess-of-moonlight-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Crescent Shield',
            description: [
                'Deals 170% damage to all enemies.',
                'All allies get +45% chance to dodge Special Skills for 3 turns. Each dodge summons a Thorn Minion.',
                'Thorn Minion has 15% HP and 15% attack inherited from the caster.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    kingston: {
        name: 'Kingston',
        attack: 749,
        defense: 735,
        health: 1266,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kingston.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Stiletto Cyclone',
            description: [
                'Deals 445% damage to the target.',
                'The target and nearby enemies get -31% attack, and a further -4% decrease every time they are hit during 4 turns.',
                "Element Link gives +4% mana generation for all Nature allies for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'lady locke': {
        name: 'Lady Locke',
        attack: 805,
        defense: 665,
        health: 1231,
        element: elements.nature.id,
        pseudonyms: ['lady locke', 'locke'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/lady-locke.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Moolight Serenade',
            description: [
                'The target and nearby enemies receive 869 damage over 4 turns, starting low and increasing with every turn.',
                'Dispels status ailments from all allies'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    'lady of the lake': {
        name: 'Lady of the Lake',
        attack: 756,
        defense: 741,
        health: 1312,
        element: elements.nature.id,
        pseudonyms: ['lady of the lake', 'lady lake', 'lady-of-the-lake', 'lady-lake', 'lake lady', 'lake-lady', 'lake'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/lady-of-the-lake.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Magical Sword',
            description: [
                'Recovers 42% health for all allies.',
                'Summons a Magical Sword Minion for the caster and nearby allies with 14% HP and 15% attack inherited from the caster.',
                'The Minion removes -10% mana from the target when it hits them.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    lianna: {
        name: 'Lianna',
        attack: 729,
        defense: 718,
        health: 1248,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/lianna.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Perfect Shot',
            description: [
                'Deal 512% damage to a single enemy'
            ]
        },
        family: References.maps.SEASON_1
    },
    'lianna costume': {
        name: 'Lianna Costume',
        attack: 773,
        defense: 745,
        health: 1364,
        element: elements.nature.id,
        pseudonyms: ['lianna costume', 'costume lianna', 'sailor lianna'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/lianna-costume-noble-guardian-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Pure Shot',
            description: [
                'Deals 482% damage to the target.',
                'The target gets -34% mana generation for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    margaret: {
        name: 'Margaret',
        attack: 821,
        defense: 648,
        health: 1260,
        element: elements.nature.id,
        pseudonyms: ['marg', 'margaret'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/margaret.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Hide in Shadows',
            description: [
                'Deals 150% damage to the target and nearby enemies.',
                'The caster and nearby allies have from +30% to +90% chance of dodging special attacks that do damage. The higher the damage from the special is, the higher the chance to dodge it. Each dodge gives a moderate amount of mana to the target. The effect lasts for 3 turns.',
                "Element Link gives all Nature allies +46% defense against Fire for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'morgan le fay': {
        name: 'Morgan Le Fay',
        attack: 716,
        defense: 721,
        health: 1343,
        element: elements.nature.id,
        pseudonyms: ['morgan', 'morgan le fay', 'le fay', 'morgan-le-fay', 'le-fay'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/morgan-le-fay.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Devourer of Vitality',
            description: [
                "The caster drains 627 HP from the target over 4 turns. This effect can't be dispelled but gets removed if the caster dies.",
                'The caster gets +94% defense against Fire for 4 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    'mother north': {
        name: 'Mother North',
        attack: 605,
        defense: 819,
        health: 1462,
        element: elements.nature.id,
        pseudonyms: ['mn', 'mother north'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mother-north.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Super Porridge',
            description: [
                'Recovers 30% health for all allies.',
                'Each fallen ally has a 50% chance to get revived with 10% HP.',
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    'ratatoskr': {
        name: 'Ratatoskr',
        attack: 753,
        defense: 741,
        health: 1353,
        element: elements.nature.id,
        pseudonyms: ['ratatoskr', 'rat'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ratatoskr.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Nutes of Yggdrasil',
            description: [
                'Recovers 44% health for all allies.',
                'All Nature shields on the board become enhanced. Enhanced shields have +64% attack when attacking hero casts the special, and -57% attack when defending hero casts the special.'
            ]
        },
        family: References.realms.ALFHEIM
    },
    tarlak: {
        name: 'Tarlak',
        attack: 824,
        defense: 667,
        health: 1240,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tarlak.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Martial Prowess',
            description: [
                'All allies get +100% normal attack for 4 turns. Stacks with similar status effects up to a maximum +160% normal attack.',
                'All allies regenerate 324 HP over 4 turns.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    telluria: {
        name: 'Telluria',
        attack: 613,
        defense: 832,
        health: 1425,
        element: elements.nature.id,
        pseudonyms: ['telluria', 'teluria', 'telly'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/telluria-1.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Force of Forest',
            description: [
                'Deals 90% damage to all enemies.',
                'Summons a Forest Familiar Minion for all allies with 9% HP and 13% attack inherited from the caster',
                'All allies regenerate 274 HP over 2 turns.',
                'All enemies get -24% mana generation for 3 turns.',
                "Element Link gives all Nature allies +10% critical chance for 6 turns. This effect can't be dispelled."

            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'the hatter': {
        name: 'The Hatter',
        attack: 735,
        defense: 710,
        health: 1341,
        element: elements.nature.id,
        pseudonyms: [
            'hatter',
            'mad hatter',
            'mad'
        ],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/the-hatter.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Mad as a Hatter',
            description: [
                'Deals 370% damage to the target and minor damage to nearby expressions.',
                'Steals all the dispellable buffs from all enemies and randoml exicute hatter'
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    toxicandra: {
        name: 'Toxicandra',
        attack: 774,
        defense: 760,
        health: 1369,
        element: elements.nature.id,
        pseudonyms: [ 'poison ivy', 'toxicandra'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/e/4/e4174624d5e4f8079052ee310b479915ea4c1c63.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Accelerated Growth',
            description: [
                'Recovers 24% health for all allies.',
                'All allies regenerate a moderate amount of mana over 3 turns.',
                'Cleanses status ailments from all allies'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    yunan: {
        name: 'Yunan',
        attack: 618,
        defense: 815,
        health: 1437,
        element: elements.nature.id,
        pseudonyms: ['yunan', 'sandking', 'sand-king', 'sand king'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/yunan.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Sand Storm',
            description: [
                'Deals 161% damage to all enemies.',
                'All enemies receive 339 damage over 3 turns.',
                "All enemies get -50% healing received for 2 turns. This effect can't be dispelled.",
                'Cures status ailments from the caster.'
            ]
        },
        family: References.seasonalEvents.SAND_EMPIRE
    },
    zeline: {
        name: 'Zeline',
        attack: 764,
        defense: 688,
        health: 1308,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/zeline.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Emerald Flash',
            description: [
                'Deals 143% damage to all enemies.',
                'All enemies get -34% attack for 4 turns.',
                'Deals extra damage against Ice.',
                'Removes buffs from all enemies.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    zocc: {
        name: 'Zocc',
        attack: 739,
        defense: 725,
        health: 1351,
        element: elements.nature.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/zocc.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Keyknife Typhoon',
            description: [
                'Deals 300% damage to the target.',
                'Increases the mana of the target by 50%',
                'The target automatically casts Mindless Attack on a random ally when mana is full during 3 turns.',
                "Element Link gives all Nature allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    }
};

const red5StarHeroes = {
    anzogh: {
        name: 'Anzogh',
        attack: 698,
        defense: 793,
        health: 1279,
        element: elements.fire.id,
        pseudonyms: ['anzogh', 'anzo'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/anzogh.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Flaming Grudge',
            description: [
                'Deals 215% damage to all enemies.',
                'Heals each ally with 20% of total damage dealt.',
                "Element Link gives all Fire allies +46% defense against Ice for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    ares: {
        name: 'Ares',
        attack: 659,
        defense: 741,
        health: 1442,
        element: elements.fire.id,
        pseudonyms: ['ares', 'aries'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ares.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Might of Ares',
            description: [
                'The caster and nearby allies get +54% attack for 4 turns.',
                'The caster and nearby allies get +36% critical chance for 4 turns.',
                'The caster and nearby allies regenerate 720 HP over 4 turns.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    asterius: {
        name: 'Asterius',
        attack: 784,
        defense: 762,
        health: 1355,
        element: elements.fire.id,
        pseudonyms: ['minotaur', 'asterius'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/8/28859e611bc1f0636388d719591624282f618211.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Brutal Bull Rush',
            description: [
                'Deals 235% damage to the target and nearby enemies.',
                "Reduces the duration of the target and nearby enemies' buffs by 1 turn.",
                "The target and nearby enemies receive Corrosive Burn for 3 turns. The Corrosive Burn deals 88 burn damage and lowers the target's defense by -10% each turn."
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    azlar: {
        name: 'Azlar',
        attack: 793,
        defense: 607,
        health: 1322,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/azlar.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Volcanic Eruption',
            description: [
                'Deal 205% damage to all enemies and they receive 360 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'azlar costume': {
        name: 'Azlar Costume',
        attack: 821,
        defense: 663,
        health: 1431,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/azlar-costume-king-of-the-leors-1.jpg',
        pseudonyms: ['alzar costume', 'costume azlar'],
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Volcanic Flareup',
            description: [
                'Deals 205% damage to the target and nearby enemies.',
                'Deals 410% damage if the target has less than 50% health remaining.',
                "The target and nearby enemies receive 430 Burn damage over 2 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'baldur': {
        name: 'Baldur',
        attack: 807,
        defense: 696,
        health: 1326,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/06/baldur.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Unbreakable Brawler',
            description: [
                'Booses health of the caster by 1000. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'All allies resist direct mana reduction for as long as the caster has boosted health. This effect cannot be dispelled.',
                'Deals 165% damage to a random enemy each turn for as long as the caster has boosted health. This effect cannot be dispelled.'
            ]
        },
        family: References.realms.MUSPELHEIM
    },
    'black knight': {
        name: 'Black Knight',
        attack: 611,
        defense: 846,
        health: 1458,
        element: elements.fire.id,
        pseudonyms: ['black knight', 'knight', 'black-knight', 'dark knight', 'dark-knight'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/black-knight.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Just a Flesh Wound',
            description: [
                'The caster has a 50% chance to drop any received damage to 1 for 3 turns.',
                "The caster gets Taunt that prevents enemies from using Special Skills on the caster's allies for 3 turns.",
                'All allies get +45% attack, and a further 20% increase every time they are hit during 3 turns.'
            ]
        },
        family: References.events.KNIGHTS_OF_AVALON
    },
    'captain kestrel': {
        name: 'Captain Kestrel',
        attack: 727,
        defense: 702,
        health: 1353,
        element: elements.fire.id,
        pseudonyms: ['kestrel', 'captain kestrel'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/captain-kestrel.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Pirate Shot',
            description: [
                'Deals 215% damage to the target and nearby enemies.',
                'The more mana the enemies have, the more damage they will receive, up to 335%.'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    elena: {
        name: 'Elena',
        attack: 809,
        defense: 578,
        health: 1312,
        element: elements.fire.id,
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Fire-Elena%20(1).jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Wall of Swords',
            description: [
                'Deals 202% damage to all enemies.',
                'The caster and nearby allies counterattack with 125% of the damage received for 5 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'elena costume': {
        name: 'Elena Costume',
        attack: 845,
        defense: 588,
        health: 1494,
        element: elements.fire.id,
        pseudonyms: ['elena costume', 'costume elena'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/elena.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Sword Barricade',
            description: [
                'Deals 172% damage to all enemies.',
                'The caster and nearby allies counterattack with 155% of the damage received for 5 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    garnet: {
        name: 'Garnet',
        attack: 731,
        defense: 751,
        health: 1481,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/garnet.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Awaken Ki',
            description: [
                'Special Skill has a different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Boosts health of all allies by 180. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'All allies are immune to new status ailments for 2 turns.',
                '',
                'x2 Mana Charge:',
                'Boosts health of all allies by 400. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'All allies are immune to new status ailments for 3 turns.',
                '',
                'x3 Mana Charge:',
                'Boosts health of all allies by 720. If health exceeds max HP, it is added as temporary HP. Max temporary HP is 100% of max HP. Boosted health counters max HP reduction.',
                'ALl allies are immune to new status ailments for 4 turns.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    gefjon: {
        name: 'Gefjon',
        attack: 772,
        defense: 766,
        health: 1258,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/gefjon.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: "Maiden's Command",
            description: [
                'Seals minions from the target.',
                'Deals 500% damage to the target.'
            ]
        },
        family: References.realms.MUSPELHEIM
    },
    gravemaker: {
        name: 'Gravemaker',
        attack: 727,
        defense: 708,
        health: 1363,
        element: elements.fire.id,
        pseudonyms: ['grave', 'gm', 'gravemaker'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/gravemaker.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Ashes to Ashes',
            description: [
                'Deals 135% damage to the target and nearby enemies.',
                'The target and nearby enemies receive 298 damage over 2 turns.',
                'Deals extra damage against Nature.',
                "Element Link gives all Fire allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    grazul: {
        name: 'Grazul',
        attack: 628,
        defense: 817,
        health: 1406,
        element: elements.fire.id,
        pseudonyms: ['grazul', 'graz'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/grazul.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Mending Mantra',
            description: [
                'Recovers 15% health for all allies.',
                'All allies are immune to new status ailments for 2 turns.',
                "Element Link gives +4% mana generation for all Fire allies for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'guardian kong': {
        name: 'Guardian Kong',
        attack: 786,
        defense: 587,
        health: 1433,
        element: elements.fire.id,
        pseudonyms: ['kong', 'guardian kong', 'guardiankong'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-kong.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Lord of the Jungle',
            description: [
                'Deals 250% damage to all enemies.',
                'Removes status ailments from all allies',
                'All allies get +94% defense against Ice for 4 turns.'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    isrod: {
        name: 'Isrod',
        attack: 758,
        defense: 768,
        health: 1423,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/a/d/ad90e2654f858fb990ebdf2ed8f0d719710940e6.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Vengeful Scythe',
            description: [
                'Deals 225% damage to the target and nearby enemies.',
                'The caster and nearby allies counterattack with 80% of the damage received over 3 turns.',
                'The caster and nearby allies regenerate a small amount of mana for each counterattack. The effect gets diminished for consecutive counterattacks during the same turn.'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    'jean-françois': {
        name: 'Jean-François',
        attack: 737,
        defense: 723,
        health: 1332,
        element: elements.fire.id,
        pseudonyms: ['jean-françois', 'jean francois', 'jean françois', 'jf', 'jean fran', 'jean-fran'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/jean-francois.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Seal of Fire',
            description: [
                'All enemies receive 302 Burn damage over 2 turns.',
                'All allies get +94% defense against ice for 4 turns.',
                'All allies get Defense Status Ailment Protection for 4 turns. New status ailments affecting defense will be replaced by +42% defense for 4 turns.',
                "Element Link gives all Fire allies +10% critical chance for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    khagan: {
        name: 'Khagan',
        attack: 710,
        defense: 642,
        health: 1458,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/khagan.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: "Khan's Order",
            description: [
                'Deals 320% damage to the target and nearby enemies.',
                'The caster and nearby allies get +24% mana generation for 5 turns.',
                'The caster and nearby allies get +63% defense for 5 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'khagan costume': {
        name: 'Khagan Costume',
        attack: 761,
        defense: 691,
        health: 1529,
        element: elements.fire.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Khagan%20Costume_card.png',
        pseudonyms: ['khagan costume', 'costume khagan'],
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: "Conqueror's Command",
            description: [
                'Deals 514% damage to the target.',
                'All allies get +12% mana generation for 5 turns.',
                'All allies get +46% defense for 5 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    'lady loki': {
        name: 'Lady Loki',
        attack: 747,
        defense: 776,
        health: 1312,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/lady-loki.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: "Trickster's Malice",
            description: [
                'Takes all dispellable status ailments from all allies and randomly casts them on all enemies.',
                'Deals 170% damage to all enemies.',
                'Deals additional 8% damage per allocated status effect, up to 298% damage in total.'
            ]
        },
        family: References.realms.HELHEIM
    },
    marjana: {
        name: 'Marjana',
        attack: 669,
        defense: 712,
        health: 1404,
        element: elements.fire.id,
        pseudonyms: ['marj', 'marjana'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/marjana.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Magma Smash',
            description: [
                'Deal 458% damage to a single enemy and they receive 300 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'marjana costume': {
        name: 'Marjana Costume',
        attack: 753,
        defense: 704,
        health: 1499,
        element: elements.fire.id,
        pseudonyms: ['marjana costume', 'costume marjana', 'costume marj', 'marj costume'],
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Marjana%20Costume_card.png',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Lava Blast',
            description: [
                'Deals 358% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -54% defense against Fire for 3 turns.',
                'All Ice enemies get -34% attack for 3 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    mitsuko: {
        name: 'Mitsuko',
        attack: 696,
        defense: 727,
        health: 1450,
        element: elements.fire.id,
        pseudonyms: ['mits', 'mitsuko'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mitsuko.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Mirror of Flames',
            description: [
                'Deals 245% damage to the target and nearby enemies.',
                'Reduces the mana of the target and nearby enemies by 20%.',
                'All allies reflect all status effects and 115% damage from Ice Special Skills back to the attacker for 4 turns.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    natalya: {
        name: 'Natalya',
        attack: 718,
        defense: 697,
        health: 1455,
        element: elements.fire.id,
        pseudonyms: ['nat', 'natalya'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/natalya.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Burning Chains',
            description: [
                "The target receives 752 damage over 4 turns. This effect can't be dispelled.",
                "The target gets -54% mana generation for 4 turns. This effect can't be dispelled.",
                'Deals extra damage against Nature.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    noor: {
        name: 'Noor',
        attack: 704,
        defense: 782,
        health: 1314,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/07/noor.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Sparrow Fury',
            description: [
                'Summons an Sparrow Minion for each ally. The Sparrow Minion inherits 25% HP and 25% attack from the caster.',
                'Before Sparrow Minion hits target, it destroys all Minions from the target.',
                "Element Link gives all Fire allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'puss in boots': {
        name: 'Puss in Boots',
        attack: 764,
        defense: 727,
        health: 1322,
        element: elements.fire.id,
        pseudonyms: ['puss', 'puss in boots'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/puss-in-boots.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Three Blind Mice',
            description: [
                'All Summoner allies summon a Minion for themselves.',
                'Summons 3 Mouse Minions with 10% HP and 30% attack inherited from the caster. The Minions have -32% accuracy',
                'All allies regenerate 548 HP over 4 turns.',
                'All allies get +30% attack for 4 turns.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    'queen of hearts': {
        name: 'Queen of Hearts',
        attack: 638,
        defense: 729,
        health: 1545,
        element: elements.fire.id,
        pseudonyms: ['qoh', 'queen of hearts'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/queen-of-hearts.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Queen of Cards',
            description: [
                'Deals 240% damage to the target and nearby enemies.',
                'Summons a Playing Card Minion with 16% HP and 30% attack inherited from the caster.',
                "The Playing Card Minion gives its owner Taunt. Taunt prevents the enemies from using their Special Sklls on Minion owner's allies",
                'The caster gets 74% defense against Special Skills for 4 turns.'
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    'red hood': {
        name: 'Red Hood',
        attack: 729,
        defense: 708,
        health: 1353,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/red-hood.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Forest Friends',
            description: [
                'Deals 131% damage to all enemies.',
                'Summons a Fox Minion for each ally with 14% HP. The minion recovers 7% health for its owner at the start of each turn.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    reuben: {
        name: 'Reuben',
        attack: 766,
        defense: 737,
        health: 1310,
        element: elements.fire.id,
        pseudonyms: ['reuben', 'rubin', 'ruben', 'rueben', 'ruebin'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/b/2/b212c65a26c2dc6f267a82cca60b40481a27b57b.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Occult Redemption',
            description: [
                'Deals 215% damage to the target and nearby enemies.',
                'All allies get -50% reduction to damage received from status effects for 4 turns.',
                "Element Link summons a Fire Minion for all Fire allies with 5% HP and 10% attack inherited from the caster."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'santa claus': {
        name: 'Santa Claus',
        attack: 618,
        defense: 830,
        health: 1437,
        element: elements.fire.id,
        pseudonyms: ['santa', 'claus', 'santa claus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/santa-claus.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Ultimate Gift Sack',
            description: [
                'Deals 150% damage to all enemies.',
                'Summons an Elf Minion for each ally with 10% HP and 10% attack inherited from the caster.',
                'All enemies get -34% attack for 3 turns.',
                'All enemies get -44% defense for 3 turns.'
            ]
        },
        family: References.seasonalEvents.SANTAS_CHALLENGE
    },
    tyr: {
        name: 'Tyr',
        attack: 772,
        defense: 756,
        health: 1312,
        element: elements.fire.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/tyr.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Adamantite Claw',
            description: [
                'Deals 285% damage to the target.',
                'The attack has a 60% chance to bypass all defensive buffs. This includes counterattacks.',
                'The target receives 196 Bleed damage over 4 turns.',
                'The caster regenerates 548 HP over 4 turns.',
                'If the caster dies during the next 4 turns, they are resurrected at the beginning of their next turn with 32% health. All status effects are removed when the caster dies.'
            ]
        },
        family: References.realms.HELHEIM
    },
    vanda: {
        name: 'Vanda',
        attack: 774,
        defense: 735,
        health: 1384,
        element: elements.fire.id,
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/2/728e3218592c4a8124bbde5b3b2c4926c516dd91.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Twilight of Sorrow',
            description: [
                'Deals 125% damage to all enemies.',
                'The caster steals 61% of any healing applied to all enemies for 2 turns.',
                'All allies are immune to new status ailments for 2 turns.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    },
    zimkitha: {
        name: 'Zimkitha',
        attack: 714,
        defense: 681,
        health: 1454,
        element: elements.fire.id,
        pseudonyms: ['zimkitty', 'zim', 'zimkitha'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/zimkitha.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Dawn Strike',
            description: [
                'Deals 155% damage to all enemies.',
                'All allies get +25% attack for 4 turns.',
                "Element Link recovers 4% health for all Fire allies for 6 turns. This effect can't be dispelled.",
                'Dispels status ailments from all allies.'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    }
};

const purple5StarHeroes = {
    aeron: {
        name: 'Aeron',
        attack: 733,
        defense: 712,
        health: 1341,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/aeron.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Nethershield',
            description: [
                'All allies regenerate 459 HP over 3 turns.',
                "The caster and nearby allies are immune to new status ailments for 3 turns. This effect can't be dispelled.",
                'Cures status ailments from the target and nearby allies.',
                "Element Link gives all Dark allies +5% attack and +5% defense for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    alfrike: {
        name: 'Alfrike',
        attack: 659,
        defense: 844,
        health: 1421,
        element: elements.dark.id,
        pseudonyms: ['alfrike', 'alf'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/alfrike.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_SLOW.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Cube of Dark Realm',
            description: [
                'Casts 5 Dark Cubes to random enemies.',
                'Dark Cube deals 200% damage to the target.',
                "Dark Cube reduces max health from the target by 224. Max health can't get lower than 30% of the original max health",
                'The target automatically casts Mindless Attack on a random ally when mana is full during 3 turns.'
            ]
        },
        family: References.realms.SVARTALFHEIM
    },
    bera: {
        name: 'Bera',
        attack: 743,
        defense: 749,
        health: 1369,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/bera.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Disir of Dusk',
            description: [
                'Summons a Moth Minion for each ally. The Moth Minion inherits 20% HP and 20% attack from the caster.',
                'Each hit from a Moth Minion gives the target the following status ailments:',
                'The target receives 180 Poison damage over 3 turns.',
                "The target can't receive new Minions for 3 turns."
            ]
        },
        family: References.realms.VANAHEIM
    },
    'boss wolf': {
        name: 'Boss Wolf',
        attack: 566,
        defense: 826,
        health: 1524,
        element: elements.dark.id,
        pseudonyms: ['boss wolf', 'boss', 'wolf'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/boss-wolf.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_SLOW.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: 'Unstoppable Growl',
            description: [
                "The caster and nearby allies get +24% mana generation for 4 turns. This effect can't be dispelled",
                'All enemies get -34% mana generation for 4 turns.',
                'The caster and nearby allies counterattack with 115% of the damage received for 4 turns.'
            ]
        },
        family: References.events.FABLES_OF_GRIMFOREST
    },
    clarissa: {
        name: 'Clarissa',
        attack: 733,
        defense: 712,
        health: 1367,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/clarissa.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Miasma Mace',
            description: [
                'Deals 135% damage to the target and nearby enemies.',
                'The target and nearby enemies receive 224 Poison damage over 2 turns.',
                'Deals extra damage against Holy.',
                "Element Link gives Dark allies +30% defense against Special Skills for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'dark lord': {
        name: 'Dark Lord',
        attack: 801,
        defense: 749,
        health: 1357,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/b/7/b7ed3b5625d19a1b80771830249ce19c358aa9fe.jpeg',
        stars: 5,
        pseudonyms: ['dark lord', 'darklord'],
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Doomstrike',
            description: [
                'Deals 390% damage to the target.',
                "Reduces the duration of the target and nearby enemies' buffs by 1 turn.",
                "The target and nearby enemies receive Corrosive Poison for 3 turns. The Corrosive Poison deals 64 damage and lowers the target's mana generation by -9% each turn for 3 turns."
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    domitia: {
        name: 'Domitia',
        attack: 725,
        defense: 677,
        health: 1349,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/domitia.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Shock Bolt',
            description: [
                'Deals 410% damage to the target.',
                'The caster and nearby allies get +94% defense against Holy for 4 turns.',
                'Dispels buffs from the target and nearby enemies.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'domitia costume': {
        name: 'Domitia Costume',
        attack: 778,
        defense: 724,
        health: 1411,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/domitia-costume-steampunk-sniper-1.jpg',
        pseudonyms: ['domitia costume', 'costume domitia'],
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Poison Bolt',
            description: [
                'Deals 390% damage on the target.',
                'The target and nearby enemies receive 324 Poison damage over 4 turns.',
                'Dispels status ailments from the caster and nearby allies.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    freya: {
        name: 'Freya',
        attack: 776,
        defense: 743,
        health: 1339,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/freya.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.DRUID.value,
        special: {
            name: "Raven's Vigil",
            description: [
                'Summons a Raven Minion for each ally with 20% HP and 20% attack inherited from the caster.',
                "Raven Minion gives +120% attack to all its owner's other Minions.",
                'All allies get +30% defense for 4 turns.'
            ]
        },
        family: References.realms.VANAHEIM
    },
    'guardian panther': {
        name: 'Guardian Panther',
        attack: 782,
        defense: 622,
        health: 1339,
        element: elements.dark.id,
        pseudonyms: ['panther', 'guardian panther'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/guardian-panther.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Eye of the Panther',
            description: [
                'Deal 210% damage to target and nearby enemies adn remove buffs from them and they get -54% defense against Dark for 4 turns'
            ]
        },
        family: References.events.GUARDIANS_OF_TELTOC
    },
    grimble: {
        name: 'Grimble',
        attack: 615,
        defense: 824,
        health: 1425,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/grimble.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Gnomish Carnage',
            description: [
                'Destroys all Minions from all enemies.',
                'Deals 235% damage to all enemies.',
                'All allies get a small amount of mana for each destroyed Minon.',
                "Element Link gives all Dark allies +10% critical chance for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    hel: {
        name: 'Hel',
        attack: 745,
        defense: 692,
        health: 1328,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/hel.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Crush of Hel',
            description: [
                'Deal 315% damage to a single enemy and minor damage on nearby enemies and they get no mana for 3 turns.',
                'Deals extra damage against Holy'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    jabberwock: {
        name: 'Jabberwock',
        attack: 743,
        defense: 747,
        health: 1328,
        element: elements.dark.id,
        pseudonyms: ['jabber', 'jabberwock', 'jabberwocky'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/jabberwock.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Sideswipe',
            description: [
                'Deals 300% damage to the enemies on the edges of the enemy formation. If there is only one enemy alive, the damage is doubled.',
                "The enemies on the edges of the enemy formation receive 234 Poison damage over 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.RIDDLES_OF_WONDERLAND
    },
    kageburado: {
        name: 'Kageburado',
        attack: 780,
        defense: 714,
        health: 1248,
        element: elements.dark.id,
        pseudonyms: ['kage', 'kageburado'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kageburado.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Break Strike',
            description: [
                'Dispels buffs from the target.',
                'Deals 225% damage to the target.',
                'Deals 450% damage if the target has more than 50% health remaining.'
            ]
        },
        family: References.atlantisFamilies.SAKURA
    },
    karnov: {
        name: 'Karnov',
        attack: 766,
        defense: 745,
        health: 1444,
        element: elements.dark.id,
        pseudonyms: ['karnov', 'airbender'],
        // TODO
        imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/d/7d0ae9c07b70d3deaf580f560e477f80520d4387.jpeg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Total Beatdown',
            description: [
                'Deals 290% damage to all enemies.',
                'Alters the power of all Dark shields on the board. When an attacking Hero casts the special, the shield becomes enhanced with +64% attack. When a defending Hero casts the special, the shields become weakened with -57% attack.',
                'All Holy allies get -24% mana generation for 3 turns. This effect cannot be cleansed.'
            ]
        },
        family: References.events.LEAGUE_OF_VILLAINS
    },
    khiona: {
        name: 'Khiona',
        attack: 739,
        defense: 708,
        health: 1336,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/khiona.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Bleeding Edge',
            description: [
                'Deals 372% damage to the target.',
                'The caster and nearby allies get +45% attack, and a further 20% increase every time they are hit during 3 turns.',
                "Element Link recovers 4% health for all Dark allies for 6 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    killhare: {
        name: 'Killhare',
        attack: 741,
        defense: 756,
        health: 1382,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/04/killhare.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Reckless Swing',
            description: [
                'Deals 300% damage to all enemies.',
                "All allies except the caster get -20% defense for 3 turns. This effect can't be dispelled."
            ]
        },
        family: References.seasonalEvents.SPRINGVALE
    },
    kunchen: {
        name: 'Kunchen',
        attack: 618,
        defense: 815,
        health: 1437,
        element: elements.dark.id,
        pseudonyms: ['kunch', 'kunchen'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/kunchen.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Power of Ajna',
            description: [
                'Recovers 42% health for all allies.',
                'All enemies get -34% defense for 4 turns.',
                'Dispels status ailments from all allies.',
                "Element Link gives all Dark allies +46% defense against Holy for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    malicna: {
        name: 'Malicna',
        attack: 766,
        defense: 741,
        health: 1339,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://static.wikia.nocookie.net/empiresandpuzzles/images/4/49/Malicna_-_Hero_Card.gif/revision/latest?cb=20210301071234',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.CLERIC.value,
        special: {
            name: 'Grimoire Skim',
            description: [
                'Deals 260% damage to the target and nearby enemies',
                '',
                'Randomly casts one of the following alternatives:',
                '',
                'Alternative 1:',
                'The target and nearby enemies get -54% defense for 3 turns.',
                'The target and nearby enemies get -54% attack for 3 turns.',
                'The target and nearby enemies get -24% mana generation for 3 turns.',
                '',
                'Alternative 2:',
                'The target and nearby enemies get -16% defense for 3 turns.',
                '',
                'Alternative 3:',
                'The target and nearby enemies get -16% attack for 3 turns.',
                '',
                "Element Link gives all Dark allies small amount of mana at the end of the turn for 4 turns. This effect can't be dispelled."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'marie-thérèse': {
        name: 'Marie-Thérèse',
        attack: 774,
        defense: 723,
        health: 1301,
        element: elements.dark.id,
        pseudonyms: ['marie', 'marie-therese', 'therese'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/marie-therese.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
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
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    'mok-arr': {
        name: 'Mok-Arr',
        attack: 741,
        defense: 688,
        health: 1400,
        element: elements.dark.id,
        pseudonyms: ['mok', 'mok-arr'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/mok-arr.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Black Tide',
            description: [
                'Deals 270% damage to all enemies.',
                'Deals 50% damage to all allies.',
                'Deals extra damage against Holy.',
                'All Dark allies and enemies are immune to this attack.'
            ]
        },
        family: References.atlantisFamilies.LAGOON
    },
    'myztero': {
        name: 'Myztero',
        attack: 772,
        defense: 725,
        health: 1332,
        element: elements.dark.id,
        pseudonyms: ['mysterio', 'myztero', 'mystero'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/09/myztero.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Absordium Deflectors',
            description: [
                'Deals 100% damage to all enemies.',
                'All status ailments memorized by the innate ability are cast to all enemies.'
            ]
        },
        family: References.events.TAVERN_OF_LEGENDS
    },
    obakan: {
        name: 'Obakan',
        attack: 762,
        defense: 638,
        health: 1328,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/obakan.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.BARBARIAN.value,
        special: {
            name: 'Cleave and Counter',
            description: [
                'Deal 260% damage to a single enemy and minor damage on nearby enemies.',
                'The caster counterattacks with 115% of the damage received for 4 turns.'
            ]
        },
        family: References.maps.SEASON_1
    },
    'obakan costume': {
        name: 'Obakan Costume',
        attack: 775,
        defense: 712,
        health: 1436,
        element: elements.dark.id,
        // TODO
        imgUrl: 'https://allheroes.eu/heroes/Obakan%20Costume_card.png',
        pseudonyms: ['obakan costume', 'costume obakan'],
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.ROGUE.value,
        special: {
            name: 'Oppose and Overthrow',
            description: [
                'Deals 182% damage to all enemies.',
                'The caster and nearby allies counterattack with 85% of the damage received for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    onyx: {
        name: 'Onyx',
        attack: 803,
        defense: 706,
        health: 1392,
        element: elements.dark.id,
        imgUrl: 'https://allheroes.eu/heroes/Onyx_card.png',
        stars: 5,
        manaSpeed: ManaSpeeds.CHARGE.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Crippling Claws',
            description: [
                'Special Skill has different effect when charged with 100%/200%/300% mana:',
                '',
                'x1 Mana Charge:',
                'Deals 270% damage to the target.',
                'The target is immune to new buffs for 3 turns.',
                'Dispels buffs from the target.',
                '',
                'x2 Mana Charge:',
                'Deals 310% damage to the target and nearby enemies.',
                'The target and nearby enemies are immune to new buffs for 4 turns.',
                'Dispels buffs from the target and nearby enemies.',
                '',
                'x3 Mana Charge:',
                'Deals 350% damage to all enemies.',
                'ALl enemies are immune to new buffs for 5 turns.',
                'Dispels buffs from all enemies.'
            ]
        },
        family: References.events.NINJA_TOWER
    },
    quintus: {
        name: 'Quintus',
        attack: 747,
        defense: 636,
        health: 1380,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/quintus.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Thunder Ultimatum',
            description: [
                'Deal 260% damage to all enemies'
            ]
        },
        family: References.maps.SEASON_1
    },
    'quintus costume': {
        name: 'Quintus Costume',
        attack: 804,
        defense: 663,
        health: 1472,
        element: elements.dark.id,
        pseudonyms: ['quintus costume', 'costume quintus'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/quintus-costume-electro-scientist.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.SLOW.value,
        classGrade: Classes.MONK.value,
        special: {
            name: 'Shock Ultimatum',
            description: [
                'Deals 235% damage to all enemies.',
                'All enemies get -34% attack for 4 turns.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    sargasso: {
        name: 'Captain Sargasso',
        attack: 729,
        defense: 708,
        health: 1334,
        element: elements.dark.id,
        pseudonyms: ['sargasso', 'captain sargasso'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sargasso.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Curse of Sargasso',
            description: [
                'Deals 355% damage to the target and minor damage to nearby enemies.',
                'The target and nearby enemies get -80% decrease for any healing received for 4 turns.'
            ]
        },
        family: References.events.PIRATES_OF_CORELLIA
    },
    sartana: {
        name: 'Sartana',
        attack: 694,
        defense: 700,
        health: 1382,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/sartana.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Deathstrike',
            description: [
                'Deal 452% damage to a single enemy and they receive 294 damage over 6 turns'
            ]
        },
        family: References.maps.SEASON_1
    },
    'sartana costume': {
        name: 'Sartana Costume',
        attack: 685,
        defense: 771,
        health: 1558,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/05/sartana-costume-monstress-of-descenthia-1.jpg',
        pseudonyms: ['sartana costume', 'costume sartana'],
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.FIGHTER.value,
        special: {
            name: 'Dreadstrike',
            description: [
                'Deals 532% damage to the target.'
            ]
        },
        family: References.events.THE_MASQUERADE
    },
    seshat: {
        name: 'Seshat',
        attack: 760,
        defense: 683,
        health: 1345,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/seshat.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.RANGER.value,
        special: {
            name: 'Conjuration Arrow',
            description: [
                'Deals 400% damage to the tarbet.',
                'Summons a Replicator Minion with 18% HP and 15% attack inherited from the caster. It generates a clone of itself every 3 gturns.',
                "Element link gives 4% mana generation for all Dark allies for 4 turns. This effect can't be dispelled.",
                'Dispels buffs from the target and nearby enemies'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    'thoth-amun': {
        name: 'Thoth-Amun',
        attack: 731,
        defense: 694,
        health: 1361,
        element: elements.dark.id,
        pseudonyms: ['thoth', 'thoth-amun'],
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/thoth-amun.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.FAST.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Skeletal Summon',
            description: [
                'Deal 215% damage to target and nearby enemies and summons an undead Minion with 20% HP and 15% attack inherited from the caster'
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
    },
    ursena: {
        name: 'Ursena',
        attack: 760,
        defense: 731,
        health: 1283,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/ursena.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.SORCERER.value,
        special: {
            name: 'Depth Blast',
            description: [
                'Deals 130% damage to all enemies.',
                'Deals 260% damage if the target has more than 50% health remaining.',
                "All allies reflect all status effects and 115% damage from enemies' Holy Special Skills back to the attacker for 4 turns.",
                'Deals extra damage against Holy.'
            ]
        },
        family: References.atlantisFamilies.ATLANTIS
    },
    victor: {
        name: 'Victor',
        attack: 778,
        defense: 671,
        health: 1347,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/03/victor.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.VERY_FAST.value,
        classGrade: Classes.WIZARD.value,
        special: {
            name: 'Night of Sorrow',
            description: [
                'Deals 211% damage to the target.',
                'The target receives 225 damage over 5 turns. If a target already has this effect, the duration will be refreshed and the damage will be increased by 300, up to 825 damage in total.',
                'The caster steals 61% of any healing applied to the target for 3 turns.',
                'All allies get +30% defense for 3 turns.'
            ]
        },
        family: References.seasonalEvents.RETURN_TO_MORLOVIA
    },
    zulag: {
        name: 'Zulag',
        attack: 669,
        defense: 780,
        health: 1433,
        element: elements.dark.id,
        imgUrl: 'https://sgephome.files.wordpress.com/2020/10/zulag.jpg',
        stars: 5,
        manaSpeed: ManaSpeeds.AVERAGE.value,
        classGrade: Classes.PALADIN.value,
        special: {
            name: 'Vast Ward',
            description: [
                'The caster and nearby allies regenerate 612 HP over 4 turns.',
                'The caster and nearby allies get +46% defense for 4 turns.',
                'The caster and nearby allies get +74% defense against Special Skills for 4 turns.',
                "Element Link summons a Dark Minion for all Dark allies with 5% HP and 5% attack inherited from the caster."
            ]
        },
        family: References.events.HERO_OF_THE_MONTH
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
    heroes
}