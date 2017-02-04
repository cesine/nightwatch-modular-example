var config = require('config');

module.exports = {
  'should have a page title': function(client) {
    console.log('using config', config);
    client
      .url('https://www.craigslist.org/about/terms.of.use.' + config.test.locale)
      .assert.title('Condiciones de uso -- craigslist')
      .end();
  }
};
