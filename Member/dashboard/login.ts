
interface validationConfig {


    [property: string]: {
        [validationProperty: string]: string[];

    };
    


                 

                    //for these classes

                    //one interface for all classes
                    //property:string for class and validation property is the field or data
    

}


                    //global variable for interface
const validationObj: validationConfig = {}

                    //5 --create a  function for required and positive

                    //                target means the class and name means the property name
function Required(target: any, name: string) {

                    //target is pointing the constructor
    //console.log(target);
    const className = target.constructor.name;
                    // retrieving all properties name in an array
    validationObj[className] = {
        ...validationObj[className], [name]: ['required']  //... is a spread operator to append data
    };

    //console.log(validationObj);
}




                    //7--create a function to implement validation
function validate(obj: any) {
    let validatorName = validationObj[obj.constructor.name];
    //console.log(validatorName);

                    //implement validation
    if (!validatorName) {
        return true;
    }


    let isValid = true;

    for (const prop in validatorName) {
        //console.log(prop);
        for(const validator of validatorName[prop]){
            //console.log(validator);

                    //check condition
            switch(validator){
                case 'required':
                    isValid = isValid && !! obj[prop];
                    
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
class Users{

    //property                  //property decorator component
    @Required
    UserIDOne: string;

    @Required
    PasswordOne:String;

    

    // @positive
    // mobile: number;
    constructor(_UserID: string,_password: string ) {
        this.UserIDOne = _UserID;
        this.PasswordOne = _password;

        // this.mobil = _mobile;
    }

    
    
    
}








const UserName = document.querySelector('#userID') as HTMLInputElement;
const Password = document.querySelector('#PasswordLogin') as HTMLInputElement;

//3--add addEvent Listener ('',event)=>method

const form = document.querySelector('.new-item-form') as HTMLFormElement;
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
    const UsersObj = new Users(UserTwo,PasswordTwo);



    //validate() 
    if (!validate(UsersObj)) {           //isValid == false
        alert("Enter Valid Input");
        return;
    }
    console.log(UsersObj);


    LoginOneUser(UsersObj);


})


function LoginOneUser(obj:Users){
    // throw new Error("Function not implemented.");
    
    
    if(validate(obj)){
        
        if(obj.UserIDOne == "syam" && obj.PasswordOne == "9988776655"){
            
            return window.location.href="/Member/dashboard/dashboard.html";
        }
        
    }
    
    
}

