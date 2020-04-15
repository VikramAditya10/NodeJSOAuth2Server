
var sqldb = require('./models')

var OAuthAccessToken = sqldb.OAuthAccessToken
var OAuthAuthorizationCode = sqldb.OAuthAuthorizationCode
var OAuthClient = sqldb.OAuthClient
var OAuthRefreshToken = sqldb.OAuthRefreshToken
var OAuthScope = sqldb.OAuthScope
var User = sqldb.User

User.sync({ force: true }).then(function () {
  return User.destroy({ where: {} })
})
  .then(function () {
    User.bulkCreate([{ username: 'admin', password: 'admin', scope: 'all' }])
  })

OAuthClient.sync({ force: true }).then(function () {
  return OAuthClient.destroy({ where: {} })
})
  .then(function () {
    OAuthClient.bulkCreate([{
      client_id: 'democlient',
      client_secret: 'democlientsecret',
      redirect_uri: 'http://localhost/cb'
    }])
  })
OAuthAccessToken.sync({ force: true })
OAuthRefreshToken.sync({ force: true })
OAuthAuthorizationCode.sync({ force: true })

OAuthScope.sync({ force: true }).then(function () {
  return OAuthScope.destroy({ where: {} })
})
  .then(function () {
    OAuthScope.bulkCreate([{ scope: 'profile' }])
  })
