const _ = require('lodash');
const Classes = require('nlp/heroModel/Classes');

const Stats = require('nlp/heroModel/Stats');

const updateCosts = (foodRequired=0, ironRequired=0, emblemsRequired=0, { foodCost, ironCost, emblemCost } ) => ({
    foodRequired: foodRequired + foodCost,
    ironRequired: ironRequired + ironCost,
    emblemsRequired: emblemsRequired + emblemCost
});

const addStatX = (statName, percentageIncrease, { ... placeholder }, costs ) => {
    const baseStat = _.get(placeholder, `baseStats.${statName}`, 0);
    const amountIncrease = Math.floor(baseStat*percentageIncrease/100);
    return addStat(statName, amountIncrease, { ... placeholder }, costs);
};

const addStat = (statName, addAmount, { foodRequired, ironRequired, emblemsRequired, ... placeholder }, costs) => {
    const stat = _.get(placeholder, statName, 0) + addAmount;
    placeholder[statName] = stat;
    return {
        ... placeholder,
        ... updateCosts(foodRequired, ironRequired, emblemsRequired, costs)
    };
};

const createCosts = (foodCost, ironCost, emblemCost) => ({
    foodCost,
    ironCost,
    emblemCost
});

const fiveStarCosts = [
    createCosts(109000, 86000, 65),
    createCosts(132000, 105000, 50),
    createCosts(187000, 148000, 50),
    createCosts(337000, 266000, 65),
    createCosts(296000, 235000, 50),
    createCosts(351000, 279000, 50),
    createCosts(566000, 447000, 65),
    createCosts(483000, 389000, 125),
    createCosts(514000, 409000, 50),
    createCosts(598000, 481000, 125),
    createCosts(624000, 496000, 50),
    createCosts(948000, 748000, 65),
    createCosts(733000, 582000, 50),
    createCosts(787000, 626000, 50),
    createCosts(1177000, 928000, 65),
    createCosts(897000, 713000, 50),
    createCosts(951000, 756000, 50),
    createCosts(1006000, 799000, 50),
    createCosts(1115000, 897000, 125),
    createCosts(1515000, 1172000, 250)
];

const fourStarCosts = [
    createCosts(39240, 31392, 30),
    createCosts(47737, 38188, 15),
    createCosts(67392, 53913, 15),
    createCosts(121000, 97315, 30),
    createCosts(106000, 85363, 15),
    createCosts(126000, 101000, 15),
    createCosts(204000, 163000, 30),
    createCosts(174000, 139000, 40),
    createCosts(185000, 148000, 15),
    createCosts(215000, 172000, 40),
    createCosts(224000, 179000, 15),
    createCosts(341000, 273000, 30),
    createCosts(263000, 211000, 15),
    createCosts(283000, 226000, 15),
    createCosts(423000, 339000, 30),
    createCosts(322000, 258000, 15),
    createCosts(342000, 274000, 15),
    createCosts(362000, 289000, 15),
    createCosts(401000, 321000, 40),
    createCosts(545000, 436000, 70)
];

const threeStarCosts = [
    createCosts(15696, 12556, 14),
    createCosts(19094, 15274, 7),
    createCosts(26956, 21564, 7),
    createCosts(48657, 38923, 14),
    createCosts(42681, 34143, 7),
    createCosts(50544, 40432, 7),
    createCosts(81619, 65291, 14),
    createCosts(69667, 55731, 17),
    createCosts(74131, 59301, 7),
    createCosts(86198, 68955, 17),
    createCosts(89856, 71880, 7),
    createCosts(136000, 109000, 14),
    createCosts(105000, 84459, 7),
    createCosts(113000, 90748, 7),
    createCosts(169000, 135000, 14),
    createCosts(129000, 103000, 7),
    createCosts(137000, 109000, 7),
    createCosts(144000, 115000, 7),
    createCosts(160000, 128000, 17),
    createCosts(218000, 174000, 35)
];


const rogueSwordPath = costs => ([
    data => addStat(Stats.EVADE, 4, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.EVADE, 4, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.EVADE, 4, data, costs[6]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.EVADE, 4, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.EVADE, 4, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[18]),
    data => addStat(Stats.CRITICAL_BONUS, 4, data, costs[19])
]);

const rogueShieldPath = costs => ([
    data => addStat(Stats.EVADE, 4, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.EVADE, 4, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.EVADE, 4, data, costs[6]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.EVADE, 4, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.EVADE, 4, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[18]),
    data => addStat(Stats.CRITICAL_BONUS, 4, data, costs[19])
]);

const druidSwordPath = costs => ([
    data => addStat(Stats.COMPANION, 3, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.COMPANION, 3, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.ATTACK, 15, data, costs[5]),
    data => addStat(Stats.COMPANION, 3, data, costs[6]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    // 3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.COMPANION, 3, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.COMPANION, 3, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const druidShieldPath = costs => ([
    data => addStat(Stats.COMPANION, 3, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.COMPANION, 3, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.COMPANION, 3, data, costs[6]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.COMPANION, 3, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.COMPANION, 3, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const barbarianSwordPath = costs => ([
    data => addStat(Stats.WOUND, 6, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.WOUND, 6, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.WOUND, 6, data, costs[6]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.WOUND, 6, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.WOUND, 6, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.HEALTH, 4, data, costs[19])
]);

const barbarianShieldPath = costs => ([
    data => addStat(Stats.WOUND, 6, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.WOUND, 6, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.WOUND, 6, data, costs[6]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.WOUND, 6, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.WOUND, 6, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[18]),
    // +4%
    data => addStatX(Stats.HEALTH, 4, data, costs[19])
]);

const paladinSwordPath = costs => ([
    data => addStat(Stats.PROTECT, 5, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.PROTECT, 5, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.ATTACK, 15, data, costs[5]),
    data => addStat(Stats.PROTECT, 5, data, costs[6]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.PROTECT, 5, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.PROTECT, 5, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.DEFENSE, 4, data, costs[19])
]);

const paladinShieldPath = costs => ([
    data => addStat(Stats.PROTECT, 5, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.PROTECT, 5, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.PROTECT, 5, data, costs[6]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    // +3%
    data => addStat(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.PROTECT, 5, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.PROTECT, 5, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.DEFENSE, 4, data, costs[19])
]);

const wizardSwordPath = costs => ([
    data => addStat(Stats.JINX, 5, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.JINX, 5, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.JINX, 5, data, costs[6]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.JINX, 5, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.JINX, 5, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.ATTACK, 4, data, costs[19])
]);

const wizardShieldPath = costs => ([
    data => addStat(Stats.JINX, 5, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.JINX, 5, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.JINX, 5, data, costs[6]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.JINX, 5, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.JINX, 5, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.ATTACK, 4, data, costs[19])
]);

const monkSwordPath = costs => ([
    data => addStat(Stats.WITHSTAND, 6, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.ATTACK, 15, data, costs[5]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[6]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const monkShieldPath = costs => ([
    data => addStat(Stats.WITHSTAND, 6, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[6]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.WITHSTAND, 6, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const sorcererSwordPath = costs => ([
    data => addStat(Stats.DELAY, 3, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.DELAY, 3, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.DELAY, 3, data, costs[6]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.DELAY, 3, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.DELAY, 3, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const sorcererShieldPath = costs => ([
    data => addStat(Stats.DELAY, 3, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.DELAY, 3, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.ATTACK, 15, data, costs[5]),
    data => addStat(Stats.DELAY, 3, data, costs[6]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.DELAY, 3, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.DELAY, 3, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[18]),
    data => addStat(Stats.MANA_BONUS, 4, data, costs[19])
]);

const fighterSwordPath = costs => ([
    data => addStat(Stats.REVIVE, 6, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.REVIVE, 6, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.ATTACK, 15, data, costs[5]),
    data => addStat(Stats.REVIVE, 6, data, costs[6]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.REVIVE, 6, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.REVIVE, 6, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.ATTACK, 4, data, costs[19])
]);

const fighterShieldPath = costs => ([
    data => addStat(Stats.REVIVE, 6, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.REVIVE, 6, data, costs[3]),
    data => addStat(Stats.DEFENSE, 18, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.REVIVE, 6, data, costs[6]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[7]),
    data => addStat(Stats.DEFENSE, 18, data, costs[8]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.REVIVE, 6, data, costs[11]),
    data => addStat(Stats.DEFENSE, 18, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.REVIVE, 6, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.DEFENSE, 18, data, costs[17]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[18]),
    // +4%
    data => addStatX(Stats.ATTACK, 4, data, costs[19])
]);

const rangerSwordPath = costs => ([
    data => addStat(Stats.PIERCE, 5, data, costs[0]),
    data => addStat(Stats.ATTACK, 15, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.PIERCE, 5, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.HEALTH, 36, data, costs[5]),
    data => addStat(Stats.PIERCE, 5, data, costs[6]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.ATTACK, 15, data, costs[10]),
    data => addStat(Stats.PIERCE, 5, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.HEALTH, 36, data, costs[13]),
    data => addStat(Stats.PIERCE, 5, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.ATTACK, 15, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    data => addStat(Stats.HEALING_BONUS, 2, data, costs[18]),
    data => addStat(Stats.CRITICAL_BONUS, 4, data, costs[19])
]);

const rangerShieldPath = costs => ([
    data => addStat(Stats.PIERCE, 5, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.HEALTH, 36, data, costs[2]),
    data => addStat(Stats.PIERCE, 5, data, costs[3]),
    data => addStat(Stats.HEALTH, 36, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.PIERCE, 5, data, costs[6]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.PIERCE, 5, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.PIERCE, 5, data, costs[14]),
    data => addStat(Stats.HEALTH, 36, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.ATTACK, 15, data, costs[17]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[18]),
    data => addStat(Stats.CRITICAL_BONUS, 4, data, costs[19])
]);

const clericSwordPath = costs => ([
    data => addStat(Stats.MANASHIELD, 7, data, costs[0]),
    data => addStat(Stats.DEFENSE, 18, data, costs[1]),
    data => addStat(Stats.ATTACK, 15, data, costs[2]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[6]),
    // +3%
    data => addStatX(Stats.ATTACK, 3, data, costs[7]),
    data => addStat(Stats.HEALTH, 36, data, costs[8]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.HEALTH, 36, data, costs[10]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[11]),
    data => addStat(Stats.HEALTH, 36, data, costs[12]),
    data => addStat(Stats.ATTACK, 15, data, costs[13]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[14]),
    data => addStat(Stats.ATTACK, 15, data, costs[15]),
    data => addStat(Stats.DEFENSE, 18, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    data => addStat(Stats.CRITICAL_BONUS, 2, data, costs[18]),
    data => addStat(Stats.HEALING_BONUS, 4, data, costs[19])
]);

const clericShieldPath = costs => ([
    data => addStat(Stats.MANASHIELD, 7, data, costs[0]),
    data => addStat(Stats.HEALTH, 36, data, costs[1]),
    data => addStat(Stats.DEFENSE, 18, data, costs[2]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[3]),
    data => addStat(Stats.ATTACK, 15, data, costs[4]),
    data => addStat(Stats.DEFENSE, 18, data, costs[5]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[6]),
    // +3%
    data => addStatX(Stats.DEFENSE, 3, data, costs[7]),
    data => addStat(Stats.ATTACK, 15, data, costs[8]),
    // +3%
    data => addStatX(Stats.HEALTH, 3, data, costs[9]),
    data => addStat(Stats.DEFENSE, 18, data, costs[10]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[11]),
    data => addStat(Stats.ATTACK, 15, data, costs[12]),
    data => addStat(Stats.DEFENSE, 18, data, costs[13]),
    data => addStat(Stats.MANASHIELD, 7, data, costs[14]),
    data => addStat(Stats.DEFENSE, 18, data, costs[15]),
    data => addStat(Stats.HEALTH, 36, data, costs[16]),
    data => addStat(Stats.HEALTH, 36, data, costs[17]),
    data => addStat(Stats.MANA_BONUS, 2, data, costs[18]),
    data => addStat(Stats.HEALING_BONUS, 4, data, costs[19])
]);

const classToPathsMap = {
    [Classes.BARBARIAN]: {
        swordPath: barbarianSwordPath,
        shieldPath: barbarianShieldPath
    },
    [Classes.CLERIC]: {
        swordPath: clericSwordPath,
        shieldPath: clericShieldPath
    },
    [Classes.DRUID]: {
        swordPath: druidSwordPath,
        shieldPath: druidShieldPath
    },
    [Classes.FIGHTER]: {
        swordPath: fighterSwordPath,
        shieldPath: fighterShieldPath
    },
    [Classes.MONK]: {
        swordPath: monkSwordPath,
        shieldPath: monkShieldPath
    },
    [Classes.RANGER]: {
        swordPath: rangerSwordPath,
        shieldPath: rangerShieldPath
    },
    [Classes.ROGUE]: {
        swordPath: rogueSwordPath,
        shieldPath: rogueShieldPath
    },
    [Classes.PALADIN]: {
        swordPath: paladinSwordPath,
        shieldPath: paladinShieldPath
    },
    [Classes.SORCERER]: {
        swordPath: sorcererSwordPath,
        shieldPath: sorcererShieldPath
    },
    [Classes.WIZARD]: {
        swordPath: wizardSwordPath,
        shieldPath: wizardShieldPath
    }
}

const starToCostsMap = {
    3: threeStarCosts,
    4: fourStarCosts,
    5: fiveStarCosts
};

const calculateChanges = ({ attack, defense, health }, sequence) => {
    let data = {
        attack,
        defense,
        health,
        baseStats: {
            attack,
            defense,
            health
        }
    };
    sequence.forEach(action => {
        data = action(data);
    });
    delete data.baseStats;
    return data;
};

const calculate = ({ attack, defense, health }, star, classGrade) => {
    const costs = starToCostsMap[star];
    const { swordPath, shieldPath } = classToPathsMap[classGrade];
    return {
        swordPath: calculateChanges({ attack, defense, health }, swordPath(costs)),
        shieldPath: calculateChanges({ attack, defense, health }, shieldPath(costs))
    }
}

module.exports = {
    itemEntity: 'talent',
    pseudonyms: ['talent', 'talents', 'emblem', 'emblems'],
    calculate
};