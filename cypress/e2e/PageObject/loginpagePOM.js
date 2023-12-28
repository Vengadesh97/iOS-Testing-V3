class LoginPage
{
    // WebElement declartion
    elements = {
         userEmail : () => cy.get('input#id_email'),
         passwords : () => cy.get('input#id_password'),
         button : () => cy.get('button[type="submit"]')
    }

    //Web Page Url
    visit()
    {
        cy.visit('https://staging.lauditor.com/login');
    }

    userName(name)
    {
        this.elements.userEmail().type(name);
    }

    passWord(pass)
    {
        this.elements.passwords().type(pass);
    }

    loginButton()
    {
        this.elements.button().click();
    }

}

module.exports = new LoginPage();