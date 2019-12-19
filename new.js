"use strict"
const NewsAPI = require('newsapi');
const newsapi = NewsAPI('7182db9e1ffc4c6f8fdea0357887f9a4');//API key

var readlineSync = require('readline-sync'); //get the user input using readline-sync

let phrase, sourcename, chosesource;
phrase     = readlineSync.question('whats the phrase to search for?');
sourcename = readlineSync.question('from what news sources should we the articcles from?\n 1.FOR FOX NEWS \n 2.FOR HACKER NEWS\n 3.FOR MTV NEWS\n 4.FOR GOOGLE NEWS');

//assign chosesource variable depending on the users' choice
if(sourcename === 'one'){
    chosesource === 'fox-news';
}
else if(sourcename === 'two'){
    chosesource === 'hacker-news';
}
else if(sourcename === 'three'){
    chosesource === 'mtv-news';
}
 else if(sourcename === 'four'){
    chosesource === 'google-news';
}
else {
   console.log('\x1b[31m',"choose a number\n");
          process.exit() // exit the application
}

//passing an object having the request parameters using promises
function newsarray(requests){
    let article_ame  = [];
    for (let num = 0; num < requests.length; num += 1){
        article_ame.push('\x1b[32m', n + 1 +"."+requests[n].title);
        article_ame.push('\x1b[33m', n + 1 +"."+requests[n].desciption);
        article_ame.push('\x1b[34m', n + 1 +"."+requests[n].url);    
    } return article_ame.join('\r\n');
}

// To query /v2/top-headlines
newsapi.v2.topHeadlines({
  sources   : [chosesource],
  q         : [phrase],
  language  : 'en',
  country   : 'us',
  pageSize  : 10
}).then(function(result) {
    if(result.totalResults != 0){
        console.log(newsarray(result.articles));
} 
else{
    console.log('\x1b[31m', "No such phrase, check your spelling.");
}
}).catch(function(err) {
    console.log('Fetcch error', err);
});

/* To query /v2/everything, You must include at least one q, source, or domain
newsapi.v2.everything({ //using calbacks
  q       :[phrase],
  sources :[chosesource],
  from    : '2019-12-01',
  to      : '2019-12-12',
  language: 'en',
  sortBy  : 'relevancy',
  pageSize: 10

}, function(err, result) {
    if(err){
        console.log('Fetcch error', err);
    }
    else{
        if(result.totalResults != 0){
        console.log(newsarray(result.articles));
} 
else {
    console.log('\x1b[31m', "No such phrase, check your spelling.");
}}
});
module.exports = newsapi; */

