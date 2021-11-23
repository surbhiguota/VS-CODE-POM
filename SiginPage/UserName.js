class username{

get UserName(){
      return  $("#ap_email")
}

get Continue(){
    return $("#continue")
}

Sigin(UserName){
    this.UserName.setValue(UserName)
    this.Continue.click()
}
}
module.exports = new username()