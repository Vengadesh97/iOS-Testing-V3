import loginPage from "../PageObject/loginpagePOM";
import groups from "../PageObject/groupsPOM";


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
          groups.nextButton();
          var namesToRemove = [data.group.Member2,data.group.Member4];
          groups.removeMultipleMember(namesToRemove);
          groups.nextButton();
          groups.oneTeamMemberSelect(data.group.Member1);
          groups.saveButton();
          groups.alertPopupViewChanges();
})

})