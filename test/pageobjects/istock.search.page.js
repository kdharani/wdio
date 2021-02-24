const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchField () { return $('#search-phrase') }
    get searchBtn () { return $('.search-bar__submit')}
    get allArticles () { return $$('#gallery article')}
    get firstArticle () { return $('div.gallery-mosaic-asset:nth-child(1) article')}
    get clearSearchImg () { return $('.search-clear-icon')}
    get istockLogo () { return $('section.logo.wide-header > a > img')}
    get openBoard () { return $('#open_board span:nth-child(2)')}
    get createBoardLnk () { return $('.create-board-link')}
    get viewAllBoardLnk () { return $('.view-board-link')}
    get boardNameField () { return $('input.enter-board-name')}
    get createBtn () { return $('form.create-new-board a')}
    get boardTitle () { return $('.board-title')}
    get addToBoard () { return $('.add-to-board')}
    get boardLists () { return $$('div.choose-board li.board-item div.board-name')}
    get deleteBoard () { return $$('.delete-board-desktop')    }

    getBoardTitle(){
        this.boardTitle.waitForDisplayed(5000);
        return this.boardTitle.getText();
    }

    searchForPhoto(text){
        this.searchField.waitForDisplayed();
        this.searchField.setValue(text);
        this.searchBtn.click();
        this.clearSearchImg.waitForDisplayed();
    }

    viewAllBoards(){
        $('#open_board span:nth-child(2)').moveTo(1,1);
        this.viewAllBoardLnk.click();
        $('.delete-board-desktop').waitForDisplayed(5000)
        // browser.waitUntil(function(){
        //     return $('.delete-board-desktop').isDisplayed() === true
        // },5000, 'Viw all board not displayed')
    }

    createBoard(text){
        console.log(text);
        $('#open_board span:nth-child(2)').moveTo(1,1);
        //this.openBoard.moveTo(1,1);
        this.createBoardLnk.waitForDisplayed();
        this.createBoardLnk.click();
        this.boardNameField.waitForDisplayed()
        this.boardNameField.setValue(text);
        this.createBtn.click();
    }

    openBoard(){
        $('#open_board span:nth-child(2)').moveTo(1,1);
    }

    selectFirstArticle(){
        this.firstArticle.waitForDisplayed();
        this.firstArticle.click();
    }

    selectBoardItem(text) {
        this.addToBoard.moveTo();
        this.addToBoard.click();
        $('.board-toast-content__data').waitForDisplayed(5000, true)
        // $('.action-toolbox').click();
        // browser.pause(3000);
        // this.boardLists.every(el => {
        //     //console.log(el.getText());
        //     //console.log(text);
        //     if(el.getText() == text){
        //         el.click();
        //         return false;
        //     }else {
        //         console.log('Item not matched');
        //     }
        //     return true;
        // });
    }

    deleteBoards () {
        this.deleteBoard.forEach(el => {
            el.click();
            browser.acceptAlert()
        });
        browser.refresh();
    }

}

module.exports = new SearchPage();