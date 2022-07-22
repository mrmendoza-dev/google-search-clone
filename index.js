

let searchText = document.getElementById("searchText");

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", search);

searchText.addEventListener("keypress", (event) => {
  let keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode === 13) {
    searchBtn.click();
  }
});

let luckyBtn = document.getElementById("luckyBtn");
luckyBtn.addEventListener("click", feelingLucky);


function search() {
    let text = searchText.value;
    if (text) {
        let newUrl = `https://www.google.com/search?q=${text}`;
        location.replace(newUrl);
    }
    searchText.value = "";
}


function feelingLucky() {
    let text = searchText.value;
    if (text) {
        let newUrl = `https://www.google.com/search?q=${text}&btnI=Im+Feeling+Lucky`;
        location.replace(newUrl);
    }
    searchText.value = "";
}



// TODO
// - Copy to function just like google
// - Create personal search engine
// - Chrome extension to interface w/ app
// - Change search engines easy
// - Launch TOR