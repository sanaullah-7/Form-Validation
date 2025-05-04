    const LoginForm = document.getElementById("Login-Form");

    LoginForm.addEventListener("submit",function(event){
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        


        const Users = JSON.parse(localStorage.getItem("users"))||[];
                                     //arrow function
        const FoundUser = Users.find((item)=> item.email === Email && item.password === Password)
        if (FoundUser)
        {
            const CurrentUser = {Name:FoundUser.name,Email}// Yeh FoundUser ke name ko Name ke naam se store kar raha hai.//This is ES6 shorthand syntax
            localStorage.setItem("currentUser",JSON.stringify(CurrentUser))
            alert("User Login Successfully!");
            window.location.href="Home.html";

        }
        else{
        alert("Invalid Email or Password")
        }
        event.target.reset();

    })
