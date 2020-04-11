let getFirstSelector = function(selector) {
  return document.querySelector(selector);
}
let nestedTarget = () => {
  return document.getElementById('nested').querySelector('div.target')
}
let deepestChild = function() {
  let deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1];
}
let increaseRankBy = function(n) {
const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < upRank.length; i++) {
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
  }
}
