const platform = document.getElementById("platform");
const user = document.getElementById("user");
const pwd = document.getElementById("pwd");
const listcontainer = document.getElementById("listcontainer");
let a = true;
function addDetail(){
    
    if(platform.value === "" || user.value === "" || pwd.value === ""){
        alert("Please fill all the fields");
        return;
    }if(a){
        let li = document.createElement("li");
        li.innerHTML = `<span>Platform</span> <span>Username</span> <span>Password</span>`;
        listcontainer.appendChild(li);
        a = false;
    }
        let li = document.createElement("li");
        li.innerHTML = `<span>${platform.value}</span> <span>${user.value}</span> <span>${pwd.value}</span> <button onclick="deleteDetail(this)">Delete</button>`;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
    platform.value = "";
    user.value = "";
    pwd.value = "";
    savedata();
}
function deleteDetail(button) {
    button.parentElement.remove(); // Removes the parent <li> element
    savedata(); // Updates the saved data in localStorage
}
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
function resetData() {
    localStorage.removeItem("data"); // Clears the saved data from localStorage
    listcontainer.innerHTML = ""; // Clears the listcontainer
    a = true; // Resets the flag to allow adding new data
    alert("All data has been reset!");
}
showdata();