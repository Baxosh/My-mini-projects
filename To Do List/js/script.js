const elementAdd        = document.querySelector("#element__add");
const elementDelete     = document.querySelector("#element__delete");
const additionText      = document.querySelector("#main__input");
const elementInput      = document.querySelector("#element__inp");
const saveButton        = document.querySelector("#save__button");
const editButton        = document.querySelector("#edit__button");
const removeButton      = document.querySelector("#remove__button");

const areaOfContent = document.querySelector("#content");

const todoList = [];

// Removers button 
elementDelete.addEventListener("click", () => {
    additionText.value = "";
});

// Events

additionText.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.keyCode === 13) {
        todoList.push(additionText.value);
        additionText.value = "";

        upgradeView();
    }
});



// Add elements 
elementAdd.addEventListener("click", () => {
    todoList.push(additionText.value);
    additionText.value = "";

    upgradeView();
});

function upgradeView() {
    areaOfContent.innerHTML = '';
    for (todoItem of todoList) {
        
        let divFirstElement = document.createElement('div');
        divFirstElement.className = "input-group mt-4 row";
        areaOfContent.append(divFirstElement);
        
        let divElement = document.createElement('div');
        divElement.className = "input-group-prepend col-1";
        areaOfContent.append(divElement);


        let numberElem = document.createElement('h6');
        numberElem.className = "input-group-text";
        numberElem.innerHTML = 1;
        divElement.append(numberElem);


        let inputElement = document.createElement('input');
        inputElement.type = "text"
        inputElement.className = "form-control col-6";
        inputElement.setAttribute('id', 'element__inp');
        inputElement.value = todoItem;
        areaOfContent.append(inputElement);


        let btnElements = document.createElement('div');
        btnElements.className = "button col-4";
        areaOfContent.append(btnElements);


        let saveButton = document.createElement('button');
        saveButton.className = "btn btn-outline-success mx-2";
        saveButton.innerText = "Save"
        saveButton.type = "button";
        saveButton.setAttribute('id', 'save__button');
        areaOfContent.append(saveButton);

        saveButton.addEventListener("click", () => {
            
        });


        let editButton = document.createElement('button');
        editButton.className = "btn btn-outline-warning mx-2";
        editButton.innerText = "Edit"
        editButton.type = "button";
        editButton.setAttribute('id', 'edit__button');
        areaOfContent.append(editButton);


        let removeButton = document.createElement('button');
        removeButton.className = "btn btn-outline-danger mx-2";
        removeButton.innerText = "Remove"
        removeButton.type = "button";
        removeButton.setAttribute('id', 'remove__button');
        areaOfContent.append(removeButton); 

        removeButton.addEventListener("click", () => {
            divElement.style.display = "none";
            inputElement.style.display = "none";
            btnElements.style.display = "none";
            saveButton.style.display = "none";
            editButton.style.display = "none";
            removeButton.style.display = "none";
        })
    }





    saveButton.addEventListener("click", function() {
        inputElement.setAttribute("readonly"); //  ======== Bu yerda muammo, inputga set attribute qilib readonlyni qo'shmoqchiman lk o'xshamayapti.
    })

}



/* <div class="input-group mt-4 row">
    <div class="input-group-prepend col-1">
        <div class="input-group-text">
            <h6 id="elemetn__num">1</h6>
        </div>
    </div>
    <input type="text" class="form-control col-6" id="element__inp" aria-label="Text input with checkbox">
    &nbsp;
    <div id="button col-4">
        <button class="btn btn-outline-success" type="button" id="save__button">Add</button>
        <button class="btn btn-outline-warning" type="button" id="edit__button">Edit</button>
        <button class="btn btn-outline-danger" type="button" id="remove__button">Remove</button>
    </div>
</div> */