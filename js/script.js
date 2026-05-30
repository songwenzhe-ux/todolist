let toDoListArray = [];
const form = document.querySelector(".form");
const ui = document.querySelector(".todolist");
const input= document.querySelector(".form-input");

form.addEventListener('submit',e =>{
    e.preventDefault();
    let itemId = string(Date.now());
    let toDoItem= input.value;

    addItemToDOM(itemId,toDoItem);
    addItemToArray(itemId, toDoItem);

    input.value = '';
});

function addItemToDOM(itemId,toDoItem){
    const li = document.createElement('li');
    li.setAttribute('data-id',itemId);
    li.innerText= toDoItem;
    ul.appendChild(li);
}

function addItemToArray(itemId, toDoItem){
    toDoListArray.push({itemId, toDoItem});
    console.log(addItemToArray);
}
