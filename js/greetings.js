const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();// 브라우저 기본동작 해제
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // username  저장
    console.log(username);
    paintGreetings(username);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}