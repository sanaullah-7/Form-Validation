const RegisterForm = document.getElementById("Register-Form")

RegisterForm.addEventListener("submit",(e)=>{
    e.preventDefault();//In the case of a form submission, the default action would be to send the form data to the server and reload the page. e.preventDefault() stops this from happening.
    const Name = e.target[0].value;
    const Email = e.target.email.value;//This works ONLY if <input> has name="email"
    const Password = document.getElementById("password").value;
   

    const Users = JSON.parse(localStorage.getItem("users"))||[];//Agar koi data na mila, to khaali array [] le lo.

    const FoundUser = Users.find(function(item){
       return item.email === Email}    //Aur .find() us user ko return karta hai. matlab return karo agr ye statment true ha
   
);
    
    if(FoundUser)
    {
        alert("User already exists with this email.\nPlease enter another email.")
    }
    else{
       const user ={
        name:Name,
        email:Email,
        password:Password

       }
       Users.push(user);
       localStorage.setItem("users",JSON.stringify(Users))
       alert("Registrtation Successfully!")
       window.location.href="./Login/index.html"//This line tells the browser to go to the page named Login.html.

       
    }
    e.target.reset();//"Clear all the inputs in this form after submission."//we write it every where
    
})