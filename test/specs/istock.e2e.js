const SearchPage = require('../pageobjects/istock.search.page');
const LoginPage = require('../pageobjects/login.page');
const data = require('../../data/test.data');
const allureReporter = require('@wdio/allure-reporter').default

describe('iStock functional tests', () => {
    
    it('should able to login successfuly', () => {
        browser.url('/')
        allureReporter.addStep("Log into iStock");
        LoginPage.login(data.username, data.password)
        expect(SearchPage.istockLogo.isDisplayed(), 'Login failed').to.be.true
    });

    it('should able to create a new board', () => {
        browser.url('/');
        allureReporter.addStep("Create a new board");
        //browser.debug();
        SearchPage.createBoard(data.boardName);
        SearchPage.openBoard();
        expect(SearchPage.getBoardTitle()).to.be.equal(data.boardName);
    });

    it('should able to search for photo', () => {
        browser.url('/')
        allureReporter.addStep("Search an image");
        SearchPage.searchForPhoto(data.searchKey)
        expect(SearchPage.allArticles, 'No search results').to.not.be.empty
        SearchPage.istockLogo.click()
    });

    it('should able to add photos to board', () => {
        browser.url('/');
        allureReporter.addStep("Add photos to your board");
        SearchPage.searchForPhoto(data.searchKey);
        SearchPage.selectFirstArticle();
        SearchPage.selectBoardItem(data.boardName);
    });

    it('should able to delete a board', () => {
        browser.url('/')
        allureReporter.addStep("Delete your board");
        SearchPage.viewAllBoards();
        SearchPage.deleteBoards();

    });

});


