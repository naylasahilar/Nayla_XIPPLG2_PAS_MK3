const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// jika user tidak mengisi didalam text box, maka terdapat notifikasi "Anda harus menulis sesuatu!"
function addTask(){
    if(inputBox.value === ''){
        alert("Anda harus menulis sesuatu!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// menghilangkan list ketika user mengeclick tanda silang
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();