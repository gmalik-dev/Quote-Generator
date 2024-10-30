// Get quotes from Api
const quoteContainer = document.getElementById("quote-container");
const quotetextContainer = document.getElementById("quote-text");
const quoteText = document.getElementById('quote');
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById('loader');

let apiQuotes = [];


function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   
    quote.author ? author.textContent = quote.author : "Unknown";

    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    console.log(quote);
    quoteText.textContent= quote.text;
    complete();
}

newQuoteButton.click()

 async function getQuotes(){
    loading();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        complete();
    }
    catch(error){
        console.log(error);
    }
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Event Lsitener 
newQuoteButton.addEventListener('click', newQuote);


getQuotes();