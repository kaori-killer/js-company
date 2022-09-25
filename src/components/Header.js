const menu_home = "menu_home";
const menu_signup = "menu_signup";
const menuHome = document.getElementById(menu_home);
const menuSignup = document.getElementById(menu_signup);

function onChangeTab(event){
    event.preventDefault();
    if (event.target.id === menu_home){
        history.pushState(null, null, '/web/');
    }
    else {
        history.pushState(null, null, '/web/signup')
    }
}

menuHome.addEventListener("click", onChangeTab);
menuSignup.addEventListener("click", onChangeTab);
