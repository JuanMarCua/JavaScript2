window.onload = function(){
    //Search of author and quote 
    document.getElementById('author').innerHTML = famousQuotes[1].quoteAuthor;
    document.getElementById('quote').innerHTML = famousQuotes[1].quoteText;

    //Random selection of Author and Quote
    let  randPos = Math.floor(Math.random() * famousQuotes.length);
    document.getElementById('randQuote').innerHTML = famousQuotes[randPos].quoteText + " -" + famousQuotes[randPos].quoteAuthor;
};