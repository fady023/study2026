
var btn = document.querySelector("input[type=submit]");
var inp = document.querySelector("input[type=text]");
var list = document.querySelector(".list");


class Storage {

    static getstorage(){
        let storage = localStorage.getItem("todo")===null ? []:JSON.parse(localStorage.getItem("todo"));
        return storage;
    }

    static addtoStorage(todoArray){
        let storage = localStorage.setItem("todo",JSON.stringify(todoArray));
        return storage;
    }

}

let todoArray = Storage.getstorage();

class Todo {
    constructor(id,todo){
        this.id =id
        this.todo = todo
    }
}


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let id = Math.round(Math.random()*1000) ;
    let todoinp = inp.value;
    let todo = new Todo(id,todoinp);
    todoArray = [...todoArray,todo];
    Storage.addtoStorage(todoArray)
    UI.display();
    UI.clear_inp();

})

class UI {
    static display(){
        let displaydata = todoArray.map((item)=>{
            return `
            <div class="todo">
                <p>${item.todo}</p>
                <i class="fa-solid fa-trash fa-xl" data-id=${item.id}></i>
            </div> 
            `
        })

        list.innerHTML = displaydata;
    }

    static clear_display(){
        
        list.addEventListener("click",(e)=>{

            if(e.target.classList.contains("fa-trash")){
               e.target.parentElement.remove();
              
            }

              let trash_id = e.target.dataset.id ;
              UI.new_arr_without_removed_item(trash_id);
        })
      
    
    }

    static new_arr_without_removed_item(outerid){
        
        let arr = Storage.getstorage();
        let newtodoArr = arr.filter((item)=>item.id != outerid)
        Storage.addtoStorage(newtodoArr)

    }

    static clear_inp(){
        inp.value="";
    }
}

UI.display();
UI.clear_display();
