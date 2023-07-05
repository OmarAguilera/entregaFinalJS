/* Quizz */

let quizzButton = document.getElementById("quizzButton");
quizzButton.addEventListener("click", getResults);

function getResults() {
    let results = [];
    let answer1 = document.querySelector("input[name='pregunta1']:checked");
    let answer2 = document.querySelector("input[name='pregunta2']:checked");
    let answer3 = document.querySelector("input[name='pregunta3']:checked");
    let answer4 = document.querySelector("input[name='pregunta4']:checked");
    let answer5 = document.querySelector("input[name='pregunta5']:checked");
    let answer6 = document.querySelector("input[name='pregunta6']:checked");
    let answer7 = document.querySelector("input[name='pregunta7']:checked");
    let answer8 = document.querySelector("input[name='pregunta8']:checked");
    let answer9 = document.querySelector("input[name='pregunta9']:checked");
    let answer10 = document.querySelector("input[name='pregunta10']:checked");
    let selectedAns1 = answer1.value;
    let selectedAns2 = answer2.value;  
    let selectedAns3 = answer3.value;  
    let selectedAns4 = answer4.value;  
    let selectedAns5 = answer5.value;  
    let selectedAns6 = answer6.value;  
    let selectedAns7 = answer7.value;  
    let selectedAns8 = answer8.value;  
    let selectedAns9 = answer9.value;  
    let selectedAns10 = answer10.value;  
    results.push(selectedAns1);
    results.push(selectedAns2);
    results.push(selectedAns3);
    results.push(selectedAns4);
    results.push(selectedAns5);
    results.push(selectedAns6);
    results.push(selectedAns7);
    results.push(selectedAns8);
    results.push(selectedAns9);
    results.push(selectedAns10);
    console.log(results);
    let userAnswersA = results.filter(element => element == "a");
    let userAnswersB = results.filter(element => element == "b");
    let userAnswersC = results.filter(element => element == "c");
    let userAnswersD = results.filter(element => element == "d");

    console.log(userAnswersA);
    console.log(userAnswersB);
    console.log(userAnswersC);
    console.log(userAnswersD);

    if(userAnswersB.length > userAnswersC.length && userAnswersB.length > userAnswersD.length){
        alert("Tienes amsiedad")
        fetch('/ailings.json')
            .then(response => response.json())
            .then(data => {
            alert(data.ailings[3].resultado)
            alert(data.ailings[3].interpretacion)
        })
    }
    else if(userAnswersC.length > userAnswersB.length && userAnswersC.length > userAnswersD.length){
        alert("También tienes amsiedad")
            .then(response => response.json())
            .then(data => {
            alert(data.ailings[2].resultado)
            alert(data.ailings[2].interpretacion)
        })
    }
    else if(userAnswersD.length > userAnswersB.length && userAnswersD.length > userAnswersC.length){
        alert("Yep, estás amsioso")
            .then(response => response.json())
            .then(data => {
            alert(data.ailings[1].resultado)
            alert(data.ailings[1].interpretacion)
        })
    } else {
        alert("No tienes ná :D");
        fetch('/ailings.json')
            .then(response => response.json())
            .then(data => {
            alert(data.ailings[0].resultado)
            alert(data.ailings[0].interpretacion)
        })
    .catch(error => console.log("Error"))
    }
}


