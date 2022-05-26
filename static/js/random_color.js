function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  
  document.addEventListener('mouseover', event => {
      if (document.querySelector('a') == event.target) { 
        event.target.style.color = randomColor();
      }
  });

  document.addEventListener('mouseout', event => {
    if (document.querySelector('a') == event.target) {
      event.target.style.color = randomColor();
    }
});
