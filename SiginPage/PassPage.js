class Password{

get password()
{
    return $("#ap_password")
}

 get sigin(){
     return  $("#signInSubmit")
 }

 Submit(password){
     this.password.setValue(password)
     this.sigin.click()
 }
}
 
module.exports= new Password()