var config = require('config');

module.exports = {
  before: function() {
    console.log('before the test');
  },

  'should use its own dependencies': function(client) {
    console.log('using config', config);
    client.assert.equal(config.test.locale, 'es-mx', 'should have loaded its own config');
  },

  'should have a page title': function(client) {
    client
      .url('https://www.craigslist.org/about/terms.of.use.' + config.test.locale)
      .assert.title('Condiciones de uso -- craigslist')
      .end();
  },

  after: function() {
    console.log('after the test');
  }
};
