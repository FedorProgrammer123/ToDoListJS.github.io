let add = document.querySelector("button[name = 'add']");
let show = document.querySelector("button[name = 'show']");
let enter = document.querySelector("form input");
let list = document.querySelectorAll("section ol");
let elem_added = document.querySelectorAll("section div");
let error = document.querySelectorAll("form span");
add.addEventListener("click",AddTask)
show.addEventListener("click",ShowTask)
function AddTask(){
    for(let i = 0; i < error.length;i++){
        if(enter.value == '' || enter.value == ' '){
            error[i].innerHTML = "<p style = 'color:#ff0044'>Ошибка!</p>";
            setTimeout(HideError,2000);
        }
        else{
            for(let i = 0; i < elem_added.length; i++){
                let elem_add = "<div class = 'added'>" + "Элемент добавлен" + "</div>";
                elem_added[i].insertAdjacentHTML("beforeend",elem_add);
                setTimeout(HideAddBlock,2000);
            }
            for(let i = 0; i < list.length; i++){
                let list_add = "<li>" + enter.value + "</li>";
                list[i].insertAdjacentHTML("beforeend",list_add);
                list[i].style.display = "none";
            }
        }
    }
   
}
function ShowTask(){
    for(let i = 0; i < list.length; i++){
        list[i].style.display = "block";
    }
}
function HideAddBlock(){
    for(let i = 0; i < elem_added.length; i++){
        elem_added[i].innerHTML = "";
    }
}
function HideError(){
    for(let i = 0; i < error.length;i++){
        error[i].innerHTML = "";
    }
}