const HeroesDao = require('dao/HeroesDao');
const ReferencesDao = require('dao/ReferencesDao');
let connection = null;

const init = conn => {
    connection = conn;
    HeroesDao.init(conn);
    ReferencesDao.init(conn);
};

const getConnection = () => connection;

module.exports = {
    init,
    getConnection
};