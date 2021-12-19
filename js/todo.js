const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "todos";
function deliteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo(); // ToDos  업데이트
    li.remove();
}

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));  // JSON.stringify : local storage item의 문자열 배열화
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deliteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),  
    }
    toDos.push(newTodoObj); // 얘를 local storage로 넣고자 한다 (새로고침해도 toDo 저장해서 나오도록)
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item){ // item도 제공한다!
//     console.log("Hello!", item);
// }

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // 문자를 array로
    toDos = parsedToDos; // toDos를 refresh하거나 불러왔을때 빈상태로 초기화 안 하도록 paresdToDos값 저장    
    parsedToDos.forEach(paintToDo); 
}
//지우고 싶은 item을 제외 : filter 함수  + filter 함수 내부로 들어가는 함수의 리턴값이 boolean값이여야 함 (true면 살아남고, false면 제외)



