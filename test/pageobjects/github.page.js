"use strict";
const Page = require('./page');

class GithubPage extends Page {
    get loginBtn()  { return browser.element('body > header > div > div > div > a.btn.site-header-actions-btn.mr-1'); }
    get username() { return browser.element('#login_field'); }
    get password()  { return browser.element('#password'); }
    get loginSubmit() { return browser.element('input.btn'); }
    get indexAvatar()     { return browser.element('img.avatar'); }
    get headerLoaded() { return browser.element('header.site-header'); }
    get indexCreateBtn() { return browser.element('.header-nav-link.tooltipped.tooltipped-s.js-menu-target'); }
    get indexDropdown() { return browser.element('.dropdown-menu.dropdown-menu-sw'); }
    get indexDropdownNewRepo() { return browser.element('.dropdown-item:first-child'); }
    get newRepoName() { return browser.element('#repository_name'); }
    get newRepoSubmit() { return browser.element('.btn.btn-primary.first-in-line'); }
    get repContainer() { return browser.element('.pagehead-actions'); }
    get repSetting() { return browser.element('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(8)'); }
    get settingRename() { return browser.element('#rename_field'); }
    get settingDelete() { return browser.element('#options_bucket > div.boxed-group.dangerzone > div > button:nth-child(11)'); }
    get settingModal() { return browser.element('#facebox'); }
    get settingModalRename() { return browser.element('#facebox > div > div > form > p > input'); }
    get settingModalDelete() { return browser.element('#facebox > div > div > form > button'); }
    get indexFlashNotice() { return browser.element('.flash-notice'); }
    get searchBar() { return browser.element('input.form-control.header-search-input'); }
    get searchForm() { return browser.element('form.js-site-search-form'); }
    get targetProject() { return browser.element('div.d-inline-block.col-9.mb-1 > h3 > a.v-align-middle'); }
    get starBtn() { return browser.element('form.unstarred > button.btn.btn-sm.btn-with-count.js-toggler-target'); }
    get userDropdown() { return browser.element('#user-links > li:nth-child(3) > a.header-nav-link'); }
    get yourStars() { return browser.element('#user-links > li.header-nav-item.dropdown.js-menu-container.active > div > div > a:nth-child(4)'); }
    get unStarBtn() { return browser.element('#js-pjax-container > div > div.col-9.float-left.pl-2 > div.js-repo-filter.position-relative > div:nth-child(2) > div.float-right > div > form.starred > button'); }
    get deleteForm() { return browser.element('.js-normalize-submit'); }
    open() {
        super.open('https://github.com/');
        this.headerLoaded.waitForExist();
    }
    login(username, password) {
        this.loginBtn.click();
        this.username.waitForExist();
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginSubmit.click();
        this.indexAvatar.waitForExist();
    }
    createRepo(repositoryName) {
        this.indexCreateBtn.click();
        this.indexDropdown.waitForExist();
        this.indexDropdownNewRepo.click();
        this.newRepoName.waitForExist()
        this.newRepoName.setValue(repositoryName)
        this.newRepoSubmit.click();
        this.repContainer.waitForExist();
    }
    deleteRepo(repositoryName) {
        this.repContainer.waitForExist();
        this.repSetting.click();
        browser.scroll(0, 300);
        this.settingRename.waitForExist();
        this.settingDelete.click();
        this.settingModal.waitForExist();
        this.settingModalRename.setValue(repositoryName);
        this.settingModalRename.leftClick(10, 10);
        this.settingModalRename.doubleClick();
        this.settingModalDelete.waitForEnabled(6000);
        this.settingModalDelete.click();
        this.indexFlashNotice.waitForExist();
    }
    searchRepo(account, repositoryName) {
        let resName = account + '/' + repositoryName;
        browser.click('svg.octicon.octicon-mark-github');
        browser.waitForExist('div.boxed-group-action');
        browser.click('span[title="' + resName + '"]');
    }
    starProject(project) {
        browser.click('svg.octicon.octicon-mark-github');
        this.searchBar.setValue(project);
        this.searchForm.submitForm();
        this.targetProject.waitForExist();
        this.targetProject.click();
        this.starBtn.waitForExist();
        this.starBtn.click();
    }
    unstarProject() {
        this.userDropdown.waitForExist();
        this.userDropdown.click();
        this.yourStars.waitForExist();
        this.yourStars.click();
        this.unStarBtn.waitForExist();
        this.unStarBtn.click();
    }
}
module.exports = new GithubPage();