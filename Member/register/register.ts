
interface validationConfig2 {


    [property: string]: {
        [validationProperty: string]: string[];

    };
    


                    // Patient:{
                    //     mobile:['required'];
                    //     address:['required'];
                    //     bloodgrp:['required'];
                    // };

                    //for these classes

                    //one interface for all classes
                    //property:string for class and validation property is the field or data
    

}


                    //global variable for interface
const validationObj2: validationConfig2 = {}

                    //5 --create a  function for required and positive

                    //                target means the class and name means the property name
// function Required(target: any, name: string) {

//                     //target is pointing the constructor
//     //console.log(target);
//     const className = target.constructor.name;
//                     // retrieving all properties name in an array
//     validationObj2[className] = {
//         ...validationObj2[className], [name]: ['required']  //... is a spread operator to append data
//     };

//     //console.log(validationObj);
// }

function positive(target: any, name: string) {

    //target is pointing the constructor
//console.log(target);
const className = target.constructor.name;
    // retrieving all properties name in an array
validationObj2[className] = {
...validationObj2[className], [name]: ['positive']  //... is a spread operator to append data
};

//console.log(validationObj);
}



                    //7--create a function to implement validation
function validatorTwo(obj: any) {
    let validatorName2 = validationObj2[obj.constructor.name];
    //console.log(validatorName);

                    //implement validation
    if (!validatorName2) {
        return true;
    }


    let isValid = true;

    for (const prop in validatorName2) {
        //console.log(prop);
        for(const validator of validatorName2[prop]){
            //console.log(validator);

                    //check condition
            switch(validator){
                case 'required':
                    isValid = isValid && !! obj[prop];
                    
                break;

                case 'positive':
                    isValid = obj[prop]>0;
                break;
            }
        }
    }
    return isValid;
}


// function sampleLogin(obj: Users) : any  {
//     console.log("hello");
//     if (obj.UserID == "9988776655" && obj.Password == "syam") {
//         console.log("hiiiiii");
//         window.location.href = "/EvaluationPractice/Customer/dashboard/dashboard.html"
//     }
// }






//1-- creating class
class Members{

    //property                  //property decorator component
    @Required
    UserIDThree: string;

    @Required
    PasswordThree:String;

    
    @positive
    mobileThree: string;

    // @emailError
    // email: string;


    constructor(_UserID: string,_password: string,_mobile:string ) {
        this.UserIDThree = _UserID;
        this.PasswordThree = _password;
        this.mobileThree = _mobile;


        // this.mobil = _mobile;
    }

    
    
    
}








const nameField = document.querySelector('#name') as HTMLInputElement;

const phoneField = document.querySelector('#mobile') as HTMLInputElement;
// const emailField = document.querySelector('#email') as HTMLInputElement;

const passwordTwo = document.querySelector('#passwordSignup') as HTMLInputElement;
// const confirmPasswordField = document.querySelector('#confirmpassword') as HTMLInputElement;

//3--add addEvent Listener ('',event)=>method

const form2 = document.querySelector('.new-item-form') as HTMLFormElement;
form2.addEventListener('submit', (e) => {

    e.preventDefault();

    // console.log(    
    //     UserName.value,
    //     Password.value
    // );


    


    //value from elements
    const UserNameValue = nameField.value;
    const MobileValue =  phoneField.value;
    const PasswordValue = passwordTwo.value
    // const price = +priceEl.value;


    //create an object of course
    const UsersObj = new Members(UserNameValue,PasswordValue,MobileValue);



    //validate() 
    if (!validatorTwo(UsersObj)) {           //isValid == false
        alert("Enter Valid Input");
        return;
    }
    console.log(UsersObj);


    RegisterMember(UsersObj);


})


function RegisterMember(obj:Members){
    // throw new Error("Function not implemented.");
    
    
    if(validate(obj)){
        
        if(obj.UserIDThree == "syam" && obj.PasswordThree == "9988776655"  && obj.mobileThree == "9988776699"){
            
            return window.location.href="/Customer/dashboard/dashboard.html";
        }
        
    }
    
    
}
