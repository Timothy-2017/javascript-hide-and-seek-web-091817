function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  //debugger
  return document.querySelector('div#grand-node div div div div');
  //return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  //debugger
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    //debugger
    //lis[i].innerHTML = i + n;
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + parseInt(n)).toString();
    //lis[i].innerHTML = 'hi';

  }
}
