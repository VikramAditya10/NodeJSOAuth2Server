var Sequelize = require('sequelize')

var db = { sequelize: new Sequelize('nodeoauth', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}) }

db.OAuthAccessToken = db.sequelize.import('./OAuthAccessToken')
db.OAuthAuthorizationCode = db.sequelize.import('./OAuthAuthorizationCode')
db.OAuthClient = db.sequelize.import('./OAuthClient')
db.OAuthRefreshToken = db.sequelize.import('./OAuthRefreshToken')
db.OAuthScope = db.sequelize.import('./OAuthScope')
db.User = db.sequelize.import('./User')

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

module.exports = db
