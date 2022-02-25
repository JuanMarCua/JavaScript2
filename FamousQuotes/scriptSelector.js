// Get text input

let wordAsked="";
const getVal = () => {
    wordAsked = document.querySelector("#wordAsked").textContent;
    console.log("Word asked is: " + wordAsked);
    mainService();
}

window.onload = function(){
    mainService();
};

let mainService = () => {
    //Search of author and quote: 
    //Select searched word (pend introduce in HTML):
    //This function will return the ID of one of the random quotes that has the asked word
    const lookForWord = (wordIn, famousQuotesIn) => {
        let idPos = 0;
        let arrRightQuotes = [];

        for (let element of famousQuotesIn) {
            if (element.quoteText.includes(wordIn)) {
                arrRightQuotes.push(famousQuotesIn.indexOf(element));
            }
        }
        randId = Math.floor(Math.random() * arrRightQuotes.length);
        idPos = arrRightQuotes[randId];
        return idPos;
    };

    //Random selection of Author and Quote
    let  randPos = Math.floor(Math.random() * famousQuotes.length);
    if (famousQuotes[randPos].quoteAuthor == "") {
        famousQuotes[randPos].quoteAuthor = "Unknown";
    }
    document.getElementById('randQuote').innerHTML = famousQuotes[randPos].quoteText + " - " + famousQuotes[randPos].quoteAuthor;

    //Author and quote presentation:
    idDef = lookForWord(wordAsked, famousQuotes);
    if (famousQuotes[idDef].quoteAuthor == "") {
        famousQuotes[idDef].quoteAuthor = "Unknown";
    }
    document.getElementById('author').innerHTML = famousQuotes[idDef].quoteAuthor;
    document.getElementById('quote').innerHTML = famousQuotes[idDef].quoteText;
}