import loginPage from "../PageObject/loginpagePOM";
import groups from "../PageObject/groupsPOM";
import 'cypress-file-upload';


describe('Pages ',()=>{

     let data 

     before(() =>{
          loginPage.visit();
          cy.fixture('login').then((value) =>{
               data=value;
          loginPage.userName(data.codeword.email);
          loginPage.passWord(data.codeword.password);
          loginPage.loginButton();
          })
     });

     it('Groups Creation',()=>
     {
          groups.leftSideGroup();
          groups.createGroupsTab();
          groups.groupName(data.group.groupName);
          groups.descrptions(data.group.descrp);
          groups.addButtons();
          cy.wait(2000);
          var namesToSelect = [data.group.Member1,data.group.Member2,data.group.Member3,data.group.Member4,data.group.Member5];
          groups.selectMultipleMember(namesToSelect);
          groups.MultipleSelectedNameVerification(namesToSelect);
          groups.nextButton();
          var namesToRemove = [data.group.Member1,data.group.Member2];
          groups.removeMultipleMember(namesToRemove);
          groups.nextButton();
          groups.oneTeamMemberSelect(data.group.Member3);
          groups.saveButton();
          groups.alertPopupViewChanges();
         // cy.wait(1000);
          //View Groups - Edit GroupInfo
          groups.ViewGroupSearchBar(data.group.groupName);
          groups.actionButtonClick(data.group.groupName);
          groups.editGroupInfo();
          groups.assertGroupName(data.group.groupName);
          groups.assertDescription(data.group.descrp);
          groups.groupCancelButton();
          // Update Groups team Members
         // cy.wait(1000);
          groups.actionButtonClick(data.group.groupName);
          groups.updateGroupMembersButton();
          var namesToSelect = [data.group.Member4,data.group.Member5];
          groups.selectedTeamMemberNameVerify(namesToSelect);
          groups.groupCancelButton();
          // View Groups page verifications
          groups.actionButtonClick(data.group.groupName);
          groups.viewGroupVerifyGroupName(data.group.groupName);
          groups.viewGroupVerifyDescription(data.group.descrp);
          groups.viewgroupVerifyGroupHeadName(data.group.Member3);

      });
          
})
     




/*


          cy.get(':nth-child(3) > .left-menu-icon > .iconlink > .icotxt').click();

         cy.get('[type="file"]').selectFile(["cypress/Image/DocJPG.jpg","cypress/Image/DocPPT.ppt"],{ force : true});

          let textVat = ['DocJPG','DocPPT']

         cy.get(':nth-child(n) > .documents-list > .row > .col-10').each(($element, index) => {
        cy.wrap($element).contains(textVat[index]);

        */