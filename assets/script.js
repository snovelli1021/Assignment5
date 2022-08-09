var saveBtn = document.querySelector(".saveBtn");
var cardSpan = document.querySelector(".card");
var timeBlock = document.querySelectorAll(".row")

displayTask();

var currentDT = moment().format("dddd MMM D, YYYY");
    console.log("Current Date: " + currentDT);

$("#currentDT").text(currentDT); 

var currentTime = moment().format("h");
    console.log("Current Hour: " + currentTime)

$("#currentTime").text(currentTime);

//Array.from turns node list of DOM Elements into an array
var timeBlockArray = Array.from(timeBlock)
//Checking to make sure my node list was made into an array
console.log(timeBlockArray);

// function changeColor() {
// for (var i =0; i < timeBlockArray.length; i++) {
//  }

//    //if (currentTime === timeBlockArray) {
//      //timeBlock row turns red
//        document.querySelector(".row").className= "present";
//     //}else if (currentTime > timeBlockArray) {
//      //timeBlock row turns gray
//        document.querySelector(".row").className= "past";
//     }else { (currentTime < timeBlockArray)
//      //timeBlock row turns green
//       document.querySelector(".row").className= "future";
//     }
// }

// changeColor();

//Local Stprage only works for 8:00am Time Block

function displayTask() {
    var inputTask = localStorage.getItem("task");
    cardSpan.textContent = inputTask;
    // for (var i = 0; i < inputTaskArray.length; i++){    
    // }
    //checking to see if var inputTask recieves a value
    console.log(inputTask);
}


saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var inputTask = document.querySelector("#task").value;
    localStorage.setItem("task", inputTask);
    console.log(inputTask);
    displayTask();
});
