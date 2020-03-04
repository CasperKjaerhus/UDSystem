'use strict';

const element = document.querySelector('#onhover');
element.addEventListener('mouseover', event => {
  fetch('SpySite', {method: 'POST', body: 'Hovered!'})
})

