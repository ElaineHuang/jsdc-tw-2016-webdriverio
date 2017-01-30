'use strict';
class Page {
  constructor() {
    this.title = 'Page';
  }
  open(path) {
    browser.url(path);
  }
}

module.exports = Page;