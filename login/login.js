const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwField = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      // js code to show/hide password and change icon
      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwField.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }
                else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
      })


      //   js code to show signup and registration form
      signUp.addEventListener("click", ()=>{
        container.classList.add("active");
      });
      login.addEventListener("click", ()=>{
        container.classList.remove("active");
      });

    //   set error in id
    const setError = (id, error) =>{
        
    }

    // js form validation
    document.getElementById("btn").addEventListener("click", function(){

     });

    document.getElementById("btn2").addEventListener("click", validateForm = () =>{
        if( document.myForm.fname.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus();
            return true;
        }
        
        if( document.querySelector("#EMail") == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus();
            return false;
        }
        var emailID = document.querySelector("#EMail");
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
                
        if (atpos < 1 || ( dotpos - atpos < 3 )) {
            alert("Please enter correct email ID")
            document.querySelector("#EMail").focus();
            return false;
        }
    });
    

    