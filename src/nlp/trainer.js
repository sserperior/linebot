const { NlpManager } = require('node-nlp');
const { heroes } = require('nlp/entities/herolist');
const AllianceMembers = require('nlp/entities/AllianceMembers');
const elements = require('nlp/entities/elements');
const showHero = require('nlp/intents/showHero');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const farmElementalChest = require('nlp/intents/farmElementalChest');

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

// Outliers to ignore
manager.addDocument('en', '%hero%', 'do.nothing');

// Show hero questions
manager.addDocument('en', 'show %hero%', showHero.intentLabel);
manager.addDocument('en', 'show red hood', showHero.intentLabel);
manager.addDocument('en', 'display %hero%', showHero.intentLabel);

// Harpoon team questions
manager.addDocument('en', 'which harpoon team is %allianceMember% on', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'display %allianceMember% harpoon team', harpoonTeamQuery.intentLabel);
manager.addDocument('en', 'show harpoon team for %allianceMember%', harpoonTeamQuery.intentLabel);

// Special questions
manager.addDocument('en', "what is the special for %hero%", showHeroSpecial.intentLabel);
manager.addDocument('en', 'what are the specials for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', "what is %hero% special", showHeroSpecial.intentLabel);
manager.addDocument('en', 'show %hero% special', showHeroSpecial.intentLabel);
manager.addDocument('en', 'show special for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'display special for %hero%', showHeroSpecial.intentLabel);
manager.addDocument('en', 'display %hero% special', showHeroSpecial.intentLabel);

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
manager.addDocument('en', '%element% chest', farmElementalChest.intentLabel);

manager.train().then(() => {
  manager.save('hero-brain.nlp');
});