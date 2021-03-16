const { NlpManager } = require('node-nlp');
const { heroes } = require('scripts/herolist');
const referencesWrapper = require('scripts/referencelist');
const AllianceMembers = require('nlp/entities/AllianceMembers');
const elements = require('nlp/entities/elements');
const cyber88 = require('nlp/entities/cyber88');
const grade = require('nlp/entities/grade');
const special = require('nlp/entities/special');
const talent = require('nlp/entities/talent');
const Calendar = require('nlp/entities/Calendar');
const ManaSpeeds = require('nlp/entities/ManaSpeeds');
const Classes = require('nlp/entities/Classes');

const showHero = require('nlp/intents/showHero');
const listHeroes = require('nlp/intents/listHeroes');
const showReference = require('nlp/intents/showReference');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const showHeroGrading = require('nlp/intents/showHeroGrading');
const showHeroTalent = require('nlp/intents/showHeroTalent');
const showCalendar = require('nlp/intents/showCalendar');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const farmItem = require('nlp/intents/farmItem');
const thanksCyber = require('nlp/intents/thanksCyber');
const checkCyberHealth = require('nlp/intents/checkCyberHealth');

const manager = new NlpManager({ languages: ['en'] });

Object.keys(heroes).forEach(heroKey => {
  const hero = heroes[heroKey];
  manager.addNamedEntityText(
    'hero',
    heroKey,
    ['en'],
    hero.pseudonyms != null ? hero.pseudonyms : [heroKey]
  );
});

Object.keys(ManaSpeeds).forEach(manaSpeedKey => {
  const manaSpeed = ManaSpeeds[manaSpeedKey];
  manager.addNamedEntityText(
    'manaSpeed',
    manaSpeedKey,
    ['en'],
    manaSpeed.pseudonyms
  );
});

Object.keys(Classes).forEach(classKey => {
  const classGrade = Classes[classKey];
  manager.addNamedEntityText(
    'class',
    classKey,
    ['en'],
    classGrade.pseudonyms != null ? classGrade.pseudonyms : [classGrade.value.toLowerCase()]
  );
});

Object.keys(referencesWrapper.items).forEach(itemKey => {
  const reference = referencesWrapper.items[itemKey];
  manager.addNamedEntityText(
    referencesWrapper.itemEntity,
    itemKey,
    ['en'],
    reference.pseudonyms != null ? reference.pseudonyms : [itemKey.toLowerCase()]
  );
});

Object.keys(AllianceMembers).forEach(allianceMemberKey => {
  const allianceMember = AllianceMembers[allianceMemberKey];
  manager.addNamedEntityText(
    'allianceMember',
    allianceMemberKey,
    ['en'],
    allianceMember.pseudonyms != null ? allianceMember.pseudonyms : [allianceMemberKey.toLowerCase()]
  );
});

Object.keys(elements).forEach(elementKey => {
  const element = elements[elementKey];
  manager.addNamedEntityText(
    'element',
    elementKey,
    ['en'],
    element.pseudonyms != null ? element.pseudonyms : [elementKey.toLowerCase()]
  );
});

Object.keys(farmItem.itemMap).forEach(itemKey => {
  const farmableItem = farmItem.itemMap[itemKey];
  manager.addNamedEntityText(
    farmItem.itemEntity,
    itemKey,
    ['en'],
    farmableItem.pseudonyms != null ? farmableItem.pseudonyms : [itemKey.toLowerCase()]
  );
});

manager.addNamedEntityText(
  cyber88.itemEntity,
  cyber88.itemEntity,
  ['en'],
  cyber88.pseudonyms
);

manager.addNamedEntityText(
  grade.itemEntity,
  grade.itemEntity,
  ['en'],
  grade.pseudonyms
);

manager.addNamedEntityText(
  special.itemEntity,
  special.itemEntity,
  ['en'],
  special.pseudonyms
);

manager.addNamedEntityText(
  talent.itemEntity,
  talent.itemEntity,
  ['en'],
  talent.pseudonyms
);

manager.addNamedEntityText(
  Calendar.itemEntity,
  Calendar.itemEntity,
  ['en'],
  [Calendar.itemEntity]
);

// Outliers to ignore
manager.addDocument('en', '%hero%', 'do.nothing');
manager.addDocument('en', '%allianceMember%', 'do.nothing');
manager.addDocument('en', '%reference%', 'do.nothing');

// Show hero questions
manager.addDocument('en', 'show %hero%', showHero.intentLabel);
manager.addDocument('en', 'show red hood', showHero.intentLabel);
manager.addDocument('en', 'show puss in boots', showHero.intentLabel);
manager.addDocument('en', 'show santa', showHero.intentLabel);
manager.addDocument('en', 'show jack ohare', showHero.intentLabel);
manager.addDocument('en', 'show jack o’hare', showHero.intentLabel);
manager.addDocument('en', 'show jack', showHero.intentLabel);
manager.addDocument('en', 'show li xiu', showHero.intentLabel);
manager.addDocument('en', 'show hu tao', showHero.intentLabel);
manager.addDocument('en', 'show wu kong', showHero.intentLabel);
manager.addDocument('en', 'show boldtusk costume', showHero.intentLabel);
manager.addDocument('en', 'show dark lord', showHero.intentLabel);

// Show reference questions
manager.addDocument('en', 'show %reference%', showReference.intentLabel);
manager.addDocument('en', 'show riddles of wonderland', showReference.intentLabel);
manager.addDocument('en', 'show sand empire', showReference.intentLabel);
manager.addDocument('en', 'show guardians of teltoc', showReference.intentLabel);
manager.addDocument('en', "show santa's challenge", showReference.intentLabel);
manager.addDocument('en', 'show santa’s challenge', showReference.intentLabel);
manager.addDocument('en', 'show al', showReference.intentLabel);
manager.addDocument('en', 'show trials of nature', showReference.intentLabel);
manager.addDocument('en', 'show nature trials', showReference.intentLabel);

// Show calendar questions
manager.addDocument('en', 'show %daterange% %calendar%', showCalendar.intentLabel);
manager.addDocument('en', 'show %calendar%', showCalendar.intentLabel);
manager.addDocument('en', '%calendar%', showCalendar.intentLabel);

// Harpoon team questions
manager.addDocument('en', 'which harpoon team is %allianceMember% on', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'what harpoon team is %allianceMember% part of?', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display %allianceMember% harpoon team', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'show harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);
manager.addDocument('en', '%allianceMember% poon team', harpoonTeamQuery.intentLabel);
manager.addDocument('en', '%allianceMember% harpoon team', harpoonTeamQuery.intentLabel);

// Special questions
manager.addDocument('en', '%hero% %special%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'what is the %special% for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'what is %hero% %special%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'show %hero% %special%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'show %special% for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'display %special% for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'display %hero% %special%', showHeroSpecial.intentLabel);

// Hero grading questions
manager.addDocument('en', 'what is the %grade% for %hero%', showHeroGrading.intentLabel);
manager.addDocument('en', 'what is %hero% %grade%', showHeroGrading.intentLabel);
manager.addDocument('en', 'show %hero% %grade%', showHeroGrading.intentLabel);
manager.addDocument('en', 'show %grade% for %hero%', showHeroGrading.intentLabel);
manager.addDocument('en', 'display %grade% for %hero%', showHeroGrading.intentLabel);
manager.addDocument('en', 'display %hero% %grade%', showHeroGrading.intentLabel);
manager.addDocument('en', '%grade% %hero%', showHeroGrading.intentLabel);

// Hero talent questions
manager.addDocument('en', '%hero% %talent%', showHeroTalent.intentLabel);
manager.addDocument('en', 'what is the %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'what is %hero% %talent%', showHeroTalent.intentLabel);
manager.addDocument('en', 'show %hero% %talent%', showHeroTalent.intentLabel);
manager.addDocument('en', 'show %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'display %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'display %hero% %talent%', showHeroTalent.intentLabel);

// List heroes questions
manager.addDocument('en', 'list %element%', listHeroes.intentLabel);
manager.addDocument('en', 'list %number% %reference% %element% %manaSpeed% %class%', listHeroes.intentLabel);
manager.addDocument('en', 'list %class%', listHeroes.intentLabel);
manager.addDocument('en', 'list %number%', listHeroes.intentLabel);
manager.addDocument('en', 'list %manaSpeed%', listHeroes.intentLabel);
manager.addDocument('en', 'list %reference%', listHeroes.intentLabel);
manager.addDocument('en', 'list heroes', listHeroes.intentLabel);

// Elemental chest questions
manager.addDocument('en', 'where do i farm for %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', "where is the best place to farm for %element% chest", farmElementalChest.intentLabel);
manager.addDocument('en', 'where to farm for %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'where to farm for %element% monsters', farmElementalChest.intentLabel);
manager.addDocument('en', 'where to farm to fill %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'what are the best places for filling %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'what are the best places for %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'what are the best places for %element% monsters', farmElementalChest.intentLabel);
manager.addDocument('en', 'show %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'farm %element% chest', farmElementalChest.intentLabel);
manager.addDocument('en', 'farm %element% monsters', farmElementalChest.intentLabel);

// Farm item questions
manager.addDocument('en', 'show hardwood lumber', farmItem.intentLabel);
manager.addDocument('en', 'show crude iron', farmItem.intentLabel);
manager.addDocument('en', 'where do i find %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'where do i farm %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'where do i get %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'show %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'farm %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'find %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', '%farmableitem%', farmItem.intentLabel);

// Thanks Cyber
manager.addDocument('en', 'thank you cyber 88', thanksCyber.intentLabel);
manager.addDocument('en', 'thanks %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'thank you %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'thx %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'ty %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'tyvm %cyber%', thanksCyber.intentLabel);

// Check Cyber health
manager.addDocument('en', 'how do you feel %cyber%', checkCyberHealth.intentLabel);
manager.addDocument('en', 'how are you %cyber%', checkCyberHealth.intentLabel);

const execute = () => manager.train().then(() => {
  manager.save('hero-brain.nlp');
});

module.exports = {
  execute
};