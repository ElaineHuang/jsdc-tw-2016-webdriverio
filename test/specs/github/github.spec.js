'use strict';
const randomstring = require('randomstring');
const repositoryName = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
const starRepo = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
const username = 'tarokoTest';
const password = 'tarokoTest888';
const GithubPage = require('../../pageobjects/github.page');

describe('Github page test', () => {
  before(function() {
    browser.windowHandleSize({
      width: 1920,
      height: 1080
    });
    GithubPage.open();
    GithubPage.login(username, password);
  });
  describe('create & delete repo', () => {
    it('should be create repository', () => {
      GithubPage.createRepo(repositoryName);
    });
    it('should be delete repository', () => {
      GithubPage.searchRepo(username, repositoryName);
      GithubPage.deleteRepo(repositoryName);
    });
  });

  describe('star & unstar repo', () => {
    it('should be star repository', () => {
      GithubPage.createRepo(starRepo);
      GithubPage.starProject(starRepo);
    });
    it('should be unstar repository', () => {
      GithubPage.unstarProject();
      GithubPage.searchRepo(username, starRepo);
      GithubPage.deleteRepo(starRepo);
    });
  });
});
