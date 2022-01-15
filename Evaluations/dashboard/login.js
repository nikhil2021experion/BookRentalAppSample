"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//global variable for interface
const validationObj = {};
//5 --create a  function for required and positive
//                target means the class and name means the property name
function Required(target, name) {
    //target is pointing the constructor
    //console.log(target);
    const className = target.constructor.name;
    // retrieving all properties name in an array
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ['required'] //... is a spread operator to append data
     });
    //console.log(validationObj);
}
//7--create a function to implement validation
function validate(obj) {
    let validatorName = validationObj[obj.constructor.name];
    //console.log(validatorName);
    //implement validation
    if (!validatorName) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName) {
        //console.log(prop);
        for (const validator of validatorName[prop]) {
            //console.log(validator);
            //check condition
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                // case 'positive':
                //     isValid = obj[prop]>0;
                // break;
            }
        }
    }
    return isValid;
}
//1-- creating class
class Users {
    // @positive
    // mobile: number;
    constructor(_UserID, _password) {
        this.UserIDOne = _UserID;
        this.PasswordOne = _password;
        // this.mobil = _mobile;
    }
}
__decorate([
    Required
], Users.prototype, "UserIDOne", void 0);
__decorate([
    Required
], Users.prototype, "PasswordOne", void 0);
const UserName = document.querySelector('#userID');
const Password = document.querySelector('#PasswordLogin');
//3--add addEvent Listener ('',event)=>method
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(    
    //     UserName.value,
    //     Password.value
    // );
    //value from elements
    const UserTwo = UserName.value;
    const PasswordTwo = Password.value;
    // const price = +priceEl.value;
    //create an object of course
    const UsersObj = new Users(UserTwo, PasswordTwo);
    //validate() 
    if (!validate(UsersObj)) { //isValid == false
        alert("Enter Valid Input");
        return;
    }
    console.log(UsersObj);
    LoginOneUser(UsersObj);
});
function LoginOneUser(obj) {
    // throw new Error("Function not implemented.");
    if (validate(obj)) {
        if (obj.UserIDOne == "syam" && obj.PasswordOne == "9988776655") {
            return window.location.href = "/Member/dashboard/dashboard.html";
        }
    }
}
