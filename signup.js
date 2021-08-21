const form = document.querySelector(".js-form");
const btn = form.querySelector(".js-btn");
const username = form.querySelector(".js-username");
const email = form.querySelector(".js-email");
const password = form.querySelector(".js-pw");
const conPassword = form.querySelector(".js-cpw");

const userError = document.querySelector(".js-userError");
const emailError = document.querySelector(".js-emailError");
const pwError = document.querySelector(".js-pwError");
const cpwError = document.querySelector(".js-cpwError");

const chkusername = (user) => {
    if (user==="") { 
        username.classList.remove("success");
        username.classList.add("error");
        userError.classList.add("errormessage");
        return false;
    }
    else {
        username.classList.add("success");
        userError.classList.remove("errormessage");
        return true;
    }
};

const chkEmail = (mail) => {
    let ifEmail = /@/; let ifEmail2 = /\./;
    if ( !(ifEmail.test(mail) && ifEmail2.test(mail)) ) {
        email.classList.remove("success");
        email.classList.add("error");
        emailError.classList.add("errormessage");
        return false;
    }
    else {
        email.classList.add("success");
        emailError.classList.remove("errormessage");
        return true;
    }
};

const chkPw = (pw) => {
    if (pw.length < 5) {
        password.classList.remove("success");
        password.classList.add("error");
        pwError.classList.add("errormessage");
        return false;
    }
    else {
        password.classList.add("success");
        pwError.classList.remove("errormessage");
        return true;
    }
}

const chkCpw = (pw) => {
    if ((password.value)!==pw || pw==="") { 
        conPassword.classList.remove("success");
        conPassword.classList.add("error");
        cpwError.classList.add("errormessage");
        return false;
    }
    else {
        conPassword.classList.add("success");
        cpwError.classList.remove("errormessage");
        return true;
    }
};

const check = (event) => {
    event.preventDefault();
    chkusername(username.value);
    chkEmail(email.value);
    chkPw(password.value);
    chkCpw(conPassword.value);
};

const init = () => {
    form.addEventListener("submit", check);
};

init();