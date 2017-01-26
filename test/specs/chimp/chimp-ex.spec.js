describe('Chimp Mocha', () => {
  describe('Page title', () => {
    it('should be set by the Meteor method', () => {
      browser.url('http://google.com');
      browser.getTitle().should.be.equal('Google');
    });
  });
});
