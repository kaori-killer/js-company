const menu_home = "menu_home";
const menu_signup = "menu_signup";
const menuHome = document.getElementById(menu_home);
const menuSignup = document.getElementById(menu_signup);

function onChangeTab(event){
    if (event.target.id === menu_home){
        window.location.href='../../home.html';
        // history.pushState(null, null, '/web/');
    }
    else {
        window.location.href='../../signup.html';
        // history.pushState(null, null, '/web/signup')
    } 
}

menuHome.addEventListener("click", onChangeTab);
menuSignup.addEventListener("click", onChangeTab);
