document.addEventListener("DOMContentLoaded", () => {

  // load from localstorage :

  const savedUsers = JSON.parse(localStorage.getItem("users"));

  const users =
    savedUsers && savedUsers.length
      ? savedUsers
      : ["rackesh", "ganesh", "muruga"];





      // get dom elements
  const userList = document.getElementById("userList");
  const searchInput = document.getElementById("searchInput");
  const userInput = document.getElementById("userInput");
  const addBtn = document.getElementById("addBtn");
  const sortAscBtn = document.getElementById('sortAsc');
  const sortDescBtn = document.getElementById('sortDesc');



  // sorting:

  let sortOrder = 'none';

//   document.getElementById('sortAsc').onClick = () => {
//     console.log('asc clicked');
//     sortOrder = 'asc';
//     renderList(currentSearchText);

//   }

//   document.getElementById('sortDesc').onClick = () => {
//     console.log('desc clicked');
//     sortOrder = 'desc';
//     renderList(currentSearchText);

//   }


  // save the data to the localstorage:
  function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
  }


  // render list
  let currentSearchText = '';


  function renderList(searchText = "") {
    userList.innerHTML = "";


     let displayUsers = [...users];

    if(sortOrder === 'asc'){
        displayUsers.sort((a,b) => a.localeCompare(b));
    }

    if(sortOrder === 'desc'){
        displayUsers.sort((a,b) => b.localeCompare(a));
    }

    displayUsers.forEach((user, index) => {






      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      const span = document.createElement("span");
      span.innerText = user;


      if(
        searchText && 
        !user.toLowerCase().includes(searchText.toLowerCase())
    ){
        return;
    }

    //   if (!user.toLowerCase().includes(searchText)) {
    //     return;
    //   }

      const btnGroup = document.createElement("div");

      // const addBtn = document.getElementById('addBtn');
      // addBtn.innerHTML = 'add';
      // addBtn.className = 'btn btn-sm btn-warning me-2';
      // addBtn.addEventListener('click',() => {addUser()})

      // edit button:
      const editBtn = document.createElement("button");
      editBtn.innerText = "edit";
      editBtn.className = "btn btn-sm btn-warning me-2";
      editBtn.addEventListener("click", () => {
        editUser(index);
      });

      // delete button:
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "delete";
      deleteBtn.className = "btn btn-sm tbn-danger";
      deleteBtn.addEventListener("click", () => {
        deleteUser(index);
      });

      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(btnGroup);
      userList.appendChild(li);

      // editBtn.addEventListener('click',()=>{
      //     editUser(index);
      // });

      // li.appendChild(span);
      // li.appendChild(editBtn);
      // userList.appendChild(li);
    });

    // add :

    addBtn.addEventListener("click", () => {
      const name = userInput.value.trim();

      if (name === "") return;

      users.push(name);
      saveToLocalStorage();
      renderList();
      userInput.value = "";
    });

    // edit :

    function editUser(index) {
      const newName = prompt("Edit name :", users[index]);

      if (newName !== null && newName.trim() !== "") {
        users[index] = newName;
        saveToLocalStorage();
        renderList();
      }
    }

    // delete :

    function deleteUser(index) {
      const confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        users.splice(index, 1);
        saveToLocalStorage();
        renderList();
      }
    }

    
    searchInput.addEventListener("input", () => {
      const currentSearchText = searchInput.value.toLowerCase();
      renderList(currentSearchText);
    });


    sortAscBtn.addEventListener('click',() => {
        console.log('sort asc clicked');
        sortOrder = 'asc';
        renderList(currentSearchText);
    })

     sortDescBtn.addEventListener('click',() => {
        console.log('sort desc clicked');
        sortOrder = 'desc';
        renderList(currentSearchText);
    })
   
  }

  renderList();
});
