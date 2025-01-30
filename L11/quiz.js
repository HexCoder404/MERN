let questionContainer = document.querySelector("#question");
let optionContainer = document.querySelector("#options");
let b1 = document.querySelector("#next-btn");
let scoretag = document.querySelector("#score");

let index = 0;
let a = [];
let score = 0;
loadQuest();
async function loadQuest() {
    try{
        let response = await fetch("quiz.json");
        a = await response.json();
        console.log(a);
        displayQuest();
    }
    catch(error){
        console.log(error);
    }
}

function displayQuest() {
    optionContainer.innerHTML = "";

    let curr = a[index];
    questionContainer.textContent = curr.question;
    curr.options.forEach (
        (element,index)=> {
            let button = document.createElement("button");
            button.textContent = element;
            button.classList.add("option-btn");
            button.addEventListener("click", ()=>{
                selectAnswer(index);
            });
            optionContainer.appendChild(button);
        }
    );
}
b1.addEventListener("click",() => {
    index++;
    if( index < a.length) {
        loadQuest();
    }
    else {
        questionContainer.textContent = "Quiz Over";
        optionContainer.innerHTML = "";
        b1.style.display = "none";
        scoretag.textContent = `Final Score is ${score}/${a.length}`;
    }
})
function selectAnswer(button_wala_index){
    let curr = a[index];
    let optionButtons = document.querySelectorAll(".option-btn");

    optionButtons.forEach(
        (button,def_index) => {
            if(button_wala_index === def_index) {
                button.style.backgroundColor = "red";
            }
            if(def_index === curr.correct){
                button.style.backgroundColor = "green";
            }
        //     else {
        //         button.style.backgroundColor = "red";
        // }
        button.disabled = true;
    });
    if(button_wala_index === curr.correct){
        score++;
        scoretag.textContent = `Score: ${score}`;
    }
}

