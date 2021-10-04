const References = require('nlp/entities/references');

module.exports = {
    itemEntity: 'reference',
    items: {
        'Alchemy Lab': {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/8/8/8845ba51af059c81c49ca48691adccfe4362e07f.jpeg',
            type: 'building',
            pseudonyms: ['alchemy lab', 'al']
        },
        [References.realms.ALFHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/3/3/33bd93b43fdb585cabbe48d4d8f66b7ab33db873.jpeg',
            type: 'realm',
            pseudonmys: ['alfheim']
        },
        [References.realms.ASGARD]: {
            // TODO imgUrl
            type: 'realm',
            pseudonyms: ['asgard']
        },
        [References.maps.SEASON_2]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/9/5/95aefdb740a434637af8c9d0cad735a6f9367ac7.jpeg',
            type: 'map',
            pseudonyms: ['atlantis', 'season 2', 'season ii']
        },
        [References.atlantisFamilies.ATLANTIS]: {
            pseudonyms: ['atlantis family']
        },
        [References.atlantisFamilies.LAGOON]: {
            pseudonyms: ['lagoon', 'lagoon family']
        },
        [References.atlantisFamilies.SAKURA]: {
            pseudonyms: ['sakura', 'sakura family']
        },
        'Crafting': {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/d/a/daa5e414cbad47504c5c2d928fb5d65aba878efe.png',
            type: 'recipe',
            pseudonyms: ['crafting', 'forge']
        },
        [References.events.FABLES_OF_GRIMFOREST]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/4/1/411b2d4205f2c9f5c2f290937b12639b61746250.jpeg',
            type: 'event',
            pseudonyms: ['fables', 'grimforest', 'fables of grimforest']
        },
        [References.events.STARFALL_CIRCUS]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/b/d/bdd56697def14c9221bffde49e76b887d1c82c4a.jpeg',
            type: 'event',
            pseudonyms: ['starfall', 'circus', 'starfall circus']
        },
        [References.events.GUARDIANS_OF_TELTOC]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/5/6/56c7b95e43cb9567730e49031eb0c9cff8eba654.jpeg',
            type: 'event',
            pseudonyms: ['guardians', 'teltoc', 'guardians of teltoc']
        },
        [References.realms.HELHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/9/9/99f342fca59686625e7cdda5122ef12086a54525.jpeg',
            type: 'realm',
            pseudonyms: ['helheim']
        },
        'Hero Academy': {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/optimized/3X/f/0/f05f1d0b32f5a25d0ef11b39ec3651f4a3ba84d2_2_1035x637.jpeg',
            type: 'building',
            pseudonyms: ['ha', 'hero academy']
        },
        [References.events.HERO_OF_THE_MONTH]: {
            type: 'event',
            pseudonyms: ['hotm', 'hero of the month', 'heroes of the month']
        },
        "Hunter's Lodge": {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/6/4/64f24fcc2ef551be14f1001a1980a0bc4ddd304e.jpeg',
            type: 'building',
            pseudonyms: ['hl', "hunter's lodge", 'hunter’s lodge', 'hunters lodge', 'lodge']
        },
        [References.realms.JOTUNHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/3/b/3bf101d9b8890092e5502cfad0805ca141115796.jpeg',
            type: 'realm',
            pseudonyms: ['jotunheim']
        },
        [References.events.KNIGHTS_OF_AVALON]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/8/2/827ba5afb02b3fba09dc3bb3e0dd0109ef0fb027.png',
            type: 'event',
            pseudonyms: ['avalon', 'knights', 'knights of avalon']
        },
        [References.events.LEAGUE_OF_VILLAINS]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/3/73dd6e97228bead43c7cb3a60b7e09c709464693.jpeg',
            type: 'event',
            pseudonyms: ['league', 'villans', 'villains', 'league of villains', 'league of villans']
        },
        [References.realms.MIDGARD]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/0/f/0f246e87d2933fc0b997eb1bbf6f218bc49b693b.jpeg',
            type: 'realm',
            pseudonyms: ['midgard']
        },
        [References.realms.MUSPELHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/5/d/5dcaa7986e9e2aea2299d83f7ebbf5bd8d8c0444.jpeg',
            type: 'realm',
            pseudonyms: ['muspelheim']
        },
        [References.realms.NIFLHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/a/b/ab0d0b450669eaed147c947927afeae840903317.jpeg',
            type: 'realm',
            pseudonyms: ['niflheim']
        },
        [References.events.NINJA_TOWER]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/6/2/6273571e6da828e7b154182ef30ea00020cb5754.jpeg',
            type: 'event',
            pseudonyms: ['ninja tower', 'tower', 'ninja']
        },
        [References.events.PATH_OF_VALOR]: {
            imgUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cdhuZWcMagkLVpQbvN2j2qIRAT1-4zNwhaqA0JMyCOh6pIFhCt6NvoBttbjPjsHq1qC_hGn_VmCffp2KJ_MCVbkGd6HxzfLSZKzae49he7oH1F6KQFXAKjR1Cdd9rh1V-duW_QvdYu6IlKG64dHPPf=w1000-no-tmp.jpg',
            type: 'event',
            pseudonyms: ['pov', 'path of valor', 'path of valour']
        },
        [References.events.PIRATES_OF_CORELLIA]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/0/4/043f379e36381a267b52edd5f1ea79b6369e8e45.png',
            type: 'event',
            pseudonyms: ['pirates', 'pirates of coreliia', 'corellia']
        },
        [References.seasonalEvents.RETURN_TO_MORLOVIA]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/5/f/5f4d9e062b0f42f4b82f0377a83fbd6809c8924a.jpeg',
            type: 'event',
            pseudonyms: ['fall', 'autumn', 'morlovia', 'return to morlovia', 'vampires']
        },
        [References.events.RIDDLES_OF_WONDERLAND]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/6/266b60414d70ad7a4b1072bc4f3664a83e4ea6ab.png',
            type: 'event',
            pseudonyms: ['wonderland', 'riddles', 'riddles of wonderland']
        },
        'Runic Rocks': {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/d/9/d959a12be44451bd4b537276c09aeb2f2a91da6d.jpeg',
            type: 'event',
            pseudonyms: ['runic rocks']
        },
        [References.maps.SEASON_1]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/4/c/4c7c27adf53b973cb3b5fc3a8101e24b329df0a2.jpeg',
            type: 'map',
            pseudonyms: ['season 1', 'season i']
        },
        [References.maps.SEASON_2_AVATARS]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/d/2/d20b399a41b8bc38278c7562ebceb115a1c58a53.jpeg',
            type: 'map',
            pseudonyms: ['season 2 avatars', 'avatars 2']
        },
        [References.maps.SEASON_3_AVATARS]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/c/b/cb53e2b3677224ab9d229203a44f6abae810c99f.jpeg',
            type: 'map',
            pseudonyms: ['season 3 avatars', 'avatars 3']
        },
        [References.maps.SEASON_4]: {
            // TODO
            imgUrl: 'https://i1.wp.com/hwca.ca/wp-content/uploads/2018/06/20180510143149-Under-Construction-Sign.png?resize=1024%2C483&ssl=1',
            type: 'map',
            pseudonyms: ['voyagers of the underwild', 'voyagers', 'underwild', 'season 4', 'season iv']
        },
        [References.seasonalEvents.SPRINGVALE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/5/25516f3ed75926713e0ab17582b3df58615edee1.jpeg',
            type: 'seasonal event',
            pseudonyms: ['spring', 'rabbits', 'springvale', 'easter']
        },
        [References.seasonalEvents.SAND_EMPIRE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/6/1/61ad37d07fb12db8d8899fc335e2c322391df7ac.jpeg',
            type: 'seasonal event',
            pseudonyms: ['summer', 'sand', 'sand empire']
        },
        [References.seasonalEvents.SANTAS_CHALLENGE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/9/a/9a089a0066dd984e35ab3eb5c7497e065f76ad8c.jpeg',
            type: 'seasonal event',
            pseudonyms: ['winter', 'christmas', 'xmas', 'x-mas', "santa's challenge", 'santa’s challenge']
        },
        [References.realms.SVARTALFHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/1/5/152bed11ddf00185ea078ff7066ec98ae2771f1e.jpeg',
            type: 'realm',
            pseudonyms: ['svartalfheim', 'svartlfheim', 'svartlheim']
        },
        [References.events.TAVERN_OF_LEGENDS]: {
            // TODO imgUrl
            type: 'event',
            pseudonyms: ['tavern', 'tavern of legends']
        },
        [References.events.THE_MASQUERADE]: {
            imgUrl: 'The Masquerade',
            type: 'event',
            pseudonyms: ['the masquerade', 'masquerade', 'costumes', 'costume event', 'costumes event']
        },
        'Titan Loot': {
            imgUrl: 'https://cdn.discordapp.com/attachments/507404166323372042/790363689819045939/titan-loot-tiers.jpg',
            type: 'reference',
            pseudonyms: ['titan loot', 'loot tiers']
        },
        [References.maps.SEASON_3]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/f/1/f167ec8ac77b52c31b24f3d3e78665670f8e03c0.jpeg',
            type: 'map',
            pseudonyms: ['valhalla', 'season 3', 'season iii']
        },
        [References.realms.VANAHEIM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/f/2/f202e32acdb218da921e0125c711ba0e19961196.jpeg',
            type: 'realm',
            pseudonyms: ['vanaheim']
        },
        [References.events.TRIALS_OF_DECIMATION]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/f/8/f8763ee4023128355f1b589c6a716e90802dcaa8.png',
            type: 'event',
            pseudonyms: ['trials of decimation', 'decimation trials']
        },
        [References.events.TRIALS_OF_FORTITUDE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/e/7e02f8239e200f6d9df6def5f7a78e85ccef429a.png',
            type: 'event',
            pseudonyms: ['trials of fortitude', 'fortitude trials']
        },
        [References.events.TRIALS_OF_JUSTICE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/4/c/4c33d10199c9f9c4fc62df42ab1c722ec133f492.png',
            type: 'event',
            pseudonyms: ['trials of justice', 'justice trials']
        },
        [References.events.TRIALS_OF_MYSTICISM]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/9/29a48ac6a057e0003d698d3e32acd0542512e560.png',
            type: 'event',
            pseudonyms: ['trials of mysticism', 'mysticism trials']
        },
        [References.events.TRIALS_OF_NATURE]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/3/c/3c15032393537b675ffbf7c07c7d59f951ebf391.png',
            type: 'event',
            pseudonyms: ['trials of nature', 'nature trials']
        },
        [References.events.TRIALS_OF_PIETY]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/a/3/a36cd8ed5e3fdc74a776d614f2179a36ed9d744e.png',
            type: 'event',
            pseudonyms: ['trials of piety', 'piety trials']
        },
        [References.events.TRIALS_OF_SERENITY]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/5/a/5aeba0ae35e2b401cd1c0908669216296b5f17c1.png',
            type: 'event',
            pseudonyms: ['trials of serenity', 'serenity trials']
        },
        [References.events.TRIALS_OF_SHADOWS]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/0/b/0bfd10ea78df67c918e36683c829ca585a130d70.png',
            type: 'event',
            pseudonyms: ['trials of shadows', 'shadows trials']
        },
        [References.events.TRIALS_OF_STRENGTH]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/2/2/22456d0bf866af332018ba6e2493ed2e5dd548b0.png',
            type: 'event',
            pseudonyms: ['trials of strength', 'strength trials']
        },
        [References.events.TRIALS_OF_SURVIVAL]: {
            imgUrl: 'https://aws1.discourse-cdn.com/smallgiantgames/original/3X/f/1/f1d9f707160c772566fff030dead39d7d8d05c90.png',
            type: 'event',
            pseudonyms: ['trials of survival', 'survival trials']
        },
    }
};