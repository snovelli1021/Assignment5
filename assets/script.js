var saveBtn = document.querySelector(".saveBtn");
var cardSpan = document.querySelector(".card");
var timeBlocks = document.querySelectorAll(".row")
var task = document.querySelector("#task").value;

var currentDT = moment().format("dddd MMM D, YYYY");
    console.log("Current Date: " + currentDT);

$("#currentDT").text(currentDT); 

var currentTime = moment().format("h");
    console.log("Current Hour: " + currentTime)

$("#currentTime").text(currentTime);



for (var i =0; i < timeBlocks.length; i++) {
    currentTime = timeBlocks.className = "present"
    console.log(timeBlocks);
}

  if (currentTime === timeBlocks) {
    //red
      document.querySelector(".row").className= "present";
   }else if (currentTime > timeBlocks) {
    //gray
      document.querySelector(".row").className= "past";
   }else { (currentTime < timeBlocks)
    //green
     document.querySelector(".row").className= "future";
   }


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
