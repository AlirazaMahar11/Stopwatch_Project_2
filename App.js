var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var intervel;

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;



function timer() {
    msec++;
    msecHeading.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }

    else if (min >= 60) {
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
    }
}

function start() {
    intervel = setInterval(timer, 10)
    intervel.disabled
}

function pause() {
    clearInterval(intervel);
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;

    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
    clearInterval(intervel)
}


// function addtodo() {
//     var input = document.getElementById("inputField");

//     var liElememt = document.createElement("li");
//     var liText = document.createTextNode(input.value);
//     liElememt.appendChild(liText);

//     var list = document.getElementById("list")

//     list.appendChild(liElememt);
//     console.log(liElememt);

//     input.value = "";
// }

// function DeleteAll() {
//     var list = document.getElementById("list");
//     list.innerHTML = "";
// }





