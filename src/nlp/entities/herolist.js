const ManaSpeeds = require('nlp/entities/ManaSpeeds');

const blue3StarHeroes = {
    gato: {
        factoids: [
            'Fast mana, hard attack with nethershield to prevent status ailments'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Ice-Gato.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    graymane: {
        pseudonyms: ['greymane', 'graymane'],
        factoids: [
            'Average mana, hard bite with some self-healing'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204440.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    gunnar: {
        name: 'Gunnar',
        factoids: [
            'Average mana, excellent defense buff. Spirit link to distribute damage'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Ice-Gunnar.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    karil: {
        factoids: [
            'Average mana, hits 3, not really useful'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204426.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },    
    ulmer: {
        name: 'Ulmer',
        factoids: [
            'Slow mana, all targets defense dropper. Useful for everything'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204553.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW
    },            
    valen: {
        name: 'Valen',
        factoids: [
            'Fast mana, single target defense dropper. Useful for everything'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204415.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    }
};

const yellow3StarHeroes = {
    arman: {
        factoids: [
            'Slow mana, cures status ailments on self, light hits to all with damage over time and reduces enemy healing'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Arman.png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW
    },    
    bane: {
        factoids: [
            'Fast mana, hard attack with blindness. The first 3* hero everyone gets and still one of the best.'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Bane.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    'dawa': {
        factoids: [
            'Average mana, hits 3, not really useful'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Dawa.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    'gan ju': {
        pseudonyms: ['gan', 'ju', 'gan ju', 'gan-ju'],
        factoids: [
            'Fast mana, good hit and reduces mana of the affected target'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Gan-Ju.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },   
    melia: {
        factoids: [
            'Fast mana, light hits on all but critical buff increases chance of double damage'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Melia.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },         
    kailani: {
        pseudonyms: ['kailani', 'kalani'],
        factoids: [
            'Average mana, excellent defense buff. Spirit link to distribute damage'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Holy-Kailani%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
};

const green3StarHeroes = {
    belith: {
        factoids: [
            'Average mana, heals all, dispels enemy buffs. Best 3* healer.'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212224%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },    
    berden: {
        factoids: [
            'Fast mana, decent hit and debuffs enemy attack'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212155%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    brienne: {
        factoids: [
            'Average mana, buffs attack of entire team and increases as you get hit. One of the best 3* utility heroes.'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Brienne.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    carver: {
        factoids: [
            'Average mana, hits all lightly, and reduces mana slightly'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Hel-8.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },            
    'friar tuck': {
        pseudonyms: ['friar', 'friar tuck'],
        factoids: [
            'Average mana, heals himself and neighbors, speeds up mana generation of himself and neighbors'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170629-134417.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    hisan: {
        pseudonyms: ['hissan', 'hisan'],
        factoids: [
            'Fast mana, cures status ailments from self, hard hit with damage over time and blocks all healing on the target'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Hisan.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },   
    ishtak: {
        pseudonyms: ['ishtak', 'ishhtak'],
        factoids: [
            'Average mana, average hit on target and neighbors'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-212203%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    mnesseus: {
        pseudonyms: ['mneusseus', 'menusseus', 'mneussus', 'menussus'],
        factoids: [
            'Fast mana, hard hit and dispells buffs from all enemies'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Mnesseus.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },    
    muggy: {
        factoids: [
            'Fast mana, resurrects team member as a muggy with some reduced stats but a hard special hit. High attack stat for a 3* hero.'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Nature-Muggy.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    }
};

const red3StarHeroes = {
    azar: {
        factoids: [
            'Fast mana, hard hit on one and reduces its mana'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193931%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },    
    bauchan: {
        pseudonyms: ['bauchen', 'bauchan'],
        factoids: [
            'Average mana, does some damage to all enemies, reduces mana on enemies and increases mana generation of the team'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Bauchan.jpg',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    hawkmoon: {
        factoids: [
            'Average mana, decent heal on all'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193953%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    jahangir: {
        pseudonyms: ['jahangar', 'jahangir'],
        factoids: [
            'Slow mana, medium damage to all enemies with damage over time'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170524-192906%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW
    },    
    namahage: {
        factoids: [
            'Fast mana, hard hit to target and buffs his attack. The attack increases as he is hit. Similar to Brienne'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Namahage.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },    
    nashgar: {
        factoids: [
            'Fast mana, hard hit to one with damage over time'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-193903%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    rudolph: {
        factoids: [
            'Fast mana, hard hit, reduces enemy mana and summons a minion which hits and protects'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Rudolph.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    'squire wabbit': {
        pseudonyms: ['squire-rabbit', 'squire-wabbit', 'squire', 'wabbit'],
        factoids: [
            'Fast mana, super hard hit but his own defense drops'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Fire-Squire-Rabbit.png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    }
};

const purple3StarHeroes = {
    balthazar: {
        factoids: [
            'fast mana, hard hit'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221520%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },
    chochin: {
        pseudonyms: ['cochin', 'chochin'],
        factoids: [
            'Average mana, medium damage to 3, slows down mana generation'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Chochin.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    'gill-ra': {
        pseudonyms: ['gil-ra', 'gilra', 'gill-ra', 'gillra'],
        factoids: [
            'average mana, defense dropper on all, attack debuffer on all, cleanser'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Gil-Ra.png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    oberon: {
        factoids: [
            'Slow mana, average damage and some damage over time with poison'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221508%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.SLOW
    },
    prisca: {
        factoids: [
            'Average mana, medium damage and steals some dealt damage'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221418%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    renfeld: {
        pseudonyms: ['renfeld', 'renfield'],
        factoids: [
            'Average mana, medium damage and steals some dealt damage'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221500%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    tyrum: {
        factoids: [
            'Fast mana, average damage, dispells buffs from all enemies'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-221559%20(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.FAST
    },                    
    vlad: {
        factoids: [
            'Very fast mana, light damage that increases if the target is already affected, steals healing'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Dark-Vlad_(1).png',
        stars: 3,
        manaSpeed: ManaSpeeds.VERY_FAST
    }
};

const blue4StarHeroes = {
    agwe: {
        factoids: [
            'Average mana, '
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Agwe.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    boril: {
        factoids: [
            'Average mana, tanky, perfect riposte makes him and neighbours hit back hard at enemies and bosses/titans who also hit hard'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Boril%20(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    'captain of diamonds': {
        pseudonyms: ['captain of diamonds', 'diamonds'],
        factoids: [
            'Fast mana, destroys all minions protecting a target and hits a random new target for each destroyed minion'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Captain-of-Diamonds.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    grimm: {
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204515.png',
        factoids: [
            'Average mana, defense dropper with high attack. Very useful hero. Emblem worthy. Multiples worthy'
        ],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },        
    kiril: {
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Kiril.png',
        factoids: [
            'Average mana, medium healer with free dragon banner - increased attack and defense. Emblem worthy, Multiples worthy'
        ],
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    sonya: {
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Screenshot_20170529-204507.png',
        factoids: [
            'Fast mana, dispeller, decent hit, can tank at lower levels. Multiples worthy. Emblems worthy if you do not have many 5 star blues'
        ],
        stars: 4,
        manaSpeed: ManaSpeeds.FAST
    },
    triton: {
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Triton.png',
        factoids: [
            'Fast mana, decent hit, increases healing. Multiples worthy. Emblems worthy if you do not have many 5 star blues. Pairs well with Kiril and other healers'
        ],
        stars: 4,
        manaSpeed: ManaSpeeds.FAST
    },
    valeria: {
        factoids: [
            'Very fast mana, medium damage to one with additional damage over time that increases if the target is already affected. Steals healing'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Ice-Valeria_(1).png',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST
    }
};

const yellow4StarHeroes = {
    chao: {
        factoids: [
            'Fast mana, medium damage with mana reduction. Decent for a few multiples'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Chao.png',
        stars: 4,
        manaSpeed: ManaSpeeds.FAST
    },
    gretel: {
        factoids: [
            'Average mana, light-medium damage to target and neighbours. Mana control on the target. Mana control is where she shines. Needs emblems when attacking 5* teams and beyond 9* titans'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Gretel.png',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    'hu tao': {
        pseudonyms: ['hu', 'hu tao', 'hu-tao'],
        factoids: [
            'Slow mana, medium damage to all with blindness to all'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Holy-Hu-Tao%20(1).jpg',
        stars: 4,
        manaSpeed: ManaSpeeds.SLOW
    },
    jackal: {
        factoids: [
            'Very fast mana, high attack stat, elemental holy defense drop. Excellent for titans, raids and wars. Emblem worthy, multiples worthy'
        ],
        imgUrl: '',
        stars: 4,
        manaSpeed: ManaSpeeds.VERY_FAST
    },         
    'li xiu': {
        pseudonyms: ['li', 'li xiu', 'li-xiu'],
        factoids: [
            'Average mana, medium damage to all with mana reduction to all. Decent for a few multiples. Decent 4* tank'
        ],
        imgUrl: '',
        stars: 4,
        manaSpeed: ManaSpeeds.AVERAGE
    },
    'wu kong': {
        pseudonyms: ['wu', 'wu kong', 'wu-kong'],
        factoids: [
            'SLOW '
        ]
    }
};

const green4StarHeroes = {
    caedmon: {
        pseudonyms: ['caed', 'caedmon']
    }, 
    gaedirus: {
        pseudonyms: ['gaed', 'gad', 'gaedirus', 'gadeirus']
    },
    hansel: {
    },
    "jack o'hare": {
        pseudonyms: ['jack', "jack o'hare", 'jack ohare', 'jack hare']
    },    
    kashrek: {
        pseudonyms: ['kash', 'kashrek']
    },
    'little john': {
        pseudonyms: ['lj', 'little john', 'little-john']
    },          
    melendor: {
        pseudonyms: ['mel', 'melendor', 'gandalf']
    },
};

const red4StarHeroes = {
    boldtusk: {
        pseudonyms: ['boldtusk', ]
    },
    colen: {
    },
    gormek: {
    },
    kelile: {
        pseudonyms: ['kelile', 'kellile']
    },
    lancelot: {
    },                    
    scarlett: {
        pseudonyms: ['scarlet', 'scarlett']
    },
    sumitomo: {
    },    
    wilbur: {
    }
};

const purple4StarHeroes = {
    boomer: {
        factoids: [
            'Average mana, medium damage to all, caster and nearby allies get defense buff vs holy attacks'
        ],
        imgUrl: 'https://7ddgaming.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-Dark-Boomer_(1).jpg'
    },
    cyprian: {
    },
    gafar: {
        pseudonyms: ['gafar', 'gaffar']
    },
    merlin: {
    },
    proteus: {
    },    
    rigard: {
    },
    sabina: {
    },    
    tibertus: {
        pseudonyms: ['burt', 'tibs', 'tibertus']
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
    ...purple4StarHeroes
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

    heroes
}