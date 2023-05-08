let data;
let id = 0;
let score = 0;
let start = false;

function question() {

    start = true;

    document.getElementById('score').innerHTML = `Your score: ${score}/${data.length}`;

    for (const element of data) {

        if (element["ID"] == id) {

            console.log(element);

            console.log(`ID = ${id}, ANS = ${element["ANSID"]}`);
    
            document.getElementById('question').innerHTML = element["QUESTION"];
    
            document.getElementById('btn1').innerHTML = element["ANSWER1"];
            document.getElementById('btn2').innerHTML = element["ANSWER2"];
            document.getElementById('btn3').innerHTML = element["ANSWER3"];

            break;

        }

    }

    document.getElementById('options').style.display = "inline-block";
    document.getElementById('questionBtn').style.display = "none";

}

function ans1() {
    if (data[id]["ANSID"] == 1 && start) {
        id++;
        countUp();
        question(); 
    } else {
        countDown();
    }
}
function ans2() {
    if (data[id]["ANSID"] == 2 && start) {
        id++;
        countUp();
        question();    
    } else {
        countDown();
    }
}
function ans3() {
    if (data[id]["ANSID"] == 3 && start) {
        id++;
        countUp();
        question();
    } else {
        countDown();
    }
}

const countUp = () => {
    score++;
    document.getElementById('score').innerHTML = `Your score: ${score}/${data.length}`;
}
const countDown = () => {
    score--;
    document.getElementById('score').innerHTML = `Your score: ${score}/${data.length}`;
}

// Function to read the csv-file
window.onload = function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "db.csv", true);
    xhr.responseType = "text";
    xhr.onload = function() {
        data = Papa.parse(xhr.responseText, { header: true }).data;
    };
    xhr.send();
}

// The "hacker" effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {

    let iterations = 0;

    const interval = setInterval(() => {

        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {

                if (index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]

            }).join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);
    
        iterations += 1 / 3;

    }, 30);
    
}
