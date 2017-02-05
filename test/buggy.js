var config = require('config');

module.exports = {
  before: function() {
    // throw new Error('error before the test');
  },

  'should not run if before failed': function(client) {
    client
      .url('https://www.craigslist.org/about/terms.of.use.en')
      .assert.title('terms of use -- craigslist')
      .end();
  },

  after: function() {
    // throw new Error('error after the test');
  }
};
