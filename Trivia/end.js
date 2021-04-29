const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = localStorage.getItem('finalScore');
finalScore?.innerText = mostRecentScore;
