document.querySelector('body').addEventListener('click',  function(el) {
  if (el.target.id == 'switch') {
    switchColor();

  }
})


function switchColor() {
  var element = document.querySelector('main');
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
/*  let div = [];
  let divs = document.querySelectorAll('div.style-main');
  divs.forEach(function(color) {
    div.push(divs);
    div.classList.toggle('colorNight');
  })*/
  element.classList.toggle('colorNight');
  header.classList.toggle('colorNight');
  footer.classList.toggle('colorNight');

}
