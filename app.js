
var inputText = document.querySelector('#text-area');
var translateBtn = document.querySelector('#btn');
var output = document.querySelector('#output-div');

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function translatedUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error){
    alert("something error with the server");
}

function clickHandler() {

    var inputValue = inputText.value; //taking input

    // calling server for processing
    fetch(translatedUrl(inputValue))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
        })
    .catch(errorHandler)
};

translateBtn.addEventListener('click', clickHandler);
