const { expect } = require('chai');

const { heroes } = require('scripts/herolist');
const ManaSpeeds = require('nlp/entities/ManaSpeeds');
const Classes = require('nlp/entities/Classes');

describe('herolist tests', () => {
    const manaSpeedValues = Object.keys(ManaSpeeds).map(manaSpeedKey => ManaSpeeds[manaSpeedKey].value);
    const classGradeValues = Object.keys(Classes).map(classKey => Classes[classKey].value);
    it('Every hero should include known properties and expected settings where necessary', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].name, `hero key ${heroKey} has an empty name`).to.be.an('string').that.is.not.empty;
            expect(heroes[heroKey].element, `hero key ${heroKey} has an invalid element`).to.be.an('string').that.is.not.empty;
            expect(heroes[heroKey].attack, `hero key ${heroKey} has an invalid attack`).to.be.at.least(1);
            expect(heroes[heroKey].defense, `hero key ${heroKey} has an invalid defense`).to.be.at.least(1);
            expect(heroes[heroKey].health, `hero key ${heroKey} has an invalid health`).to.be.at.least(1);
            if (heroes[heroKey].hasOwnProperty('pseudonyms')) {
                expect(heroes[heroKey].pseudonyms, `hero key ${heroKey} has an invalid pseudonyms property`).to.be.an('array').that.is.not.empty;
            }
            expect(heroes[heroKey].imgUrl, `hero key ${heroKey} has an invalid imgUrl property`).to.be.an('string').that.is.not.empty;
            expect(heroes[heroKey].stars, `hero key ${heroKey} has an invalid stars property`).to.be.at.least(1);
            expect(manaSpeedValues.includes(heroes[heroKey].manaSpeed), `hero key ${heroKey} has an invalid manaSpeed`).to.be.true;
            expect(classGradeValues.includes(heroes[heroKey].classGrade), `hero key ${heroKey} has an invalid classGrade`).to.be.true;
            expect(heroes[heroKey].special.name, `hero key ${heroKey} has an invalid special.name property`).to.be.an('string').to.have.lengthOf.above(0);
            expect(heroes[heroKey].special.description, `hero key ${heroKey} has an invalid special.description property`).to.not.be.empty;
            expect(heroes[heroKey].family, `hero key ${heroKey} has an invalid family property`).to.be.an('string').that.is.not.empty;
        });
    });
});