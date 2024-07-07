window.onload = sendApiRequest;

async function sendApiRequest() {
    let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    let data = await response.json();
    console.log(response);
    console.log(data);
    useApiData(data);
}


function useApiData(data) {
    document.querySelector("#Category").innerHTML = `Category: ${data.results[0].category}`;
    document.querySelector("#Difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`;
    document.querySelector("#Question").innerHTML = `Question: ${data.results[0].question}`;
    document.querySelector("#answer1").innerHTML = data.results[0].correct_answer;
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0];
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1];
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2];
}

let correctButton = document.querySelector("#answer1");

correctButton.addEventListener("click", () => {
    alert("Correct! YOU ARE SO SMART");
    sendApiRequest();
});
