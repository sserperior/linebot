const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const { heroes } = require('nlp/entities/herolist');
const AllianceMembers = require('nlp/entities/AllianceMembers');

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

// Show hero questions
manager.addDocument('en', 'show %hero%', 'show.hero');
manager.addDocument('en', 'show me %hero%', 'show.hero');

// Harpoon team questions
manager.addDocument('en', 'which harpoon team is %allianceMember% on', 'harpoon.team.query');
manager.addDocument('en', 'which harpoon team is %allianceMember% part of', 'harpoon.team.query');
manager.addDocument('en', 'what harpoon team is %allianceMember% on', 'harpoon.team.query');
manager.addDocument('en', 'what harpoon team is %allianceMember% part of', 'harpoon.team.query');

manager.train().then(() => {
  manager.save('hero-brain.nlp');
});