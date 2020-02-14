const { NlpManager } = require('node-nlp');
const { heroes } = require('nlp/entities/herolist');
const eventsWrapper = require('nlp/entities/events');
const AllianceMembers = require('nlp/entities/AllianceMembers');
const elements = require('nlp/entities/elements');
const cyber88 = require('nlp/entities/cyber88');
const grade = require('nlp/entities/grade');
const special = require('nlp/entities/special');
const events = require('nlp/entities/events');
const talent = require('nlp/entities/talent');

const showHero = require('nlp/intents/showHero');
const showEvent = require('nlp/intents/showEvent');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const showHeroGrading = require('nlp/intents/showHeroGrading');
const showHeroTalent = require('nlp/intents/showHeroTalent');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const farmItem = require('nlp/intents/farmItem');
const thanksCyber = require('nlp/intents/thanksCyber');

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

Object.keys(eventsWrapper.events).forEach(eventKey => {
  const event = eventsWrapper.events[eventKey];
  manager.addNamedEntityText(
    eventsWrapper.itemEntity,
    eventKey,
    ['en'],
    event.pseudonyms != null ? event.pseudonyms : [eventKey.toLowerCase()]
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
  events.challengeItemEntity,
  events.challengeItemEntity,
  ['en'],
  [events.challengeItemEntity]
);

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

// Outliers to ignore
manager.addDocument('en', '%hero%', 'do.nothing');
manager.addDocument('en', '%allianceMember%', 'do.nothing');

// Show hero questions
manager.addDocument('en', 'show %hero%', showHero.intentLabel);
manager.addDocument('en', 'show red hood', showHero.intentLabel);
manager.addDocument('en', 'show puss in boots', showHero.intentLabel);
manager.addDocument('en', 'show santa', showHero.intentLabel);
manager.addDocument('en', 'display %hero%', showHero.intentLabel);

// Show event questions
manager.addDocument('en', 'show %event%', showEvent.intentLabel);
manager.addDocument('en', "show santa's challenge", showEvent.intentLabel);
manager.addDocument('en', 'display %event%', showEvent.intentLabel);

// Harpoon team questions
manager.addDocument('en', 'which harpoon team is %allianceMember% on', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'what harpoon team is %allianceMember% part of?', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display %allianceMember% harpoon team', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'show harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);

// Special questions
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

// Hero talent questions
manager.addDocument('en', 'what is the %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'what is %hero% %talent%', showHeroTalent.intentLabel);
manager.addDocument('en', 'show %hero% %talent%', showHeroTalent.intentLabel);
manager.addDocument('en', 'show %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'display %talent% for %hero%', showHeroTalent.intentLabel);
manager.addDocument('en', 'display %hero% %talent%', showHeroTalent.intentLabel);

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
manager.addDocument('en', 'where do i find %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'where do i farm %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'where do i get %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'show %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'farm %farmableItem%', farmItem.intentLabel);
manager.addDocument('en', 'find %farmableItem%', farmItem.intentLabel);

// Thanks Cyber
manager.addDocument('en', 'thanks %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'thank you %cyber%', thanksCyber.intentLabel);
manager.addDocument('en', 'thx %cyber%', thanksCyber.intentLabel);

manager.train().then(() => {
  manager.save('hero-brain.nlp');
});