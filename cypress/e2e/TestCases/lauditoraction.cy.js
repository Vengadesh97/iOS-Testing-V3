const { describe } = require("mocha");



describe('Login Page', () => {
    it('should log in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://staging.lauditor.com/login');
  
      // Interact with login form elements
      cy.get('#id_email').type('cefabo2573@dixiser.com');
      cy.get('#id_password').type('Test@123');
      cy.get('button[type="submit"]').click();
      cy.scrollTo('bottom');
      cy.xpath("//span[text()='Groups']").click();
      cy.xpath("//button[text()='View Group']").click();
      cy.get("input[placeholder='Search Group']").type('Document Sharing Files');

      cy.wait(3000);

      let name ='Document Sharing Files'; 

    // Iterate through groupNameText elements
    cy.xpath('//tr /td[1]').each(($groupNameText, index) => {
      const groupTextComp = $groupNameText.text();

      if (name.includes(groupTextComp)) {  
        // Cypress equivalent for Thread.sleep

        // Click on the action menu using Cypress
        cy.get('.dropdown > .btn').eq(index).click();
      }
    });
      //edit group info
        cy.get(':nth-child(1) > .dropdown-item').click();
        cy.scrollTo('top');
      //group name
        cy.get('#caseTitle').invoke('val').should('eql',"Document Sharing Files");
      //decrpt
        cy.get(':nth-child(2) > .form-group > .form-control').invoke('val').should('eql',"Test");
      //cancel
        cy.get('.btncancel').click();

    // Iterate through groupNameText elements
    cy.xpath('//tr /td[1]').each(($groupNameText, index) => {
      const groupTextComp = $groupNameText.text();

      if (name.includes(groupTextComp)) {  
        // Cypress equivalent for Thread.sleep

        // Click on the action menu using Cypress
        cy.get('.dropdown > .btn').eq(index).click();
      }

    })

    
      //Update Group Members
        cy.get(':nth-child(2) > .dropdown-item').click();
        var namesToRemove = ['Arun','Dhinesh Kumar','Boomi'];
        cy.get(':nth-child(1) > :nth-child(n+3) > #selectedgroup > .form-control').each(($element, index) => {
        cy.wrap($element).should('have.text', namesToRemove[index]);
      });
    

      cy.get('.btncancel').click();

      

  })
})

