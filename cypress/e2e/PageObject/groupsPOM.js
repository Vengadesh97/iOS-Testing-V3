class groupsPOM
{

    // Web Element declartaions 
    elements ={
        
        leftSideGroupMenu : () =>  cy.xpath("//span[text()='Groups']"),

        createGroupTab : () => cy.xpath("//button[text()='Create Group']"),

        groupNameInput : () => cy.get('input#caseTitle'),

        descrption :() => cy.get('textarea[name="description"]'),

        addButton : () => cy.get('i[aria-hidden="true"]'),

        nextbutton : () => cy.xpath("//div //button[text()='Next']"),

        savebutton : () => cy.xpath("//div //button[text()='Save']"),

        popupViewChanges : () => cy.xpath("//div //button[text()='View Changes']")
      }


    leftSideGroup()
    {
       cy.scrollTo('bottom');
        this.elements.leftSideGroupMenu().click();
    }

    createGroupsTab()
    {
        this.elements.createGroupTab().click();
    }

    groupName(name)
    {
        this.elements.groupNameInput().type(name);
    }

    descrptions(text)
    {
        this.elements.descrption().type(text);
    }

    addButtons()
    {
        this.elements.addButton().click();
    }

    nextButton()
    {
      this.elements.nextbutton().click();
    }

    saveButton()
    {
      this.elements.savebutton().click();
    }

    alertPopupViewChanges()
    {
      this.elements.popupViewChanges().click();
    }

    selectMultipleMember(namesToSelect)
    {
      for(let i=0;i<namesToSelect.length;i++)
      {
     cy.xpath("//div //div[text()='"+namesToSelect[i]+"'] //following::input[1]").click();
      }
    }

    // Remove Team Member

    removeMultipleMember(namesToSelect)
    {
      for(let i=0;i<namesToSelect.length;i++)
      {
     cy.xpath("//div //div[text()='"+namesToSelect[i]+"'] //following::i[1]").click();
      }
    }


    oneTeamMemberSelect(text1)
      {
        cy.xpath("//div //div[text()='"+text1+"'] //following::input[1]").click();
      }
}


module.exports = new groupsPOM();