let getFirstSelector = function(selector) {
  return document.querySelector(selector);
}
let nestedTarget = () => {
  return document.getElementById('nested').querySelector('div.target')
}
let deepestChild = function() {
  
}
let increaseRankBy = function(n) {
const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < upRank.length; i++) {
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
  }
}
