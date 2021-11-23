const getusername = require('../SiginPage/UserName')
const getpassword = require('../SiginPage/PassPage')
const getconfirmation = require('../SiginPage/Confirmation')
const fs=require('fs')
let credentials =JSON.parse(fs.readFileSync('test/DataSet/Credentials.json'))

describe('Amazon Site',()=>
{
    credentials.forEach(({username,password}) =>{
  it(' Optimize Login Page ',() =>{
     browser.url("https://www.amazon.in/")
      var title= browser.getTitle()
          console.log(title);
    expect(browser).toHaveTitleContaining("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
   
     browser.setTimeout({'implicit' :5000})

     browser.waitUntil(() => getusername.UserName.isDisplayed()==true,
     {timeout:8000, timeoutMsg:'Email is not displayed'})

    getusername.Sigin(username)
    getpassword.Submit(password)
    
    browser.waitUntil(() => getconfirmation.confirmation.isDisplayed()==true,
    {timeout:8000, timeoutMsg:'Text is not displayed'})
    console.log(getconfirmation.confirmation.getText())
    
    try {
      expect(getconfirmation.confirmation).toHaveTextContaining("Hello")
      console.log("Test Pass")
       } 
    catch (error) {
      console.log("Test Fail")
    }
    console.log("  ")
   

  //  $("nav-line-2 ").click()
   $(".nav-text").click()
 //  browser.newWindow()
   
    browser.pause(300)
          })
        })
        })