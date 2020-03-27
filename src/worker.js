onmessage = function(ev) {
  if (ev.data === 'START') {
    console.log('dentro del worker', ev);
    let found = false;
    let counter = 0;
  
    while(!found) {
      console.log('while!');
      if (counter > 10000) {
        found = true;
      } else {
        counter++;
      }
    }
    postMessage(counter);
  }
}
