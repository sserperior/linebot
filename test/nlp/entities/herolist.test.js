const { expect } = require('chai');

const { heroes } = require('nlp/entities/herolist');
const ManaSpeeds = require('nlp/heroModel/ManaSpeeds');

describe('herolist tests', () => {
    it('Every hero should have a name', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].name, `hero key ${heroKey} has an empty name`).to.be.an('string').that.is.not.empty;
        });
    });

    it('Every hero should have attack, defense and health stats', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].attack, `hero key ${heroKey} has an invalid attack`).to.be.at.least(1);
            expect(heroes[heroKey].defense, `hero key ${heroKey} has an invalid defense`).to.be.at.least(1);
            expect(heroes[heroKey].health, `hero key ${heroKey} has an invalid health`).to.be.at.least(1);
        });
    });

    it('If a hero has pseudonyms, they should be a non-empty array', () => {
        Object.keys(heroes).forEach(heroKey => {
            if (heroes[heroKey].hasOwnProperty('pseudonyms')) {
                expect(heroes[heroKey].pseudonyms, `hero key ${heroKey} has an invalid pseudonyms property`).to.be.an('array').that.is.not.empty;
            }
        });
    });

    it('Every hero should have an imgUrl property with a non-empty value', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].imgUrl, `hero key ${heroKey} has an invalid imgUrl property`).to.be.an('string').that.is.not.empty;
        });
    });

    it('Every hero should have a stars property whose value is greater than or equal to 1', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].stars, `hero key ${heroKey} has an invalid stars property`).to.be.at.least(1);
        });
    });

    it('Every hero should have a manaSpeed property whose value is in the ManaSpeeds set', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(Object.values(ManaSpeeds).includes(heroes[heroKey].manaSpeed, `hero key ${heroKey} has an invalid manaSpeed`)).to.be.true;
        });
    });

    it('Every hero must have a special property with non-empty name string and description array', () => {
        Object.keys(heroes).forEach(heroKey => {
            expect(heroes[heroKey].special.name, `hero key ${heroKey} has an invalid special.name property`).to.be.an('string').to.have.lengthOf.above(0);
            expect(heroes[heroKey].special.description, `hero key ${heroKey} has an invalid special.description property`).to.not.be.empty;
        });
    });
});