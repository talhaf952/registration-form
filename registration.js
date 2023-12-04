function validateForm()
{
    var name=document.getElementById('name').value;
    var emptyNameError=document.getElementById('empty-name-error');
    var numberNameError=document.getElementById('number-name-error');
    var password=document.getElementById('password').value;
    var emptyPasswordError=document.getElementById('empty-password-error');
    var shortPasswordError=document.getElementById('short-password-error');
    var confirm_password=document.getElementById('confirm_password').value;
    var empty_confirm_password=document.getElementById('empty-Confirm-password-error');
    // var short_confirm_password=document.getElementById('short-Confirm-password-error');
    var unmatch_password=document.getElementById('unmatch-password-error');
    var age=document.getElementById('age').value;
    var age_error=document.getElementById('age-error');
    var wrong_age_error=document.getElementById('wrong-age-error');
    var email=document.getElementById('email').value;
    var email_error=document.getElementById('email-error');
    var wrong_email_error=document.getElementById('wrong-email-error');
    var x=email.charAt(email.length-1);
    var y=email.charAt(email.length-2);
    var z=email.charAt(email.length-3);
    var genderM=document.getElementById('male');
    var genderF=document.getElementById('female');
    var other=document.getElementById('other');
    var gender_error=document.getElementById('gender-error');
    var english=document.getElementById('english');
    var maths=document.getElementById('maths');
    var urdu=document.getElementById('urdu');
    var subject_error=document.getElementById('subject-error');
    var city_error=document.getElementById('city-error');
    var city=document.getElementById('city');
    var feedback=document.getElementById('feedback').value;
    var empty_feedback_error=document.getElementById('empty-feedback-error');
    var short_feedback_error=document.getElementById('short-feedback-error');
    var status=true;
    var a=z+y+x;
    //=========================================================================================================================
    if(name=="") //For name not to be empty.
    {
        emptyNameError.style.display="none";
        numberNameError.style.display="none";
        emptyNameError.style.display="block";
        document.getElementById("name").style.border="2px solid red" ;
        status =false;
    }
    else if(!isNaN(parseInt(name.charAt(0))))
    {
        emptyNameError.style.display="none";
        numberNameError.style.display="none";
        numberNameError.style.display="block";//If 1st character in number, display this error.
        document.getElementById("name").style.border="2px solid red" ;
        status= false;
    }
    else{
        emptyNameError.style.display="none";
        numberNameError.style.display="none";
        document.getElementById("name").style.border="2px solid lightgreen" ;
    }
    //=========================================================================================================================
    if(password=="") //For Password not to be empty.
    {
        shortPasswordError.style.display="none";
        emptyPasswordError.style.display="none";
        emptyPasswordError.style.display="block";
        document.getElementById("password").style.border="2px solid red" ;
        status=false;
    }
    else if(password.length<=7)
    {
        shortPasswordError.style.display="none";
        emptyPasswordError.style.display="none";
        shortPasswordError.style.display="block"; //Password Should contain minimum 8 charatcers
        document.getElementById("password").style.border="2px solid red" ;
    }
    else
    {
        shortPasswordError.style.display="none";
        emptyPasswordError.style.display="none";
        document.getElementById("password").style.border="2px solid lightgreen" ;       
        if(confirm_password=="")
        {
            unmatch_password.style.display="none";
            empty_confirm_password.style.display="none";
            // short_confirm_password.style.display="none";
            empty_confirm_password.style.display="block";
            document.getElementById("confirm_password").style.border="2px solid red" ;
            status=false;
        }
        else if(password!=confirm_password) 
        {
        unmatch_password.style.display="none";
        empty_confirm_password.style.display="none";
        // short_confirm_password.style.display="none";
        empty_confirm_password.style.display="block";
        document.getElementById("confirm_password").style.border="2px solid red" ;
        status=false;
        }
        else
        {
            unmatch_password.style.display="none";
            empty_confirm_password.style.display="none";
            // short_confirm_password.style.display="none";
            document.getElementById("confirm_password").style.border="2px solid lightgreen" ;
            status=false;
        }
    }
    // if(isNaN(password.charAt(0)))
    // {
    //     arr.push("1st character of password should not be Alphabet.\n"); //Display error when 1st character is Alphabet
    // }
    //=========================================================================================================================
  

    //=========================================================================================================================
    if(age=="")
    {
        wrong_age_error.style.display="none";
        age_error.style.display="none";
        age_error.style.display="block";
        document.getElementById("age").style.border="2px solid red"
    }
    else if(age<=0)
    {
        wrong_age_error.style.display="none";
        age_error.style.display="none";
        wrong_age_error.style.display="block";
        document.getElementById("age").style.border="2px solid red"
    }
    else
    {
        wrong_age_error.style.display="none";
        age_error.style.display="none";
        document.getElementById("age").style.border="2px solid lightgreen"
    }
    //=========================================================================================================================
    if(email=="")
    {
        email_error.style.display="none";
        wrong_email_error.style.display="none";
        email_error.style.display="block";
        document.getElementById("email").style.border="2px solid red"
    } 
    else if(a!="com")
    {
        email_error.style.display="none";
        wrong_email_error.style.display="none";
        wrong_email_error.style.display="block";
        document.getElementById("email").style.border="2px solid red"
    }
    else
    {
        email_error.style.display="none";
        wrong_email_error.style.display="none";
        wrong_email_error.style.display="none";
        document.getElementById("email").style.border="2px solid lightgreen"
    }
    //=========================================================================================================================
    if(genderM.checked==false && genderF.checked==false && other.checked==false)
    {
        gender_error.style.display="block";
    }
    //=========================================================================================================================
    if(english.checked==false && maths.checked==false && urdu.checked==false)
    {
        subject_error.style.display="block";
    }
    else{
        subject_error.style.display="none";
    }
    //=========================================================================================================================
    if(city.value !="Select City")
    {
        city_error.style.display="none";
    }
    else
    {
        city_error.style.display="block";
    }
    //=========================================================================================================================
    if(feedback.length==0)
    {
        empty_feedback_error.style.display="none";
        short_feedback_error.style.display="none";
        empty_feedback_error.style.display="block";
        document.getElementById("feedback").style.border="2px solid red"
    }
    else if(feedback.length<=10)
    {
        empty_feedback_error.style.display="none";
        short_feedback_error.style.display="none";
        short_feedback_error.style.display="block";
        document.getElementById("feedback").style.border="2px solid red"
    }
    else
    {
        empty_feedback_error.style.display="none";
        short_feedback_error.style.display="none";
        document.getElementById("feedback").style.border="2px solid lightgreen"
    }
    //=========================================================================================================================
    // if(arr.length>0)
    // {
    //     arr=arr.join(""); //For removing coma in error.
    //     alert(arr);
    //     return false;
    // }
    // else{
    //     return true;
    // }
    return status;
}