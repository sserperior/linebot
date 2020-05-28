const mongoose = require('mongoose');
const herolist = require('nlp/entities/herolist');
const HeroSchema = require('db/HeroSchema');

const HeroModel = mongoose.model('hero', HeroSchema);

console.log(herolist.heroes['victor']);