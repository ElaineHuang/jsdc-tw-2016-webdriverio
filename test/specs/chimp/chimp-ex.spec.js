describe('Chimp Mocha', () => {
  describe('Page title', () => {
    it('should be set by the Meteor method @watch', () => {
      browser.url('http://google.com');
      browser.getTitle().should.be.equal('Google');
      // browser.element('input#lst-ib.gsfi').setValue('Taroko Software');
      // browser.click('input[type="submit"]:nth-child(1)');
    });
  });
});
