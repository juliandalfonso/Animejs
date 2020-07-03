var elements = document.querySelectorAll('.dom-node-demo .el');

/*
DOM Node	null	targets: el.querySelector('.item')
NodeList	null	targets: el.querySelectorAll('.item') 
*/

anime({
    targets: elements,
    duration: 5000,
    translateX: 500
  });