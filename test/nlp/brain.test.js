const { expect } = require('chai');
const sinon = require('sinon');

const fs = require('fs');

const { NlpManager } = require('node-nlp');

const { getManager, threshold } = require('nlp/brain');

describe('brain tests', () => {
    before(() => {
        return require('nlp/trainer');
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
            expect(result.score).to.be.at.least(threshold);
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
                expect(result.score).to.be.at.least(threshold);
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
                            case 'tibertus':
                                entityTibsFound = true;
                                break;        
                        }
                    }
                });
                expect(entityLjFound).to.be.true;
                expect(entityValenFound).to.be.true;
                expect(entityTibsFound).to.be.true;
        };

        it('show %heroes% should be classified as a show.me intent with the necessary entities', () => {
            return getManager().process('show Little-John, Valen and Tibertus').then(checkShowHeroIntent);
        });

        it('show me %heroes% should be classified as a show.me intent with the necessary entities', () => {
            return getManager().process('show me Little-John, Valen and Tibertus').then(checkShowHeroIntent);
        });

        it('display %heroes% should be classified as a show.me intent with the necessary entities', () => {
            return getManager().process('display Little-John, Valen and Tibertus').then(checkShowHeroIntent);
        });
    });

    describe('harpoon.team.query intent tests', () => {
        const checkHarpoonTeamQueryIntent = result => {
            expect(result.intent).to.equal('harpoon.team.query');
            expect(result.score).to.be.at.least(threshold);
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
    });

    describe('show.hero.special intent tests', () => {
        const checkShowHeroSpecialIntent = result => {
            expect(result.intent).to.equal('show.hero.special');
            expect(result.score).to.be.at.least(threshold);
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

        it('what is the special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('what is the special for Bane, Valen, Little John, and Melendor?').then(checkShowHeroSpecialIntent);
        });

        it('what is %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("What are Bane's, Valen's, Little John's and Melendor's specials?").then(checkShowHeroSpecialIntent);
        });

        it('show %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("show Bane's, Valen's, Little John's and Melendor's specials").then(checkShowHeroSpecialIntent);
        });

        it('show special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('show specials for Bane, Valen, Little John and Melendor').then(checkShowHeroSpecialIntent);
        });

        it('display special for %hero% should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process('display specials for Bane, Little John, Melendor and Valen').then(checkShowHeroSpecialIntent);
        });

        it('display %hero% special should be classified as a show.hero.special intent and the expected entities should be found', () => {
            return getManager().process("display Bane's, Little John's, Melendor's and Valen's specials").then(checkShowHeroSpecialIntent);
        });
    });
});