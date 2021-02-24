const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signIn () { return $('.actions-list li:nth-child(5) a') }
    get inputUsername () { return $('#new_session_username') }
    get inputPassword () { return $('#new_session_password') }
    get btnSubmit () { return $('#sign_in') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.signIn.click()
        this.inputUsername.waitForDisplayed();
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

module.exports = new LoginPage();
