const HeroesDao = require('dao/HeroesDao');
let connection = null;

const init = conn => {
    connection = conn;
    HeroesDao.init(conn);
};

const getConnection = () => connection;

module.exports = {
    init,
    getConnection
};