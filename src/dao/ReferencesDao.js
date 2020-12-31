const ReferenceSchema = require('db/ReferenceSchema');

const exportable = {};

let referenceModel = null;

exportable.init = connection => {
    if (referenceModel == null) {
        referenceModel = connection.model('reference', ReferenceSchema, 'references');
    }
};

exportable.findReferenceByName = async name => referenceModel.findOne({ name }).lean().exec();

exportable.findReferencesByType = async type => referenceModel.find({ type });

exportable.findReferences = async (conditions, projection=null) => referenceModel.find(conditions, projection).sort({ name: 1 });

exportable.findEvents = async () => exportable.findReferencesByType({ type: 'event' });

exportable.findMaps = async () => exportable.findReferencesByType({ type: 'map' });

exportable.findBuildings = async () => exportable.findReferencesByType({ type: 'building' });

exportable.findRecipes = async () => exportable.findReferencesByType({ type: 'recipe' });

exportable.findRealms = async () => exportable.findReferencesByType({ type: 'realm' });

module.exports = exportable;