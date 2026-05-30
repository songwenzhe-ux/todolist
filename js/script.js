let toDoListArray = [];
const form = document.querySelector(".form");
const ul = document.querySelector(".toDoList");
const input= document.querySelector(".form-input");

form.addEventListener('submit',e =>{
    e.preventDefault();
    let itemId = String(Date.now());
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
    console.log(toDoListArray);
}

ul.addEventListener('click',e =>{
    let id = e.target.getAttribute('data-id');
    if (!id) return;
    removeItemFromDOM(id);
    removeItemFromArray(id);
});

function removeItemFromDOM(id){
    var li = document.querySelector('[data-id="' + id + '"]');
    ul.removeChild(li);
}

function removeItemFromArray(id){
    toDoListArray= toDoListArray.filter(item => item.itemId !== id);
    console.log(toDoListArray);
}