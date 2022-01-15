const logOut = document.querySelector('#logoutbtn') as HTMLButtonElement;
logOut.addEventListener('click', (event2) =>{
    event2.preventDefault();
    logoutPage();
})


function logoutPage(){
    window.location.href="/Customer/login/login.html";
}