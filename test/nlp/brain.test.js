const { expect } = require('chai');
const sinon = require('sinon');

const fs = require('fs');

const { NlpManager } = require('node-nlp');

const { getManager, threshold } = require('nlp/brain');

describe('brain tests', () => {
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

    it('manager should detect show.hero classification and associated entities within the threshold', () => {
        return getManager().process('show me Little-John, Valen and Tibertus').then(result => {
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
        });
    });

    it('should find harpoon team member', () => {
        return getManager().process('What team is werd on?').then(result => {
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
        });
    });

    it('unsure why this is broken', () => {
        return getManager().process("@Squeaki, what's on the shopping list").then(console.log);
    });
});