class UserDetails{
    constructor(firstName,lastName,phoneNumber){
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
    }
    validation(){
        var phoneNumberLength=this.phoneNumber.length;
        if(this.firstName==""){
        alert("First Name is required");
        return false;
    }else if(this.lastName==""){
        alert("Last Name is required");
        return false;
    }else if(this.phone==""){
        alert("Phone number is require");
        return false;
    }else if(phoneNumberLength>10 || phoneNumberLength<10){
        alert("Please enter valid phone number");
        return false;
    }else if(phoneNumberLength==10){
        for(var i=0;i<phoneNumberLength;i++){
            if(this.phoneNumber.charAt(i)=='0'||this.phoneNumber.charAt(i)=='0'||this.phoneNumber.charAt(i)=='1'||this.phoneNumber.charAt(i)=='2'||this.phoneNumber.charAt(i)=='3'||this.phoneNumber.charAt(i)=='4'||this.phoneNumber.charAt(i)=='5'||this.phoneNumber.charAt(i)=='6'||this.phoneNumber.charAt(i)=='7'||this.phoneNumber.charAt(i)=='8'||this.phoneNumber.charAt(i)=='9'){
                continue;
            }
            else{
                alert("Invalid phone number");
                return false;
            }
        }
    }
    return true;
    }
}


function formValidate(){
    var firstName=document.forms["registrationform"]["firstname"].value;
    var lastName=document.forms["registrationform"]["lastname"].value;
    var phoneNumber=document.forms["registrationform"]["phone"].value;
    
    let userDetails=new UserDetails(firstName,lastName,phoneNumber);
    return userDetails.validation();
}