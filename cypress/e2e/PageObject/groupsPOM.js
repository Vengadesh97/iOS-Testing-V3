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

        popupViewChanges : () => cy.xpath("//div //button[text()='View Changes']"),

        viewgroupTab : () => cy.xpath("//button[text()='View Group']"),

        viewgroupSearch : () => cy.get("input[placeholder='Search Group']"),

        editgroupinfobutton : () => cy.get(':nth-child(1) > .dropdown-item'),

        assertgroupname : () => cy.get('#caseTitle'),

        assertdescription : () => cy.get(':nth-child(2) > .form-group > .form-control'),

        groupcancelbutton : () => cy.get('.btncancel'),

        updategroupmembersbutton : () => cy.get(':nth-child(2) > .dropdown-item')

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

     MultipleSelectedNameVerification(expectedTexts)
     {
      cy.xpath("//div[@class='multicheck form-control textbox active'] //div").each(($element, index) => {
        cy.wrap($element).should('have.text', expectedTexts[index]);
      });
     } 

     // View Group Page

     viewGroupTab()
     {
      this.elements.viewgroupTab().click();
     }

     ViewGroupSearchBar(name)
     {
      this.elements.viewgroupSearch().type(name);
     }

     // Actions

     actionButtonClick(name){
      // Iterate through groupNameText elements
    cy.xpath('//tr /td[1]').each(($groupNameText, index) => {
      const groupTextComp = $groupNameText.text();

      if (name.includes(groupTextComp)) {  
        // Click on the action menu using Cypress
        cy.get('.dropdown > .btn').eq(index).click();
      }

    })
     }

     // ************

     // Under Action "Edit Group Info"
     editGroupInfo()
     {
        this.elements.editgroupinfobutton().click();
        cy.scrollTo('top');
     }
     //Group Name
     assertGroupName(Name)
     {
      this.elements.assertgroupname().invoke('val').should('eql',Name);
     }
    
     //Descrption
     assertDescription(Name)
     {
      this.elements.assertdescription().invoke('val').should('eql',Name);
     }
     //Cancel
     groupCancelButton()
     {
      this.elements.groupcancelbutton().click();
     }          

     // Update Group Members List

     updateGroupMembersButton()
     {
        this.elements.updategroupmembersbutton().click();
     }

     selectedTeamMemberNameVerify(names)
     {
      cy.get(':nth-child(1) > :nth-child(n+3) > #selectedgroup > .form-control').each(($element, index) => {
        cy.wrap($element).should('have.text', names[index]);
      });

     }
     
         

}


module.exports = new groupsPOM();