let valid =true

function error(className,message){
    let elements=Array.from(document.getElementsByClassName(className))
    elements.forEach((element)=>{
    element.style.display='block'
    })
    elements[1].textContent=message
    valid=false
}
function validate(){

   let form=document.forms["details"]
   
   let fname=form.fname.value
   let lname=form.lname.value
   let email=form.email.value
   let pass=form.password.value

   if(fname.length==0)
        error("fname-message","First Name cannot be empty")
    
   if(lname.length==0)
        error("lname-message","Last Name cannot be empty")

    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email))
        error("email-message","Looks like this is not an email")

    if(pass.length==0)
        error("pass-message","Password cannot be empty")


    return valid
}