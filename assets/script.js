var saveBtn = document.querySelector(".saveBtn");
var cardSpan = document.querySelector(".card");
var task = document.querySelector("#task").value;

var currentDT = moment().format("dddd MMM D, YYYY");
    console.log("Current Date: " + currentDT);

$("#currentDT").text(currentDT); 

var currentTime = moment().format("h");
    console.log("Current Hour: " + currentTime)

$("#currentTime").text(currentTime);


//document.querySelector(".row").className = "present"; 



function displayTask() {

    var task = localStorage.getItem("task");
    cardSpan.textContent = task;
    //checking to see if var task recieves a value
    console.log(task);
}


saveBtn.addEventListener("click", function(event) {
    localStorage.setItem("task", task);
    console.log(task);
    event.preventDefault();
    displayTask();
});
