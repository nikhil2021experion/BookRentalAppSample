"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//global variable for interface
const validationObj2 = {};
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
function positive(target, name) {
    //target is pointing the constructor
    //console.log(target);
    const className = target.constructor.name;
    // retrieving all properties name in an array
    validationObj2[className] = Object.assign(Object.assign({}, validationObj2[className]), { [name]: ['positive'] //... is a spread operator to append data
     });
    //console.log(validationObj);
}
//7--create a function to implement validation
function validatorTwo(obj) {
    let validatorName2 = validationObj2[obj.constructor.name];
    //console.log(validatorName);
    //implement validation
    if (!validatorName2) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName2) {
        //console.log(prop);
        for (const validator of validatorName2[prop]) {
            //console.log(validator);
            //check condition
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = obj[prop] > 0;
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
class Members {
    // @emailError
    // email: string;
    constructor(_UserID, _password, _mobile) {
        this.UserIDThree = _UserID;
        this.PasswordThree = _password;
        this.mobileThree = _mobile;
        // this.mobil = _mobile;
    }
}
__decorate([
    Required
], Members.prototype, "UserIDThree", void 0);
__decorate([
    Required
], Members.prototype, "PasswordThree", void 0);
__decorate([
    positive
], Members.prototype, "mobileThree", void 0);
const nameField = document.querySelector('#name');
const phoneField = document.querySelector('#mobile');
// const emailField = document.querySelector('#email') as HTMLInputElement;
const passwordTwo = document.querySelector('#passwordSignup');
// const confirmPasswordField = document.querySelector('#confirmpassword') as HTMLInputElement;
//3--add addEvent Listener ('',event)=>method
const form2 = document.querySelector('.new-item-form');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(    
    //     UserName.value,
    //     Password.value
    // );
    //value from elements
    const UserNameValue = nameField.value;
    const MobileValue = phoneField.value;
    const PasswordValue = passwordTwo.value;
    // const price = +priceEl.value;
    //create an object of course
    const UsersObj = new Members(UserNameValue, PasswordValue, MobileValue);
    //validate() 
    if (!validatorTwo(UsersObj)) { //isValid == false
        alert("Enter Valid Input");
        return;
    }
    console.log(UsersObj);
    RegisterMember(UsersObj);
});
function RegisterMember(obj) {
    // throw new Error("Function not implemented.");
    if (validate(obj)) {
        if (obj.UserIDThree == "syam" && obj.PasswordThree == "9988776655" && obj.mobileThree == "9988776699") {
            return window.location.href = "/Customer/dashboard/dashboard.html";
        }
    }
}
