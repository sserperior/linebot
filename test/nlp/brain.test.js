const util = require('util');

const { expect } = require('chai');
const sinon = require('sinon');

const fs = require('fs');

const { NlpManager } = require('node-nlp');

const { getManager } = require('nlp/brain');

const intentsHelper = require('nlp/intents/intentsHelper');

const doNothing = require('nlp/intents/doNothing');
const listHeroes = require('nlp/intents/listHeroes');
const listReferences = require('nlp/intents/listReferences');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const farmItem = require('nlp/intents/farmItem');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const showHero = require('nlp/intents/showHero');
const showReference = require('nlp/intents/showReference');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const showHeroGrading = require('nlp/intents/showHeroGrading');
const showHeroTalent = require('nlp/intents/showHeroTalent');
const thanksCyber = require('nlp/intents/thanksCyber');
const checkCyberHealth = require('nlp/intents/checkCyberHealth');

describe('brain tests', () => {
    before(() => {
        return require('scripts/trainer').execute();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('manager should be null if the hero-brain.nlp file does not exist', () => {
        sinon.stub(fs, 'existsSync').returns(false);
        expect(getManager()).to.be.null;
    });

    it('manager should not be null when the hero-brain.nlp file exists', () => {
        const actualLoadFunction = NlpManager.prototype.load;
        sinon.stub(NlpManager.prototype, 'load').callsFake(actualLoadFunction);
        expect(getManager()).to.exist;
        sinon.assert.calledOnce(NlpManager.prototype.load);
        sinon.assert.calledWith(NlpManager.prototype.load, 'hero-brain.nlp');
    });

    it('manager should not load again on subsequent calls', () => {
        sinon.stub(NlpManager.prototype, 'load');
        getManager();
        sinon.assert.notCalled(NlpManager.prototype.load);
    });

    describe('do.nothing intent tests', () => {
        const checkDoNothingIntent = (result => {
            expect(result.intent).to.equal('do.nothing');
            expect(result.score).to.be.at.least(doNothing.intentThreshold);
        });

        it('no %hero% should result in do.nothing intent', () => {
            return getManager().process('no Boril').then(checkDoNothingIntent);
        });

        it('%hero% should result in do.nothing intent', () => {
            return getManager().process('Bane').then(checkDoNothingIntent);
        });
    });

    describe('show.hero intent tests', () => {
        const checkShowHeroIntent = result => {
            expect(result.intent).to.equal('show.hero');
                expect(result.score).to.be.at.least(showHero.intentThreshold);
                let entityLjFound = false;
                let entityValenFound = false;
                let entityTibsFound = false;
                result.entities.forEach(entity => {
                    if (entity.entity === 'hero') {
                        switch (entity.option) {
                            case 'little john':
                                entityLjFound = true;
                                break;
                            case 'valen':
                                entityValenFound = true;
                                break;
                            case 'tiburtus':
                                entityTibsFound = true;
                                break;        
                        }
                    }
                });
                expect(entityLjFound).to.be.true;
                expect(entityValenFound).to.be.true;
                expect(entityTibsFound).to.be.true;
        };

        it('show %heroes% should be classified as a show.heroes intent with the necessary entities', () => {
            return getManager().process('show Little-John, Valen and Tibertus').then(checkShowHeroIntent);
        });

        const checkSpecificHero = (result, heroId) => {
            expect(result.intent).to.equal('show.hero');
            let heroFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'hero' && result.entities[i].option === heroId) {
                    heroFound = true;
                    break;
                }
            }
            expect(heroFound, `${heroId} not found`).to.be.true;
        }

        it('show red hood should be classified correctly', () => {
            return getManager().process('show red hood').then(result => checkSpecificHero(result, 'red hood'))
        });

        it('show puss in boots should be classified correctly', () => {
            return getManager().process('show puss in boots').then(result => checkSpecificHero(result, 'puss in boots'));
        });

        it('show santa should be classified correctly', () => {
            return getManager().process('show santa').then(result => checkSpecificHero(result, 'santa claus'));
        });

        it("show jack ohare should be classified properly", () => {
            return getManager().process('show jack ohare').then(result => checkSpecificHero(result, "jack o'hare"));
        });

        it("show jack o’hare should be classified properly", () => {
            return getManager().process('show jack o’hare').then(result => checkSpecificHero(result, "jack o'hare"));
        });

        it('show jack should be classified properly', async () => {
            const result = await getManager().process('show jack');
            checkSpecificHero(result, 'jack');
        });

        it('show li xiu should be classified properly', async () => {
            const result = await getManager().process('show li xiu');
            checkSpecificHero(result, 'li xiu');
        });

        it('show hu tao should be classified properly', async () => {
            const result = await getManager().process('show hu tao');
            checkSpecificHero(result, 'hu tao');
        });

        it('show wu kong should be classified properly', async () => {
            const result = await getManager().process('show wu kong');
            checkSpecificHero(result, 'wu kong');
        });

        it('show boldtusk costume should be classified properly', async () => {
            const result = await getManager().process('show boldtusk costume');
            checkSpecificHero(result, 'boldtusk costume');
        });
    });

    describe('harpoon.team.query intent tests', () => {
        const checkHarpoonTeamQueryIntent = result => {
            expect(result.intent).to.equal('harpoon.team.query');
            expect(result.score).to.be.at.least(harpoonTeamQuery.intentThreshold);
            let entityWerd5Found = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'allianceMember' && result.entities[i].option === 'Werd5') {
                    entityWerd5Found = true;
                    break;
                }
            }
            expect(entityWerd5Found).to.be.true;
        };

        it('which harpoon team is %allianceMember% on should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('which harpoon team is werd on?').then(checkHarpoonTeamQueryIntent);
        });

        it('which harpoon team is %allianceMember% part of should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('which harpoon team is werd part of?').then(checkHarpoonTeamQueryIntent);
        });

        it('what harpoon team is %allianceMember% on should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('what harpoon team is werd on?').then(checkHarpoonTeamQueryIntent);
        });

        it('what harpoon team is %allianceMember% part of should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('what harpoon team is werd part of?').then(checkHarpoonTeamQueryIntent);
        });

        it('display harpoon team for %allianceMember% should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('display harpoon team for werd').then(checkHarpoonTeamQueryIntent);
        });

        it('display %allianceMember% harpoon team should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process("display werd's harpoon team").then(checkHarpoonTeamQueryIntent);
        });

        it('show harpoon team for %allianceMember% should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('show harpoon team for werd').then(checkHarpoonTeamQueryIntent);
        });

        it('%allianceMember% poon team should be classified as a harpoon.team.query and the member should be found', () => {
            return getManager().process('werd poon team').then(checkHarpoonTeamQueryIntent);
        });

        it('%allianceMember% harpoon team should be classified as a harpoon.team.query and the member should be found.', () => {
            return getManager().process('werd harpoon team').then(checkHarpoonTeamQueryIntent);
        });
    });

    describe('show.hero.special intent tests', () => {

        const checkShowHeroSpecialIntent = (result, heroId) => {
            expect(result.intent).to.equal('show.hero.special');
            expect(result.score).to.be.at.least(showHeroSpecial.intentThreshold);
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'hero' && result.entities[i].option === heroId) {
                    return;
                }
            }
            expect(true, `hero ${heroId} was not found amongst the captured entities`).to.be.false;
        };

        const checkShowHeroesSpecialIntent = result => {
            expect(result.intent).to.equal('show.hero.special');
            expect(result.score).to.be.at.least(showHeroSpecial.intentThreshold);
            let baneFound = false;
            let valenFound = false;
            let lJFound = false;
            let melendorFound = false;
            result.entities.forEach(entity => {
                if(entity.entity === 'hero') {
                    if (entity.option === 'bane') {
                        baneFound = true;
                    } else if (entity.option === 'valen') {
                        valenFound = true;
                    } else if (entity.option === 'little john') {
                        lJFound = true;
                    } else if (entity.option === 'melendor') {
                        melendorFound = true;
                    } else {
                        // Something is wrong.
                        expect(true, `Unexpected hero ID ${entity.option} found`).to.be.false;
                    }
                }
            });
            expect(baneFound).to.be.true;
            expect(valenFound).to.be.true;
            expect(lJFound).to.be.true;
            expect(melendorFound).to.be.true;
        };

        it("what's the special for %hero% should be classified as a show.hero.special intent and the expected entities should be found", () => {
            return getManager().process("what's the special for Bane, Valen, Little John and Melendor?").then(checkShowHeroesSpecialIntent);
        });

        it('what are the specials for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('what are the specials for Bane, Valen, Little John and Melendor please?').then(checkShowHeroesSpecialIntent);
        });

        it('what is the special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('what is the special for Bane, Valen, Little John, and Melendor?').then(checkShowHeroesSpecialIntent);
        });

        it('what are %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("What are Bane's, Valen's, Little John's and Melendor's specials?").then(checkShowHeroesSpecialIntent);
        });

        it('show %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("show Bane's, Valen's, Little John's and Melendor's specials").then(checkShowHeroesSpecialIntent);
        });

        it('show special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('show specials for Bane, Valen, Little John and Melendor').then(checkShowHeroesSpecialIntent);
        });

        it('display special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('display specials for Bane, Little John, Melendor and Valen').then(checkShowHeroesSpecialIntent);
        });

        it('display %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("display Bane's, Little John's, Melendor's and Valen's specials").then(checkShowHeroesSpecialIntent);
        });

        it('%hero% %special% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("Bane's special").then(result => checkShowHeroSpecialIntent(result, 'bane'));
        });
    });

    describe('list.heroes intent tests', () => {
        const checkListHeroesIntent = (result, expectedEntityOption) => {
            expect(result.intent).to.equal('list.heroes');
            expect(result.score).to.be.at.least(listHeroes.intentThreshold);
            if (expectedEntityOption != null) {
                let expectedEntityFound = false;
                for (let i=0;i<result.entities.length;i++) {
                    if (result.entities[i].entity === 'element' && result.entities[i].option === expectedEntityOption) {
                        expectedEntityFound = true;
                        break;
                    }
                }
                expect(expectedEntityFound).to.be.true;
            }
        };

        const checkStars = (result, expectedValue) => {
            let expectedEntityFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'number' && result.entities[i].resolution.value === expectedValue) {
                    expectedEntityFound = true;
                    break;
                }
            }
            expect(expectedEntityFound).to.be.true;
        };

        const checkQualifier = (result, qualifier, expectedEntityOption) => {
            let expectedEntityFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === qualifier && result.entities[i].option === expectedEntityOption) {
                    expectedEntityFound = true;
                    break;
                }
            }
            expect(expectedEntityFound).to.be.true;
        };

        it('should understand list very slow heroes', async () => {
            const result = await getManager().process('list very slow heroes');
            checkListHeroesIntent(result, null);
            checkQualifier(result, 'manaSpeed', 'VERY_SLOW');
        });


        it('should understand list paladin heroes', async () => {
            const result = await getManager().process('list paladin heroes');
            checkListHeroesIntent(result, null);
            checkQualifier(result, 'class', 'PALADIN');
        });

        it('should understand list heroes', async () => {
            const result = await getManager().process('list heroes');
            checkListHeroesIntent(result, null);
        });

        it('should understand list 5* heroes', async () => {
            const result = await getManager().process('list 5* heroes');
            checkListHeroesIntent(result, null);
            checkStars(result, 5);
        });

        it('should understand list 5* ice heroes', async () => {
            const result = await getManager().process('list 5* ice heroes');
            checkListHeroesIntent(result, 'ice');
            checkStars(result, 5);
        });

        it('should list ice heroes', async () => {
            const result = await getManager().process('list ice heroes');
            checkListHeroesIntent(result, 'ice');
        });

        it('should list fire heroes', async () => {
            const result = await getManager().process('list fire heroes');
            checkListHeroesIntent(result, 'fire');
        });

        it('should list nature heroes', async () => {
            const result = await getManager().process('list nature heroes');
            checkListHeroesIntent(result, 'nature');
        });

        it('should list holy heroes', async () => {
            const result = await getManager().process('list holy heroes');
            checkListHeroesIntent(result, 'holy');
        });

        it('should list dark heroes', async () => {
            const result = await getManager().process('list dark heroes');
            checkListHeroesIntent(result, 'dark');
        });

        it('should list 5* dark very slow heroes', async () => {
            const result = await getManager().process('list 5* dark very slow heroes');
            checkListHeroesIntent(result, 'dark');
            checkStars(result, 5);
            checkQualifier(result, 'manaSpeed', 'VERY_SLOW');
        });

        it('should understand list 5* fire fast paladin heroes', async () => {
            const result = await getManager().process('list 5* fire fast paladin heroes');
            checkListHeroesIntent(result, 'fire');
            checkStars(result, 5);
            checkQualifier(result, 'manaSpeed', 'FAST');
            checkQualifier(result, 'class', 'PALADIN');
        });
    });

    describe('farm.elemental.chest intent tests', () => {
        const checkFarmElementalChestIntent = (result, expectedEntityOption) => {
            let expectedEntityFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'element' && result.entities[i].option === expectedEntityOption) {
                    expectedEntityFound = true;
                    break;
                }
            }
            expect(expectedEntityFound).to.be.true;
            expect(result.score).to.be.at.least(farmElementalChest.intentThreshold);
        };

        const allTests = (elementPseudonym, element=elementPseudonym) => {
            const allPromises = [];
            allPromises.push(getManager().process(`where do I farm for ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where is the best place to farm for ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where to farm for ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where to farm for ${elementPseudonym} monsters?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where to farm to fill ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`what are the best places for filling ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`what are the best places for ${elementPseudonym} chest?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`what are the best places for ${elementPseudonym} monsters?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`show ${elementPseudonym} chest`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`farm ${elementPseudonym} monsters`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`farm ${elementPseudonym} chest`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`${elementPseudonym} chest`).then(result => checkFarmElementalChestIntent(result, element)));

            // Variations
            allPromises.push(getManager().process(`where are the best places to fill ${elementPseudonym} chests?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where do I go to fill ${elementPseudonym} chests?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`where are the best places to find ${elementPseudonym} monsters?`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`what's the best place to farm ${elementPseudonym} chests`).then(result => checkFarmElementalChestIntent(result, element)));
            allPromises.push(getManager().process(`what's the best place to farm ${elementPseudonym} monsters`).then(result => checkFarmElementalChestIntent(result, element)));
            return Promise.all(allPromises);
        };

        describe('ice chest tests', () => {
            it('ice should be treated properly', () => allTests('ice'));
            it('blue should be treated as ice', () => allTests('blue', 'ice'));
        });

        describe('fire chest tests', () => {
            it('fire should be treated properly', () => allTests('fire'));
            it('red should be treated as fire', () => allTests('red', 'fire'));
        });

        describe('farm holy chest tests', () => {
            it('holy should be treated properly', () => allTests('holy'));
            it('gold should be treated as holy', () => allTests('gold', 'holy'));
            it('yellow shold be treated as holy', () => allTests('yellow', 'holy'))
        }); 

        describe('farm dark chest tests', () => {
            it('dark should be treated properly', () => allTests('dark'));
            it('purple should be treated as dark', () => allTests('purple', 'dark'));
        });

        describe('farm nature chest tests', () => {
            it('nature should be treated properly', () => allTests('nature'));
            it('green should be treated as nature', () => allTests('green', 'nature'));
        });
    });

    describe('farmItem tests', () => {
        const checkResult = (result, expectedEntityOption) => {
            let expectedEntityFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === farmItem.itemEntity && result.entities[i].option === expectedEntityOption) {
                    expectedEntityFound = true;
                    break;
                }
            }
            expect(expectedEntityFound, `"${result.utterance}": ${expectedEntityOption} not found!`).to.be.true;
            expect(result.score, `"${result.utterance}": ${expectedEntityOption} found but score is too low`).to.be.at.least(farmItem.intentThreshold);
        };

        it('all items should be identified correctly', () => {
            const allPromises = [];
            Object.keys(farmItem.itemMap).forEach(itemKey => {
                const item = farmItem.itemMap[itemKey];
                const itemPseudonyms = item.pseudonyms != null ? item.pseudonyms : [itemKey.toLowerCase()];
                itemPseudonyms.forEach(itemPseudonym => {
                    allPromises.push(getManager().process(`where do i find ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`where do i farm ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`where do i get ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`show ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`farm ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`find ${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                    allPromises.push(getManager().process(`${itemPseudonym}`).then(result => checkResult(result, itemKey)));
                });
            });
            return allPromises;
        });
    });

    describe('thanksCyber tests', () => {
        const checkResult = result => {
            expect(result.intent).to.equal(thanksCyber.intentLabel);
            expect(result.score).to.be.at.least(thanksCyber.intentThreshold);
        };

        it('should trigger for "thanks cyber"', () => {
            return getManager().process('thanks cyber').then(checkResult);
        });

        it('should trigger for "thank you cyber 88', () => {
            return getManager().process('thank you cyber 88').then(checkResult);
        });

        it('should trigger for "thx cyber"', () => {
            return getManager().process('thx cyber').then(checkResult);
        });

        it('should trigger for "ty cyber"', () => {
            return getManager().process('ty cyber').then(checkResult);
        });

        it('"Do you think cyber?" should not trigger "thanks cyber"', () => {
            return getManager().process('Do you think cyber?').then(result => {
                expect(result.score).to.be.lessThan(thanksCyber.intentThreshold);
            });
        });
    });

    describe('check Cyber health tests', () => {
        const checkResult = result => {
            expect(result.intent).to.equal(checkCyberHealth.intentLabel);
            expect(result.score).to.be.at.least(checkCyberHealth.intentThreshold);
        };

        it('should trigger for "how do you feel cyber?"', async () => {
            const result = await getManager().process('how do you feel cyber?');
            checkResult(result);
        });

        it('should trigger for "how are you cyber?"', async () => {
            const result = await getManager().process('how are you cyber?');
            checkResult(result);
        });
    });

    describe('show.hero.grading tests', () => {
        const checkShowHeroGradingIntent = result => {
            expect(result.intent).to.equal(showHeroGrading.intentLabel);
            expect(result.score).to.be.at.least(showHeroGrading.intentThreshold);
        };

        it('what is the %grade% for %hero% should trigger show.hero.grading', () => {
            return getManager().process('what is the grading for Valen?').then(checkShowHeroGradingIntent);
        });

        it('what is %hero% %grade should trigger show.hero.grading', () => {
            return getManager().process("what is Valen's grading?").then(checkShowHeroGradingIntent);
        });

        it('show %hero% %grade% should trigger show.hero.grading', () => {
            return getManager().process("show Valen's grading").then(checkShowHeroGradingIntent);
        });

        it('show %grade% for %hero% should trigger show.hero.grading', () => {
            return getManager().process('show grading for Valen').then(checkShowHeroGradingIntent);
        });

        it('display %grade% for %hero% should trigger show.hero.grading', () => {
            return getManager().process('display grading for Valen').then(checkShowHeroGradingIntent);
        });

        it('display %hero% %grade% should trigger show.hero.grading', () => {
            return getManager().process("display Valen's grading").then(checkShowHeroGradingIntent);
        });

        it('%hero% %grade% should trigger show.hero.grading', () => {
            return getManager().process('Valen grading').then(checkShowHeroGradingIntent);
        });

        it('grade %hero% should trigger show.hero.grading', () => {
            return getManager().process('grade valen').then(checkShowHeroGradingIntent);
        });

        it('rate %hero% should trigger show.hero.grading', () => {
            return getManager().process('rate valen').then(checkShowHeroGradingIntent);
        });
    });

    describe('show.hero.talent tests', () => {
        const checkShowHeroTalentIntent = result => {
            expect(result.intent).to.equal(showHeroTalent.intentLabel);
            expect(result.score).to.be.at.least(showHeroTalent.intentThreshold);
        }

        it('what is the %talent% for %hero% should trigger show.hero.talent', () => {
            return getManager().process('what is the talent for Justice?').then(checkShowHeroTalentIntent);
        });

        it('what is %hero% %talent% should trigger show.hero.talent', () => {
            return getManager().process('what is Justice talent?').then(checkShowHeroTalentIntent);
        });

        it('show %hero% %talent% should trigger show.hero.talent', () => {
            return getManager().process('show Seshat talent').then(checkShowHeroTalentIntent);
        });

        it('show %talent% for %hero% should trigger show.hero.talent', () => {
            return getManager().process('show talent for Vivica').then(checkShowHeroTalentIntent);
        });

        it('display %talent% for %hero% should trigger show.hero.talent', () => {
            return getManager().process('display talent for Zeline').then(checkShowHeroTalentIntent);
        });

        it('display %hero% %talent% should trigger show.hero.talent', () => {
            return getManager().process('display Marjana talent').then(checkShowHeroTalentIntent);
        });

        it('%hero% %talent% should trigger show.hero.talent', () => {
            return getManager().process('Richard talent').then(checkShowHeroTalentIntent);
        });
    });

    describe('show.reference tests', () => {
        const checkShowReferenceIntent = result => {
            expect(result.intent).to.equal(showReference.intentLabel);
            expect(result.score).to.be.at.least(showReference.intentThreshold);
        };

        it('show %reference% should trigger show.reference', () => {
            return getManager().process('show pirates').then(checkShowReferenceIntent);
        });

        const checkSpecificReference = (result, referenceId) => {
            expect(result.intent).to.equal(showReference.intentLabel);
            expect(result.score).to.be.at.least(showReference.intentThreshold);
            let referenceFound = false;
            for (let i=0;i<result.entities.length;i++) {
                if (result.entities[i].entity === 'reference' && result.entities[i].option === referenceId) {
                    referenceFound = true;
                    break;
                }
            }
            expect(referenceFound).to.be.true;
        };

        it('show riddles of wonderland should trigger show.reference', () => {
            return getManager().process('show riddles of wonderland').then(result => checkSpecificReference(result, 'Riddles of Wonderland'));
        });

        it('show guardians of teltoc should trigger show.reference', () => {
            return getManager().process('show guardians of teltoc').then(result => checkSpecificReference(result, 'Guardians of Teltoc'));
        });

        it('show sand empire should trigger show.reference', () => {
            return getManager().process('show sand empire').then(result => checkSpecificReference(result, 'Sand Empire'));
        });

        it("show santa's challenge should trigger show.reference", () => {
            return getManager().process("show santa's challenge").then(result => checkSpecificReference(result, "Santa's Challenge"));
        });

        it('show santa’s challenge should trigger show.reference', () => {
            return getManager().process('Show santa’s challenge').then(result => checkSpecificReference(result, "Santa's Challenge"));
        });

        it('show hero academy should trigger show.reference', async () => {
            const result = await getManager().process('show hero academy');
            checkSpecificReference(result, 'Hero Academy');
        });

        it('show ha should trigger show.reference', async () => {
            const result = await getManager().process('show ha');
            checkSpecificReference(result, 'Hero Academy');
        });

        it('show alchemy lab should trigger show.reference', async () => {
            const result = await getManager().process('show alchemy lab');
            checkSpecificReference(result, 'Alchemy Lab');
        });

        it('show al should trigger show.reference', async () => {
            const result = await getManager().process('show al');
            checkSpecificReference(result, 'Alchemy Lab');
        });

        it('show hl should trigger show.reference', async () => {
            const result = await getManager().process('show hl');
            checkSpecificReference(result, "Hunter's Lodge");
        });

        it('show crafting should trigger show.reference', async () => {
            const result = await getManager().process('show crafting');
            checkSpecificReference(result, 'Crafting');
        });

        it('show forge should trigger show.reference', async () => {
            const result = await getManager().process('show forge');
            checkSpecificReference(result, 'Crafting');
        });

        it('show loot tier should trigger show.reference', async () => {
            const result = await getManager().process('show loot tier');
            checkSpecificReference(result, 'Titan Loot');
        });

        it('show titan loot should trigger show.reference', async () => {
            const result = await getManager().process('show titan loot');
            checkSpecificReference(result, 'Titan Loot');
        });

        it('show "the masquerade" should trigger show.reference', async () => {
            const result = await getManager().process('show the masquerade');
            checkSpecificReference(result, 'The Masquerade');
        });

        it('show "masquerade" should trigger show.reference', async () => {
            const result = await getManager().process('show masquerade');
            checkSpecificReference(result, 'The Masquerade');
        });

        it('show "costumes" should trigger show.reference', async () => {
            const result = await getManager().process('show costumes');
            checkSpecificReference(result, 'The Masquerade');
        });

        it('show "costume event" should trigger show.reference', async () => {
            const result = await getManager().process('show costume event');
            checkSpecificReference(result, 'The Masquerade');
        });

        it('show "costumes event" should trigger show.reference', async () => {
            const result = await getManager().process('show costumes event');
            checkSpecificReference(result, 'The Masquerade');
        });

        it('show "season 2 avatars" should trigger show.reference', async () => {
            const result = await getManager().process('show season 2 avatars');
            checkSpecificReference(result, 'Season 2 Avatars');
        });

        it('show avatars 2 should trigger show.reference', async () => {
            const result = await getManager().process('show avatars 2');
            checkSpecificReference(result, 'Season 2 Avatars');
        });

        it('show "season 3 avatars" should trigger show.reference', async () => {
            const result = await getManager().process('show season 3 avatars');
            checkSpecificReference(result, 'Season 3 Avatars');
        });

        it('show avatars 3 should trigger show.reference', async () => {
            const result = await getManager().process('show avatars 3');
            checkSpecificReference(result, 'Season 3 Avatars');
        });

        it('show "midgard" should trigger show reference', async () => {
            const result = await getManager().process('show midgard');
            checkSpecificReference(result, 'Midgard');
        });

        it('show "jotunheim" should trigger show reference', async () => {
            const result = await getManager().process('show jotunheim');
            checkSpecificReference(result, 'Jotunheim');
        });

        it('show "niflheim" should trigger show reference', async () => {
            const result = await getManager().process('show niflheim');
            checkSpecificReference(result, 'Niflheim');
        });

        it('show "muspelheim" should trigger show reference', async () => {
            const result = await getManager().process('show muspelheim');
            checkSpecificReference(result, 'Muspelheim');
        });

        it('show "vanaheim" should trigger show reference', async () => {
            const result = await getManager().process('show vanaheim');
            checkSpecificReference(result, 'Vanaheim');
        });

        it('show "svartalfheim" should trigger show reference', async () => {
            const result = await getManager().process('show svartalfheim');
            checkSpecificReference(result, 'Svartalfheim');
        });

        it('show "helheim" should trigger show reference', async () => {
            const result = await getManager().process('show helheim');
            checkSpecificReference(result, 'Helheim');
        });        
    });

    describe('list references tests', () => {
        it('should return the correct intent', async () => {
            const result = await getManager().process('list references');
            expect(result.intent).to.equal(listReferences.intentLabel);
            expect(result.score).to.be.at.least(listReferences.intentThreshold);
        });

        it('should return the correct intent', async () => {
            const result = await getManager().process('list refs');
            expect(result.intent).to.equal(listReferences.intentLabel);
            expect(result.score).to.be.at.least(listReferences.intentThreshold);
        });
    });

    describe('Calendar tests', () => {
        const checkEntityDate = (entity, expectedYear, expectedMonth) => {
            let detectedDate = null;
            switch(entity.resolution.type) {
                case 'interval':
                    let currentDate = new Date(Date.now());
                    let year = currentDate.getUTCFullYear();
                    let timexArray = entity.resolution.timex.split('-');
                    expect(timexArray[0]).to.equal('XXXX');
                    detectedDate = new Date(`${year}-${timexArray[1]}-01T00:00:00.000Z`);
                    break;
                case 'daterange':
                    detectedDate = new Date(`${entity.resolution.timex}-01T00:00:00.000Z`);
                    break;
            }
            expect(detectedDate).to.not.be.null;
            expect(detectedDate.getUTCFullYear()).to.equal(expectedYear);
            expect(detectedDate.getUTCMonth()).to.equal(expectedMonth);
        };

        it('show January 2021 calendar should process correctly', () => {
            let found = false;
            return getManager().process('show January 2021 calendar').then(result => {
                for (let i=0;i<result.entities.length;i++) {
                    if (result.entities[i].entity === 'daterange') {
                        checkEntityDate(result.entities[i], 2021, 0);
                        found = true;
                    }
                }
                expect(found).to.be.true;
            });
        });

        it('show February calendar should process correctly with the current year', () => {
            return getManager().process('show February calendar').then(result => {
                const currentYear = new Date(Date.now()).getUTCFullYear();
                const expectedMonth = 1;
                let found = false;
                for (let i=0;i<result.entities.length;i++) {
                    if (result.entities[i].entity === 'daterange') {
                        checkEntityDate(result.entities[i], currentYear, expectedMonth);
                        found = true;
                    }
                }
                expect(found).to.be.true;
            });
        });

        it('show calendar should process correctly with only a calendar entity detected', () => {
            return getManager().process('show calendar').then(result => {
                const date = new Date(Date.now());
                const currentYear = date.getUTCFullYear();
                const currentMonth = date.getUTCMonth();
                let foundDateRangeEntity = false;
                let foundCalendarEntity = false;
                for (let i=0;i<result.entities.length;i++) {
                    if (result.entities[i].entity === 'daterange') {
                        foundDateRangeEntity = true;
                    } else if (result.entities[i].option === 'calendar') {
                        foundCalendarEntity = true;
                    }
                }
                expect(foundDateRangeEntity).to.be.false;
                expect(foundCalendarEntity).to.be.true;
            });
        });

        it('show January and March calendars', () => {
            return getManager().process('show January and March calendars').then(result => {
                const dateRangeEntities = intentsHelper.getUniqueDateEntities(result.entities);
                const date = new Date(Date.now());
                const currentYear = date.getUTCFullYear();
                const expectedMonths = [0, 2]; // January and March
                for (let i=0;i<dateRangeEntities.length;i++) {
                    checkEntityDate(dateRangeEntities[i], currentYear, expectedMonths[i]);
                }
            });
        });
    });
});